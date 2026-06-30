import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="About Hero"
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
                  Our Story
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Built for modern street culture
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We blend clean silhouettes, premium fabrics, and a bold point of view to create pieces that feel timeless and current. Our mission is to provide premium streetwear that empowers self-expression and celebrates individuality.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold text-foreground">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Target,
                  title: 'Quality First',
                  description: 'We never compromise on quality. Every piece is crafted with premium materials and attention to detail.',
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'We believe in building a community that celebrates diversity and self-expression through fashion.',
                },
                {
                  icon: Award,
                  title: 'Innovation',
                  description: 'We constantly push boundaries to bring you fresh designs and cutting-edge streetwear.',
                },
                {
                  icon: Globe,
                  title: 'Sustainability',
                  description: 'We are committed to reducing our environmental impact through responsible sourcing and production.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-border/60 bg-card p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Our Story"
                className="rounded-3xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, Streetwear started with a simple vision: to create a destination where sneaker enthusiasts and fashion-forward individuals could find premium pieces that reflect their unique style.
              </p>
              <p className="text-lg text-muted-foreground">
                What began as a small online store has grown into a global community of fashion lovers. We've curated partnerships with the world's most iconic brands while maintaining our commitment to quality and authenticity.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to push boundaries, bringing you the latest drops and timeless classics that define modern street culture.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              {[
                { value: '100+', label: 'Premium Brands' },
                { value: '500+', label: 'Products' },
                { value: '50K+', label: 'Happy Customers' },
                { value: '25+', label: 'Countries' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-lg text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-foreground">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The passionate people behind Streetwear
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Alex Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                name: 'Sarah Chen',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
              },
              {
                name: 'Mike Rodriguez',
                role: 'Head of Curation',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
