import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const textSequences = [
  { trigger: '.about', eyebrow: '.about-eyebrow', heading: '.about h2', body: '.about-content > *' },
  { trigger: '.why-besito', eyebrow: '.why-besito-eyebrow', heading: '.why-besito h2' },
  { trigger: '.packs', eyebrow: '.packs-eyebrow', heading: '.packs h2', body: '.packs-header p' },
  { trigger: '.packs-showcase', eyebrow: '.packs-showcase-eyebrow', heading: '.packs-showcase h2', body: '.packs-showcase-header p' },
  { trigger: '.how-we-work', eyebrow: '.how-we-work-eyebrow', heading: '.how-we-work h2' },
  { trigger: '.faq', eyebrow: '.faq-eyebrow', heading: '.faq h2' },
  { trigger: '.final-cta', eyebrow: '.final-cta-eyebrow', heading: '.final-cta h2', body: '.final-cta p, .final-cta-button, .final-cta-message' },
]

const structuralAnimations = [
  { trigger: '.hero', targets: '.hero-image', x: 34, y: 10, scale: 1.03, start: 'top 78%' },
  { trigger: '.packs', targets: '.pack-card, .packs-inclusion, .brands', y: 32, stagger: 0.1 },
  { trigger: '.packs-showcase', targets: '.pack-photo', y: 28, scale: 1.04, stagger: 0.12 },
  { trigger: '.how-we-work', targets: '.how-step', y: 30, stagger: 0.14 },
  { trigger: '.faq', targets: '.faq-item', y: 20, stagger: 0.09 },
]

export default function PageAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      const navbarItems = gsap.utils.toArray('.navbar-logo, .navbar-links a, .navbar-button')
      const heroLines = gsap.utils.toArray('.hero .text-reveal-line > span')

      gsap.from('.navbar', { autoAlpha: 0, y: -30, duration: 0.7, ease: 'power3.out' })
      gsap.from(navbarItems, { autoAlpha: 0, y: -10, duration: 0.5, delay: 0.12, stagger: 0.08, ease: 'power2.out' })

      const heroTimeline = gsap.timeline({ delay: 0.08 })
      heroTimeline
        .from('.hero-eyebrow', { autoAlpha: 0, y: 14, duration: 0.42, ease: 'power2.out' })
        .from(heroLines, { yPercent: -108, duration: 0.82, stagger: 0.09, ease: 'power4.out' }, '-=0.1')
        .from('.hero-content > p', { autoAlpha: 0, y: 16, duration: 0.58, ease: 'power2.out' }, '-=0.38')
        .from('.hero-actions, .hero-message', { autoAlpha: 0, y: 14, duration: 0.55, stagger: 0.08, ease: 'power2.out' }, '-=0.3')

      textSequences.forEach(({ trigger, eyebrow, heading, body }) => {
        if (!document.querySelector(trigger)) return

        const timeline = gsap.timeline({
          scrollTrigger: { trigger, start: 'top 82%', once: true },
        })
        const eyebrowElements = gsap.utils.toArray(eyebrow)
        const headingElements = gsap.utils.toArray(heading)
        const bodyElements = body ? gsap.utils.toArray(body) : []

        timeline.from(eyebrowElements, { autoAlpha: 0, y: 12, duration: 0.5, ease: 'power2.out' })
        timeline.from(headingElements, { autoAlpha: 0, y: 30, duration: 0.9, ease: 'power3.out' }, '-=0.18')
        if (bodyElements.length) {
          timeline.from(bodyElements, { autoAlpha: 0, y: 14, duration: 0.65, stagger: 0.1, ease: 'power2.out' }, '-=0.45')
        }
      })

      structuralAnimations.forEach(({ trigger, targets, x = 0, y, scale = 1, stagger, start = 'top 84%' }) => {
        const elements = gsap.utils.toArray(targets)
        if (!document.querySelector(trigger) || !elements.length) return

        gsap.from(elements, {
          autoAlpha: 0,
          x,
          y,
          scale,
          duration: 0.85,
          ease: 'power3.out',
          stagger,
          scrollTrigger: { trigger, start, once: true },
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
