import SEO from '../components/SEO'
import { motion } from 'framer-motion'

const Landing = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you export nutraceutical raw materials and herbal powders in bulk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As a Nutraceutical Raw Material Exporter and Herbal Powders Exporter from India, we supply bulk quantities to contract manufacturers, private labels, and dietary supplement brands worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications do you comply with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate with GMP and ISO standards and work with organic-compliant supply chains. Products are batch-tested for quality, safety, and regulatory compliance for international markets."
        }
      },
      {
        "@type": "Question",
        "name": "Which Moringa products do you supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Organic Moringa Capsules, Moringa Oil, Moringa Leaves, and Moringa Herbal Extracts—serving as a Moringa Oil Manufacturer in India and a trusted Moringa Leaves Supplier."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support custom formulations and private label?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As a Herbal Nutraceutical Ingredients Supplier, we support custom blends, standardized extracts, and private-label-ready formats for global brands."
        }
      }
    ]
  }

  const metaTitle = 'Nutraceutical & Herbal Products Exporter India | Krishiv Globals'
  const metaDescription = 'GMP & ISO-compliant exporter of herbal powders, moringa capsules, oils & superfoods. Bulk supply for dietary supplements and plant-based nutrition.'

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords="Nutraceutical Raw Material Exporter, Herbal Powders Export from India, Organic Superfood Supplier India, Plant-Based Ingredient Exporter, Health Supplement Exporter from India, GMP Certified Herbal Product Exporter, Organic Moringa Capsules Exporter, Moringa Oil Manufacturer India, Moringa Leaves Supplier, Moringa Herbal Extract Exporter, Superfood Powder Exporters from India, Herbal Nutraceutical Ingredients Supplier, Herbal Supplement Raw Material Supplier, Organic Herbal Powders for Supplements, Plant-Based Protein & Superfoods Supplier India, Natural Health Supplement Ingredients Exporter, Bulk Superfoods for Dietary Supplements, Ayurvedic Herbs Exporter India, Organic Ayurvedic Powders Supplier, Ashwagandha Powder Exporter India, Amla Powder Supplier for Supplements, Herbal Extracts & Powders for Nutraceuticals"
        image="/images/moringa-hero.png"
        url="/nutraceutical-herbal-exporter-india"
        type="article"
        structuredData={faqSchema}
      />

      <article className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              India’s Trusted Nutraceutical and Herbal Products Export Partner
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Positioned at the crossroads of Ayurveda, modern science, and sustainable agriculture, India has emerged as a global hub for nutraceuticals, herbal extracts, and superfoods. Krishiv Globals connects this heritage and innovation with world markets—delivering clean, potent, and compliant ingredients for health-forward brands.
            </p>
          </header>

          <section className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">About Krishiv Globals</h2>
                <p className="text-gray-700 leading-relaxed">
                  Krishiv Globals is a professional, export-focused supplier of herbal nutraceutical ingredients based in India. We specialize in sourcing, processing, and exporting Organic Herbal Powders for Supplements and standardized plant extracts. Our processes align with GMP and ISO principles, and we partner with organic-compliant farms and audited processors to deliver consistent quality. As a Health Supplement Exporter from India, we serve contract manufacturers, private labels, and distributors across North America, Europe, Middle East, and Asia-Pacific.
                </p>
                <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-1">
                  <li>GMP-driven quality systems, batch-wise documentation, and COAs</li>
                  <li>Organic-compliant supply chains and responsible sourcing</li>
                  <li>Scalable bulk export capability with robust logistics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Product Range</h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer a focused portfolio designed for nutraceutical, herbal medicine, and functional food brands. As a Plant-Based Ingredient Exporter and Superfood Powder Exporter from India, we prioritize potency, purity, and process control.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Moringa Portfolio</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Organic Moringa Capsules Exporter</li>
                      <li>Moringa Oil Manufacturer India</li>
                      <li>Moringa Leaves Supplier</li>
                      <li>Moringa Herbal Extract Exporter</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Herbal Powders & Extracts</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Organic Ayurvedic Powders Supplier</li>
                      <li>Ashwagandha Powder Exporter India</li>
                      <li>Amla Powder Supplier for Supplements</li>
                      <li>Herbal Extracts & Powders for Nutraceuticals</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Why Choose Us</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Certified Quality</h3>
                    <p className="text-gray-700">GMP-aligned systems with ISO-driven SOPs ensure repeatable quality. Certificates and COAs are provided per batch.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Sustainable & Traceable</h3>
                    <p className="text-gray-700">Ethically sourced raw materials with traceability to farms and audited processors across India.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Bulk Export Ready</h3>
                    <p className="text-gray-700">From cartons to pallets and FCL shipments, our logistics network supports on-time global delivery.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Nutraceutical Focus</h3>
                    <p className="text-gray-700">Formats for dietary supplements, herbal medicines, plant-based foods, and functional beverages.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Global Reach & Applications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our clients span nutraceutical manufacturers, herbal medicine formulators, functional food brands, and plant-based nutrition companies. As a Natural Health Supplement Ingredients Exporter, we support capsules, tablets, powders, sachets, and liquid suspensions, with ingredient grades suitable for both human wellness and specialized formulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">FAQs</h2>
                <div className="space-y-4">
                  <details className="p-5 rounded-xl border border-gray-200">
                    <summary className="font-semibold cursor-pointer">Do you export nutraceutical raw materials and herbal powders in bulk?</summary>
                    <p className="text-gray-700 mt-2">Yes. We supply bulk quantities globally with documentation and COAs, serving private labels and contract manufacturers.</p>
                  </details>
                  <details className="p-5 rounded-xl border border-gray-200">
                    <summary className="font-semibold cursor-pointer">What certifications do you comply with?</summary>
                    <p className="text-gray-700 mt-2">We align with GMP and ISO systems and work with organic-compliant supply chains. Batch-wise testing and documentation are standard.</p>
                  </details>
                  <details className="p-5 rounded-xl border border-gray-200">
                    <summary className="font-semibold cursor-pointer">Which Moringa products do you supply?</summary>
                    <p className="text-gray-700 mt-2">Organic Moringa Capsules, cold-pressed Moringa Oil, dried Moringa Leaves, and standardized Moringa extracts.</p>
                  </details>
                  <details className="p-5 rounded-xl border border-gray-200">
                    <summary className="font-semibold cursor-pointer">Do you support custom formulations and private label?</summary>
                    <p className="text-gray-700 mt-2">Yes. We provide custom blends, standardized extracts, and private-label-ready formats as per market requirements.</p>
                  </details>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Call to Action</h2>
                <p className="text-gray-700 mb-4">Looking for a reliable Herbal Supplement Raw Material Supplier or Plant-Based Protein & Superfoods Supplier in India?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="btn-primary inline-flex items-center justify-center">Contact Us for Bulk Inquiries</a>
                  <a href="/products" className="btn-secondary inline-flex items-center justify-center">Explore Product Portfolio</a>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Facts</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>GMP-aligned, ISO-oriented processes</li>
                  <li>Export-ready documentation & COAs</li>
                  <li>Bulk-ready cartons, pallets, FCL</li>
                  <li>Ethical, traceable sourcing</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/krishiv-globals/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn</a>
                  <a href="https://www.instagram.com/krishivglobals/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61579907761759" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Facebook</a>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </article>
    </>
  )
}

export default Landing


