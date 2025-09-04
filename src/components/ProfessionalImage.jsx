import { motion } from 'framer-motion'

const ProfessionalImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = false,
  placeholderIcon = null,
  placeholderText = "",
  overlay = false,
  overlayText = ""
}) => {
  if (placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden rounded-2xl ${className}`}
      >
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="text-primary-600 text-center">
            {placeholderIcon && (
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-primary-500">
                {placeholderIcon}
              </div>
            )}
            <p className="text-sm sm:text-base font-medium text-primary-700">
              {placeholderText}
            </p>
          </div>
        </div>
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">{overlayText}</p>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{overlayText}</p>
        </div>
      )}
    </motion.div>
  )
}

export default ProfessionalImage
