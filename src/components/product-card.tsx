import { Product } from '@/lib/data/products'
import { formatPrice, calculateDiscountedPrice, cn } from '@/lib/utils'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import Rating from './ui/rating'
import Badge from './ui/badge'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const discountedPrice = calculateDiscountedPrice(product.price, product.discount)
  const hasDiscount = product.discount && product.discount > 0

  return (
    <motion.div
      className={cn('group relative', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/product/$id" params={{ id: product.id }}>
        <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/5]">
          {/* Product Image */}
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />

          {/* Badges */}
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {product.newArrival && <Badge variant="new">New</Badge>}
            {product.bestSeller && <Badge variant="bestseller">Best Seller</Badge>}
            {product.featured && <Badge variant="featured">Featured</Badge>}
            {hasDiscount && <Badge variant="sale">-{product.discount}%</Badge>}
          </div>

          {/* Quick Actions */}
          <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <motion.button
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{product.brand}</p>
            <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="font-bold text-primary">{formatPrice(discountedPrice)}</span>
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-bold text-primary">{formatPrice(product.price)}</span>
          )}
        </div>

        <Rating rating={product.rating} reviews={product.reviews} />
      </div>
    </motion.div>
  )
}
