import { motion } from 'framer-motion'
import Button from './ui/button'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="Newsletter"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Join the Streetwear Community
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Subscribe to our newsletter for exclusive drops, early access, and special offers.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border-0 bg-white/10 px-12 py-4 text-white placeholder:text-gray-400 backdrop-blur-sm focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Subscribe
            </Button>
          </motion.form>

          <p className="mt-4 text-sm text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
