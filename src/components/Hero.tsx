import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useBooking } from '../context/BookingContext'

const heroImages = [
  '/images/wedding/Wedding-1.jpeg',
  '/images/wedding/wedding-05.jpg',
  '/images/prewedding/prewedding-01.jpg',
  '/images/model/model-01.jpg',
  '/images/wedding/wedding-12.jpg',
  '/images/maternity/maternity-01.jpg',
  '/images/prewedding/prewedding-15.jpg',
  '/images/wedding/wedding-20.jpg',
  '/images/wedding/Wedding-2.jpeg',
]

export default function Hero() {
  const { openBooking } = useBooking()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Beautiful photography by Candy Capture Photography"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src="/logo.png"
            alt="Candy Capture Photography"
            className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight">
            Capturing Moments.
            <br />
            <span className="font-script text-candy-pink text-2xl sm:text-3xl md:text-3xl lg:text-4xl">Creating Memories.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-light max-w-lg mx-auto mb-8 px-2">
            Based in Sivakasi, Tamil Nadu — capturing the moments that matter most with creative composition and cinematic visuals.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md px-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-900 font-medium text-sm tracking-wide hover:bg-neutral-100 transition-all duration-300 text-center"
          >
            View Our Work
          </a>
          <button
            onClick={openBooking}
            className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-medium text-sm tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center"
          >
            Book a Session
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
