import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="section bg-cream overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden">
                <img
                  src="/images/model/Model-1.jpg"
                  alt="Professional photography session by Candy Capture"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
              {/* Decorative Accent Image - Hidden on mobile */}
              <div className="absolute -bottom-6 -right-6 w-32 md:w-40 h-44 md:h-56 z-20 hidden md:block">
                <img
                  src="/images/wedding/Wedding-2.jpeg"
                  alt="Wedding photography details"
                  className="w-full h-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              {/* Decorative Border - Hidden on mobile */}
              <div className="absolute top-6 left-6 right-6 bottom-6 border border-candy-pink/30 -z-0 hidden md:block" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <span className="inline-block text-candy-pink font-script text-xl md:text-2xl mb-3">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 leading-tight">
              Where Moments Become
              <br />
              <span className="text-candy-pink">Timeless Art</span>
            </h2>

            {/* Decorative Line */}
            <div className="line-decoration mb-6" />

            {/* Description */}
            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm md:text-base">
              <p>
                Based in Sivakasi, Tamil Nadu, Candy Capture Photography is a creative photography 
                studio dedicated to capturing the moments that matter most.
              </p>
              <p>
                From the emotions of a wedding day to the beautiful journey of maternity, 
                the innocence of a baby, the excitement of a live event, or the confidence 
                of a cinematic model shoot — we believe every story deserves to be captured 
                beautifully and authentically.
              </p>
              <p>
                We don't just take pictures — we capture the people, emotions, relationships, 
                and little moments that make every occasion special.
              </p>
            </div>

            {/* Promise */}
            <div className="mt-6 p-4 md:p-5 bg-neutral-50 border-l-4 border-candy-pink">
              <p className="text-base md:text-lg font-display font-medium text-neutral-800 italic">
                "Your moments. Your story. Our vision."
              </p>
              <p className="text-xs md:text-sm text-neutral-600 mt-2">
                📍 Proudly serving Sivakasi and surrounding areas in Tamil Nadu
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
