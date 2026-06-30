import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import ProductCard from './product-card'
import { getClothing } from '@/lib/data/products'
import Button from './ui/button'

export default function FeaturedClothing() {
  const clothing = getClothing().slice(0, 8)

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
              Featured Clothing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Premium styles for every occasion
            </p>
          </div>
          <Link to="/clothing">
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {clothing.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className="col-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
