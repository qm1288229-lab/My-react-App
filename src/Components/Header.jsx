import { useState } from 'react'
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from 'lucide-react'

const links = [
  { label: 'Makeup', href: '#makeup' },
  { label: 'Skin rituals', href: '#skincare' },
  { label: 'Our philosophy', href: '#about' },
  { label: 'Fine jewellery', href: '#jewellery' },
  { label: 'Shop by category', href: '#categories' },
  { label: 'Design studio', href: '#design-studio' },
  { label: 'Our world', href: '#our-world' },
]

const iconButtonClass =
  'grid size-10 place-items-center rounded-full text-white/90 transition duration-300 hover:scale-105 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

function Header() {
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [currency, setCurrency] = useState('NZD')

  return (
    <header className="header-enter absolute inset-x-0 top-0 z-20 text-white">
      {announcementVisible && (
        <div className="relative flex min-h-11 items-center justify-center bg-[#671128] px-12 text-center text-[10px] font-medium uppercase tracking-[0.16em] sm:text-xs">
          <a
            href="#beauty-edit"
            className="whitespace-nowrap transition hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            A little something for your first ritual <span className="mx-2 text-white/50">|</span>
            complimentary shipping over $75
          </a>
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-5"
          >
            <X size={16} strokeWidth={1.6} />
          </button>
        </div>
      )}

      <div className="relative mx-auto grid h-[76px] max-w-[1800px] grid-cols-[1fr_auto] items-center px-4 sm:h-[82px] sm:px-8 lg:h-[94px] lg:px-10 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <a
          href="#home"
          aria-label="Heirest home"
          className="shrink-0 text-[25px] font-semibold tracking-[0.16em] transition-opacity duration-300 hover:opacity-75 sm:text-[30px] lg:text-[32px] 2xl:text-[36px]"
        >
          HEIREST
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-4 whitespace-nowrap xl:flex 2xl:gap-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.055em] text-white/90 transition hover:text-white after:mx-auto after:mt-1 after:block after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full 2xl:text-[10px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-0 sm:gap-1 xl:gap-0">
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-expanded={currencyOpen}
              onClick={() => setCurrencyOpen((open) => !open)}
              className="flex h-10 items-center gap-1 rounded-full px-3 text-xs font-medium tracking-wide transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {currency}
              <ChevronDown size={14} strokeWidth={1.7} />
            </button>
            {currencyOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-24 overflow-hidden rounded-sm border border-white/15 bg-[#171817]/95 py-1 shadow-xl backdrop-blur">
                {['NZD', 'AUD', 'USD', 'GBP'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setCurrency(option)
                      setCurrencyOpen(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-xs tracking-wide transition hover:bg-white/10"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open)
              setSearchMessage('')
            }}
            className={iconButtonClass}
          >
            <Search size={21} strokeWidth={1.5} />
          </button>
          <a
            href="mailto:hello@heirest.com?subject=Account%20enquiry"
            aria-label="Contact us about your account"
            className={iconButtonClass}
          >
            <UserRound size={20} strokeWidth={1.5} />
          </a>
          <a href="#configurations" aria-label="Browse designs" className={iconButtonClass}>
            <ShoppingBag size={21} strokeWidth={1.5} />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`${iconButtonClass} xl:hidden`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {searchOpen && (
          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault()
              const query = searchQuery.trim().toLowerCase()
              const destinations = [
                { terms: ['makeup', 'beauty', 'cosmetic'], href: '#makeup' },
                { terms: ['skin', 'skincare', 'ritual'], href: '#skincare' },
                { terms: ['ring'], href: '#category-rings' },
                { terms: ['necklace', 'necklaces', 'chain'], href: '#category-necklaces' },
                { terms: ['earring', 'earrings'], href: '#design-studio' },
                { terms: ['bracelet', 'pearl'], href: '#categories' },
                { terms: ['jewel', 'design', 'collection'], href: '#configurations' },
              ]
              const destination = destinations.find((item) =>
                item.terms.some((term) => query.includes(term)),
              )

              if (!query) {
                setSearchMessage('Enter a product or category to explore.')
              } else if (destination) {
                window.location.hash = destination.href
                setSearchOpen(false)
                setSearchMessage('')
              } else {
                setSearchMessage('No exact match. Try rings, necklaces, earrings, or makeup.')
              }
            }}
            className="panel-enter absolute inset-x-5 top-full mt-1 border border-white/20 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-md sm:left-auto sm:right-8 sm:w-80 lg:right-10"
          >
            <div className="flex items-center gap-3">
              <Search size={18} className="shrink-0 text-white/70" />
              <input
                autoFocus
                aria-label="Search the store"
                placeholder="Try rings or makeup"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                  setSearchMessage('')
                }}
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/60"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="text-[9px] uppercase tracking-[0.12em] text-white/80 transition hover:text-white"
              >
                Go
              </button>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
            {searchMessage && (
              <p role="status" className="mt-2 text-[10px] leading-relaxed text-white/75">
                {searchMessage}
              </p>
            )}
          </form>
        )}

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="panel-enter absolute inset-x-0 top-full border-t border-white/15 bg-[#171817]/95 px-6 py-5 backdrop-blur-md xl:hidden"
          >
            <div className="mx-auto flex max-w-xl flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 text-xs font-medium uppercase tracking-[0.12em] text-white/85 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header