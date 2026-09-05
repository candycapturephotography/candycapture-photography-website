import { Phone, Mail, MapPin, Heart } from 'lucide-react'

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

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Wedding Photography', href: '#services' },
    { name: 'Pre-Wedding Shoot', href: '#services' },
    { name: 'Maternity Photography', href: '#services' },
    { name: 'Baby Photography', href: '#services' },
    { name: 'Modeling Photography', href: '#services' },
    { name: 'Product Photography', href: '#services' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/candycapture_/',
    icon: InstagramIcon,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917373605380',
    icon: Phone,
  },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.png"
              alt="Candy Capture Photography"
              className="h-12 md:h-14 w-auto mb-4"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Capturing moments, creating memories. Based in Sivakasi, Tamil Nadu.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center border border-neutral-700 text-neutral-400 hover:border-candy-pink hover:text-candy-pink transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-neutral-400 hover:text-candy-pink transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-neutral-400 hover:text-candy-pink transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-candy-pink mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm leading-snug">
                  189/10 Bathrakaliamman Temple Opposite,
                  Sivakasi - 626123, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-candy-pink flex-shrink-0" />
                <a
                  href="tel:+917373605380"
                  className="text-neutral-400 hover:text-candy-pink transition-colors duration-300 text-sm"
                >
                  +91 73736 05380
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-candy-pink flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hellocandycapturephotography@gmail.com"
                  className="text-neutral-400 hover:text-candy-pink transition-colors duration-300 text-sm break-all leading-snug"
                >
                  hellocandycapture
                  photography@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} Candy Capture Photography. All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs flex items-center gap-1">
              Made with <Heart size={12} className="text-candy-pink fill-candy-pink" /> in Sivakasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
