import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, MessageCircle } from 'lucide-react'
import ProductImage from '../components/ProductImage'

const Products = () => {
  const handleWhatsAppQuote = (productName) => {
    const message = `Hi! I'm interested in getting a quote for ${productName}. Could you please provide me with pricing and availability details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420255477?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 'moringa-powder',
      name: 'Moringa Powder',
      description: 'Premium organic Moringa leaf powder rich in nutrients and antioxidants.',
      image: '/images/image.png',
      category: 'Powder',
      rating: 4.9,
      reviews: 128,
      features: ['High Protein', 'Rich in Vitamins', 'Antioxidant Rich', '100% Natural'],
      price: 'Premium Quality',
      availability: 'In Stock'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-primary-600">Products</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Discover our premium Moringa Powder, carefully sourced and 
              processed to maintain the highest quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Premium Moringa Powder
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our flagship product crafted with care, ensuring you receive the purest and 
              most beneficial Moringa powder available.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-lg hover:shadow-xl"
              >
                {/* Product Image */}
                <ProductImage 
                  product={product} 
                  className="h-64 sm:h-72 lg:h-80 xl:h-96"
                />

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-lg font-bold text-primary-600">{product.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="text-center space-y-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn-primary text-center flex items-center justify-center text-sm sm:text-base w-full"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button
                      onClick={() => handleWhatsAppQuote(product.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Quote on WhatsApp
                    </button>
                    <a
                      href="mailto:krishivglobal@gmail.com"
                      className="btn-secondary text-center flex items-center justify-center text-sm sm:text-base w-full"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
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
              Why Choose Our Products?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Every product is backed by our commitment to quality, sustainability, and your wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "100% Natural",
                description: "Pure, unprocessed Moringa products with no artificial additives or preservatives."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Rigorous quality control and testing to ensure the highest standards."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Sustainable",
                description: "Eco-friendly practices and sustainable sourcing methods for a greener future."
              }
            ].map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Experience Premium Moringa?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              Explore our products and discover the incredible benefits of nature's most 
              nutritious plant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default Products
