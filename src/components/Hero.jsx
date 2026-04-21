import React, { useState, useEffect } from 'react'
import myImage from '../assets/myimage.png'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [heroRect, setHeroRect] = useState({ x: 0, y: 0, w: 1, h: 1 })
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    const updateRect = () => {
      const el = document.getElementById('home')
      if (!el) return
      const r = el.getBoundingClientRect()
      setHeroRect({ x: r.left, y: r.top, w: Math.max(1, r.width), h: Math.max(1, r.height) })
    }
    updateRect()
    window.addEventListener('resize', updateRect)
    const mq = window.matchMedia?.('(pointer: coarse)')
    const setCoarse = () => setIsCoarsePointer(Boolean(mq?.matches))
    setCoarse()
    mq?.addEventListener?.('change', setCoarse)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateRect)
      mq?.removeEventListener?.('change', setCoarse)
    }
  }, [])

  const mx = (mousePosition.x - (heroRect.x + heroRect.w / 2)) / (heroRect.w / 2)
  const my = (mousePosition.y - (heroRect.y + heroRect.h / 2)) / (heroRect.h / 2)
  const clamp = (v) => Math.max(-1, Math.min(1, v))
  const px = isCoarsePointer ? 0 : clamp(mx)
  const py = isCoarsePointer ? 0 : clamp(my)
  const tiltX = isCoarsePointer ? 0 : py * -10
  const tiltY = isCoarsePointer ? 0 : px * 12

  return (
    <section id="home" className="relative overflow-visible scroll-mt-20">
      {/* Unified Hero Box with rounded bottom corners */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-900 rounded-b-[48px] transition-all duration-1000 transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Subtle accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-amber-500/10 rounded-b-[48px] motion-reduce:animate-none animate-fade-in"></div>

        {/* Large hero image anchored to bottom (behind content) */}
        <div className="absolute inset-x-0 bottom-[-28px] sm:bottom-[-34px] lg:bottom-[-40px] flex justify-center pointer-events-none z-[1] [perspective:1000px]">
          <div
            className="motion-reduce:transform-none transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `translate3d(${px * 10}px, ${py * 6}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={myImage}
              alt=""
              aria-hidden="true"
              className={`select-none object-contain drop-shadow-[0_35px_90px_rgba(249,115,22,0.35)] transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
              } w-[560px] xs:w-[640px] sm:w-[780px] lg:w-[1400px] xl:w-[1600px] max-w-none h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[560px] motion-reduce:animate-none animate-float`}
            />
          </div>
        </div>

        {/* Radial glow effect following mouse */}
        <div
          className="absolute w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] transition-all duration-500 pointer-events-none motion-reduce:animate-none animate-drift"
          style={{
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 lg:px-8 pt-16 sm:pt-20 pb-10 lg:pt-20 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Main 3-Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 items-center">

              {/* Left Side - Identity & Header */}
              <div
                className={`space-y-4 lg:text-left motion-reduce:animate-none ${isLoaded ? 'animate-fade-up' : ''} [animation-delay:80ms]`}
                style={{ transform: `translate(${px * 6}px, ${py * 4}px)` }}
              >
                <div className="space-y-2">
                  {/* Small Header - Added description */}
                  
                  {/* Reduced size: Hey I am a... */}
                  <p className="text-white/50 text-base lg:text-lg font-medium tracking-wide">Hey i'm a</p>
                  {/* Reduced size: Creative Director */}
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                    Creative <br />
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                      Director
                    </span>
                  </h1>
                </div>

                {/* Refined CTA Buttons - More compact */}
                <div className={`flex flex-row flex-wrap gap-2 pt-2 motion-reduce:animate-none ${isLoaded ? 'animate-fade-up' : ''} [animation-delay:180ms]`}>
                  <button className="group relative overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-xl font-bold text-[9px] sm:text-[10px] transition-all duration-500 hover:shadow-[0_0_25px_-10px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 active:scale-95">
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <span>Explore Portfolio</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  <button className="group px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-[9px] sm:text-[10px] border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:-translate-y-0.5 active:scale-95">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Project</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:rotate-[15deg] transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Middle column spacer (image is absolutely positioned behind content) */}
              <div className="hidden lg:block" aria-hidden="true"></div>

              {/* Right Side - Description - Reduced size */}
              <div
                className={`lg:pl-0 lg:-ml-4 mt-3 lg:mt-6 text-center lg:text-left motion-reduce:animate-none ${isLoaded ? 'animate-fade-up' : ''} [animation-delay:120ms]`}
                style={{ transform: `translate(${px * -5}px, ${py * 3}px)` }}
              >
                <div className="relative">
                  <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent opacity-20 hidden lg:block"></div>
                  <p className="text-white/50 text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
                    Turning Ideas Into Identities, and Identities Into Impact.
                  </p>
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed font-normal">
                    I'm a Creative Director with a full technical toolkit building brands, designing systems, developing web experiences, and leading digital strategy for organizations that want to stand out and stay ahead.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats - Distributed Uniformly at the Bottom - Reduced size */}
            <div className={`mt-10 lg:mt-14 pt-2 motion-reduce:animate-none ${isLoaded ? 'animate-fade-up' : ''} [animation-delay:260ms]`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-items-center">
                <div className="text-center group">
                  <p className="text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">50+</p>
                  <p className="text-white/30 text-[9px] font-medium uppercase tracking-[0.25em] mt-1">Projects Delivered</p>
                </div>
                <div className="text-center group">
                  <p className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">08</p>
                  <p className="text-white/30 text-[9px] font-medium uppercase tracking-[0.25em] mt-1">Years of Mastery</p>
                </div>
                <div className="text-center group">
                  <p className="text-2xl lg:text-3xl font-bold text-white group-hover:text-rose-400 transition-colors duration-300">30+</p>
                  <p className="text-white/30 text-[9px] font-medium uppercase tracking-[0.25em] mt-1">Happy Partners</p>
                </div>
                <div className="text-center group">
                  <p className="text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">12</p>
                  <p className="text-white/30 text-[9px] font-medium uppercase tracking-[0.25em] mt-1">Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
