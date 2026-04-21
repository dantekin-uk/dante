import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Logo with modern styling */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-orange-400 to-rose-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-lg sm:text-xl">D</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">Dante</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-4 py-2 rounded-lg font-medium text-xs transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 shadow-sm shadow-orange-500/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group relative inline-flex px-6 py-2 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white rounded-lg font-bold text-xs transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hire Me</span>
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-950/50 backdrop-blur-2xl rounded-xl p-5 border border-white/10 space-y-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg font-medium text-xs transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-orange-500/15 text-white border border-orange-500/20 shadow-sm shadow-orange-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full text-center block px-4 py-2.5 bg-gradient-to-r from-orange-500 to-rose-600 text-white text-xs rounded-lg font-bold transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
