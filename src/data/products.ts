export type ProductCategory = 'bridal' | 'ready-to-wear'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  price: string
  note: string
  src: string
  alt: string
}

export const productCategories: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'ready-to-wear', label: 'Ready-to-wear' },
]

export const products: Product[] = [
  {
    id: 'the-muslin',
    name: 'The Muslin',
    category: 'bridal',
    price: 'From $2,400',
    note: 'Column gown, open back, made to measure.',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    alt: 'Bride in a soft white column gown in natural light',
  },
  {
    id: 'pin-bodice',
    name: 'Pin Bodice',
    category: 'bridal',
    price: 'From $1,850',
    note: 'Structured corset top — pair it with anything.',
    src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=80',
    alt: 'Close detail of a lace wedding dress bodice',
  },
  {
    id: 'afterparty-slip',
    name: 'Afterparty Slip',
    category: 'bridal',
    price: 'From $980',
    note: 'The second look. Short, silk, dance-ready.',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Wedding party outdoors with flowing dresses',
  },
  {
    id: 'silk-turn',
    name: 'Silk Turn',
    category: 'bridal',
    price: 'From $3,100',
    note: 'Bias-cut skirt with a train that behaves.',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    alt: 'Couple portrait showing a bias-cut bridal gown',
  },
  {
    id: 'rack-dress',
    name: 'Rack Dress',
    category: 'ready-to-wear',
    price: '$340',
    note: 'The one that started it. Cut in small runs.',
    src: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1000&q=80',
    alt: 'Model in a light dress with a confident pose',
  },
  {
    id: 'window-shift',
    name: 'Window Shift',
    category: 'ready-to-wear',
    price: '$280',
    note: 'Easy white shift for rehearsal dinners and Tuesdays.',
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80',
    alt: 'Woman in a white dress standing in window light',
  },
]
