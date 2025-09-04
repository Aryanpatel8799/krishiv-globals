import { motion } from 'framer-motion'
import { Leaf, Package, Droplets } from 'lucide-react'

const ProductImage = ({ product, className = "" }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Powder': return <Package className="w-full h-full" />
      case 'Leaves': return <Leaf className="w-full h-full" />
      case 'Oil': return <Droplets className="w-full h-full" />
      default: return <Leaf className="w-full h-full" />
    }
  }

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'Powder': return 'Moringa Powder'
      case 'Leaves': return 'Moringa Leaves'
      case 'Oil': return 'Moringa Oil'
      default: return 'Moringa Product'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-t-2xl  ${className}`}
    >
      {/* Actual Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
        loading="lazy"
      />
      
      {/* Fallback Placeholder (hidden by default) */}
      <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-primary-100 to-accent-100" style={{ display: 'none' }}>
        <div className="text-primary-600 text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4">
            {getCategoryIcon(product.category)}
          </div>
          <p className="text-sm sm:text-base font-medium text-primary-700">
            {getCategoryLabel(product.category)}
          </p>
        </div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-primary-600 border border-primary-200 shadow-sm">
        {product.category}
      </div>
      
      {/* Availability Badge */}
      <div className="absolute top-3 left-3 bg-green-100 px-2 py-1 rounded-full text-xs font-medium text-green-700 border border-green-200">
        {product.availability || 'In Stock'}
      </div>
    </motion.div>
  )
}

export default ProductImage
