'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const bilonaSteps = [
  {
    id: 1,
    title: 'Fresh A2 Milk Collection',
    description: 'We start with fresh milk from grass-fed Gir cows, known for their superior A2 protein content. The milk is collected early morning when it\'s at its purest.',
    icon: '🐄',
    details: 'Our partner farms ensure the cows graze freely on natural pastures, producing milk rich in nutrients and free from harmful chemicals.'
  },
  {
    id: 2,
    title: 'Natural Curd Formation',
    description: 'The fresh milk is gently heated and cultured using traditional starter cultures to form thick, creamy curd. This process takes 8-12 hours naturally.',
    icon: '🥛',
    details: 'We use time-tested fermentation methods that preserve beneficial probiotics and enhance the nutritional profile of the final product.'
  },
  {
    id: 3,
    title: 'Hand-Churning with Bilona',
    description: 'The curd is hand-churned using a traditional wooden churner called \'Bilona\'. This gentle process separates the butter without damaging its molecular structure.',
    icon: '🔄',
    details: 'The rhythmic churning process, done in the early morning hours, ensures the butter retains all its natural properties and aromatic compounds.'
  },
  {
    id: 4,
    title: 'Slow Fire Heating',
    description: 'The fresh butter is slowly heated in copper vessels over a wood fire. This gentle heating process transforms butter into golden, aromatic ghee.',
    icon: '🔥',
    details: 'The slow heating process allows moisture to evaporate completely while preserving the ghee\'s nutritional value and developing its characteristic nutty aroma.'
  }
];

export default function BilonaStory() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-gradient-to-br from-secondary-50 to-tertiary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            The Sacred Bilona Method
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover the ancient art of ghee-making that transforms simple milk 
            into liquid gold through time-honored traditions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Steps */}
          <div className="space-y-4">
            {bilonaSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: step.id * 0.1 }}
                viewport={{ once: true }}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-white shadow-lg border-2 border-secondary-200' 
                    : 'bg-white/50 hover:bg-white/80 border border-neutral-200'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    {/* Step Number & Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 ${
                      activeStep === step.id 
                        ? 'bg-secondary-500 text-white' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-serif text-xl font-semibold transition-colors duration-300 ${
                          activeStep === step.id ? 'text-secondary-700' : 'text-neutral-800'
                        }`}>
                          {step.title}
                        </h3>
                        <ChevronRightIcon className={`w-5 h-5 transition-all duration-300 ${
                          activeStep === step.id 
                            ? 'text-secondary-500 rotate-90' 
                            : 'text-neutral-400'
                        }`} />
                      </div>
                      
                      <p className="text-neutral-600 mt-2">
                        {step.description}
                      </p>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {activeStep === step.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-neutral-200"
                          >
                            <p className="text-sm text-neutral-500 leading-relaxed">
                              {step.details}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-white to-secondary-50 rounded-3xl shadow-2xl p-8 border border-secondary-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="text-8xl mb-6">
                    {bilonaSteps.find(step => step.id === activeStep)?.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-neutral-800 mb-4">
                    Step {activeStep}
                  </h3>
                  <h4 className="text-lg font-medium text-secondary-600 mb-4">
                    {bilonaSteps.find(step => step.id === activeStep)?.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {bilonaSteps.find(step => step.id === activeStep)?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-tertiary-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary-500 rounded-full opacity-20"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-neutral-800 mb-4">
              Experience the Difference
            </h3>
            <p className="text-neutral-600 mb-6">
              Taste the purity and richness that only traditional Bilona method can deliver. 
              Our A2 Ghee is a testament to ancient wisdom and modern quality.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-500 rounded-lg hover:bg-secondary-600 transition-colors duration-200">
              Try Our A2 Bilona Ghee
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
