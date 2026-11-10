import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Choosing a ring felt personal from the very beginning. The finished piece is beautifully made, and seeing it come together made the moment even more special.',
    name: 'A HEIREST CUSTOMER',
    detail: 'ENGAGEMENT RING',
  },
  {
    quote:
      'The earrings are just the right balance of timeless and easy to wear. The details are lovely, and they catch the light beautifully.',
    name: 'A HEIREST CUSTOMER',
    detail: 'GOLD DIAMOND EARRINGS',
  },
  {
    quote:
      'I designed a piece I’ll reach for every day. The process felt thoughtful and the quality is even better than I expected.',
    name: 'A HEIREST CUSTOMER',
    detail: 'CUSTOM JEWELLERY',
  },
  {
    quote:
      'A beautiful keepsake, made with so much care. It feels special without being too precious to wear every day.',
    name: 'A HEIREST CUSTOMER',
    detail: 'FINE JEWELLERY',
  },
]

function Main6() {
  const carouselRef = useRef(null)

  function scrollReviews(direction) {
    const carousel = carouselRef.current
    if (!carousel) return

    const card = carousel.querySelector('[data-review-card]')
    const distance = card ? card.getBoundingClientRect().width + 24 : carousel.clientWidth
    carousel.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="overflow-hidden bg-[#fbfaf8] px-5 py-16 text-[#191817] sm:px-8 sm:py-20 lg:px-11 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-10 flex items-center justify-between gap-5 sm:mb-14">
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-[#927967] sm:text-[10px]">
              Notes from our community
            </p>
            <h2
              id="testimonials-title"
              className="text-[clamp(2rem,4.7vw,4rem)] font-normal leading-[1.05] tracking-[-0.055em]"
            >
              The experience, as told by you
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => scrollReviews(-1)}
              className="grid size-10 place-items-center border border-[#26231f]/25 text-[#26231f] transition hover:border-[#26231f] hover:bg-[#26231f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927967] sm:size-12"
            >
              <ChevronLeft size={19} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => scrollReviews(1)}
              className="grid size-10 place-items-center border border-[#26231f]/25 text-[#26231f] transition hover:border-[#26231f] hover:bg-[#26231f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927967] sm:size-12"
            >
              <ChevronRight size={19} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.detail}
              data-review-card
              className="flex min-h-[330px] w-[88%] shrink-0 snap-start flex-col border-t border-[#26231f]/20 pt-5 sm:min-h-[350px] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <p className="mb-7 text-[9px] uppercase tracking-[0.18em] text-[#a08770]">
                Customer story <span className="px-1 text-[#c8beb4]">/</span> 0{index + 1}
              </p>
              <blockquote className="max-w-[35rem] text-[15px] leading-[1.75] tracking-[-0.015em] text-[#302d29] sm:text-base">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-auto pt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.13em]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#8b857e]">
                  Verified customer · {testimonial.detail}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span aria-label="5 out of 5 stars" className="flex gap-0.5 text-[#87bde2]">
                    {Array.from({ length: 5 }, (_, star) => (
                      <span key={star} aria-hidden="true" className="text-lg leading-none">
                        ★
                      </span>
                    ))}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.15em]">5 stars</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main6
