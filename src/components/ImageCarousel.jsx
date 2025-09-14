import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react'

const ImageCarousel = ({ images, title = "Our Business Gallery", showTitle = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const imageRefs = useRef({})

  // Image preloading
  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true)
      const loadPromises = images.map((image, index) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, index]))
            resolve()
          }
          img.onerror = () => resolve() // Continue even if image fails to load
          img.src = image.src
        })
      })
      
      await Promise.all(loadPromises)
      setIsLoading(false)
    }

    preloadImages()
  }, [images])

  // Auto-play functionality
  useEffect(() => {
    if (isLoading) return // Don't start auto-play until images are loaded
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length, isLoading])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const openModal = (index) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Explore our facilities, products, and the journey from nature to nations
              </p>
              {isLoading && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Preparing images...</span>
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-7xl mx-auto"
          >
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white">
              <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
                {/* Loading State */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <Loader2 className="w-8 h-8 sm:w-12 sm:h-12 text-primary-600 animate-spin mx-auto mb-4" />
                      <p className="text-sm sm:text-base text-gray-600">Loading images...</p>
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {!isLoading && (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => openModal(currentIndex)}
                    >
                      <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-contain bg-gray-50"
                        loading="eager"
                        onLoad={() => {
                          // Image loaded successfully
                        }}
                        onError={() => {
                          console.error(`Failed to load image: ${images[currentIndex].src}`)
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm font-medium text-gray-900">Click to enlarge</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Arrows */}
                {/* <button
                  onClick={goToPrevious}
                  className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 z-10 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 z-10 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                </button> */}

                {/* Image Counter */}
                {/* <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </div> */}

                {/* Image Title Overlay */}
                {/* {images[currentIndex].title && (
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-3 rounded-lg backdrop-blur-sm max-w-xs">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium">{images[currentIndex].title}</h3>
                  </div>
                )} */}
              </div>
            </div>

            {/* Thumbnail Navigation */}
         
          </motion.div>
        </div>
      </section>

      {/* Modal for Full-Screen View */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <img
                src={images[modalImageIndex].src}
                alt={images[modalImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg bg-gray-900"
              />
              
              {images[modalImageIndex].title && (
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                  <h3 className="text-lg font-medium">{images[modalImageIndex].title}</h3>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageCarousel
