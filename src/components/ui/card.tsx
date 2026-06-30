import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-3xl border border-border/60 bg-card p-6 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-lg hover:scale-105',
        className
      )}
      whileHover={hover ? { y: -8 } : undefined}
    >
      {children}
    </motion.div>
  )
}
