import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHead } from '../components/PageHead'
import { productCategories, products, type ProductCategory } from '../data/products'
import './Products.css'

export function Products() {
  const [filter, setFilter] = useState<ProductCategory | 'all'>('all')
  const visible = filter === 'all' ? products : products.filter((p) => p.category === filter)

  return (
    <>
      <PageHead title="Products">
        Bridal is made to order. Ready-to-wear is cut in small runs — when it’s
        gone, it’s gone.
      </PageHead>

      <section className="products" aria-label="Product list">
        <div className="products__filters" role="group" aria-label="Filter products">
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filter === category.id}
              className={filter === category.id ? 'is-active' : undefined}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <ul className="products__grid">
          {visible.map((product) => (
            <li key={product.id} className="product">
              <div className="product__photo">
                <img src={product.src} alt={product.alt} width={1000} height={1250} loading="lazy" />
              </div>
              <div className="product__info">
                <h2>{product.name}</h2>
                <p className="product__price">{product.price}</p>
              </div>
              <p className="product__note">{product.note}</p>
              <Link className="product__ask" to="#contact">
                ask about this →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
