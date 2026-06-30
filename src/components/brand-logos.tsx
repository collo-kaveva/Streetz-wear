import { motion } from 'framer-motion'

const brands = [
  { name: 'Nike', logo: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200&q=80' },
  { name: 'Jordan', logo: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&q=80' },
  { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80' },
  { name: 'Puma', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80' },
  { name: 'New Balance', logo: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200&q=80' },
  { name: 'Converse', logo: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=200&q=80' },
  { name: 'Levi\'s', logo: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=80' },
  { name: 'Tommy Hilfiger', logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&q=80' },
]

export default function BrandLogos() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Shop by Brand
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover products from world-renowned brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex aspect-square items-center justify-center rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{brand.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
