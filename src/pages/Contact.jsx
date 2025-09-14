import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Globe, Building, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in learning more about Krishiv Globals' Moringa products. Could you please provide me with more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919420255477?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Address",
      content: "Plot no 40A Bhandara Road, Nagpur 440008, Maharashtra, India"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "+91 9420255477"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      content: "krishivglobal@gmail.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      content: "www.krishivglobals.com"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Krishiv Globals",
    "description": "Get in touch with Krishiv Globals for premium Moringa products and business partnerships",
    "url": "https://krishivglobals.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Krishiv Globals",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot no 40A Bhandara Road",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440008",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-94202-55477",
        "contactType": "customer service",
        "email": "krishivglobal@gmail.com",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  }

  return (
    <>
      <SEO
        title="Contact Krishiv Globals - Premium Moringa Products | Get Quote & Business Partnership"
        description="Contact Krishiv Globals for premium Moringa products, business partnerships, and wholesale inquiries. Located in Nagpur, Maharashtra. Call +91-94202-55477 or email krishivglobal@gmail.com"
        keywords="Contact Krishiv Globals, Moringa products contact, business partnership, wholesale Moringa, bulk Moringa orders, Moringa exporter contact, Nagpur Maharashtra, +91-94202-55477, krishivglobal@gmail.com"
        image="/images/moringa-hero.png"
        url="/contact"
        structuredData={contactStructuredData}
      />
      <div className="pt-28 sm:pt-32 lg:pt-36 xl:pt-40">
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
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              We'd love to hear from you. Reach out to us for any inquiries about our 
              premium Moringa products or business partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-600" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.123456789!2d79.123456789!3d21.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzM0LjQiTiA3OcKwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krishiv Globals Location"
                  className="w-full h-80 sm:h-96 lg:h-[400px]"
                ></iframe>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Visit Our Facility
                </h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  We welcome business partners and clients to visit our facility in Nagpur, 
                  Maharashtra. Please contact us in advance to schedule a visit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              Join our global network of satisfied customers and experience the 
              premium quality of Krishiv Globals Moringa products.
            </p>
            <div className="flex flex-col gap-4 justify-center">
              <button
                onClick={handleWhatsAppContact}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center mx-auto text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:krishivglobal@gmail.com"
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Send Email
                </a>
                <a
                  href="tel:+919420255477"
                  className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact
