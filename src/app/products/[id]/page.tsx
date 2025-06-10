import { notFound } from 'next/navigation';
import { getProductById } from '@/data/products';
import { ShoppingBagIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <span>/</span>
          <span className="text-neutral-800">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl text-white">
                      {product.category === 'wellness' ? '💎' : 
                       product.category === 'ghee' ? '🥛' : '🌿'}
                    </span>
                  </div>
                  <p className="text-neutral-600 font-medium">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-neutral-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-neutral-600 hover:text-red-500 transition-colors">
                    <HeartIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                    <ShareIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-800 mb-2">
                {product.name}
              </h1>
              
              <p className="text-xl text-primary-600 font-medium mb-4">
                {product.tagline}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="w-5 h-5 text-tertiary-500" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">(4.9) • 127 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-neutral-800">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-neutral-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Variants */}
            {product.variants && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Size Options</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      className="p-4 border-2 border-neutral-200 rounded-lg hover:border-primary-500 transition-colors text-center"
                    >
                      <div className="font-semibold text-neutral-800">{variant.size}</div>
                      <div className="text-sm text-primary-600">₹{variant.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button className="px-3 py-2 hover:bg-neutral-100">-</button>
                  <span className="px-4 py-2 border-x border-neutral-300">1</span>
                  <button className="px-3 py-2 hover:bg-neutral-100">+</button>
                </div>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold">
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
              
              <button className="w-full bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors duration-200 font-semibold">
                Buy Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-neutral-200">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <div className="text-sm font-medium text-neutral-800">Free Shipping</div>
                <div className="text-xs text-neutral-600">On orders over ₹500</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-sm font-medium text-neutral-800">Secure Payment</div>
                <div className="text-xs text-neutral-600">100% Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">↩️</div>
                <div className="text-sm font-medium text-neutral-800">Easy Returns</div>
                <div className="text-xs text-neutral-600">30-day policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <nav className="flex space-x-8">
              {['Description', 'Traditional Method', 'Benefits', 'How to Use', 'Ingredients'].map((tab) => (
                <button
                  key={tab}
                  className="py-4 px-1 border-b-2 border-transparent hover:border-primary-500 font-medium text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Product Description</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <h4 className="text-lg font-semibold text-neutral-800 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span className="text-neutral-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Traditional Method</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {product.traditionalMethod}
                </p>

                <h4 className="text-lg font-semibold text-neutral-800 mb-3">How to Use</h4>
                <ol className="space-y-2">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary-500 font-semibold">{index + 1}.</span>
                      <span className="text-neutral-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
