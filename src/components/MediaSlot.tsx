import { useEffect, useRef } from 'react'

interface MediaSlotProps {
  media?: string
  poster?: string
  title: string
  label: string
  className?: string
}

// Plays only while on screen (pauses off-screen) so stacked cards don't all
// decode at once. Shows the poster image until it plays.
function LazyVideo({ media, poster, className }: { media: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`h-full w-full overflow-hidden ${className ?? ''}`}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src={media} type="video/mp4" />
      </video>
    </div>
  )
}

export function MediaSlot({ media, poster, title, label, className }: MediaSlotProps) {
  if (media?.endsWith('.mp4')) {
    return <LazyVideo media={media} poster={poster} className={className} />
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
