import { useEffect, type ReactNode } from 'react'
import { SITE_NAME, SITE_TAGLINE } from '../data/site'
import './PageHead.css'

const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`

type PageHeadProps = {
  title: string
  children?: ReactNode
}

export function PageHead({ title, children }: PageHeadProps) {
  useEffect(() => {
    document.title = `${title} — ${SITE_NAME}`
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])

  return (
    <header className="page-head">
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </header>
  )
}
