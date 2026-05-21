'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Nos Services',
    href: '/services',
    dropdown: [
      { label: 'DPE (Performance Énergétique)', href: '/services/diagnostic-performance-energetique' },
      { label: 'Diagnostic Amiante', href: '/services/diagnostic-amiante' },
      { label: 'Diagnostic Plomb', href: '/services/diagnostic-plomb' },
      { label: 'Diagnostic Électricité', href: '/services/diagnostic-electricite' },
      { label: 'Diagnostic Gaz', href: '/services/diagnostic-gaz' },
      { label: 'Diagnostic Assainissement', href: '/services/diagnostic-assainissement' },
      { label: 'Diagnostic Termites', href: '/services/diagnostic-termites' },
      { label: 'Loi Carrez', href: '/services/diagnostic-loi-carrez' },
      { label: 'Loi Boutin', href: '/services/diagnostic-loi-boutin' },
      { label: 'Risques Naturels (ERP)', href: '/services/diagnostic-risques-naturels' },
    ],
  },
  { label: 'Meilleur Diag ?', href: '/diagnostic-immobilier-paris' },
  { label: 'Devis Gratuit', href: '/devis-diagnostic-immobilier' },
  { label: 'Contactez-Nous', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300  mb-20
        ${scrolled ? 'bg-black/85 backdrop-blur-md nav-scrolled py-3 border-b border-black/5' : 'py-5'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
                {!scrolled ? <Image src={"/images/logo.png"} width={190} height={100} alt='logo'/> : <Image src={"/images/logo.png"} width={140} height={100} alt='logo'/>}
                    {/* <Image src={"/images/logo.png"} width={190} height={100} alt='logo'/> */}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <Link href={link.href} className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        scrolled ? 'text-white hover:text-primary hover:bg-gray-50' : 'text-white/80 hover:text-white hover:bg-white/10' }`} >
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-70 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-mygray hover:text-black hover:bg-primary/5 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.label === 'Devis Gratuit' ? (
                  <Link key={link.label} href={link.href} className="ml-2 btn-primary text-sm px-5 py-2.5">
                    {link.label}
                  </Link>
                ) : (
                  <Link key={link.label} href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? 'text-white hover:text-primary hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10' }`}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Phone CTA */}
            <Link href="tel:+33782326451" className={`hidden lg:flex items-center gap-2 transition-colors duration-20 text-white`}>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={14} className="text-primary" />
              </div>
              <div className="hidden lg:block">
                <p className={`text-[10px] uppercase tracking-wide font-medium 'text-white/60`}>
                  Appelez-nous
                </p>
                <p className={`text-sm font-bold font-display text-white`}>
                  07 82 32 64 51
                </p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-white hover:bg-gray-100 hover:text-mygray' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu">
              {mobileOpen ? <X size={22} color='black'/> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible' }`}>
        <X onClick={() => setMobileOpen(!mobileOpen)} size={28} color='black' className='absolute right-5 top-10 z-50 active:animate-spin transition-transform'/>
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0' }`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full' }`} >
          <div className="p-6 pt-20">
            <nav className="space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} >
                    <Link href={link.href} className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-black hover:bg-gray-50 hover:text-primary rounded-lg">
                      {link.label}
                      <ChevronDown onClick={() => setServicesOpen(!servicesOpen)} size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {servicesOpen && (
                      <div onClick={() => setMobileOpen(false)} className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-4">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-2 text-sm text-mygray hover:text-primary"
                            onClick={() => (false)} >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      link.label === 'Devis Gratuit' ? 'bg-primary text-black font-bold text-center mt-4' : 'text-black hover:bg-gray-50 hover:text-primary' }`}
                      onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-mygray mb-1">Intervention 7j/7</p>
              <Link href="tel:+33782326451" className="text-xl font-bold font-display text-black">
                07 82 32 64 51
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}