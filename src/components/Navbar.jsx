import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { id: 'moringa-powder', name: 'Moringa Powder', path: '/products/moringa-powder' },
    { id: 'moringa-oil', name: 'Moringa Oil', path: '/products/moringa-oil' },
    { id: 'moringa-capsules', name: 'Moringa Capsules', path: '/products/moringa-capsules' }
  ]

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between h-28 sm:h-32 lg:h-36 xl:h-40">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Krishiv Globals Logo" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`relative font-medium transition-colors duration-300 flex items-center space-x-1 ${
                        isActive(item.path) || location.pathname.startsWith('/products/')
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isProductsDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </Link>
                    {(isActive(item.path) || location.pathname.startsWith('/products/')) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      />
                    )}
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                        >
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={product.path}
                              className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                isActive(product.path)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/products" className="btn-primary">
              Explore Products
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-base ${
                            isActive(item.path) || location.pathname.startsWith('/products/')
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isProductsDropdownOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {isProductsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {products.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={product.path}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setIsProductsDropdownOpen(false)
                                    }}
                                    className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm ${
                                      isActive(product.path)
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                                    }`}
                                  >
                                    {product.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-base ${
                          isActive(item.path)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-3">
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block py-3"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
