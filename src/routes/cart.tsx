import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'
import { products } from '@/lib/data/products'
import { formatPrice } from '@/lib/utils'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  const cartItems = products.slice(0, 3)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Cart</p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Your curated bag</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Review your selections and continue to checkout with confidence.</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-border/60 bg-card p-5 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center">
                  <img src={item.images[0]} alt={item.name} className="h-28 w-full rounded-[1rem] object-cover sm:w-28" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{item.brand}</p>
                    <h2 className="mt-1 text-xl font-semibold text-foreground">{item.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{item.category} • {item.sizes[0]}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <span className="text-lg font-semibold text-foreground">{formatPrice(item.price)}</span>
                    <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Order summary</h2>
                  <p className="text-sm text-muted-foreground">Secure checkout in minutes</p>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-border/60 pt-4 text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <Button size="lg" className="mt-8 w-full gap-2">
                Proceed to checkout <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
