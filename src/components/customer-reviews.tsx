import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Rating from './ui/rating'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    review: 'Absolutely love the quality of the products! The sneakers I ordered arrived in perfect condition and the customer service was exceptional.',
    product: 'Air Jordan 1 Retro High OG',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    review: 'Best online shopping experience I\'ve had. Fast shipping, great prices, and the clothing quality exceeded my expectations.',
    product: 'Essential Hoodie',
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 4,
    review: 'The selection is amazing and the website is so easy to navigate. Will definitely be ordering again soon!',
    product: 'Adidas Samba OG',
  },
]

export default function CustomerReviews() {
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
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from real customers
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              <Rating rating={review.rating} showCount={false} />
              
              <p className="mt-4 text-muted-foreground">{review.review}</p>
              
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.product}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
