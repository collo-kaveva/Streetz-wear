import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { getClothing, products } from '@/lib/data/products'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'

export const Route = createFileRoute('/clothing')({
  component: Clothing,
})

function Clothing() {
  const clothing = getClothing()
  
  const hoodies = clothing.filter(p => p.subcategory === 'hoodies')
  const jackets = clothing.filter(p => p.subcategory === 'jackets')
  const pants = clothing.filter(p => p.subcategory === 'pants' || p.subcategory === 'jeans')
  const tshirts = clothing.filter(p => p.subcategory === 'tshirts')
  const sweaters = clothing.filter(p => p.subcategory === 'sweaters')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Banner */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=80"
            alt="Clothing Hero"
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
                  Premium Clothing
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Elevate your style with our curated collection
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hoodies Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Hoodies</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Comfort meets style
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {hoodies.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* Jackets Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">Jackets</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Outerwear that stands out
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {jackets.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pants & Jeans Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Pants & Jeans</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Perfect fit for every occasion
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {pants.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* T-Shirts Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">T-Shirts</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Essential basics and statement pieces
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {tshirts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sweaters Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Sweaters</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Cozy layers for cooler days
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {sweaters.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* All Clothing */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground">All Clothing</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Browse our complete clothing collection
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {clothing.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
