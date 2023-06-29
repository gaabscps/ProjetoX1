interface CardProps {
  className?: string
  content: React.ReactNode
  width?: string
  height?: string
  color?: string
  borderRadius?: string
  background?: string
  theme?: 'outline' | 'filled' | 'dotted'
  onClick?: () => void
}

export function Card({
  className,
  content,
  width,
  height,
  color,
  borderRadius,
  background,
  theme = 'filled',
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: width,
        height: height || 0,
        backgroundImage: background ? `url(${background})` : 'none',
        borderRadius: borderRadius || '10px',
        borderColor: color,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={`cardContainer card-${theme || ''} ${onClick ? 'action-icon' : ''} ${
        className || ''
      }`}
    >
      <div className='w-100 h-100'>{content}</div>
    </div>
  )
}
