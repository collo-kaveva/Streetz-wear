import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { getProductById, products } from '@/lib/data/products'
import { formatPrice, calculateDiscountedPrice } from '@/lib/utils'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  Star, 
  Check, 
  Minus, 
  Plus,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from 'lucide-react'
import Button from '@/components/ui/button'
import Badge from '@/components/ui/badge'
import Rating from '@/components/ui/rating'

export const Route = createFileRoute('/product/$id')({
  component: ProductDetails,
})

function ProductDetails() {
  const { id } = Route.useParams()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const discountedPrice = calculateDiscountedPrice(product.price, product.discount)
  const hasDiscount = product.discount && product.discount > 0
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handlePreviousImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + delta)))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <a href="/" className="hover:text-foreground">Home</a>
            <span>/</span>
            <a href="/shop" className="hover:text-foreground">Shop</a>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div
                className="relative aspect-square overflow-hidden rounded-3xl bg-muted cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <motion.img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300"
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  style={{
                    transformOrigin: 'center center',
                  }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-colors hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Zoom Icon */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary scale-105'
                        : 'border-border/60 hover:border-primary'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Badges */}
              <div className="flex gap-2">
                {product.newArrival && <Badge variant="new">New Arrival</Badge>}
                {product.bestSeller && <Badge variant="bestseller">Best Seller</Badge>}
                {product.featured && <Badge variant="featured">Featured</Badge>}
                {hasDiscount && <Badge variant="sale">-{product.discount}% OFF</Badge>}
              </div>

              {/* Brand & Name */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {product.brand}
                </p>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <Rating rating={product.rating} reviews={product.reviews} />
                <span className="text-sm text-muted-foreground">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                {hasDiscount ? (
                  <>
                    <span className="text-3xl font-bold text-primary">
                      {formatPrice(discountedPrice)}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground">{product.description}</p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`h-10 w-10 rounded-full border-2 transition-all ${
                          selectedColor === index
                            ? 'border-primary scale-110'
                            : 'border-border/60 hover:border-primary'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-12 w-12 rounded-full border-2 font-semibold transition-all ${
                          selectedSize === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border/60 bg-background hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border-2 border-border/60">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-accent"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-accent"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Authentic Products</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <div className="border-b border-border/60">
              <div className="flex gap-8">
                {['Description', 'Specifications', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    className="pb-4 text-lg font-semibold text-foreground border-b-2 border-primary"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Description</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Specifications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="font-semibold">{product.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted-foreground">Subcategory</span>
                  <span className="font-semibold capitalize">{product.subcategory}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/60">
                  <span className="text-muted-foreground">Stock</span>
                  <span className="font-semibold">{product.stock} units</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Customer Reviews</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-foreground">{product.rating}</div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Based on {product.reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    className="col-span-1"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
