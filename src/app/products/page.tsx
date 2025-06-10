import { products } from '@/data/products';
import Link from 'next/link';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-800 mb-4">
            Our Wellness Collection
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our complete range of authentic wellness products, each crafted with 
            traditional methods and modern quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-white">
                        {product.category === 'wellness' ? '💎' : 
                         product.category === 'ghee' ? '🥛' : '🌿'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{product.originalPrice - product.price}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-tertiary-500" />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-neutral-800 mb-2">
                  <Link href={`/products/${product.id}`} className="hover:text-primary-600 transition-colors">
                    {product.name}
                  </Link>
                </h3>
                
                <p className="text-primary-600 font-medium mb-4">
                  {product.tagline}
                </p>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-neutral-800">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-neutral-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200">
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span className="text-sm font-semibold">Add to Cart</span>
                  </button>
                </div>

                {/* Key Benefits */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our wellness experts are here to help you find the perfect products 
              for your health journey. Get personalized recommendations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
