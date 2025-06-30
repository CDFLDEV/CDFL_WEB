'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../constants/ImageConstants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const classMobile = "block text-gray-700 hover:text-black";
  const classDesktop = "text-gray-600 hover:text-black";

  const options = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' }
  ]

  // Bloquear scroll cuando el menú móvil está abierto (mejora UX)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-black shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/" className='my-0 py-0'><Image src={image.logo} alt="MiLogo" width={160} height={200}/></Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6">
          {options.map(({href, label}, index) => <Link key={index} href={href} className={classDesktop} onClick={() => null}>{label}</Link>)}
        </div>
      </div>

      {/* Menú móvil overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 px-4 py-4 space-y-2 md:hidden">
          {options.map(({href, label}, index) => <Link key={index} href={href} className={classMobile} onClick={() => setMenuOpen(false)}>{label}</Link>)}
        </div>
      )}
    </nav>
  )
}
