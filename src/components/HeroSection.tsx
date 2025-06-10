'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-secondary-100/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight"
            >
              Arogya Saram
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl lg:text-2xl text-primary-600 font-medium"
            >
              South India&apos;s Heritage of Health
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0"
            >
              Discover authentic wellness products rooted in ancient South Indian traditions. 
              From pure A2 Bilona Ghee to Himalayan Shilajit, we bring you nature&apos;s finest
              gifts, crafted with time-honored methods for modern wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
              >
                Explore Our Wellness Collection
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-neutral-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span>Traditionally Made</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tertiary-500 rounded-full"></div>
                <span>Family Trusted</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Hero Image - Replace with your actual image */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero/wellness-lifestyle.jpg"
                  alt="Traditional South Indian Wellness Products"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl shadow-2xl" style={{ display: 'none' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl text-white">🌿</span>
                      </div>
                      <p className="text-neutral-600 font-medium">
                        Pure • Natural • Traditional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-tertiary-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
