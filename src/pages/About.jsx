import { motion } from 'framer-motion'
import { Target, Eye, Users, Globe, Award, Leaf, TrendingUp, Heart, Factory, Truck, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every product and service we deliver."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrity",
      description: "Building trust through transparency and ethical business practices."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our processes and product quality."
    }
  ]

  const strengths = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Farm-to-Export Expertise",
      description: "Direct partnerships with certified moringa farmers ensuring quality from source to shipment."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Quality",
      description: "GMP, ISO, USDA, FSSAI, and organic certifications for international compliance."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainability Focus",
      description: "Ethically sourced, eco-friendly manufacturing for a greener planet."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Global Export Expertise",
      description: "Strong logistics network with on-time delivery worldwide."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Consistent Supply Chain",
      description: "Reliable sourcing from trusted Indian farms with stable quality."
    }
  ]

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Krishiv Globals",
    "description": "Learn about Krishiv Globals - Leading global exporter of premium Moringa products with 2+ years experience",
    "url": "https://krishivglobals.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Krishiv Globals",
      "foundingDate": "2024",
      "description": "Leading global exporter of premium Moringa products with international certifications",
      "numberOfEmployees": "50-100",
      "areaServed": "Worldwide"
    }
  }

  return (
    <>
      <SEO
        title="About Krishiv Globals - Leading Global Moringa Exporter | 2+ Years Experience"
        description="Learn about Krishiv Globals - Leading global exporter of premium Moringa products with 2+ years experience, serving 5+ countries with GMP, ISO, USDA certifications."
        keywords="About Krishiv Globals, Moringa exporter, global wellness trade, 2 years experience, GMP certified, ISO certified, USDA organic, sustainable agriculture, premium Moringa products, international certifications"
        image="/images/moringa-hero.png"
        url="/about"
        structuredData={aboutStructuredData}
      />
      <div className="pt-28 sm:pt-32 lg:pt-36 xl:pt-40">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-primary-600">Krishiv Globals</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              An India-based export-oriented firm specializing in premium nutraceutical and herbal products, 
              with a strong focus on Moringa Oleifera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 lg:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver natural, safe, and sustainable nutraceuticals globally while bridging India's 
                    ancient herbal wealth with modern international wellness markets.
                  </p>
                </div>
                <div className="bg-accent-50 rounded-2xl p-6 border border-accent-100">
                  <h3 className="text-xl font-semibold text-accent-800 mb-3">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a trusted partner in global wellness trade, recognized for quality, sustainability, 
                    and innovation in natural health products.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 lg:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Founded in 2024, Krishiv Globals has been at the forefront of the global 
                  wellness trade, specializing in premium Moringa products. What started as a 
                  small family business has grown into an internationally recognized leader 
                  in sustainable agriculture and wellness exports.
                </p>
                <p>
                  Our journey began with a simple mission: to bring the incredible health 
                  benefits of Moringa to people worldwide while maintaining the highest 
                  standards of quality and sustainability.
                </p>
                <p>
                  Today, we serve customers in over 5+ countries, maintaining our commitment 
                  to excellence, innovation, and environmental responsibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Strengths */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Unique Strengths (USP)
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              What sets us apart in the global wellness market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-200 card-hover shadow-lg"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600">
                    {strength.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {strength.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 lg:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Commitment to Sustainability
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  All our products are ethically sourced and produced under strict guidelines to ensure 
                  consistency, safety, and excellence, while also contributing to a greener, healthier planet.
                </p>
                <p>
                  We believe in responsible business practices that benefit not only our customers but 
                  also the environment and the communities we work with.
                </p>
                <p>
                  From farm to export, every step of our process is designed with sustainability in mind, 
                  ensuring that we leave a positive impact on the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative px-4 lg:px-0"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12" />, label: "Global Reach", value: "5+ Countries" },
                    { icon: <Award className="w-10 h-10 sm:w-12 sm:h-12" />, label: "Certifications", value: "GMP, ISO, USDA" },
                    { icon: <Leaf className="w-10 h-10 sm:w-12 sm:h-12" />, label: "Products", value: "100% Natural" },
                    { icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />, label: "Growth", value: "2+ Years" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-primary-600 mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">{stat.label}</div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              The principles that guide our business decisions and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary-200 card-hover shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              We welcome collaborations with international buyers, distributors, and wellness brands. 
              From Nature to Nations – Let's cultivate wellness together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary-50 rounded-lg p-4">
                <h3 className="font-semibold text-primary-800 mb-2">Flexible Order Sizes</h3>
                <p className="text-sm text-gray-600">From small samples to bulk orders</p>
              </div>
              <div className="bg-accent-50 rounded-lg p-4">
                <h3 className="font-semibold text-accent-800 mb-2">Competitive Pricing</h3>
                <p className="text-sm text-gray-600">Best value for premium quality</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Tailored Logistics</h3>
                <p className="text-sm text-gray-600">Customized shipping solutions</p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-base sm:text-lg px-8 py-4">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default About
