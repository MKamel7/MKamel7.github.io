import { useEffect, useState } from 'react'

interface ProjectVideoProps {
  media: string
  poster?: string
  title: string
}

// Card shows a static poster + play button. Clicking opens a large player so the
// on-screen text is readable. Nothing autoplays, so the page stays smooth.
export function ProjectVideo({ media, poster, title }: ProjectVideoProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title} demo`}
        className="group relative block h-full w-full cursor-pointer overflow-hidden bg-surface"
      >
        {poster ? (
          <img src={poster} alt={title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-surface" />
        )}
        <span className="absolute inset-0 grid place-items-center bg-gradient-to-t from-black/55 to-black/10 transition-colors group-hover:from-black/65">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-bg shadow-xl transition-transform duration-200 group-hover:scale-110 md:h-20 md:w-20">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
        <span className="pointer-events-none absolute bottom-3 left-4 font-mono text-[11px] tracking-wide text-ink/85">
          click to play &middot; enlarge
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-2 backdrop-blur-sm md:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo`}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={media}
            poster={poster}
            autoPlay
            loop
            controls
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="h-auto max-h-[95vh] w-auto max-w-[97vw] rounded-[12px] border border-line shadow-2xl"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="fixed right-4 top-4 z-[121] grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-xl text-ink transition-colors hover:text-accent"
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}
