import { PageHead } from '../components/PageHead'
import './Playground.css'

export function Playground() {
  return (
    <>
      <PageHead title="Design Playground">
        A space to explore new layouts, colors, and ideas for the site.
      </PageHead>

      <section className="playground" aria-label="Design playground">
        <p className="playground__intro">New ideas start here.</p>
        <article className="playground__color-study">
          <div className="playground__swatch" aria-hidden="true" />
          <div>
            <p className="playground__eyebrow">Accent color</p>
            <h2>Soft lavender</h2>
            <p className="playground__description">
              A gentle floral note alongside warm paper and bronze.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
