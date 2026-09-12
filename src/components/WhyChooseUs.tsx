import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Heart, Sparkles, Eye, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Creative Storytelling',
    description: 'We narrate your story through carefully crafted visual narratives.',
  },
  {
    icon: Camera,
    title: 'Professional Equipment',
    description: 'State-of-the-art cameras and lighting for exceptional quality.',
  },
  {
    icon: Sparkles,
    title: 'Cinematic Editing',
    description: 'Each photograph is meticulously edited for timeless aesthetics.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Every element is considered to create perfection.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'We work closely with you to bring your vision to life.',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Years of expertise capturing special moments.',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group text-center p-5 md:p-6 bg-white hover:bg-neutral-900 transition-all duration-500"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-100 group-hover:bg-candy-pink transition-colors duration-500 mb-4">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 group-hover:text-white transition-colors duration-500" />
      </div>

      {/* Title */}
      <h3 className="font-display text-base md:text-lg font-semibold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-2">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 group-hover:text-neutral-300 text-xs md:text-sm leading-relaxed transition-colors duration-500">
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-50px' })

  return (
    <section className="section-lg bg-neutral-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block text-candy-pink font-candy text-xl md:text-2xl mb-2">
            The Candy Capture Difference
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Why Choose <span className="text-candy-pink">Us</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed px-4">
            We bring together artistry, technology, and passion to deliver photographs 
            you'll treasure for generations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
