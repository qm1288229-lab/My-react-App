import { ArrowUpRight } from 'lucide-react'
import earringsImage from '../assets/jewellery-piece.jpg'
import ringsImage from '../assets/jewellery-rings.jpg'
import necklacesImage from '../assets/jewellery-detail.jpg'
import pearlsImage from '../assets/jewellery-bracelet.jpg'

const categories = [
  { name: 'Earrings', image: earringsImage, alt: 'Sculptural gold hoop earrings', href: '#design-studio' },
  { name: 'Rings', image: ringsImage, alt: 'A sparkling gold and diamond ring', href: '#category-rings' },
  { name: 'Necklaces', image: necklacesImage, alt: 'Delicate layered gold necklaces', href: '#category-necklaces' },
  { name: 'Pearls & keepsakes', image: pearlsImage, alt: 'A pearl necklace nestled in its jewellery box', href: '#jewellery' },
]

function Main3() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="bg-[#faf9f7] px-5 py-16 text-[#282522] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-[#927967] sm:text-[10px]">
              Find your forever piece
            </p>
            <h2
              id="categories-title"
              className="text-[clamp(2rem,4vw,3rem)] font-normal leading-tight tracking-[-0.045em]"
            >
              Start with a category
            </h2>
          </div>
          <span className="hidden pb-1 text-[9px] uppercase tracking-[0.17em] text-[#827a72] sm:block">
            The Heirest collection
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-3">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative block aspect-[0.78] overflow-hidden bg-[#e8e3dd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#927967]"
            >
              <img
                src={category.image}
                alt={category.alt}
                loading="lazy"
                className={`size-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] ${
                  index === 0 ? 'object-[center_45%]' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5 transition duration-300 group-hover:from-black/70" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 text-white sm:inset-x-5 sm:bottom-5 lg:inset-x-4 lg:bottom-4 xl:inset-x-5 xl:bottom-5">
                <div>
                  <p className="mb-1.5 text-[8px] uppercase tracking-[0.2em] text-white/75 sm:text-[9px]">
                    0{index + 1} <span className="px-1 text-white/50">/</span> Shop by
                  </p>
                  <h3 className="text-base font-normal tracking-[-0.02em] sm:text-xl lg:text-lg xl:text-xl">
                    {category.name}
                  </h3>
                </div>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/60 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#282522] sm:size-9">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main3