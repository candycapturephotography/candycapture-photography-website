import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ServiceGalleryModal from './ServiceGalleryModal'

// Service data with folder mapping
const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Timeless captures of your most cherished day.',
    image: '/images/wedding/Wedding-1.jpeg',
    folder: 'wedding',
    images: [
      '/images/wedding/Wedding-1.jpeg',
      '/images/wedding/Wedding-2.jpeg',
      '/images/wedding/2I1A3067.JPG',
      '/images/wedding/7A3473BF-0B71-4170-BB32-3A810A72D699.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Pre-Wedding',
    description: 'Romantic sessions that tell your love story.',
    image: '/images/prewedding/prewedding-01.jpg',
    folder: 'prewedding',
    images: [
      '/images/prewedding/prewedding-01.jpg',
      '/images/prewedding/prewedding-02.jpg',
      '/images/prewedding/prewedding-03.jpg',
      '/images/prewedding/prewedding-04.jpg',
      '/images/prewedding/prewedding-05.jpg',
      '/images/prewedding/prewedding-06.jpg',
      '/images/prewedding/prewedding-07.jpg',
      '/images/prewedding/prewedding-08.jpg',
      '/images/prewedding/prewedding-09.jpg',
      '/images/prewedding/prewedding-10.jpg',
      '/images/prewedding/prewedding-11.jpg',
      '/images/prewedding/prewedding-12.jpg',
      '/images/prewedding/prewedding-13.jpg',
      '/images/prewedding/prewedding-14.jpg',
      '/images/prewedding/prewedding-15.jpg',
      '/images/prewedding/prewedding-16.jpg',
      '/images/prewedding/prewedding-17.jpg',
      '/images/prewedding/prewedding-18.jpg',
      '/images/prewedding/prewedding-19.jpg',
      '/images/prewedding/prewedding-20.jpg',
      '/images/prewedding/prewedding-21.jpg',
      '/images/prewedding/prewedding-22.jpg',
      '/images/prewedding/prewedding-23.jpg',
      '/images/prewedding/prewedding-24.jpg',
      '/images/prewedding/prewedding-25.jpg',
      '/images/prewedding/prewedding-26.jpg',
      '/images/prewedding/prewedding-27.jpg',
      '/images/prewedding/prewedding-28.jpg',
      '/images/prewedding/prewedding-29.jpg',
      '/images/prewedding/prewedding-30.jpg',
      '/images/prewedding/prewedding-31.jpg',
      '/images/prewedding/prewedding-32.jpg',
      '/images/prewedding/prewedding-33.jpg',
      '/images/prewedding/prewedding-34.jpg',
      '/images/prewedding/prewedding-35.jpg',
      '/images/prewedding/prewedding-36.jpg',
      '/images/prewedding/prewedding-37.jpg',
      '/images/prewedding/prewedding-38.jpg',
      '/images/prewedding/prewedding-39.jpg',
      '/images/prewedding/prewedding-40.jpg',
      '/images/prewedding/prewedding-41.jpg',
      '/images/prewedding/prewedding-42.jpg',
      '/images/prewedding/prewedding-43.jpg',
      '/images/prewedding/prewedding-44.jpg',
      '/images/prewedding/prewedding-45.jpg',
      '/images/prewedding/prewedding-46.jpg',
    ],
  },
  {
    id: 3,
    title: 'Maternity',
    description: 'Celebrating the beautiful anticipation of new life.',
    image: '/images/maternity/Candy Capture 00.jpg',
    folder: 'maternity',
    images: [
      '/images/maternity/Candy Capture 00.jpg',
      '/images/maternity/Candy Capture 03.jpg',
      '/images/maternity/Candy Capture 07.jpg',
      '/images/maternity/Candy Capture 13.jpg',
      '/images/maternity/Candy Capture 14 Hapineessss.jpg',
      '/images/maternity/CNY03754.jpg',
      '/images/maternity/CNY06642 Blue White.jpg',
      '/images/maternity/CNY06705 Cm Sn.jpg',
      '/images/maternity/CNY06710 Scan.jpg',
      '/images/maternity/EPI01592 CC CAndy.jpg',
    ],
  },
  {
    id: 4,
    title: 'Baby & Kids',
    description: 'Capturing precious moments of your little ones.',
    image: '/images/baby/SIVA9559.JPG',
    folder: 'baby',
    images: [
      '/images/baby/SIVA9559.JPG',
      '/images/baby/SIVA9555.JPG',
      '/images/baby/SIVA9568 copy.jpg',
      '/images/baby/SIVA9578.JPG',
      '/images/baby/SIVA9602.JPG',
      '/images/baby/Amazing.jpg',
      '/images/baby/Big Smile.jpg',
      '/images/baby/Every Smile.jpg',
      '/images/baby/Thangamail.jpg',
      '/images/baby/CNY06728.JPG',
      '/images/baby/CNY06937.JPG',
      '/images/baby/CNY07880.jpg',
      '/images/baby/CNY07919.jpg',
      '/images/baby/CNY07923.jpg',
      '/images/baby/CNY07943.jpg',
      '/images/baby/CNY07957.jpg',
      '/images/baby/CNY07966.jpg',
    ],
  },
  {
    id: 5,
    title: 'Modeling',
    description: 'Cinematic fashion and portfolio photography.',
    image: '/images/model/Model-1.jpg',
    folder: 'model',
    images: [
      '/images/model/Model-1.jpg',
      '/images/model/Model-2.jpg',
      '/images/model/Model-3.jpg',
      '/images/model/1.jpg',
      '/images/model/2.jpg',
      '/images/model/3.jpg',
      '/images/model/4.jpg',
      '/images/model/5.jpg',
      '/images/model/03.jpg',
      '/images/model/04.jpg',
      '/images/model/07.jpg',
      '/images/model/08.jpg',
      '/images/model/CNY07924.JPG',
      '/images/model/CNY07943.JPG',
      '/images/model/CNY07981.JPG',
      '/images/model/CNY08000.JPG',
      '/images/model/CNY08092.JPG',
      '/images/model/CNY08108.JPG',
      '/images/model/CNY08663 Sty.jpg',
      '/images/model/CNY08678 Sty.jpg',
      '/images/model/RBY09459.jpg',
      '/images/model/RBY09476.jpg',
      '/images/model/RBY09496.jpg',
      '/images/model/RBY09697 Sty.jpg',
      '/images/model/RBY09700 STy.jpg',
      '/images/model/RBY09722 Sty.jpg',
      '/images/model/RBY09738 Sty.jpg',
      '/images/model/RBY09749 Sty.jpg',
    ],
  },
  {
    id: 6,
    title: 'Product',
    description: 'Professional imagery for your products.',
    image: '/images/product/Crackling Coco.jpg',
    folder: 'product',
    images: [
      '/images/product/Crackling Coco.jpg',
      '/images/product/Silver Coco.jpg',
      '/images/product/Neon Pink- Sree Krishna.jpg',
      '/images/product/Eterral Blis- Sree Krishna.jpg',
      '/images/product/Kiko Blossoms- Sree Krishna.jpg',
      '/images/product/Nippon Light - Sree Krishna 01 (2).jpg',
      '/images/product/Ping Pong  Final.jpg',
    ],
  },
  {
    id: 7,
    title: 'Birthday Events',
    description: 'Capturing celebrations and happy moments.',
    image: '/images/birthday/Birthday-1.JPG',
    folder: 'birthday',
    images: [
      '/images/birthday/Birthday-1.JPG',
      '/images/birthday/Birthday-2.JPG',
      '/images/birthday/CNY08524.JPG',
      '/images/birthday/CNY09211.JPG',
      '/images/birthday/CNY09297.JPG',
      '/images/birthday/CNY09326.JPG',
      '/images/birthday/CNY09344.JPG',
      '/images/birthday/CNY09362.JPG',
      '/images/birthday/IBZ00771.JPG',
      '/images/birthday/IBZ00857.JPG',
      '/images/birthday/IBZ00988.JPG',
      '/images/birthday/IBZ00992.JPG',
      '/images/birthday/WhatsApp Image 2024-12-14 at 18.39.34_bc1ccf06.jpg',
    ],
  },
  {
    id: 8,
    title: 'Corporate Events',
    description: 'Professional event coverage for businesses.',
    image: '/images/product/Neon Pink- Sree Krishna.jpg',
    folder: 'product',
    images: [
      '/images/product/Neon Pink- Sree Krishna.jpg',
      '/images/product/Crackling Coco.jpg',
      '/images/product/Silver Coco.jpg',
      '/images/product/Eterral Blis- Sree Krishna.jpg',
    ],
  },
]

function ServiceCard({ 
  service, 
  index, 
  onViewGallery 
}: { 
  service: typeof services[0]
  index: number
  onViewGallery: (service: typeof services[0]) => void 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden bg-white cursor-pointer"
      onClick={() => onViewGallery(service)}
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
          <div className="flex items-center gap-2 text-candy-pink font-medium text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span>View Gallery</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const handleViewGallery = (service: typeof services[0]) => {
    setSelectedService(service)
  }

  const handleCloseGallery = () => {
    setSelectedService(null)
  }

  return (
    <>
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
              Click on any service to view our complete gallery. Whether it's an intimate celebration or a grand event, our goal is simple — to make your memories last forever.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onViewGallery={handleViewGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <ServiceGalleryModal
        isOpen={selectedService !== null}
        onClose={handleCloseGallery}
        serviceName={selectedService?.title || ''}
        images={selectedService?.images || []}
      />
    </>
  )
}
