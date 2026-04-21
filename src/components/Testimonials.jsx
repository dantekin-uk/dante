import React, { useEffect, useRef, useState } from 'react'

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      // Only update if the section is partially visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const getParallaxOffset = (index) => {
    if (typeof window === 'undefined') return 0
    const speed = [0.05, -0.08, 0.03, -0.05, 0.1][index % 5]
    return scrollY * speed
  }

  const testimonials = [
    {
      name: "Faith Wanjiku",
      role: "Programs Lead, NGO Partner",
      text: "Fundify brought order to our workflows. Reporting is faster, approvals are clear, and the system feels built for real NGO operations—not theory.",
      style: "lg:top-[0%] lg:left-[2%] lg:-rotate-6",
      delay: "100ms",
      glowColor: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]",
      parallaxSpeed: 0.05
    },
    {
      name: "Brian Odhiambo",
      role: "Event Comms, KTS&E",
      text: "The KTS&E site made it easy for partners and attendees to understand the summit quickly. Clean structure, strong visuals, and it performs perfectly on mobile.",
      style: "lg:top-[10%] lg:right-[2%] lg:rotate-6",
      delay: "300ms",
      glowColor: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]",
      parallaxSpeed: -0.08
    },
    {
      name: "Amina Hassan",
      role: "Operations, Midland",
      text: "Our website now feels premium and trustworthy. Services are easy to find, the layout is sharp, and clients understand what we do within seconds.",
      style: "lg:top-[38%] lg:left-[40%] lg:-rotate-2",
      delay: "500ms",
      glowColor: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
      parallaxSpeed: 0.03
    },
    {
      name: "Charles Aholi",
      role: "CEO, NAPTA",
      text: "Dante delivers with speed and taste. The designs are modern, the execution is clean, and communication stays sharp from kickoff to delivery.",
      style: "lg:bottom-[15%] lg:left-[5%] lg:rotate-3",
      delay: "600ms",
      glowColor: "group-hover:border-orange-600/50 group-hover:shadow-[0_0_40px_rgba(234,88,12,0.3)]",
      parallaxSpeed: -0.05
    },
    {
      name: "Kevin Mutua",
      role: "Communications, Women Shaping Cities",
      text: "Our LinkedIn presence became consistent and engaging. Posting cadence improved, messaging stayed on brand, and engagement rose steadily over time.",
      style: "lg:bottom-[2%] lg:right-[3%] lg:-rotate-6",
      delay: "200ms",
      glowColor: "group-hover:border-orange-400/50 group-hover:shadow-[0_0_40px_rgba(251,146,60,0.3)]",
      parallaxSpeed: 0.1
    }
  ]

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-12 lg:py-16 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements - RICHER GLOWS */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(249,115,22,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.08),transparent_50%)] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      ></div>
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none animate-pulse transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-500/[0.04] rounded-full blur-[120px] pointer-events-none animate-pulse [animation-delay:1s] transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
      ></div>

      {/* Floating Particles - FOR RICHNESS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              transform: `translateY(${scrollY * (0.01 + i * 0.005)}px)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:50ms]`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
            <p className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase">Testimonials</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            Voices of <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Impact.</span>
          </h2>
        </div>

        {/* Scattered Testimonials Container - RICH & BALANCED */}
        <div className="relative min-h-[620px] flex flex-wrap justify-center items-center gap-8 lg:block">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className={`lg:absolute group p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-700 backdrop-blur-[2px] w-full max-w-[320px] motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-8'} ${t.style} ${t.glowColor}`}
              style={{ 
                animationDelay: t.delay,
                zIndex: 10 + i,
                transform: `translateY(${getParallaxOffset(i)}px)`
              }}>
              {/* Floating Quote Icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center text-orange-400 shadow-xl group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.2091 20.2261 19 18.017 19H17.017C15.3601 19 14.017 17.6569 14.017 16V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91239 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 1.983 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 17.2091 9.22614 19 7.017 19H6.017C4.36014 19 3.017 17.6569 3.017 16V21H3.017Z" />
                </svg>
              </div>

              <div className="space-y-4">
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  "{t.text}"
                </p>
                
                <div className="flex items-center space-x-3 pt-3 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 p-[1px] shadow-lg shadow-orange-500/20">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-bold text-[10px]">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs tracking-tight">{t.name}</h4>
                    <p className="text-orange-400/60 text-[9px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
