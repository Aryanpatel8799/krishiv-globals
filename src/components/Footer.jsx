import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ],
    products: [
      { name: 'Moringa Powder', path: '/products/moringa-powder' },
      { name: 'All Products', path: '/products' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/krishiv-globals' },
    { name: 'X (Twitter)', icon: '🐦', url: 'https://x.com/krishivglobals' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/krishivglobals' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/krishivglobals' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">Krishiv Globals</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                India-based export-oriented firm specializing in premium nutraceutical and herbal products, 
                with a strong focus on Moringa Oleifera. From Nature to Nations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">
                    Plot no 40A Bhandara Road, Nagpur 440008
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">+91 9420255477</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">krishivglobal@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-4 h-4 text-primary-400 flex-shrink-0">🌐</span>
                  <span className="text-xs sm:text-sm text-gray-300">www.krishivglobals.com</span>
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
              <h3 className="text-base sm:text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-xs sm:text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
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
              <h3 className="text-base sm:text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-xs sm:text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4 sm:py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-xs sm:text-sm text-gray-400">
              © {currentYear} Krishiv Globals. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
