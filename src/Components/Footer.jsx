import { ArrowUpRight } from 'lucide-react'

const copyrightYear = new Date().getFullYear()

const linkGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Shop all', href: '#categories' },
      { label: 'Rings', href: '#category-rings' },
      { label: 'Earrings', href: '#design-studio' },
      { label: 'Necklaces', href: '#category-necklaces' },
      { label: 'Bracelets', href: '#configurations' },
      { label: 'Makeup', href: '#makeup' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our story', href: '#our-world' },
      { label: 'Our standards', href: '#about' },
      { label: 'Our process', href: '#design-studio' },
      { label: 'Journal', href: '#our-world' },
      { label: 'Bespoke', href: '#design-studio' },
      { label: 'FAQs', href: 'mailto:hello@heirest.com?subject=Heirest%20enquiry' },
    ],
  },
  {
    title: 'Customer care',
    links: [
      { label: 'My account', href: 'mailto:hello@heirest.com?subject=Account%20enquiry' },
      { label: 'Contact us', href: 'mailto:hello@heirest.com' },
      { label: 'Product care', href: '#jewellery' },
      { label: 'Shipping', href: 'mailto:hello@heirest.com?subject=Shipping%20enquiry' },
      { label: 'Warranty, repairs & returns', href: 'mailto:hello@heirest.com?subject=Repairs%20and%20returns' },
      { label: 'Our reviews', href: '#testimonials' },
    ],
  },
]

function FooterMark() {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      aria-label="Heirest signature mark"
      role="img"
      className="h-36 w-36 text-[#9bd5ed] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
    >
      <path
        d="M37 54C37 31 66 25 81 41L185 154C201 171 192 197 169 197C157 197 150 190 144 180L63 47C56 36 42 39 42 54V159"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="0.1 8"
      />
      <path
        d="M183 54C183 31 154 25 139 41L35 154C19 171 28 197 51 197C63 197 70 190 76 180L157 47C164 36 178 39 178 54V159"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="0.1 8"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer id="footer" className="bg-[#69001f] text-white">
      <div className="mx-auto max-w-[1900px] px-5 pt-8 sm:px-8 lg:px-11">
        <div className="border-t border-dotted border-white/65" />

        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[1fr_1fr_1.35fr_1.1fr] lg:gap-10 lg:py-16">
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
                {group.title}
              </h2>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[13px] leading-snug text-white/90 transition-colors hover:text-white sm:text-sm"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex items-start justify-start lg:justify-end">
            <a href="#home" aria-label="Heirest, back to top" className="transition-transform hover:scale-105">
              <FooterMark />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-dotted border-white/45 py-5 text-[8px] uppercase tracking-[0.13em] text-white/85 sm:flex-row sm:items-center sm:justify-between sm:text-[9px]">
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-8">
            <a href="mailto:hello@heirest.com?subject=Terms%20and%20conditions" className="transition-colors hover:text-white">
              Terms &amp; conditions
            </a>
            <a href="mailto:hello@heirest.com?subject=Privacy%20policy" className="transition-colors hover:text-white">
              Privacy policy
            </a>
            <a href="mailto:hello@heirest.com?subject=Cookie%20policy" className="transition-colors hover:text-white">
              Cookies
            </a>
          </div>
          <p>© Heirest, {copyrightYear}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer