import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Model', 'Maternity', 'Baby', 'Product', 'Birthday']

// ALL photos - every image in every category
const portfolioItems = [
  // Wedding - all 73
  { id: 1, category: 'Wedding', image: '/images/wedding/Wedding-1.jpeg', title: 'Wedding Day Magic' },
  { id: 2, category: 'Wedding', image: '/images/wedding/Wedding-2.jpeg', title: 'Sacred Vows' },
  { id: 3, category: 'Wedding', image: '/images/wedding/2I1A3067.JPG', title: 'Wedding Moments' },
  { id: 4, category: 'Wedding', image: '/images/wedding/7A3473BF-0B71-4170-BB32-3A810A72D699.jpeg', title: 'Cherished Day' },
  { id: 5, category: 'Wedding', image: '/images/wedding/wedding-03.jpg', title: 'Wedding Bliss' },
  { id: 6, category: 'Wedding', image: '/images/wedding/wedding-04.jpg', title: 'Love Story' },
  { id: 7, category: 'Wedding', image: '/images/wedding/wedding-05.jpg', title: 'Golden Hour' },
  { id: 8, category: 'Wedding', image: '/images/wedding/wedding-06.jpg', title: 'Together' },
  { id: 9, category: 'Wedding', image: '/images/wedding/wedding-07.jpg', title: 'Forever' },
  { id: 10, category: 'Wedding', image: '/images/wedding/wedding-08.jpg', title: 'Celebration' },
  { id: 11, category: 'Wedding', image: '/images/wedding/wedding-09.jpg', title: 'Happiness' },
  { id: 12, category: 'Wedding', image: '/images/wedding/wedding-10.jpg', title: 'Joyful' },
  { id: 13, category: 'Wedding', image: '/images/wedding/wedding-11.jpg', title: 'United' },
  { id: 14, category: 'Wedding', image: '/images/wedding/wedding-12.jpg', title: 'Beautiful Union' },
  { id: 15, category: 'Wedding', image: '/images/wedding/wedding-13.jpg', title: 'Lovely' },
  { id: 16, category: 'Wedding', image: '/images/wedding/wedding-14.jpg', title: 'Blessed' },
  { id: 17, category: 'Wedding', image: '/images/wedding/wedding-15.jpg', title: 'Timeless' },
  { id: 18, category: 'Wedding', image: '/images/wedding/wedding-16.jpg', title: 'Precious' },
  { id: 19, category: 'Wedding', image: '/images/wedding/wedding-17.jpg', title: 'Divine' },
  { id: 20, category: 'Wedding', image: '/images/wedding/wedding-18.jpg', title: 'Radiant' },
  { id: 21, category: 'Wedding', image: '/images/wedding/wedding-19.jpg', title: 'Splendid' },
  { id: 22, category: 'Wedding', image: '/images/wedding/wedding-20.jpg', title: 'Graceful' },
  { id: 23, category: 'Wedding', image: '/images/wedding/wedding-21.jpg', title: 'Magical' },
  { id: 24, category: 'Wedding', image: '/images/wedding/wedding-22.jpg', title: 'Romantic' },
  { id: 25, category: 'Wedding', image: '/images/wedding/wedding-23.jpg', title: 'Stunning' },
  { id: 26, category: 'Wedding', image: '/images/wedding/wedding-24.jpg', title: 'Eternal' },
  { id: 27, category: 'Wedding', image: '/images/wedding/wedding-25.jpg', title: 'Forever After' },
  { id: 28, category: 'Wedding', image: '/images/wedding/wedding-26.jpg', title: 'Glorious' },
  { id: 29, category: 'Wedding', image: '/images/wedding/wedding-27.jpg', title: 'Magnificent' },
  { id: 30, category: 'Wedding', image: '/images/wedding/wedding-28.jpg', title: 'Perfect Day' },
  { id: 31, category: 'Wedding', image: '/images/wedding/wedding-29.jpg', title: 'Serene' },
  { id: 32, category: 'Wedding', image: '/images/wedding/wedding-30.jpg', title: 'Blissful' },
  { id: 33, category: 'Wedding', image: '/images/wedding/wedding-31.jpg', title: 'Treasured' },
  { id: 34, category: 'Wedding', image: '/images/wedding/wedding-32.jpg', title: 'Enchanting' },
  { id: 35, category: 'Wedding', image: '/images/wedding/wedding-33.jpg', title: 'Golden Vows' },
  { id: 36, category: 'Wedding', image: '/images/wedding/wedding-34.jpg', title: 'Joyous' },
  { id: 37, category: 'Wedding', image: '/images/wedding/wedding-35.jpg', title: 'Heartfelt' },
  { id: 38, category: 'Wedding', image: '/images/wedding/wedding-36.jpg', title: 'Devoted' },
  { id: 39, category: 'Wedding', image: '/images/wedding/wedding-37.jpg', title: 'Adored' },
  { id: 40, category: 'Wedding', image: '/images/wedding/wedding-38.jpg', title: 'Soulmate' },
  { id: 41, category: 'Wedding', image: '/images/wedding/wedding-39.jpg', title: 'Cherished' },
  { id: 42, category: 'Wedding', image: '/images/wedding/wedding-40.jpg', title: 'Beautiful Day' },
  { id: 43, category: 'Wedding', image: '/images/wedding/wedding-41.jpg', title: 'Pure Love' },
  { id: 44, category: 'Wedding', image: '/images/wedding/wedding-42.jpg', title: 'Beloved' },
  { id: 45, category: 'Wedding', image: '/images/wedding/wedding-43.jpg', title: 'Devoted Hearts' },
  { id: 46, category: 'Wedding', image: '/images/wedding/wedding-44.jpg', title: 'Tender' },
  { id: 47, category: 'Wedding', image: '/images/wedding/wedding-45.jpg', title: 'Affectionate' },
  { id: 48, category: 'Wedding', image: '/images/wedding/wedding-46.jpg', title: 'Euphoric' },
  { id: 49, category: 'Wedding', image: '/images/wedding/wedding-47.jpg', title: 'Exquisite' },
  { id: 50, category: 'Wedding', image: '/images/wedding/wedding-48.jpg', title: 'Delightful' },
  { id: 51, category: 'Wedding', image: '/images/wedding/wedding-49.jpg', title: 'Wonderful' },
  { id: 52, category: 'Wedding', image: '/images/wedding/wedding-50.jpg', title: 'Lovely Union' },
  { id: 53, category: 'Wedding', image: '/images/wedding/wedding-51.jpg', title: 'Precious Vows' },
  { id: 54, category: 'Wedding', image: '/images/wedding/wedding-52.jpg', title: 'Dreamy' },
  { id: 55, category: 'Wedding', image: '/images/wedding/wedding-53.jpg', title: 'Fairytale' },
  { id: 56, category: 'Wedding', image: '/images/wedding/wedding-54.jpg', title: 'Breathtaking' },
  { id: 57, category: 'Wedding', image: '/images/wedding/wedding-55.jpg', title: 'Spectacular' },
  { id: 58, category: 'Wedding', image: '/images/wedding/wedding-56.jpg', title: 'Memorable' },
  { id: 59, category: 'Wedding', image: '/images/wedding/wedding-57.jpg', title: 'Incredible' },
  { id: 60, category: 'Wedding', image: '/images/wedding/wedding-58.jpg', title: 'Amazing' },
  { id: 61, category: 'Wedding', image: '/images/wedding/wedding-59.jpg', title: 'Unforgettable' },
  { id: 62, category: 'Wedding', image: '/images/wedding/wedding-60.jpg', title: 'Exceptional' },
  { id: 63, category: 'Wedding', image: '/images/wedding/wedding-61.jpg', title: 'Remarkable' },
  { id: 64, category: 'Wedding', image: '/images/wedding/wedding-62.jpg', title: 'Outstanding' },
  { id: 65, category: 'Wedding', image: '/images/wedding/wedding-63.jpg', title: 'Brilliant' },
  { id: 66, category: 'Wedding', image: '/images/wedding/wedding-64.jpg', title: 'Radiant Couple' },
  { id: 67, category: 'Wedding', image: '/images/wedding/wedding-65.jpg', title: 'Glowing' },
  { id: 68, category: 'Wedding', image: '/images/wedding/wedding-66.jpg', title: 'Vibrant' },
  { id: 69, category: 'Wedding', image: '/images/wedding/wedding-67.jpg', title: 'Lively' },
  { id: 70, category: 'Wedding', image: '/images/wedding/wedding-68.jpg', title: 'Spirited' },
  { id: 71, category: 'Wedding', image: '/images/wedding/wedding-69.jpg', title: 'Vivid' },
  { id: 72, category: 'Wedding', image: '/images/wedding/wedding-70.jpg', title: 'Grand' },
  { id: 73, category: 'Wedding', image: '/images/wedding/wedding-71.jpg', title: 'Majestic' },
  // Pre-Wedding - all 46
  ...Array.from({ length: 46 }, (_, i) => ({
    id: 100 + i,
    category: 'Pre-Wedding',
    image: `/images/prewedding/prewedding-${(i + 1).toString().padStart(2, '0')}.jpg`,
    title: 'Love Story',
  })),
  // Model - all 28
  ...Array.from({ length: 28 }, (_, i) => ({
    id: 200 + i,
    category: 'Model',
    image: `/images/model/model-${(i + 1).toString().padStart(2, '0')}.jpg`,
    title: 'Fashion Portrait',
  })),
  // Maternity - all 27
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    category: 'Maternity',
    image: `/images/maternity/maternity-${(i + 1).toString().padStart(2, '0')}.jpg`,
    title: 'Beautiful Beginnings',
  })),
  { id: 310, category: 'Maternity', image: '/images/maternity/CNY01437.JPG.jpeg', title: 'Motherhood' },
  { id: 311, category: 'Maternity', image: '/images/maternity/CNY01449.JPG.jpeg', title: 'Glowing' },
  { id: 312, category: 'Maternity', image: '/images/maternity/CNY01489 CC.jpg.jpeg', title: 'Expecting' },
  { id: 313, category: 'Maternity', image: '/images/maternity/CNY04744.jpg.jpeg', title: 'Precious Wait' },
  { id: 314, category: 'Maternity', image: '/images/maternity/CNY05490 CC.jpg.jpeg', title: 'New Life' },
  { id: 315, category: 'Maternity', image: '/images/maternity/CNY05492 CC.jpg.jpeg', title: 'Pure Joy' },
  { id: 316, category: 'Maternity', image: '/images/maternity/CNY05497 CC.jpg.jpeg', title: 'Gentle Love' },
  { id: 317, category: 'Maternity', image: '/images/maternity/CNY05504 CAndy cc.jpg.jpeg', title: 'Sweet Wait' },
  { id: 318, category: 'Maternity', image: '/images/maternity/CNY05524.jpg CC.jpg.jpeg', title: 'Radiant Mom' },
  { id: 319, category: 'Maternity', image: '/images/maternity/CNY05528.jpg CC.jpg.jpeg', title: 'Serene' },
  { id: 320, category: 'Maternity', image: '/images/maternity/CNY05550.jpg CC.jpg.jpeg', title: 'Tender Moments' },
  { id: 321, category: 'Maternity', image: '/images/maternity/CNY07671 Wlcm.jpg.jpeg', title: 'Welcome' },
  { id: 322, category: 'Maternity', image: '/images/maternity/CNY07678 Happiness Is On The Way.jpg.jpeg', title: 'Happiness Coming' },
  { id: 323, category: 'Maternity', image: '/images/maternity/Motherhood.jpg.jpeg', title: 'Motherhood' },
  { id: 324, category: 'Maternity', image: '/images/maternity/Neeyum Naanum Anbe.jpg.jpeg', title: 'Neeyum Naanum' },
  { id: 325, category: 'Maternity', image: '/images/maternity/Thaimai Candy.jpg.jpeg', title: 'Thaimai' },
  { id: 326, category: 'Maternity', image: '/images/maternity/Tharame Candy.jpg.jpeg', title: 'Tharame' },
  // Baby - all 17
  ...Array.from({ length: 17 }, (_, i) => ({
    id: 400 + i,
    category: 'Baby',
    image: `/images/baby/baby-${(i + 1).toString().padStart(2, '0')}.jpg`,
    title: 'Little Wonder',
  })),
  // Product - all 7
  { id: 500, category: 'Product', image: '/images/product/Crackling Coco.jpg', title: 'Crackling Coco' },
  { id: 501, category: 'Product', image: '/images/product/Silver Coco.jpg', title: 'Silver Coco' },
  { id: 502, category: 'Product', image: '/images/product/Neon Pink- Sree Krishna.jpg', title: 'Neon Pink' },
  { id: 503, category: 'Product', image: '/images/product/Eterral Blis- Sree Krishna.jpg', title: 'Eternal Bliss' },
  { id: 504, category: 'Product', image: '/images/product/Kiko Blossoms- Sree Krishna.jpg', title: 'Kiko Blossoms' },
  { id: 505, category: 'Product', image: '/images/product/Nippon Light - Sree Krishna 01 (2).jpg', title: 'Nippon Light' },
  { id: 506, category: 'Product', image: '/images/product/Ping Pong  Final.jpg', title: 'Ping Pong' },
  // Birthday - all 13
  ...Array.from({ length: 13 }, (_, i) => ({
    id: 600 + i,
    category: 'Birthday',
    image: `/images/birthday/birthday-${(i + 1).toString().padStart(2, '0')}.jpg`,
    title: 'Celebrations',
  })),
]

function PortfolioItem({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
      className="group relative overflow-hidden cursor-pointer aspect-square"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
        <span className="text-candy-pink font-script text-sm md:text-base mb-1">{item.category}</span>
        <h3 className="text-white font-display text-sm md:text-lg font-semibold text-center">{item.title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-candy-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

export default function Portfolio() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-lg bg-cream">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-8 md:mb-10"
        >
          <span className="inline-block text-candy-pink font-candy text-xl md:text-2xl mb-2">
            Our Work
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Complete <span className="text-candy-pink">Portfolio</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            A glimpse into all the stories we have had the privilege to capture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-neutral-900 text-white'
                  : 'bg-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {category}
              <span className="ml-1 text-xs opacity-60">
                ({category === 'All'
                  ? portfolioItems.length
                  : portfolioItems.filter(i => i.category === category).length})
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <a
            href="https://www.instagram.com/candycapture_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            See More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
