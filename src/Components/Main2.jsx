import { ArrowUpRight } from 'lucide-react'
import jewelleryImage from '../assets/jewellery-banner.jpg'
import necklaceImage from '../assets/jewellery-detail.jpg'

function Main2() {
  return (
    <section
      id="jewellery"
      aria-labelledby="jewellery-title"
      className="relative isolate flex min-h-[700px] items-end overflow-hidden bg-[#53687d] text-white sm:min-h-[740px] lg:min-h-[780px]"
    >
      <img
        src={jewelleryImage}
        alt="A fine chain necklace worn close to the skin"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover object-[center_43%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#152738]/65 via-[#21364b]/30 to-[#1b2b3c]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101d2b]/50 via-transparent to-[#21364b]/10" />

      <div className="mx-auto grid w-full max-w-[1800px] gap-14 px-5 pb-12 pt-40 sm:px-8 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-end lg:gap-20 lg:px-10 lg:pb-16">
        <div className="max-w-[660px]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.26em] text-white/75 sm:text-xs">
            Heirest fine jewellery
          </p>
          <p className="max-w-[620px] text-sm font-light leading-[1.7] text-white/90 sm:text-base lg:text-lg">
            Fine jewellery has long been shaped by convention, placing the decision in everyone’s
            hands but yours. Heirest resets that standard: modern engineering, with a reverence for
            craft to create timeless pieces with total transparency.
          </p>
          <h2
            id="jewellery-title"
            className="mt-14 max-w-[610px] text-[clamp(2rem,4vw,3.55rem)] font-normal leading-[1.1] tracking-[-0.045em] sm:mt-20"
          >
            For those who choose to author what others inherit.
          </h2>
        </div>

        <a
          href="#category-necklaces"
          className="group ml-auto grid w-full max-w-[520px] grid-cols-[116px_minmax(0,1fr)] overflow-hidden rounded-sm bg-[#f6f5f2]/90 text-[#272a2c] shadow-2xl shadow-black/15 backdrop-blur-md transition duration-300 hover:bg-white sm:grid-cols-[148px_minmax(0,1fr)]"
        >
          <div className="h-full min-h-[148px] overflow-hidden bg-white sm:min-h-[170px]">
            <img
              src={necklaceImage}
              alt="A gold chain and pendant"
              loading="lazy"
              className="size-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between p-4 sm:p-5">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#747779] sm:text-[10px]">
                The signature collection
              </p>
              <h3 className="mt-2 text-sm font-medium uppercase leading-snug tracking-[0.04em] sm:text-base">
                The everyday chain
              </h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.09em] text-[#747779] sm:text-xs">
                Considered gold · Made to be yours
              </p>
            </div>
            <span className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#272a2c]/50 pb-1 text-[9px] font-medium uppercase tracking-[0.15em] sm:text-[10px]">
              Discover the design
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Main2