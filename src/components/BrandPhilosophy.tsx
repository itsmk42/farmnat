'use client';

import { motion } from 'framer-motion';
import { HeartIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const philosophies = [
  {
    icon: HeartIcon,
    title: 'Rooted in Tradition',
    description: 'Every product honors ancient South Indian wellness practices, passed down through generations of wisdom and care.',
    color: 'primary'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Uncompromising Purity',
    description: 'We source only the finest natural ingredients, ensuring every product meets the highest standards of quality and authenticity.',
    color: 'secondary'
  },
  {
    icon: SparklesIcon,
    title: 'For Your Family\'s Well-being',
    description: 'Crafted with love and care, our products are designed to nourish and support the health of your entire family.',
    color: 'tertiary'
  }
];

export default function BrandPhilosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Built on the foundation of ancient wisdom and modern quality, 
            our philosophy guides everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophies.map((philosophy, index) => {
            const IconComponent = philosophy.icon;
            const colorClasses = {
              primary: {
                bg: 'bg-primary-100',
                icon: 'text-primary-600',
                border: 'border-primary-200'
              },
              secondary: {
                bg: 'bg-secondary-100',
                icon: 'text-secondary-600',
                border: 'border-secondary-200'
              },
              tertiary: {
                bg: 'bg-tertiary-100',
                icon: 'text-tertiary-600',
                border: 'border-tertiary-200'
              }
            };

            const colors = colorClasses[philosophy.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colors.border} group`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-neutral-800 mb-4">
                  {philosophy.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {philosophy.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-2 h-2 ${colors.bg} rounded-full opacity-50`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-neutral-800 mb-4">
              A Promise to Your Family
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              At Arogya Saram, we understand that wellness is not just about products—it's about trust, 
              tradition, and the promise of purity. Every jar of ghee, every gram of Shilajit, and every 
              packet of Stevia carries with it our commitment to your family's health and happiness.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tertiary-500 rounded-full"></div>
                <span>Family Approved</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
