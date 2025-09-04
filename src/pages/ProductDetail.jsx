import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, CheckCircle, Package, Truck, Shield, Leaf, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const ProductDetail = () => {
  const { id: _id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)

  const handleWhatsAppQuote = (productName) => {
    const message = `Hi! I'm interested in getting a quote for ${productName}. Could you please provide me with pricing and availability details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420255477?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    description: 'Known as the "Miracle Tree", moringa is among the most nutrient-dense plants in the world. Our premium Moringa powder is carefully sourced from certified organic farms and processed using state-of-the-art facilities to maintain maximum nutritional value.',
    longDescription: `Moringa Oleifera, often called the "Miracle Tree" or "Tree of Life", is one of the most nutrient-dense plants on Earth. Our premium Moringa powder is harvested from young, tender leaves at the peak of their nutritional content, then carefully dried and ground to preserve all the essential nutrients.

This superfood contains all 9 essential amino acids, making it a complete protein source. It's rich in vitamins A, C, E, K, and B-complex, along with essential minerals like calcium, iron, potassium, and magnesium. The powder also contains powerful antioxidants that help combat free radicals and support overall health.

Our Moringa powder is sourced from certified organic farms in India, ensuring the highest quality and purity standards. Every batch undergoes rigorous testing for quality, safety, and nutritional content.`,
    images: [
      {
        id: 1,
        src: '/images/moringa-powder-jar.png',
        alt: 'Premium Moringa Powder in glass jar with fresh leaves',
        title: 'Premium Moringa Powder'
      },
      {
        id: 2,
        src: '/images/moringa-powder-bowls.png',
        alt: 'Moringa powder and dried leaves in glass bowls',
        title: 'Natural Processing'
      },
      {
        id: 3,
        src: '/images/moringa-tea-cups.png',
        alt: 'Moringa tea in cups with fresh mint leaves',
        title: 'Perfect for Tea'
      },
      {
        id: 4,
        src: '/images/moringa-products-collection.png',
        alt: 'Moringa oil, fresh leaves, and dried seeds collection',
        title: 'Complete Moringa Range'
      }
    ],
    category: 'Powder',
    rating: 4.9,
    reviews: 128,
    features: [
      'All 9 Essential Amino Acids',
      'Rich in Vitamins A, C, E, K, B-complex',
      'High in Minerals (Calcium, Iron, Potassium)',
      'Antioxidant Rich',
      'Complete Protein Source',
      'Natural Energy Booster'
    ],
    specifications: {
      'Form': 'Fine Powder',
      'Color': 'Bright Green',
      'Taste': 'Mild, Earthy',
      'Shelf Life': '24 Months',
      'Storage': 'Store in cool, dry place',
      'Packaging': 'Food-grade containers'
    },
    benefits: [
      'Supports immune system health',
      'Promotes healthy skin and hair',
      'Boosts energy and vitality',
      'Supports digestive health',
      'Rich in antioxidants',
      'Natural detoxification support'
    ],
    usage: [
      'Add to smoothies and juices',
      'Mix with water or milk',
      'Sprinkle on salads or soups',
      'Blend into protein shakes',
      'Use in baking recipes',
      'Take as a daily supplement'
    ],
    price: 'Premium Quality',
    availability: 'In Stock',
    certifications: ['GMP', 'ISO', 'USDA', 'FSSAI', 'Organic']
  }

  if (!product) {
    return (
      <div className="pt-16 lg:pt-20">
        <div className="container-custom text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">Back to Products</Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-3 sm:py-4">
        <div className="container-custom px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg aspect-square">
                <img
                  src={product.images[selectedImage].src}
                  alt={product.images[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium text-primary-600 shadow-lg">
                  Premium Quality
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 touch-manipulation"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 touch-manipulation"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-md sm:rounded-lg aspect-square border-2 transition-all duration-300 touch-manipulation ${
                      selectedImage === index 
                        ? 'border-primary-500 ring-2 ring-primary-200' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    aria-label={`View ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-primary-500 bg-opacity-20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Image Title */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {product.images[selectedImage].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {product.images[selectedImage].alt}
                </p>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 lg:mt-0"
            >
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {product.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{product.rating}</span>
                    <span className="text-gray-500 text-sm sm:text-base">({product.reviews} reviews)</span>
                  </div>
                  <span className="text-green-600 font-medium text-sm sm:text-base">{product.availability}</span>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-xl sm:text-2xl font-bold text-primary-600">{product.price}</span>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => handleWhatsAppQuote(product.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Quote on WhatsApp
                </button>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="mailto:krishivglobal@gmail.com"
                    className="btn-primary text-center flex items-center justify-center flex-1 py-3 text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+919420255477"
                    className="btn-secondary text-center flex items-center justify-center flex-1 py-3 text-sm sm:text-base"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 sm:px-3 sm:py-1 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              About Our Moringa Powder
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-600">
              <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.longDescription}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Health Benefits
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the incredible health benefits of our premium Moringa powder
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 text-center">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              How to Use
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple and versatile ways to incorporate Moringa powder into your daily routine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {product.usage.map((usage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-lg"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 text-center">
                  {usage}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Product Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <span className="font-medium text-gray-700 text-sm sm:text-base">{key}</span>
                  <span className="text-gray-900 text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Experience Premium Moringa?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Get in touch with us to learn more about our products and start your wellness journey.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppQuote(product.name)}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center mx-auto text-sm sm:text-base touch-manipulation"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Quote on WhatsApp
              </button>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:krishivglobal@gmail.com"
                  className="btn-primary text-sm sm:text-base py-3"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+919420255477"
                  className="btn-secondary text-sm sm:text-base py-3"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
