import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const topPicsImages = [
  { id: 1, image: '/images/model/CNY05940.jpg CC.jpg', title: 'Beautiful Moment' },
  { id: 2, image: '/images/model/CNY05957.jpg CC.jpg', title: 'Captured Joy' },
  { id: 3, image: '/images/model/CNY05968.jpg CC.jpg', title: 'Timeless Beauty' },
  { id: 4, image: '/images/Toppics/CNY05909.jpg CC.jpg', title: 'Elegant Shot' },
  { id: 5, image: '/images/Toppics/CNY05950.jpg CC.jpg', title: 'Radiant Glow' },
  { id: 6, image: '/images/Toppics/CNY05968.jpg CC.jpg', title: 'Stunning Portrait' },
]

export default function TopPicsSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % topPicsImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % topPicsImages.length
      }
      return prev === 0 ? topPicsImages.length - 1 : prev - 1
    })
  }

  return (
    <section className="section-lg bg-cream py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-14"
        >
          <span className="inline-block text-candy-pink font-candy text-xl md:text-2xl mb-2">
            Featured Shots
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Top <span className="text-candy-pink">Picks</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            Our most stunning captures that tell unforgettable stories.
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/10] bg-neutral-200 rounded-lg overflow-hidden shadow-xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                src={topPicsImages[current].image}
                alt={topPicsImages[current].title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-900" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-900" />
            </button>

            {/* Pink accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-candy-pink" />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {topPicsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === current ? "bg-candy-pink w-6 md:w-8" : "bg-neutral-300 hover:bg-neutral-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Title */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-4"
          >
            <h3 className="font-display text-lg md:text-xl text-neutral-900">
              {topPicsImages[current].title}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
