import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Rooted in ancient South Indian traditions, Arogya Saram was born from a deep 
            reverence for the wisdom of our ancestors and a commitment to bringing authentic 
            wellness to modern families.
          </p>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-neutral-200 mb-12">
            <h2 className="font-serif text-2xl font-semibold text-neutral-800 mb-6">
              The Beginning of Our Journey
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              In the heart of South India, where ancient traditions meet modern aspirations, 
              Arogya Saram was conceived with a simple yet profound mission: to preserve and 
              share the timeless wellness practices that have nourished generations of families.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Our founders, deeply rooted in Ayurvedic traditions and modern nutritional science, 
              recognized that in our fast-paced world, families were losing touch with the pure, 
              natural products that had sustained their ancestors for centuries.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Thus began our quest to source, craft, and deliver the finest wellness products 
              using methods passed down through generations, ensuring that every family can 
              access the healing power of nature's bounty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="font-serif text-xl font-semibold text-neutral-800 mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                To bridge the gap between ancient wisdom and modern wellness by providing 
                authentic, traditionally-made products that honor our heritage while meeting 
                contemporary quality standards.
              </p>
            </div>

            <div className="bg-secondary-50 rounded-2xl p-8 border border-secondary-200">
              <h3 className="font-serif text-xl font-semibold text-neutral-800 mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                To become the most trusted name in authentic wellness products, helping 
                families across India and beyond reconnect with the natural healing 
                traditions of their ancestors.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-neutral-200 mb-12">
            <h2 className="font-serif text-2xl font-semibold text-neutral-800 mb-6">
              Our Partnership with Farm Naturelle
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We are proud to partner with Farm Naturelle, a pioneer in organic and natural 
              products, to bring you the highest quality wellness solutions. This collaboration 
              ensures that every product meets stringent quality standards while maintaining 
              the authenticity of traditional preparation methods.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Together, we work directly with farmers and artisans who have preserved ancient 
              techniques, ensuring fair trade practices and sustainable sourcing that benefits 
              both communities and consumers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-tertiary-50 to-primary-50 rounded-2xl p-8 lg:p-12 border border-tertiary-200 mb-12">
            <h2 className="font-serif text-2xl font-semibold text-neutral-800 mb-6">
              Our Commitment to Quality
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">100% Natural</h4>
                <p className="text-sm text-neutral-600">
                  No artificial additives, preservatives, or chemicals
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🏺</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Traditional Methods</h4>
                <p className="text-sm text-neutral-600">
                  Time-honored techniques preserved for generations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tertiary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🔬</span>
                </div>
                <h4 className="font-semibold text-neutral-800 mb-2">Lab Tested</h4>
                <p className="text-sm text-neutral-600">
                  Rigorous quality testing for purity and potency
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-neutral-200">
            <h2 className="font-serif text-2xl font-semibold text-neutral-800 mb-6">
              Looking Forward
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              As we continue to grow, our commitment remains unchanged: to honor the wisdom 
              of our ancestors while embracing the possibilities of tomorrow. We are constantly 
              researching and developing new products that stay true to traditional methods 
              while meeting the evolving needs of modern families.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Join us on this journey of wellness, tradition, and authentic living. Together, 
              we can create a healthier, more connected world—one family at a time.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Discover our collection of authentic wellness products and experience 
              the difference that tradition and quality make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                Shop Our Products
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
