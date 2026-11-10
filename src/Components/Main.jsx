import { ArrowDownRight, ArrowRight } from 'lucide-react'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Main6 from './Main6'
import Main7 from './Main7'
import RevealOnScroll from './RevealOnScroll'
import heroImage from '../assets/makeup-hero.jpg'

function Main() {
  return (
    <main>
      <RevealOnScroll>
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative flex h-[100svh] min-h-[680px] items-end overflow-hidden bg-[#777b79] pb-16 pt-44 text-white sm:pb-20 lg:min-h-[740px] lg:pb-24"
        >
        <img
          src={heroImage}
          alt="A woman with a polished, natural makeup look"
          className="absolute inset-0 size-full object-cover object-[center_38%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/55" />
        <div className="absolute inset-0 bg-[#303431]/20" />

        <div className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-white/80 sm:text-xs">
              A quieter kind of beauty
            </p>
            <h1
              id="hero-title"
              className="max-w-3xl text-[clamp(2.7rem,6.5vw,5.7rem)] font-normal leading-[0.98] tracking-[-0.055em]"
            >
              Beauty, authored by you.
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/90 sm:mt-7 sm:text-xl lg:text-2xl">
              Thoughtful colour. A ritual that feels like yours.
            </p>
          </div>

          <a
            href="#categories"
            className="group inline-flex min-h-14 w-full items-center justify-between gap-10 border border-white/75 px-5 text-xs font-medium uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-white hover:text-[#242624] sm:w-fit sm:justify-center sm:px-8"
          >
            Select design
            <ArrowRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <a
          href="#categories"
          aria-label="Explore all designs"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/75 transition hover:text-white sm:flex"
        >
          All designs
          <ArrowDownRight size={14} strokeWidth={1.4} />
        </a>
        </section>
      </RevealOnScroll>

      <RevealOnScroll><Main1 /></RevealOnScroll>
      <RevealOnScroll delay={80}><Main2 /></RevealOnScroll>
      <RevealOnScroll delay={120}><Main3 /></RevealOnScroll>
      <RevealOnScroll delay={80}><Main4 /></RevealOnScroll>
      <RevealOnScroll delay={120}><Main5 /></RevealOnScroll>
      <RevealOnScroll delay={80}><Main6 /></RevealOnScroll>
      <RevealOnScroll delay={120}><Main7 /></RevealOnScroll>
    </main>
  )
}

export default Main