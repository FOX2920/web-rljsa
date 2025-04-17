import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  ...props
}: OptimizedImageProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      priority={priority}
      className={cn(className)}
      sizes={fill ? "(max-width: 768px) 100vw, 50vw" : undefined}
      {...props}
    />
  )
}
