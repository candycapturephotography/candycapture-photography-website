import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurWorkVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="section-lg bg-neutral-900 py-16 md:py-24">
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
            Cinematic Experience
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            Our <span className="text-candy-pink">Work</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed px-4">
            Experience the magic of our photography through cinematic storytelling.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              src="/images/TopVideo/PSneha.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/images/Toppics/CNY05281 CC.jpg.jpeg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video Caption */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6"
          >
            <h3 className="font-display text-lg md:text-xl text-white mb-1">
              P & Sneha
            </h3>
            <p className="text-neutral-500 text-sm">
              A beautiful love story captured in frames
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
