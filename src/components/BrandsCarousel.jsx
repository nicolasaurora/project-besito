import { useEffect, useRef } from 'react'
import aldevaLogo from '../assets/brands/Aldeva.png'
import alwaLogo from '../assets/brands/alwa.jfif'
import argendieLogo from '../assets/brands/argendie.jfif'
import baldoLogo from '../assets/brands/baldo.png'
import bastoniLogo from '../assets/brands/Bastoni Galletitas Naturales.jpg'
import canariasLogo from '../assets/brands/canarias.png'
import celienergyLogo from '../assets/brands/celienergy.jfif'
import crackinesLogo from '../assets/brands/crackines.png'
import elColonialLogo from '../assets/brands/el colonial.jfif'
import entrenutLogo from '../assets/brands/entrenut.png'
import epuyenLogo from '../assets/brands/epuyen logo.jfif'
import jualLogo from '../assets/brands/Jual stevia.jfif'
import kuatiLogo from '../assets/brands/kuati.png'
import laTranquilinaLogo from '../assets/brands/La tranquilina.jfif'
import lasforLogo from '../assets/brands/lasfor.png'
import muecasLogo from '../assets/brands/MUECAS.png'
import pampaGourmetLogo from '../assets/brands/Pampa gourmet.png'
import pontLogo from '../assets/brands/Pont.jfif'
import roapipoLogo from '../assets/brands/roapipo.jfif'
import saborDeMadreLogo from '../assets/brands/sabor de madre.jfif'
import wikLogo from '../assets/brands/Wik!.png'

const brands = [
  { name: 'Aldeva', logo: aldevaLogo },
  { name: 'Alwa', logo: alwaLogo },
  { name: 'Argendie', logo: argendieLogo },
  { name: 'Baldo', logo: baldoLogo },
  { name: 'Bastoni Galletitas Naturales', logo: bastoniLogo },
  { name: 'Canarias', logo: canariasLogo },
  { name: 'CeliEnergy', logo: celienergyLogo },
  { name: 'Crackines', logo: crackinesLogo },
  { name: 'El Colonial', logo: elColonialLogo },
  { name: 'Entrenut', logo: entrenutLogo },
  { name: 'Epuyén', logo: epuyenLogo },
  { name: 'Jual Stevia', logo: jualLogo },
  { name: 'Kuati', logo: kuatiLogo },
  { name: 'La Tranquilina', logo: laTranquilinaLogo },
  { name: 'Lasfor', logo: lasforLogo },
  { name: 'Muecas', logo: muecasLogo },
  { name: 'Pampa Gourmet', logo: pampaGourmetLogo },
  { name: 'Pont', logo: pontLogo },
  { name: 'Roapipó', logo: roapipoLogo },
  { name: 'Sabor de Madre', logo: saborDeMadreLogo },
  { name: 'Wik!', logo: wikLogo },
]

export default function BrandsCarousel() {
  const carouselRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const track = trackRef.current
    if (!carousel || !track) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobileViewport = window.matchMedia('(max-width: 768px)')
    let frameId
    let previousTime
    let dragging = false
    let startX = 0
    let startPosition = 0
    let autoPosition = 0

    const renderPosition = () => {
      track.style.transform = `translate3d(${-autoPosition}px, 0, 0)`
    }

    const animate = (time) => {
      const elapsed = previousTime === undefined ? 0 : Math.min(time - previousTime, 100)
      previousTime = time

      if (!dragging && !reducedMotion) {
        const loopWidth = track.scrollWidth / 3
        const pixelsPerSecond = mobileViewport.matches ? 80 : 200
        if (loopWidth > 0) {
          autoPosition = (autoPosition + pixelsPerSecond * elapsed / 1000) % loopWidth
          renderPosition()
        }
      }
      frameId = requestAnimationFrame(animate)
    }

    const startDrag = (event) => {
      dragging = true
      startX = event.clientX
      startPosition = autoPosition
      carousel.classList.add('is-dragging')
      carousel.setPointerCapture(event.pointerId)
    }

    const drag = (event) => {
      if (!dragging) return
      const loopWidth = track.scrollWidth / 3
      if (loopWidth <= 0) return
      let nextPosition = startPosition - (event.clientX - startX)
      while (nextPosition < 0) nextPosition += loopWidth
      while (nextPosition >= loopWidth) nextPosition -= loopWidth
      autoPosition = nextPosition
      renderPosition()
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
      {brands.map(({ name, logo }) => <div className="brand-logo" key={name}><img src={logo} alt={name} draggable="false" /></div>)}
      {brands.map(({ name, logo }) => <div className="brand-logo" key={`${name}-duplicate`} aria-hidden="true"><img src={logo} alt="" draggable="false" /></div>)}
      {brands.map(({ name, logo }) => <div className="brand-logo" key={`${name}-duplicate-2`} aria-hidden="true"><img src={logo} alt="" draggable="false" /></div>)}
    </div>
  </div>
}
