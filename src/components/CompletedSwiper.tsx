import { useCallback, useEffect, useRef, useState } from 'react'
import { completedDresses } from '../data/collection'
import './CompletedSwiper.css'

export function CompletedSwiper() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setAtStart(track.scrollLeft <= 4)
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="swiper" aria-labelledby="swiper-title">
      <div className="swiper__head">
        <div>
          <h2 id="swiper-title">Finished dresses</h2>
          <p>Real people, real days. Swipe through.</p>
        </div>
        <div className="swiper__controls">
          <button type="button" onClick={() => scroll(-1)} disabled={atStart} aria-label="Scroll back">
            back
          </button>
          <button type="button" onClick={() => scroll(1)} disabled={atEnd} aria-label="Scroll forward">
            next
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="swiper__track"
        onScroll={updateEdges}
        tabIndex={0}
        aria-label="Finished dress photos"
      >
        {completedDresses.map((dress) => (
          <li key={dress.id} className="swiper__item">
            <figure>
              <img src={dress.src} alt={dress.alt} width={900} height={1125} loading="lazy" />
              <figcaption>
                <strong>{dress.name}</strong>
                <span>{dress.detail}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
