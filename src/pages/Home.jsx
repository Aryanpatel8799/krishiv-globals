import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Star,
  Factory,
  Shield,
  Leaf,
  Truck,
  Users,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Farm-to-Export Expertise",
      description: "Direct partnerships with certified moringa farmers ensuring quality from source to shipment."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Certified Quality",
      description: "GMP, ISO, USDA, FSSAI, and organic certifications for international compliance."
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainability Focus",
      description: "Ethically sourced, eco-friendly manufacturing for a greener planet."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Global Export Expertise",
      description: "Strong logistics network with on-time delivery worldwide."
    }
  ]

  // const stats = [
  //   { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
  //   { number: "1000+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
  //   { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
  //   { number: "100%", label: "Quality Assured", icon: <Shield className="w-8 h-8" /> }
  // ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Leading Global Wellness Exporter
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Nature</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Nations</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                India-based export-oriented firm specializing in premium nutraceutical and herbal products, 
                with a strong focus on Moringa Oleifera.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/products" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto group">
                  Explore Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Learn More
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">Trusted by 1000+ clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span className="text-xs sm:text-sm text-gray-600">ISO Certified</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/images/moringa-hero.png"
                    alt="Premium Moringa Products - Fresh leaves, powder, and capsules"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-900">Quality Assured</div>
                      <div className="text-xs text-gray-600">GMP Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Unique Strengths
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the global wellness market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white scale-75 sm:scale-100">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-600 scale-75 sm:scale-100">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-1 sm:mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Overview Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                About Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Leading the Global Wellness Market
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                With over 15 years of experience, Krishiv Globals has established itself as a trusted partner 
                in the international wellness industry. Our commitment to quality, sustainability, and customer 
                satisfaction drives everything we do.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg">GMP, ISO, USDA, FSSAI certified</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg">Direct farm partnerships</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg">Sustainable practices</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-300">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="text-center text-primary-600">
                    <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-medium">Quality Standards</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mt-6 sm:mt-8">
                  <div className="text-center text-blue-600">
                    <Globe className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-medium">Global Reach</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center text-green-600">
                    <Leaf className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-medium">Sustainability</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center mt-6 sm:mt-8">
                  <div className="text-center text-orange-600">
                    <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-medium">Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-gray-900 to-slate-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Experience Premium Moringa?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Join thousands of satisfied customers worldwide who trust Krishiv Globals 
              for their wellness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/products" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto group">
                Explore Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors duration-300 w-full sm:w-auto">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default Home
