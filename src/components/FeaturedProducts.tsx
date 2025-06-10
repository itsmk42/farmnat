'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';

export default function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Our Wellness Collection
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic wellness products, 
            each crafted with traditional methods and modern quality standards.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
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
                  {product.name}
                </h3>
                
                <p className="text-primary-600 font-medium mb-4">
                  {product.tagline}
                </p>

                <div className="flex items-center justify-between">
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
                <div className="mt-4 pt-4 border-t border-neutral-100">
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
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-primary-50 border-2 border-primary-500 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
