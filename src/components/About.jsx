import React, { useEffect, useRef, useState } from 'react'
import myImage from '../assets/myimage.png'

const About = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const stats = [
    { value: "3", label: "Years Experience" },
    { value: "15+", label: "Clients Worked With" },
    { value: "3", label: "Design Systems Built" }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-16 lg:py-20 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Image with Modern Frame - REDUCED HEIGHT */}
          <div className={`relative group motion-reduce:animate-none ${inView ? 'animate-fade-right' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[16/11] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-rose-500/10"></div>
              
              <img 
                src={myImage} 
                alt="About Dante" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Available</p>
                    <p className="text-white/50 text-[10px]">For new projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute -inset-4 border border-orange-500/10 rounded-[3.5rem] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -inset-8 border border-orange-500/5 rounded-[4rem] -z-10 group-hover:scale-125 transition-transform duration-1000"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className={`space-y-4 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:200ms]`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
                <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                <p className="text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase">About Me</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Creative Direction Backed by <br />
                <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent ">Real Technical Skill.</span>
              </h2>
            </div>

            <div className={`space-y-6 text-white/60 text-base lg:text-lg leading-relaxed font-medium motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:300ms]`}>
              <p>
                With 3 years of professional experience, I bring both the creative eye and the technical depth that most digital professionals can't offer in one package.
              </p>
              <p>
                I've worked with multiple organizations managing their social media presence, building their web platforms, crafting their visual identity, and keeping their IT systems running smoothly. Whether it's a design system, a brand refresh, or a social media strategy I deliver work that is intentional, polished, and built to last.
              </p>
            </div>

            {/* Stats Strip */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:400ms]`}>
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-3xl font-black text-white tracking-tighter">
                    <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">{stat.value}</span>
                  </p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
