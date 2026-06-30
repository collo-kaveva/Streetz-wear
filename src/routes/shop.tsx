import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products } from '@/lib/data/products'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import Button from '@/components/ui/button'

export const Route = createFileRoute('/shop')({
  component: Shop,
})

function Shop() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const itemsPerPage = 8

  const brands = [...new Set(products.map(p => p.brand))]
  const categories = [...new Set(products.map(p => p.category))]

  const filteredProducts = products.filter(product => {
    const matchesSearch = `${product.name} ${product.brand} ${product.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    if (!matchesSearch) return false
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false
    if (selectedPriceRange === 'low' && product.price > 100) return false
    if (selectedPriceRange === 'medium' && (product.price < 100 || product.price > 200)) return false
    if (selectedPriceRange === 'high' && product.price < 200) return false
    return true
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedBrands, selectedCategories, selectedPriceRange, searchTerm])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedPriceRange('all')
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              Shop All Products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </motion.div>

          <div className="mb-8 rounded-[1.5rem] border border-border/60 bg-card/70 p-4 shadow-sm">
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by product, brand, or style"
              className="w-full rounded-full border border-border/60 bg-background px-5 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="flex gap-8">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </button>

            {/* Sidebar Filters */}
            <aside
              className={`${
                isFilterOpen ? 'block' : 'hidden'
              } md:block w-64 flex-shrink-0 space-y-8`}
            >
              <div className="sticky top-24 space-y-8">
                {/* Clear Filters */}
                {(selectedBrands.length > 0 || selectedCategories.length > 0 || selectedPriceRange !== 'all') && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </Button>
                )}

                {/* Brand Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Brand</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="rounded border-border/60 bg-background text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="rounded border-border/60 bg-background text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'low', label: 'Under $100' },
                      { value: 'medium', label: '$100 - $200' },
                      { value: 'high', label: 'Over $200' },
                    ].map(range => (
                      <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPriceRange === range.value}
                          onChange={() => setSelectedPriceRange(range.value)}
                          className="border-border/60 bg-background text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="col-span-1"
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-full border text-sm font-semibold transition-colors ${
                        currentPage === page
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border/60 bg-background text-foreground hover:border-primary'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No products found matching your filters.
                  </p>
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
