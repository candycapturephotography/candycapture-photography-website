import { BookingProvider, useBooking } from './context/BookingContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TopPicsSlider from './components/TopPicsSlider'
import About from './components/About'
import Services from './components/Services'
import OurWorkVideo from './components/OurWorkVideo'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import CinematicGallery from './components/CinematicGallery'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

function AppContent() {
  const { isBookingOpen, closeBooking } = useBooking()

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <TopPicsSlider />
        <About />
        <Services />
        <OurWorkVideo />
        <Portfolio />
        <WhyChooseUs />
        <CinematicGallery />
        <Testimonials />
        <Instagram />
        <BookingCTA />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  )
}

function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  )
}

export default App
