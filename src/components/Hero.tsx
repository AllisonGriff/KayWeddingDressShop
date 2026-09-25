import { Link } from 'react-router-dom'
import { heroImage } from '../data/collection'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__photo">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          width={2000}
          height={1333}
          fetchPriority="high"
        />
      </div>

      <div className="hero__slab">
        <p className="hero__brand">Kay</p>
        <h1 className="hero__headline">I make clothes. Now I’m making the white ones.</h1>
        <p className="hero__lead">
          Street pieces with spine — branching into wedding dresses without
          losing the attitude.
        </p>
        <Link className="link-arrow" to="/looks">
          see the dresses →
        </Link>
      </div>
    </section>
  )
}
