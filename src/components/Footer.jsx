import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Award, Shield, Clock, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/contact' }
    ],
    products: [
      { name: 'Moringa Powder', path: '/products/moringa-powder' },
      { name: 'Moringa Oil', path: '/products/moringa-oil' },
      { name: 'Moringa Capsules', path: '/products/moringa-capsules' },
      { name: 'All Products', path: '/products' }
    ],
    certifications: [
      { name: 'GMP Certified', icon: <Shield className="w-4 h-4" /> },
      { name: 'ISO Certified', icon: <Award className="w-4 h-4" /> },
      { name: 'USDA Organic', icon: <Award className="w-4 h-4" /> },
      { name: 'FSSAI Approved', icon: <Shield className="w-4 h-4" /> }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/krishiv-globals' },
    { name: 'X (Twitter)', icon: '🐦', url: 'https://x.com/krishivglobals' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/krishivglobals' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/krishivglobals' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Krishiv Globals Logo" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                India-based export-oriented firm specializing in premium nutraceutical and herbal products, 
                with a strong focus on Moringa Oleifera. From Nature to Nations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-300 block">
                      Plot no 40A Bhandara Road,<br />
                      Nagpur 440008, Maharashtra, India
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="tel:+919420255477" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
                    +91 94202 55477
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a href="mailto:krishivglobal@gmail.com" className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
                    krishivglobal@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">www.krishivglobals.com</span>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">Certifications</h3>
              <div className="space-y-3 mb-8">
                {footerLinks.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary-400">
                      {cert.icon}
                    </div>
                    <span className="text-sm text-gray-300">{cert.name}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h4 className="text-base font-semibold mb-3 text-white">Quick Contact</h4>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/919420255477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri: 9AM-6PM IST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media & Newsletter */}
          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950/80 backdrop-blur-sm border-t border-gray-800 py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <div className="text-sm text-gray-400">
              © {currentYear} Krishiv Globals. All rights reserved.
            </div>
           
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
