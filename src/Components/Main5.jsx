import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import ringImage from '../assets/jewellery-rings.jpg'
import ringAlternateImage from '../assets/jewellery-rings-alt.jpg'
import necklaceImage from '../assets/jewellery-banner.jpg'
import chainImage from '../assets/jewellery-detail.jpg'
import makeupImage from '../assets/makeup-essentials.jpg'
import makeupAlternateImage from '../assets/makeup-tools.jpg'

const collections = [
  {
    id: 'category-rings',
    name: 'Rings',
    description: 'Small details, made unforgettable.',
    firstImage: ringImage,
    firstAlt: 'A sparkling diamond ring on a dark background',
    secondImage: ringAlternateImage,
    secondAlt: 'A pink gemstone ring in rose gold',
    href: '#design-studio',
  },
  {
    id: 'category-necklaces',
    name: 'Necklaces & chains',
    description: 'Everyday layers with a little meaning.',
    firstImage: necklaceImage,
    firstAlt: 'A delicate necklace worn against a white blouse',
    secondImage: chainImage,
    secondAlt: 'Fine gold chains and pendants',
    href: '#design-studio',
  },
  {
    id: 'category-makeup',
    name: 'Makeup',
    description: 'Considered essentials for your own ritual.',
    firstImage: makeupImage,
    firstAlt: 'An assortment of makeup palettes and beauty essentials',
    secondImage: makeupAlternateImage,
    secondAlt: 'Makeup brushes, lipstick, and beauty tools',
    href: '#makeup',
  },
]

function CollectionCard({ collection, index }) {
  const [showAlternate, setShowAlternate] = useState(false)

  return (
    <article id={collection.id} className="group min-w-0">
      <button
        type="button"
        aria-label={`Press and hold or hover to view another ${collection.name} image`}
        onPointerDown={() => setShowAlternate(true)}
        onPointerUp={() => setShowAlternate(false)}
        onPointerCancel={() => setShowAlternate(false)}
        onPointerLeave={() => setShowAlternate(false)}
        onMouseEnter={() => setShowAlternate(true)}
        onMouseLeave={() => setShowAlternate(false)}
        onFocus={() => setShowAlternate(true)}
        onBlur={() => setShowAlternate(false)}
        className="relative block aspect-[0.94] w-full touch-manipulation overflow-hidden bg-[#f7f5f2] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a88968]"
      >
        <img
          src={collection.firstImage}
          alt={collection.firstAlt}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover transition duration-700 ease-out ${
            showAlternate ? 'scale-[1.04] opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        <img
          src={collection.secondImage}
          alt={collection.secondAlt}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover transition duration-700 ease-out ${
            showAlternate ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.2em] text-white/85 sm:left-5 sm:top-5">
          0{index + 1} <span className="px-1 text-white/60">/</span> Collection
        </span>
        <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/75 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#26231f] sm:right-5 sm:top-5">
          <ArrowUpRight size={17} strokeWidth={1.4} />
        </span>
        <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.17em] text-white/80 sm:bottom-5 sm:left-5 sm:text-[9px]">
          Hold to discover
        </span>
      </button>

      <div className="flex items-start justify-between gap-4 border-b border-[#26231f]/15 py-4 sm:py-5">
        <div>
          <h3 className="text-lg font-normal tracking-[-0.025em] text-[#26231f] sm:text-xl">
            {collection.name}
          </h3>
          <p className="mt-1.5 text-[10px] leading-relaxed text-[#827c74] sm:text-xs">
            {collection.description}
          </p>
        </div>
        <a
          href={collection.href}
          aria-label={`Explore ${collection.name}`}
          className="mt-1 inline-flex shrink-0 items-center gap-1 text-[9px] uppercase tracking-[0.15em] text-[#998875] transition-colors hover:text-[#26231f]"
        >
          Explore <ArrowUpRight size={12} />
        </a>
      </div>
    </article>
  )
}

function Main5() {
  return (
    <section
      id="configurations"
      aria-labelledby="configurations-title"
      className="bg-white px-5 py-16 text-[#161616] sm:px-8 sm:py-20 lg:px-11 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-[#927967] sm:text-[10px]">
              A little something for every day
            </p>
            <h2
              id="configurations-title"
              className="text-[clamp(2.2rem,4.7vw,4rem)] font-normal leading-[1.05] tracking-[-0.055em]"
            >
              Explore our collections
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-5 text-[#827c74] sm:text-right">
            Press and hold a photograph to see a second view.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-3">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.name} collection={collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main5
