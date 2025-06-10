import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const navigation = {
  products: [
    { name: 'Pure Himalayan Shilajit', href: '/products/shilajit-pure' },
    { name: 'A2 Bilona Ghee', href: '/products/a2-ghee-bilona' },
    { name: 'Natural Stevia Powder', href: '/products/stevia-natural' },
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Wellness Journal', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  support: [
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Track Your Order', href: '/track' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.43a5.493 5.493 0 00-1.987 1.292A5.493 5.493 0 00.43 5.036c-.226.484-.348 1.058-.382 2.005C.013 7.989 0 8.396 0 12.017s.013 4.028.048 4.976c.034.947.156 1.521.382 2.005a5.493 5.493 0 001.292 1.987 5.493 5.493 0 001.987 1.292c.484.226 1.058.348 2.005.382 4.948.035 5.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.005-.382a5.493 5.493 0 001.987-1.292 5.493 5.493 0 001.292-1.987c.226-.484.348-1.058.382-2.005.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.382-2.005A5.493 5.493 0 0019.778.43c-.484-.226-1.058-.348-2.005-.382C16.825.013 16.418 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.849.07.3.012.921.166 1.532.276.611.11 1.147.256 1.532.276.385.02.72.166.72.166s.146.335.166.72c.02.385.166.921.276 1.532.11.611.264 1.232.276 1.532.012 1.265.07 1.645.07 4.849s-.058 3.584-.07 4.849c-.012.3-.166.921-.276 1.532-.11.611-.256 1.147-.276 1.532-.02.385-.166.72-.166.72s-.335.146-.72.166c-.385.02-.921.166-1.532.276-.611.11-1.232.264-1.532.276-1.265.012-1.645.07-4.849.07s-3.584-.058-4.849-.07c-.3-.012-.921-.166-1.532-.276-.611-.11-1.147-.256-1.532-.276-.385-.02-.72-.166-.72-.166s-.146-.335-.166-.72c-.02-.385-.166-.921-.276-1.532-.11-.611-.264-1.232-.276-1.532-.012-1.265-.07-1.645-.07-4.849s.058-3.584.07-4.849c.012-.3.166-.921.276-1.532.11-.611.256-1.147.276-1.532.02-.385.166-.72.166-.72s.335-.146.72-.166c.385-.02.921-.166 1.532-.276.611-.11 1.232-.264 1.532-.276 1.265-.012 1.645-.07 4.849-.07z"
            clipRule="evenodd"
          />
          <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-serif text-2xl font-semibold text-white">
                Arogya Saram
              </span>
            </div>
            <p className="text-sm leading-6 text-neutral-300">
              Rooted in South Indian tradition, we bring you authentic wellness products 
              crafted with ancient wisdom for modern health. Pure, natural, and trusted 
              by families across India.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-neutral-400 hover:text-neutral-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2">
                    <EnvelopeIcon className="h-4 w-4 text-neutral-400" />
                    <span className="text-sm text-neutral-300">hello@arogyasaram.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <PhoneIcon className="h-4 w-4 text-neutral-400" />
                    <span className="text-sm text-neutral-300">+91 98765 43210</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPinIcon className="h-4 w-4 text-neutral-400 mt-0.5" />
                    <span className="text-sm text-neutral-300">
                      Chennai, Tamil Nadu<br />India
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-neutral-400">
              &copy; 2024 Arogya Saram. All rights reserved. Crafted with love for your wellness.
            </p>
            <p className="mt-4 sm:mt-0 text-xs leading-5 text-neutral-400">
              Certified Organic • Traditionally Made • Family Trusted
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
