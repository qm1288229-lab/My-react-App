import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import earringsImage from '../assets/jewellery-piece.jpg'
import ringImage from '../assets/jewellery-ring-detail.jpg'

const stories = [
  {
    number: '01',
    category: 'A personal kind of beauty',
    title: 'Made to mean something.',
    description:
      'Every piece begins with your story, then comes to life through considered details and thoughtful craft.',
    image: earringsImage,
    alt: 'Sculptural gold earrings resting on a pale stone',
    href: '#categories',
  },
  {
    number: '02',
    category: 'The art of making',
    title: 'Care in every detail.',
    description:
      'From the first idea to the final finish, discover the small decisions that make a piece feel entirely yours.',
    image: ringImage,
    alt: 'A detailed diamond ring, carefully finished in gold',
    href: '#design-studio',
  },
]

function Main7() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isVisible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="our-world"
      aria-labelledby="our-world-title"
      className="overflow-hidden bg-[#faf9f7] px-5 py-16 text-[#201e1c] sm:px-8 sm:py-20 lg:px-11 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px]">
        <div
          className={`mb-8 transition-all duration-700 ease-out sm:mb-10 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
        >
          <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-[#927967] sm:text-[10px]">
            The people, ideas &amp; details behind every piece
          </p>
          <h2
            id="our-world-title"
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal leading-[1.03] tracking-[-0.055em]"
          >
            A look into our world
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-3">
          {stories.map((story, index) => (
            <a
              key={story.number}
              href={story.href}
              className={`group relative isolate block min-h-[410px] overflow-hidden bg-[#d8d2cc] transition-all duration-700 ease-out sm:min-h-[520px] lg:min-h-[620px] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
              style={{ transitionDelay: isVisible ? `${index * 140}ms` : '0ms' }}
            >
              <img
                src={story.image}
                alt={story.alt}
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/10 to-black/5 transition-colors duration-500 group-hover:from-black/80" />

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 text-white sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
                <div className="max-w-lg">
                  <p className="mb-3 text-[8px] uppercase tracking-[0.22em] text-white/75 sm:text-[9px]">
                    {story.number} <span className="px-1 text-white/50">/</span>{' '}
                    {story.category}
                  </p>
                  <h3 className="text-2xl font-normal tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-md text-xs leading-6 text-white/85 sm:text-sm">
                    {story.description}
                  </p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/70 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#201e1c] sm:size-12">
                  <ArrowUpRight size={19} strokeWidth={1.4} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main7
