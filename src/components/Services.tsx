import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Timeless captures of your most cherished day.',
    image: '/images/wedding/Wedding-1.jpeg',
  },
  {
    id: 2,
    title: 'Pre-Wedding',
    description: 'Romantic sessions that tell your story.',
    image: '/images/wedding/Wedding-2.jpeg',
  },
  {
    id: 3,
    title: 'Maternity',
    description: 'Celebrating the beautiful anticipation of new life.',
    image: '/images/maternity/Candy Capture 00.jpg',
  },
  {
    id: 4,
    title: 'Baby & Kids',
    description: 'Capturing precious moments of your little ones.',
    image: '/images/baby/SIVA9559.JPG',
  },
  {
    id: 5,
    title: 'Modeling',
    description: 'Cinematic fashion and portfolio photography.',
    image: '/images/model/Model-1.jpg',
  },
  {
    id: 6,
    title: 'Product',
    description: 'Professional imagery for your products.',
    image: '/images/product/Crackling Coco.jpg',
  },
  {
    id: 7,
    title: 'Birthday Events',
    description: 'Capturing celebrations and happy moments.',
    image: '/images/birthday/Birthday-1.JPG',
  },
  {
    id: 8,
    title: 'Promotional',
    description: 'Brand photography for marketing campaigns.',
    image: '/images/product/Neon Pink- Sree Krishna.jpg',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden bg-white"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
          <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-1">
            {service.title}
          </h3>
          <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {service.description}
          </p>
          <a 
            href={`https://wa.me/917373605380?text=Hi! I'm interested in your ${service.title} services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-candy-pink font-medium text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <span>Book Now</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })

  return (
    <section id="services" className="section-lg bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block text-candy-pink font-script text-xl md:text-2xl mb-2">
            What We Offer
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Our Photography <span className="text-candy-pink">Services</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            Whether it's an intimate celebration or a grand event, our goal is simple — 
            to make your memories last forever.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
