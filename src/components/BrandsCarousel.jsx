import { useEffect, useRef } from 'react'

const brands = ['MARCA 01', 'MARCA 02', 'MARCA 03', 'MARCA 04', 'MARCA 05']

export default function BrandsCarousel() {
  const carouselRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const track = trackRef.current
    if (!carousel || !track) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId
    let dragging = false
    let startX = 0
    let startScroll = 0
    let autoPosition = carousel.scrollLeft

    const animate = () => {
      if (!dragging && !reducedMotion) {
        const loopWidth = track.scrollWidth / 3
        autoPosition += 0.2
        if (autoPosition >= loopWidth) autoPosition -= loopWidth
        carousel.scrollLeft = autoPosition
      }
      frameId = requestAnimationFrame(animate)
    }

    const startDrag = (event) => {
      dragging = true
      startX = event.clientX
      startScroll = carousel.scrollLeft
      autoPosition = startScroll
      carousel.classList.add('is-dragging')
      carousel.setPointerCapture(event.pointerId)
    }

    const drag = (event) => {
      if (!dragging) return
      const loopWidth = track.scrollWidth / 3
      let nextPosition = startScroll - (event.clientX - startX)
      while (nextPosition < 0) nextPosition += loopWidth
      while (nextPosition >= loopWidth) nextPosition -= loopWidth
      carousel.scrollLeft = nextPosition
      autoPosition = nextPosition
    }

    const endDrag = (event) => {
      if (!dragging) return
      dragging = false
      carousel.classList.remove('is-dragging')
      if (carousel.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId)
    }

    carousel.addEventListener('pointerdown', startDrag)
    carousel.addEventListener('pointermove', drag)
    carousel.addEventListener('pointerup', endDrag)
    carousel.addEventListener('pointercancel', endDrag)
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      carousel.removeEventListener('pointerdown', startDrag)
      carousel.removeEventListener('pointermove', drag)
      carousel.removeEventListener('pointerup', endDrag)
      carousel.removeEventListener('pointercancel', endDrag)
    }
  }, [])

  return <div className="brands-carousel" ref={carouselRef} aria-label="Marcas con las que trabajamos">
    <div className="brands-list" ref={trackRef}>
      {brands.map(brand => <span key={brand}>{brand}</span>)}
      {brands.map(brand => <span key={`${brand}-duplicate`} aria-hidden="true">{brand}</span>)}
      {brands.map(brand => <span key={`${brand}-duplicate-2`} aria-hidden="true">{brand}</span>)}
    </div>
  </div>
}
