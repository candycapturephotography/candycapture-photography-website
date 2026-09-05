import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import CinematicGallery from './components/CinematicGallery'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <CinematicGallery />
        <Testimonials />
        <Instagram />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
