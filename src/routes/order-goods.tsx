import { createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, PackageCheck, Send } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Button from '@/components/ui/button'
import { products } from '@/lib/data/products'

export const Route = createFileRoute('/order-goods')({
  component: OrderGoods,
})

function OrderGoods() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: products[0]?.name ?? '',
    brand: 'Nike',
    size: 'M',
    color: 'Black',
    quantity: '1',
    deliveryAddress: '',
    notes: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Order Goods</p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Request your next drop with ease</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Share your preferred product details and we’ll prepare a tailored order request for you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <PackageCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Order summary</h2>
                  <p className="text-sm text-muted-foreground">A premium concierge experience from start to finish</p>
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-border/60 bg-background/70 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Selected item</span>
                  <span className="font-semibold text-foreground">{form.product}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="font-semibold text-foreground">{form.brand}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-semibold text-foreground">{form.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Color</span>
                  <span className="font-semibold text-foreground">{form.color}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Quantity</span>
                  <span className="font-semibold text-foreground">{form.quantity}</span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-muted/40 p-6 text-sm text-muted-foreground">
                We’ll review your request, confirm availability, and share delivery timelines within 24 hours.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[2rem] border border-border/60 bg-card p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              {submitted ? (
                <div className="space-y-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Your order request is confirmed</h2>
                    <p className="mt-2 text-muted-foreground">
                      Thanks, {form.name || 'there'}. We’ve received your request and will reach out shortly with availability and delivery details.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5 text-sm text-muted-foreground">
                    Reference: ORD-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                      <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Product</label>
                      <select name="product" value={form.product} onChange={handleChange} className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                        {products.slice(0, 12).map((product) => (
                          <option key={product.id} value={product.name}>
                            {product.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Brand</label>
                      <input name="brand" value={form.brand} onChange={handleChange} className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Size</label>
                      <input name="size" value={form.size} onChange={handleChange} className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Colour</label>
                      <input name="color" value={form.color} onChange={handleChange} className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Quantity</label>
                      <input type="number" name="quantity" min="1" value={form.quantity} onChange={handleChange} className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Delivery Address</label>
                    <input name="deliveryAddress" value={form.deliveryAddress} onChange={handleChange} required className="w-full rounded-full border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full resize-none rounded-[1.25rem] border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    Submit Request
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
