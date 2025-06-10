'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'The Ancient Wisdom of Ayurveda: Understanding Doshas in Modern Life',
    excerpt: 'Discover how the three doshas - Vata, Pitta, and Kapha - can guide your wellness journey and help you achieve perfect balance in today\'s fast-paced world.',
    category: 'Ayurveda & Tradition',
    readTime: '8 min read',
    publishDate: '2024-01-15',
    image: '/images/blog/ayurveda-doshas.jpg',
    author: 'Dr. Priya Sharma'
  },
  {
    id: 2,
    title: '5 Traditional South Indian Recipes Enhanced with A2 Ghee',
    excerpt: 'Explore authentic South Indian recipes that showcase the rich flavor and nutritional benefits of traditional A2 Bilona Ghee in everyday cooking.',
    category: 'Recipes',
    readTime: '6 min read',
    publishDate: '2024-01-12',
    image: '/images/blog/south-indian-recipes.jpg',
    author: 'Chef Lakshmi Menon'
  },
  {
    id: 3,
    title: 'Shilajit: The Mountain Gold That Transforms Your Energy',
    excerpt: 'Uncover the science behind Shilajit\'s powerful effects on energy, stamina, and overall vitality. Learn how this ancient remedy fits into modern wellness.',
    category: 'Ingredient Spotlight',
    readTime: '10 min read',
    publishDate: '2024-01-10',
    image: '/images/blog/shilajit-benefits.jpg',
    author: 'Dr. Rajesh Kumar'
  }
];

export default function WellnessJournal() {
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
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Wellness Journal
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore ancient wisdom, modern science, and practical tips for a healthier, 
            more balanced life through our curated wellness content.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              {/* Featured Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                {/* Placeholder for blog image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-white">
                        {post.category === 'Ayurveda & Tradition' ? '🕉️' : 
                         post.category === 'Recipes' ? '🍽️' : '💎'}
                      </span>
                    </div>
                    <p className="text-neutral-600 font-medium text-sm">
                      {post.category}
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/blog/${post.id}`}
                    className="bg-white text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Read Article
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-neutral-800 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-200">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500">
                    By {post.author}
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Categories & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['All Articles', 'Ayurveda & Tradition', 'Recipes', 'Ingredient Spotlight', 'Healthy Living'].map((category) => (
              <Link
                key={category}
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-colors duration-200"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Explore All Articles
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
              Stay Connected to Wellness
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get weekly wellness tips, traditional recipes, and exclusive insights 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe anytime. Your wellness journey starts here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
