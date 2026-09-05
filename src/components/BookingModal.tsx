import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Phone, PartyPopper, CheckCircle, Loader2 } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const eventTypes = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Maternity Photography',
  'Baby & Kids Photography',
  'Birthday Event',
  'Modeling Photography',
  'Product Photography',
  'Corporate Event',
  'Other',
]

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    eventType: '',
    eventDate: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: '', mobile: '', eventType: '', eventDate: '' })
        setIsSuccess(false)
        setError('')
      }, 300)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    if (!formData.mobile.trim() || !/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      setError('Please enter a valid 10-digit mobile number')
      return false
    }
    if (!formData.eventType) {
      setError('Please select an event type')
      return false
    }
    if (!formData.eventDate) {
      setError('Please select an event date')
      return false
    }
    return true
  }

  const sendWhatsAppNotification = () => {
    // Format message for WhatsApp
    const message = `🎉 *New Booking Enquiry!*

👤 *Name:* ${formData.name}
📱 *Mobile:* ${formData.mobile}
🎊 *Event:* ${formData.eventType}
📅 *Date:* ${new Date(formData.eventDate).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}

_Received from Candy Capture Photography Website_`

    // Open WhatsApp with the message (this sends to your business number)
    const whatsappUrl = `https://wa.me/917373605380?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const sendEmailNotification = async () => {
    // Using EmailJS to send email notification
    // You'll need to set up EmailJS account (free) and update these IDs
    const templateParams = {
      to_email: 'hellocandycapturephotography@gmail.com',
      from_name: formData.name,
      from_mobile: formData.mobile,
      event_type: formData.eventType,
      event_date: new Date(formData.eventDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }

    try {
      // EmailJS send - using their free tier
      // Service ID, Template ID, and Public Key need to be set up at emailjs.com
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_candycapture', // You'll set this up in EmailJS
          template_id: 'template_booking', // You'll set this up in EmailJS
          user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // You'll get this from EmailJS
          template_params: templateParams,
        }),
      })

      if (!response.ok) {
        console.log('Email notification skipped - EmailJS not configured')
      }
    } catch (err) {
      // Email failed but we'll continue with WhatsApp
      console.log('Email notification skipped:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setError('')

    try {
      // Send email notification (will work once EmailJS is configured)
      await sendEmailNotification()

      // Small delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Show success state
      setIsSuccess(true)

      // After 2 seconds, send WhatsApp notification and close modal
      setTimeout(() => {
        sendWhatsAppNotification()
        setTimeout(() => {
          onClose()
        }, 500)
      }, 2000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-neutral-600" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-candy-pink to-candy-pink/80 px-6 py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <PartyPopper size={32} className="text-white" />
                </motion.div>
                <h2 className="text-2xl font-display font-semibold text-white mb-2">
                  Book Your Session
                </h2>
                <p className="text-white/80 text-sm">
                  Fill in your details and we'll get back to you shortly!
                </p>
              </div>

              {/* Form or Success State */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle size={40} className="text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                      Thank You, {formData.name}! 🎉
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Your booking enquiry has been received!
                    </p>
                    <p className="text-sm text-neutral-500">
                      We'll contact you soon on <span className="font-medium text-candy-pink">{formData.mobile}</span>
                    </p>
                    <p className="text-xs text-neutral-400 mt-4">
                      Redirecting to WhatsApp...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-candy-pink/50 focus:border-candy-pink transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Field */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-candy-pink/50 focus:border-candy-pink transition-all"
                        />
                      </div>
                    </div>

                    {/* Event Type Field */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Event Type
                      </label>
                      <div className="relative">
                        <PartyPopper
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-candy-pink/50 focus:border-candy-pink transition-all appearance-none bg-white"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Event Date Field */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Event Date
                      </label>
                      <div className="relative">
                        <Calendar
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          min={today}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-candy-pink/50 focus:border-candy-pink transition-all"
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm text-center"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-candy-pink text-white font-medium rounded-lg hover:bg-candy-pink/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Enquiry'
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-neutral-400 text-center">
                      By submitting, you agree to be contacted via WhatsApp and phone.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
