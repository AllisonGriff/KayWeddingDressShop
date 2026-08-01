import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { collectionSlides } from '../data/collection'
import './PhotoCarousel.css'

const AUTOPLAY_MS = 6000

export function PhotoCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const total = collectionSlides.length

  const goTo = (next: number) => {
    setIndex((next + total) % total)
  }

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, total])

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      goTo(index + (delta < 0 ? 1 : -1))
    }
    touchStartX.current = null
  }

  const active = collectionSlides[index]

  return (
    <section className="looks" id="collection" aria-labelledby="looks-title">
      <div className="looks__head">
        <h2 id="looks-title">Recent fittings &amp; first bridal tests</h2>
        <p>Nothing final. Just what’s on the rack right now.</p>
      </div>

      <div
        className="looks__deck"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setPaused(false)
          }
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="looks__frame" aria-live="polite">
          {collectionSlides.map((slide, slideIndex) => (
            <figure
              key={slide.id}
              className={`looks__slide${slideIndex === index ? ' is-active' : ''}`}
              aria-hidden={slideIndex !== index}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={1800}
                height={1200}
                loading={slideIndex === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}
        </div>

        <div className="looks__meta">
          <p className="looks__caption">{active.caption}</p>
          <div className="looks__controls">
            <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous look">
              back
            </button>
            <span aria-hidden="true">
              {index + 1} of {total}
            </span>
            <button type="button" onClick={() => goTo(index + 1)} aria-label="Next look">
              next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
