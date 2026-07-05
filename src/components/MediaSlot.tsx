interface MediaSlotProps {
  media?: string
  poster?: string
  title: string
  label: string
  className?: string
}

export function MediaSlot({ media, poster, title, label, className }: MediaSlotProps) {
  if (media?.endsWith('.mp4')) {
    return (
      <div className={`h-full w-full overflow-hidden ${className ?? ''}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source src={media} type="video/mp4" />
        </video>
      </div>
    )
  }

  if (
    media?.endsWith('.gif') ||
    media?.endsWith('.webp') ||
    media?.endsWith('.png') ||
    media?.endsWith('.jpg')
  ) {
    return (
      <div className={`h-full w-full overflow-hidden ${className ?? ''}`}>
        <img
          src={media}
          loading="lazy"
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden bg-surface text-center ${className ?? ''}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, var(--color-line) 0, var(--color-line) 1px, transparent 1px, transparent 12px)',
      }}
    >
      <span className="font-medium">{title}</span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}
