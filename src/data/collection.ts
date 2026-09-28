export type CollectionSlide = {
  id: string
  src: string
  alt: string
  caption: string
}

export const collectionSlides: CollectionSlide[] = [
  {
    id: 'veil-light',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80',
    alt: 'Bride in a soft white gown standing in warm natural light',
    caption: 'Muslin sample, late afternoon light',
  },
  {
    id: 'aisle-stride',
    src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1800&q=80',
    alt: 'Close detail of a wedding dress bodice and fabric',
    caption: 'Bodice detail — still pinning this one',
  },
  {
    id: 'afterparty',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1800&q=80',
    alt: 'Wedding party moment with flowing dresses outdoors',
    caption: 'Outdoor try-on, wind did half the work',
  },
  {
    id: 'silk-turn',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80',
    alt: 'Couple portrait highlighting a bridal gown silhouette',
    caption: 'Silhouette check before the hem',
  },
  {
    id: 'fitting-energy',
    src: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1800&q=80',
    alt: 'Fashion model in an elegant light dress with confident pose',
    caption: 'Ready-to-wear energy I’m dragging into bridal',
  },
]

export const heroImage = {
  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
  alt: 'Bride in a soft white gown standing in warm natural light',
}

export type CompletedDress = {
  id: string
  src: string
  alt: string
  name: string
  detail: string
}

export const completedDresses: CompletedDress[] = [
  {
    id: 'maya',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride in a flowing gown in golden light',
    name: 'Maya',
    detail: 'Silk column, June',
  },
  {
    id: 'jess',
    src: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80',
    alt: 'Lace bodice detail on a finished wedding dress',
    name: 'Jess',
    detail: 'Lace corset + full skirt, May',
  },
  {
    id: 'ana',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride and partner portrait showing a bias-cut gown',
    name: 'Ana',
    detail: 'Bias cut with a short train, April',
  },
  {
    id: 'priya',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Couple celebrating outdoors under falling petals',
    name: 'Priya',
    detail: 'Two-look day: gown + slip, March',
  },
  {
    id: 'rae',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride in a lace gown by a lake at sunset',
    name: 'Rae',
    detail: 'Open-back lace, February',
  },
  {
    id: 'lou',
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    alt: 'Woman in a simple white dress in window light',
    name: 'Lou',
    detail: 'Courthouse shift, January',
  },
]

export const aboutImage = {
  src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80',
  alt: 'Hands pinning fabric on a dress form in a studio',
}
