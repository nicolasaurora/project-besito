import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animations = [
  { trigger: '.hero', targets: '.hero-content > *', y: 28, stagger: 0.18, start: 'top 78%' },
  { trigger: '.hero', targets: '.hero-image', x: 36, y: 12, start: 'top 78%' },
  { trigger: '.about', targets: '.about-header, .about-content', y: 38, stagger: 0.16 },
  { trigger: '.why-besito', targets: '.why-besito-header', y: 34, stagger: 0.12 },
  { trigger: '.packs', targets: '.packs-header, .pack-card, .packs-inclusion, .brands', y: 34, stagger: 0.1 },
  { trigger: '.packs-showcase', targets: '.packs-showcase-header, .pack-photo', y: 32, stagger: 0.12 },
  { trigger: '.how-we-work', targets: '.how-we-work-header, .how-step', y: 34, stagger: 0.14 },
  { trigger: '.faq', targets: '.faq-header, .faq-item', y: 24, stagger: 0.09 },
  { trigger: '.final-cta', targets: '.final-cta > *', y: 28, stagger: 0.12 },
]

export default function PageAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      const navbarItems = gsap.utils.toArray('.navbar-logo, .navbar-links a, .navbar-button')

      gsap.from('.navbar', {
        autoAlpha: 0,
        y: -30,
        duration: 0.85,
        ease: 'power3.out',
      })

      gsap.from(navbarItems, {
        autoAlpha: 0,
        y: -10,
        duration: 0.65,
        delay: 0.22,
        stagger: 0.11,
        ease: 'power2.out',
      })

      animations.forEach(({ trigger, targets, x = 0, y, stagger, start = 'top 84%' }) => {
        const elements = gsap.utils.toArray(targets)
        if (!document.querySelector(trigger) || !elements.length) return

        gsap.from(elements, {
          autoAlpha: 0,
          x,
          y,
          duration: 1,
          ease: 'power2.out',
          stagger,
          scrollTrigger: {
            trigger,
            start,
            once: true,
          },
        })
      })

      gsap.utils.toArray('.why-card').forEach((card, index) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 76,
          scale: 0.96,
          duration: 0.9,
          delay: index * 0.26,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    })

    return () => context.revert()
  }, [])

  return null
}
