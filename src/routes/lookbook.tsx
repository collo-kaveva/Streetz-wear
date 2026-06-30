import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'
import Button from '@/components/ui/button'

export const Route = createFileRoute('/lookbook')({
  component: Lookbook,
})

function Lookbook() {
  const looks = [
    {
      id: 1,
      title: 'Urban Explorer',
      description: 'Bold street style for the modern city dweller',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      products: ['Nike Air Max', 'Black Hoodie', 'Cargo Pants']
    },
    {
      id: 2,
      title: 'Minimalist Chic',
      description: 'Clean lines and neutral tones for effortless style',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      products: ['White Sneakers', 'Beige Jacket', 'Slim Fit Jeans']
    },
    {
      id: 3,
      title: 'Athleisure Luxe',
      description: 'Performance meets fashion in this sporty ensemble',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
      products: ['Running Shoes', 'Track Jacket', 'Athletic Shorts']
    },
    {
      id: 4,
      title: 'Retro Revival',
      description: 'Vintage-inspired pieces with a modern twist',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
      products: ['Vintage Tee', 'High-top Sneakers', 'Denim Jacket']
    },
    {
      id: 5,
      title: 'Street Art',
      description: 'Expressive style for the creative soul',
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
      products: ['Graphic Tee', 'Distressed Jeans', 'Canvas Shoes']
    },
    {
      id: 6,
      title: 'Night Out',
      description: 'Sophisticated looks for evening adventures',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      products: ['Leather Jacket', 'Black Boots', 'Dark Denim']
    },
    {
      id: 7,
      title: 'Summer Vibes',
      description: 'Light and breezy for warm weather days',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
      products: ['Linen Shirt', 'Shorts', 'Sandals']
    },
    {
      id: 8,
      title: 'Winter Warmth',
      description: 'Cozy layers for cold weather comfort',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
      products: ['Puffer Jacket', 'Wool Sweater', 'Winter Boots']
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
            alt="Lookbook Hero"
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
                  Lookbook
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Get inspired by our curated style collections
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Style Inspiration</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our curated looks featuring the latest trends and timeless classics. Each outfit is carefully styled to help you discover new ways to wear your favorite pieces.
            </p>
          </motion.div>
        </div>

        {/* Looks Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid gap-8 md:grid-cols-2">
            {looks.map((look, index) => (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-border/60 bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <Button className="w-full gap-2">
                      <Instagram className="h-5 w-5" />
                      Shop This Look
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{look.title}</h3>
                  <p className="text-muted-foreground mb-4">{look.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {look.products.map((product, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Create Your Own Look</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Browse our collection and mix and match to find your perfect style
              </p>
              <Button size="lg" className="gap-2">
                Shop Now
                <Heart className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
