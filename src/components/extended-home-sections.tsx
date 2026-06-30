import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ProductCard from '@/components/product-card'
import { products } from '@/lib/data/products'

const brandCards = [
  { name: 'Nike', slug: 'nike', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=900&q=80' },
  { name: 'Jordan', slug: 'jordan', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80' },
  { name: 'Adidas', slug: 'adidas', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&q=80' },
  { name: 'New Balance', slug: 'new-balance', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80' },
  { name: 'Puma', slug: 'puma', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80' },
  { name: 'Converse', slug: 'converse', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80' },
]

export default function ExtendedHomeSections() {
  const featuredSneakers = products.filter((product) => product.category === 'sneakers' && product.featured).slice(0, 4)
  const featuredClothing = products.filter((product) => product.category === 'clothing' && product.featured).slice(0, 4)
  const accessories = products.filter((product) => product.category === 'accessories' && product.featured).slice(0, 4)
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 6)
  const newArrivals = products.filter((product) => product.newArrival).slice(0, 6)

  return (
    <section className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-muted/80 via-background to-muted/30 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Featured Sneakers</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Elevated essentials for every rotation</h2>
              </div>
              <Link to="/sneakers" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Browse sneakers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredSneakers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Featured Clothing</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Layer up in refined everyday staples</h2>
              </div>
              <Link to="/clothing" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Explore clothing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredClothing.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Accessories</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">The finishing touches that define the fit</h2>
              </div>
              <Link to="/accessories" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Shop accessories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {accessories.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Best Sellers</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Most loved pieces this season</h2>
              </div>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                View all best sellers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-2">
              {bestSellers.map((product) => (
                <div key={product.id} className="min-w-[280px] flex-1">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">New Arrivals</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Fresh drops curated for your next edit</h2>
              </div>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                See what’s new <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-foreground via-foreground/90 to-primary/80 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:p-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Shop by Brand
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl">Curated collections from your favorite labels</h2>
              </div>
              <Link to="/brands" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-foreground/80">
                Discover brands <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {brandCards.map((brand) => (
                <Link
                  key={brand.name}
                  to="/brands"
                  search={{}}
                  hash={brand.slug}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10"
                >
                  <img src={brand.image} alt={brand.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{brand.name}</h3>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
