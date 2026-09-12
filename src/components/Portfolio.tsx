import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = [
  'All',
  'Wedding',
  'Pre-Wedding',
  'Model',
  'Maternity',
  'Baby',
  'Product',
  'Birthday',
]

const portfolioItems = [
  {
    id: 1,
    category: 'Wedding',
    image: '/images/wedding/Wedding-1.jpeg',
    title: 'Wedding Day Magic',
  },
  {
    id: 2,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-01.jpg',
    title: 'Love Story',
  },
  {
    id: 3,
    category: 'Model',
    image: '/images/model/model-01.jpg',
    title: 'Fashion Portrait',
  },
  {
    id: 4,
    category: 'Maternity',
    image: '/images/maternity/maternity-01.jpg',
    title: 'Expecting Joy',
  },
  {
    id: 5,
    category: 'Baby',
    image: '/images/baby/baby-01.jpg',
    title: 'Little Wonder',
  },
  {
    id: 6,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-13.jpg',
    title: 'Romantic Moments',
  },
  {
    id: 7,
    category: 'Wedding',
    image: '/images/wedding/Wedding-2.jpeg',
    title: 'Sacred Vows',
  },
  {
    id: 8,
    category: 'Model',
    image: '/images/model/model-05.jpg',
    title: 'Elegance',
  },
  {
    id: 9,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-30.jpg',
    title: 'Connection',
  },
  {
    id: 10,
    category: 'Product',
    image: '/images/product/Crackling Coco.jpg',
    title: 'Product Showcase',
  },
  {
    id: 11,
    category: 'Birthday',
    image: '/images/birthday/birthday-01.jpg',
    title: 'Celebrations',
  },
  {
    id: 12,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-32.jpg',
    title: 'Golden Breeze',
  },
  {
    id: 13,
    category: 'Model',
    image: '/images/model/model-10.jpg',
    title: 'Style Portrait',
  },
  {
    id: 14,
    category: 'Product',
    image: '/images/product/Neon Pink- Sree Krishna.jpg',
    title: 'Brand Photography',
  },
  {
    id: 15,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-36.jpg',
    title: 'Perfect Pair',
  },
  {
    id: 16,
    category: 'Maternity',
    image: '/images/maternity/maternity-05.jpg',
    title: 'Graceful Wait',
  },
  {
    id: 17,
    category: 'Baby',
    image: '/images/baby/baby-05.jpg',
    title: 'Tiny Toes',
  },
  {
    id: 18,
    category: 'Pre-Wedding',
    image: '/images/prewedding/prewedding-43.jpg',
    title: 'Soulmates',
  },
]

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group relative overflow-hidden cursor-pointer aspect-square"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
      
      {/* Content on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
        <span className="text-candy-pink font-script text-sm md:text-base mb-1">{item.category}</span>
        <h3 className="text-white font-display text-sm md:text-lg font-semibold text-center">{item.title}</h3>
      </div>

      {/* Pink accent on hover */}
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
        {/* Section Header */}
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
            Featured <span className="text-candy-pink">Portfolio</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            A glimpse into the stories we've had the privilege to capture.
          </p>
        </motion.div>

        {/* Category Filter */}
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
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Instagram CTA */}
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
