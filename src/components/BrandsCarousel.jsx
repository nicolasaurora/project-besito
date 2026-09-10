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
      {brands.map(({ name, logo }) => <div className="brand-logo" key={name}><img src={logo} alt={name} draggable="false" /></div>)}
      {brands.map(({ name, logo }) => <div className="brand-logo" key={`${name}-duplicate`} aria-hidden="true"><img src={logo} alt="" draggable="false" /></div>)}
      {brands.map(({ name, logo }) => <div className="brand-logo" key={`${name}-duplicate-2`} aria-hidden="true"><img src={logo} alt="" draggable="false" /></div>)}
    </div>
  </div>
}
