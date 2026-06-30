import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { getSneakers, products } from '@/lib/data/products'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'

export const Route = createFileRoute('/sneakers')({
  component: Sneakers,
})

function Sneakers() {
  const sneakers = getSneakers()
  
  const nikeSneakers = sneakers.filter(p => p.brand === 'Nike' || p.brand === 'Jordan')
  const adidasSneakers = sneakers.filter(p => p.brand === 'Adidas')
  const newBalanceSneakers = sneakers.filter(p => p.brand === 'New Balance')
  const otherSneakers = sneakers.filter(p => 
    !['Nike', 'Jordan', 'Adidas', 'New Balance'].includes(p.brand)
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Banner */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=80"
            alt="Sneakers Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl font-bold text-white sm:text-6xl">
                  Premium Sneakers
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Discover the latest drops from Nike, Jordan, Adidas, and more
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Nike & Jordan Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Nike & Jordan</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Iconic silhouettes that changed the game
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {nikeSneakers.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* Adidas Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">Adidas</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Performance meets style
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {adidasSneakers.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* New Balance Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">New Balance</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Classic comfort, modern style
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {newBalanceSneakers.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* Other Brands Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">More Brands</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Converse, Vans, Puma, and more
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {otherSneakers.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Sneakers */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground">All Sneakers</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse our complete sneaker collection
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {sneakers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
