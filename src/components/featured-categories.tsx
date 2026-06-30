import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    to: '/shop?gender=men',
  },
  {
    name: 'Women\'s Fashion',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    to: '/shop?gender=women',
  },
  {
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80',
    to: '/sneakers',
  },
  {
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    to: '/shop?filter=new',
  },
  {
    name: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80',
    to: '/shop?category=streetwear',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    to: '/accessories',
  },
  {
    name: 'Luxury Collection',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    to: '/shop?filter=luxury',
  },
  {
    name: 'Best Sellers',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    to: '/shop?filter=bestsellers',
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our curated collections
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category, index) => (
            <Link key={category.name} to={category.to}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    className="text-xl font-bold text-white"
                    whileHover={{ x: 5 }}
                  >
                    {category.name}
                  </motion.h3>
                  <motion.div
                    className="mt-2 flex items-center gap-1 text-white/80"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
