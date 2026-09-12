import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const galleryImages = [
  { id: 1, image: '/images/wedding/Wedding-1.jpeg', caption: 'A moment of pure joy', location: 'Sivakasi' },
  { id: 2, image: '/images/prewedding/prewedding-02.jpg', caption: 'Love before the vows', location: 'Tamil Nadu' },
  { id: 3, image: '/images/model/model-02.jpg', caption: 'Timeless elegance', location: 'Studio' },
  { id: 4, image: '/images/prewedding/prewedding-05.jpg', caption: 'Together forever', location: 'Sivakasi' },
  { id: 5, image: '/images/maternity/maternity-02.jpg', caption: 'Beautiful beginnings', location: 'Sivakasi' },
  { id: 6, image: '/images/prewedding/prewedding-10.jpg', caption: 'Golden hour love', location: 'Tamil Nadu' },
  { id: 7, image: '/images/baby/baby-02.jpg', caption: 'Precious little one', location: 'Sivakasi' },
  { id: 8, image: '/images/birthday/birthday-02.jpg', caption: 'Joyful celebration', location: 'Sivakasi' },
  { id: 9, image: '/images/wedding/Wedding-2.jpeg', caption: 'Love in every frame', location: 'Tamil Nadu' },
  { id: 10, image: '/images/model/model-08.jpg', caption: 'Style and grace', location: 'Studio' },
  { id: 11, image: '/images/prewedding/prewedding-20.jpg', caption: 'Perfect pair', location: 'Tamil Nadu' },
  { id: 12, image: '/images/baby/baby-08.jpg', caption: 'Tiny wonder', location: 'Sivakasi' },
  { id: 13, image: '/images/maternity/maternity-05.jpg', caption: 'The wait begins', location: 'Sivakasi' },
  { id: 14, image: '/images/birthday/birthday-05.jpg', caption: 'Happy moments', location: 'Tamil Nadu' },
  { id: 15, image: '/images/model/model-15.jpg', caption: 'Fashion portrait', location: 'Studio' },
  { id: 16, image: '/images/prewedding/prewedding-30.jpg', caption: 'Romance in frames', location: 'Sivakasi' },
  { id: 17, image: '/images/product/Crackling Coco.jpg', caption: 'Product perfection', location: 'Studio' },
  { id: 18, image: '/images/wedding/wedding-05.jpg', caption: 'Wedding day magic', location: 'Sivakasi' },
  { id: 19, image: '/images/wedding/wedding-12.jpg', caption: 'Sacred vows', location: 'Tamil Nadu' },
  { id: 20, image: '/images/wedding/wedding-25.jpg', caption: 'Forever begins', location: 'Sivakasi' },
  { id: 21, image: '/images/wedding/wedding-33.jpg', caption: 'Celebration of love', location: 'Tamil Nadu' },
  { id: 22, image: '/images/wedding/wedding-40.jpg', caption: 'Cherished moments', location: 'Sivakasi' },
  { id: 23, image: '/images/wedding/wedding-50.jpg', caption: 'A beautiful union', location: 'Tamil Nadu' },
]

export default function CinematicGallery() {
  const titleRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="section-lg bg-neutral-900 overflow-hidden">
      <div className="container-custom mb-8 md:mb-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="inline-block text-candy-pink font-candy text-xl md:text-2xl mb-2">
            Visual Stories
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            Featured <span className="text-candy-pink">Gallery</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed px-4">
            Scroll to explore the moments that moved us.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="flex-shrink-0 group cursor-pointer"
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="relative w-[260px] sm:w-[320px] md:w-[400px] overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Caption */}
                <div className="mt-3">
                  <h3 className="font-display text-sm md:text-base text-white mb-0.5 group-hover:text-candy-pink transition-colors duration-300">
                    {item.caption}
                  </h3>
                  <p className="text-neutral-500 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="container-custom mt-6">
          <div className="flex items-center gap-3 max-w-md mx-auto">
            <span className="text-neutral-500 text-xs font-medium">Scroll</span>
            <div className="flex-1 h-px bg-neutral-700 relative">
              <div
                className="absolute top-0 left-0 h-full bg-candy-pink transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="text-neutral-500 text-xs font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
