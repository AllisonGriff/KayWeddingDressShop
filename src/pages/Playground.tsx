import { PageHead } from '../components/PageHead'
import './Playground.css'

export function Playground() {
  return (
    <>
      <PageHead title="Design Playground">
        A space to explore new layouts, colors, and ideas for the site.
      </PageHead>

      <section className="playground" aria-label="Design playground">
        <p>New ideas start here.</p>
      </section>
    </>
  )
}
