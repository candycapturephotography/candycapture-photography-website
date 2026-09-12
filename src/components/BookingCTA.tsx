import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

export default function BookingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { openBooking } = useBooking()

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/model/model-03.jpg"
          alt="Beautiful photography backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 md:py-24 lg:py-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-candy-pink" />
              <span className="text-candy-pink font-script text-xl md:text-2xl">Let's Create</span>
              <div className="w-12 h-px bg-candy-pink" />
            </div>

            {/* Main Heading */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              Your Story Deserves to be
              <br />
              <span className="text-candy-pink font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Remembered Beautifully</span>
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-xl mx-auto px-4">
              Your moments. Your story. Our vision. Let us capture yours with the artistry and emotion it deserves.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            >
              <button
                onClick={openBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-candy-pink text-white font-medium text-sm tracking-wide hover:bg-candy-pink/90 transition-all duration-300 text-center"
              >
                Book Your Shoot
              </button>
              <a
                href="mailto:hellocandycapturephotography@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white font-medium text-sm tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-2xl mx-auto px-4">
                {/* Email */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-candy-pink/20 flex items-center justify-center mb-3">
                    <Mail size={18} className="text-candy-pink" />
                  </div>
                  <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</span>
                  <a 
                    href="mailto:hellocandycapturephotography@gmail.com"
                    className="text-white text-xs sm:text-sm hover:text-candy-pink transition-colors break-all leading-tight"
                  >
                    hellocandycapture<br className="sm:hidden" />photography@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-candy-pink/20 flex items-center justify-center mb-3">
                    <Phone size={18} className="text-candy-pink" />
                  </div>
                  <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone / WhatsApp</span>
                  <a 
                    href="tel:+917373605380"
                    className="text-white text-sm sm:text-base font-medium hover:text-candy-pink transition-colors"
                  >
                    +91 73736 05380
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-candy-pink/20 flex items-center justify-center mb-3">
                    <MapPin size={18} className="text-candy-pink" />
                  </div>
                  <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</span>
                  <p className="text-white text-sm sm:text-base font-medium">
                    Sivakasi, Tamil Nadu
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
