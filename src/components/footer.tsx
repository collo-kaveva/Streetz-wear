import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Button from './ui/button'

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-border/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay in the Loop</h3>
              <p className="mt-2 text-gray-400">
                Subscribe to our newsletter for exclusive offers and early access to new drops.
              </p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border-0 bg-white/10 px-6 py-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-6">
              STREETWEAR
            </h3>
            <p className="text-gray-400 mb-6">
              Your destination for premium sneakers, clothing, and accessories from the world's most iconic brands.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                whileHover={{ scale: 1.1 }}
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-gray-400 transition-colors hover:text-white">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/sneakers" className="text-gray-400 transition-colors hover:text-white">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="text-gray-400 transition-colors hover:text-white">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-400 transition-colors hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-400 transition-colors hover:text-white">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>123 Fashion Street<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>hello@streetwear.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Streetwear. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
