import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Lang } from '../i18n'
import type { Localized } from '../types'

// Only one demo player can be open at a time: opening one broadcasts an event
// that closes any other that's open.
const OPEN_EVENT = 'projectvideo:open'

interface ProjectVideoProps {
  media: string
  poster?: string
  title: string
  shots?: { src: string; caption: Localized }[]
  lang?: Lang
}

// Card shows a static poster + play button. Clicking opens a large player so the
// on-screen text is readable. Nothing autoplays, so the page stays smooth.
export function ProjectVideo({ media, poster, title, shots = [], lang = 'en' }: ProjectVideoProps) {
  // -1 is the video; 0..n-1 select a still.
  const [shown, setShown] = useState(-1)
  const [open, setOpen] = useState(false)
  const id = useId()

  // close this player if another one opens
  useEffect(() => {
    const onOtherOpen = (e: Event) => {
      if ((e as CustomEvent).detail?.id !== id) setOpen(false)
    }
    window.addEventListener(OPEN_EVENT, onOtherOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOtherOpen)
  }, [id])

  const openPlayer = () => {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { id } }))
    setShown(-1)
    setOpen(true)
  }

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
        onClick={openPlayer}
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

      {open && createPortal(
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[95vh] flex-col items-center gap-3"
          >
            {shown === -1 ? (
              /* eslint-disable-next-line jsx-a11y/media-has-caption */
              <video
                src={media}
                poster={poster}
                autoPlay
                loop
                controls
                playsInline
                className="h-auto max-h-[80vh] w-auto max-w-[97vw] rounded-[12px] border border-line shadow-2xl"
              />
            ) : (
              <figure className="flex flex-col items-center gap-2">
                <img
                  src={shots[shown].src}
                  alt={shots[shown].caption[lang]}
                  className="h-auto max-h-[78vh] w-auto max-w-[97vw] rounded-[12px] border border-line shadow-2xl"
                />
                <figcaption className="max-w-[70ch] text-center font-mono text-xs text-muted">
                  {shots[shown].caption[lang]}
                </figcaption>
              </figure>
            )}

            {shots.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setShown(-1)}
                  className={`rounded-[8px] border px-3 py-2 font-mono text-[11px] transition-colors ${
                    shown === -1 ? 'border-accent text-accent' : 'border-line text-muted hover:text-ink'
                  }`}
                >
                  demo
                </button>
                {shots.map((shot, i) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setShown(i)}
                    aria-label={shot.caption[lang]}
                    className={`overflow-hidden rounded-[8px] border transition-colors ${
                      shown === i ? 'border-accent' : 'border-line hover:border-line-2'
                    }`}
                  >
                    <img src={shot.src} alt="" loading="lazy" className="h-14 w-20 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="fixed right-4 top-4 z-[121] grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-xl text-ink transition-colors hover:text-accent"
          >
            &times;
          </button>
        </div>,
        document.body,
      )}
    </>
  )
}
