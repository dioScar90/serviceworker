import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface NameLogoProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
}

const NameLogo = ({ className, ...props }: NameLogoProps) => {
  className ??= ''

  return (
    <span
      className={cn(`font-bold ${className}`)}
      {...props}
    >
      Service<span style={{ color: 'hsl(var(--primary))'}}>Worker</span>
    </span>
  )
}

export default NameLogo
