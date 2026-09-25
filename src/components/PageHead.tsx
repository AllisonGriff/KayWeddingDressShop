import { useEffect, type ReactNode } from 'react'
import './PageHead.css'

const DEFAULT_TITLE = 'Kay — clothes, and the white ones'

type PageHeadProps = {
  title: string
  children?: ReactNode
}

export function PageHead({ title, children }: PageHeadProps) {
  useEffect(() => {
    document.title = `${title} — Kay`
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
