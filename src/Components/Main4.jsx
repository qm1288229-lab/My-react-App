import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const designs = {
  Necklace: [
    { name: 'Prong solitaire necklace', metal: '14k yellow gold', stone: 'White lab diamond / round / 1 ct' },
    { name: 'Everyday fine chain', metal: '14k yellow gold', stone: 'White lab diamond / round / 0.5 ct' },
    { name: 'Classic pendant necklace', metal: '18k yellow gold', stone: 'White lab diamond / oval / 1 ct' },
  ],
  Ring: [
    { name: 'Halo solitaire ring', metal: '14k yellow gold', stone: 'White lab diamond / round / 1 ct' },
    { name: 'Modern keepsake ring', metal: '18k rose gold', stone: 'White lab diamond / oval / 0.8 ct' },
    { name: 'Classic diamond ring', metal: '14k white gold', stone: 'White lab diamond / brilliant / 1 ct' },
  ],
  Earrings: [
    { name: 'Sculpted hoop earrings', metal: '14k yellow gold', stone: 'Polished gold / pair' },
    { name: 'Everyday mini hoops', metal: '18k yellow gold', stone: 'White lab diamond / pair' },
    { name: 'Heirloom huggie earrings', metal: '14k rose gold', stone: 'White lab diamond / pair' },
  ],
}

const categories = Object.keys(designs)

function JewelleryIllustration({ category }) {
  if (category === 'Ring') {
    return (
      <svg
        viewBox="0 0 540 700"
        role="img"
        aria-label="Illustration of a gold diamond ring"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="ring-gold" x1="120" y1="300" x2="410" y2="510" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f4d98b" />
            <stop offset=".48" stopColor="#bd8c35" />
            <stop offset="1" stopColor="#f7e6ac" />
          </linearGradient>
          <linearGradient id="ring-stone" x1="250" y1="205" x2="308" y2="275" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset=".5" stopColor="#dce4e8" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
        <ellipse cx="270" cy="447" rx="151" ry="80" transform="rotate(-20 270 447)" stroke="url(#ring-gold)" strokeWidth="17" />
        <ellipse cx="270" cy="447" rx="151" ry="80" transform="rotate(-20 270 447)" stroke="white" strokeOpacity=".65" strokeWidth="2" />
        <path d="M248 284l-14 40m72-40 14 40" stroke="#bd8c35" strokeWidth="7" strokeLinecap="round" />
        <path d="M237 326l34 26 34-26" stroke="#d3ac59" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M270 218l31 30-31 50-31-50 31-30Z" fill="url(#ring-stone)" stroke="#d9bd77" strokeWidth="3" />
        <path d="m270 218 0 80m-31-50h62m-31-30-14 30 14 50 15-50-15-30Z" stroke="white" strokeOpacity=".85" strokeWidth="2" />
        <path d="M270 206v-10m-43 50h-12m98 0h-12" stroke="#c49a46" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }

  if (category === 'Earrings') {
    return (
      <svg
        viewBox="0 0 540 700"
        role="img"
        aria-label="Illustration of fine gold diamond earrings"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="earring-gold" x1="130" y1="130" x2="410" y2="580" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f4d98b" />
            <stop offset=".48" stopColor="#bd8c35" />
            <stop offset="1" stopColor="#f7e6ac" />
          </linearGradient>
        </defs>
        <circle cx="185" cy="175" r="13" fill="#ead69e" stroke="#c49a46" strokeWidth="3" />
        <circle cx="355" cy="175" r="13" fill="#ead69e" stroke="#c49a46" strokeWidth="3" />
        <path d="M185 194v22m170-22v22" stroke="url(#earring-gold)" strokeWidth="5" />
        <path d="M185 220c-46 0-68 31-68 87v127c0 65 34 100 68 100s68-35 68-100V307c0-56-22-87-68-87Zm170 0c-46 0-68 31-68 87v127c0 65 34 100 68 100s68-35 68-100V307c0-56-22-87-68-87Z" stroke="url(#earring-gold)" strokeWidth="10" />
        <path d="M185 234c-31 0-48 24-48 73v127c0 53 24 83 48 83m170-283c-31 0-48 24-48 73v127c0 53 24 83 48 83" stroke="white" strokeOpacity=".68" strokeWidth="2" />
        <circle cx="185" cy="217" r="7" fill="#f3f0e9" stroke="#c49a46" strokeWidth="3" />
        <circle cx="355" cy="217" r="7" fill="#f3f0e9" stroke="#c49a46" strokeWidth="3" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 540 700"
      role="img"
      aria-label="Illustration of a fine gold necklace with a solitaire diamond"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <linearGradient id="necklace-gold" x1="105" y1="40" x2="430" y2="610" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d8b15a" />
          <stop offset=".5" stopColor="#f0d98f" />
          <stop offset="1" stopColor="#bf9140" />
        </linearGradient>
        <linearGradient id="necklace-stone" x1="250" y1="600" x2="289" y2="650" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset=".55" stopColor="#dae1e2" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
      <path d="M48-20C105 184 145 394 270 617 395 394 435 184 492-20" stroke="#d8b15a" strokeOpacity=".28" strokeWidth="5" />
      <path d="M48-20C105 184 145 394 270 617 395 394 435 184 492-20" stroke="url(#necklace-gold)" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
      <path d="M50-20C107 184 147 394 270 617 393 394 433 184 490-20" stroke="white" strokeOpacity=".75" strokeWidth="1" strokeDasharray="1 8" strokeLinecap="round" />
      <path d="M270 608v20" stroke="url(#necklace-gold)" strokeWidth="4" />
      <path d="m270 619 22 17-22 39-22-39 22-17Z" fill="url(#necklace-stone)" stroke="#cfb16d" strokeWidth="2" />
      <path d="m270 619 0 56m-22-39h44m-22-17-10 17 10 39 11-39-11-17Z" stroke="white" strokeOpacity=".85" strokeWidth="1.5" />
      <path d="M270 610v-8m-7 12 7-5 7 5" stroke="#c49a46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Main4() {
  const [category, setCategory] = useState('Necklace')
  const [designIndex, setDesignIndex] = useState(0)
  const currentDesign = designs[category][designIndex]

  function selectCategory(nextCategory) {
    setCategory(nextCategory)
    setDesignIndex(0)
  }

  function generateDesign() {
    setDesignIndex((currentIndex) => (currentIndex + 1) % designs[category].length)
  }

  return (
    <section
      id="design-studio"
      aria-labelledby="design-studio-title"
      className="overflow-hidden bg-[#fff] text-[#111]"
    >
      <div className="mx-auto grid min-h-[760px] max-w-[1900px] grid-rows-[auto_minmax(300px,1fr)_auto] px-5 pb-8 pt-20 sm:px-8 sm:pb-10 lg:h-[100svh] lg:min-h-[720px] lg:grid-cols-[minmax(390px,0.95fr)_minmax(300px,0.8fr)_minmax(390px,1fr)] lg:grid-rows-1 lg:px-0 lg:pb-0 lg:pt-0">
        <div className="relative z-10 flex flex-col justify-center py-7 lg:py-12 lg:pl-7 xl:pl-12">
          <h2
            id="design-studio-title"
            className="flex flex-wrap items-baseline gap-x-3 text-[clamp(1.8rem,2.8vw,3.2rem)] font-normal leading-tight tracking-[-0.04em]"
          >
            <span>Generate your:</span>
            <span className="text-[#111]">{category}</span>
          </h2>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 sm:ml-[52%] sm:flex-col sm:items-start sm:gap-0">
            {categories.filter((item) => item !== category).map((item) => (
                <button
                  key={item}
                  id={item === 'Earrings' ? 'design-earrings' : undefined}
                  type="button"
                  onClick={() => selectCategory(item)}
                  className="py-1 text-[clamp(1.7rem,2.8vw,3rem)] font-normal leading-tight tracking-[-0.04em] text-[#888] transition-colors hover:text-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9944e]"
                >
                  {item}
                </button>
              ))}
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-white sm:min-h-[420px] lg:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#fff_45%,_#fafafa_100%)]" />
          <div className="relative h-full min-h-[340px] w-full max-w-[570px] sm:min-h-[420px] lg:min-h-0">
            <JewelleryIllustration category={category} />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 pt-5 sm:ml-auto sm:w-full sm:max-w-[560px] lg:ml-0 lg:max-w-none lg:pr-7 lg:pt-0 xl:pr-12">
          <div
            aria-live="polite"
            className="flex min-h-[150px] flex-col justify-between bg-[#f0f0f0] p-5 sm:min-h-[180px] sm:p-7"
          >
            <div className="font-mono text-xs uppercase leading-relaxed tracking-[-0.03em] sm:text-sm">
              <p>{currentDesign.name} — {currentDesign.metal}</p>
              <p className="text-[#777]">{currentDesign.stone}</p>
            </div>
            <a
              href={
                category === 'Ring'
                  ? '#category-rings'
                  : category === 'Necklace'
                    ? '#category-necklaces'
                    : '#categories'
              }
              className="w-fit border-b border-dotted border-[#111] pb-1 font-mono text-xs uppercase tracking-[-0.03em] transition-colors hover:text-[#93753c] sm:text-sm"
            >
              Shop this design
            </a>
          </div>
          <button
            type="button"
            onClick={generateDesign}
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#aaa] px-5 text-xs font-medium uppercase transition hover:border-[#111] hover:bg-[#111] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9944e] sm:min-h-14 sm:text-sm"
          >
            Generate a new design
            <RefreshCw size={17} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Main4
