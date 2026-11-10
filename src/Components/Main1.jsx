import { ArrowUpRight } from 'lucide-react'
import makeupImage from '../assets/makeup-routine.jpg'
import essentialsImage from '../assets/makeup-essentials.jpg'
import toolsImage from '../assets/makeup-tools.jpg'

const collections = [
  {
    id: 'makeup',
    number: '01',
    label: 'The colour edit',
    title: 'Makeup, made personal',
    description: [
      'Thoughtful colour for your everyday look.',
      'Effortless essentials, always you.',
    ],
    image: makeupImage,
    alt: 'Curated neutral eyeshadow, blush, and lip colour',
    href: '#configurations',
  },
  {
    id: 'skincare',
    number: '02',
    label: 'Your daily ritual',
    title: 'Skin, softly cared for',
    description: [
      'A few considered steps, a little time for you.',
      'Gentle formulas meet daily comfort.',
    ],
    image: essentialsImage,
    alt: 'A collection of makeup and complexion essentials',
    href: '#configurations',
  },
  {
    id: 'essentials',
    number: '03',
    label: 'The finishing touch',
    title: 'Tools of the trade',
    description: [
      'Soft brushes and little beauty companions.',
      'Made for a lovely, easy routine.',
    ],
    image: toolsImage,
    alt: 'Makeup brushes, lipstick, and beauty essentials',
    href: '#configurations',
  },
]

function Main1() {
  return (
    <section
      id="beauty-edit"
      aria-labelledby="beauty-edit-title"
      className="bg-[#faf8f5] px-5 py-20 text-[#282522] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#9b786d] sm:text-xs">
            Beauty, at your own pace
          </p>
          <h2
            id="beauty-edit-title"
            className="text-[clamp(2.15rem,5vw,4.35rem)] font-normal leading-[1.05] tracking-[-0.045em]"
          >
            Time-honoured beauty,
            <span className="block font-serif italic">authored by you.</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-9">
          {collections.map((collection) => (
            <article key={collection.id} id={collection.id} className="group min-w-0">
              <a
                href={collection.href}
                aria-label={`Discover ${collection.title}`}
                className="relative block aspect-[1.14] overflow-hidden bg-[#eee8e2]"
              >
                <img
                  src={collection.image}
                  alt={collection.alt}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 bg-[#faf8f5]/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[#4e423c] backdrop-blur-sm">
                  {collection.label}
                </span>
                <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-[#faf8f5]/90 text-[#39302c] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white">
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </span>
              </a>

              <div className="flex items-start justify-between gap-4 border-b border-[#282522]/15 py-5">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#9b786d]">
                    {collection.number} <span className="px-1 text-[#c5b7ad]">/</span>{' '}
                    {collection.label}
                  </p>
                  <h3 className="text-xl font-normal tracking-[-0.025em] sm:text-[22px]">
                    {collection.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#716a63] sm:text-[13px]">
                    {collection.description.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="about" className="mt-16 border-t border-[#282522]/15 pt-5 sm:mt-20">
          <p className="text-center text-[9px] uppercase tracking-[0.22em] text-[#8b7b70]">
            Thoughtfully chosen · Made for your everyday · Always your own
          </p>
        </div>
      </div>
    </section>
  )
}

export default Main1
