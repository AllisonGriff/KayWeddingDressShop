import { aboutImage } from '../data/collection'
import './About.css'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__copy">
          <h2 id="about-title">Hi — I’m Kay.</h2>
          <p>
            I started sewing loud clothes for friends who hated what was on the
            racks. Same hands, new brief: wedding dresses that don’t feel rented
            from someone else’s idea of romance.
          </p>
          <p>
            If you want quiet tradition, I’m probably not your girl. If you want
            something that fits like it knew you already — email me.
          </p>
        </div>

        <figure className="about__photo">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={900}
            height={1100}
            loading="lazy"
          />
          <figcaption>studio mess, usually</figcaption>
        </figure>
      </div>
    </section>
  )
}
