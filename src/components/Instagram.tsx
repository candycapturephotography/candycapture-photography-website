import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Instagram SVG icon component
const InstagramIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const instagramPosts = [
  { id: 1, image: '/images/wedding/Wedding-1.jpeg' },
  { id: 2, image: '/images/maternity/Candy Capture 00.jpg' },
  { id: 3, image: '/images/model/Model-1.jpg' },
  { id: 4, image: '/images/baby/SIVA9559.JPG' },
  { id: 5, image: '/images/product/Crackling Coco.jpg' },
  { id: 6, image: '/images/birthday/Birthday-1.JPG' },
]

export default function Instagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="section bg-neutral-50 overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <span className="inline-block text-candy-pink font-script text-xl md:text-2xl mb-2">
            @candycapture_
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
            Follow Our <span className="text-candy-pink">Journey</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            Stay updated with our latest work and behind-the-scenes moments.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/candycapture_/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-candy-pink/0 group-hover:bg-candy-pink/70 transition-all duration-300 flex items-center justify-center">
                <InstagramIcon size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.instagram.com/candycapture_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-candy-pink to-candy-orange text-white font-medium text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            <InstagramIcon size={18} />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
