import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Happy Client',
    event: 'Wedding Photography',
    review: 'Candy Capture Photography made our wedding day absolutely magical. They captured every emotion, every tear of joy, and every smile beautifully.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Happy Mother',
    event: 'Maternity Shoot',
    review: 'The maternity shoot exceeded all my expectations. The team made me feel so comfortable and beautiful. The photos are absolutely stunning!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Happy Couple',
    event: 'Pre-Wedding Shoot',
    review: 'Our pre-wedding shoot was like a dream. The creativity and professionalism of the Candy Capture team is unmatched.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Happy Parent',
    event: 'Baby Photography',
    review: 'They captured our little one\'s first moments so beautifully. The patience they showed and the resulting photos are simply priceless!',
    rating: 5,
  },
]

export default function Testimonials() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-lg bg-cream overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-8 md:mb-10"
        >
          <span className="inline-block text-candy-pink font-script text-xl md:text-2xl mb-2">
            Client Love
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            What Our <span className="text-candy-pink">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-white p-6 md:p-10">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-candy-pink/20" />
            </div>

            <div className="relative z-10 pt-6">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-candy-yellow text-candy-yellow" />
                ))}
              </div>

              {/* Review Text */}
              <motion.p
                key={currentTestimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-base md:text-lg text-neutral-700 leading-relaxed text-center mb-6 font-light italic px-2"
              >
                "{currentTestimonial.review}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                key={`info-${currentTestimonial.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <h4 className="font-display text-base md:text-lg font-semibold text-neutral-900">
                  {currentTestimonial.name}
                </h4>
                <span className="text-candy-pink text-xs md:text-sm">{currentTestimonial.event}</span>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 md:p-2.5 border border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-candy-pink w-5' : 'bg-neutral-300 w-2 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 md:p-2.5 border border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
