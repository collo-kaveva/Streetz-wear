import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingProps {
  rating: number
  reviews?: number
  className?: string
  showCount?: boolean
}

export default function Rating({ rating, reviews, className, showCount = true }: RatingProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      {showCount && reviews && (
        <span className="text-sm text-muted-foreground">({reviews})</span>
      )}
    </div>
  )
}
