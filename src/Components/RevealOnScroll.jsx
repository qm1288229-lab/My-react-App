import { useEffect, useRef, useState } from 'react'

function RevealOnScroll({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element || isVisible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -48px 0px', threshold: 0.05 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={elementRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
