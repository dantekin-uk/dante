import React, { useEffect, useRef, useState } from 'react'

const Services = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const services = [
    {
      title: "Web Development",
      description: "From concept to code, I build fast, responsive, and visually stunning websites and web applications. I craft experiences that work seamlessly across every screen and leave lasting impressions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-orange-500 to-rose-500"
    },
    {
      title: "Graphic Design",
      description: "Bold visuals. Clear messaging. Unforgettable brand identity. I design everything from logos and brand kits to marketing materials that make your business impossible to ignore.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "from-amber-400 to-orange-600"
    },
    {
      title: "Social Media Management",
      description: "I manage your online presence so you can focus on running your business. From content creation and scheduling to community engagement and analytics  I keep your brand active, relevant, and growing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      color: "from-rose-500 to-orange-700"
    },
    {
      title: "IT Support & Consulting",
      description: "I provide reliable, end-to-end IT support for organizations from system setup and maintenance to troubleshooting and digital transformation strategy. Your tech problems, solved.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-orange-400 to-amber-600"
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-orange-500/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-1/4 w-[520px] h-[520px] bg-rose-500/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.10),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.10),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(251,191,36,0.08),transparent_55%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className={`max-w-3xl mb-14 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:60ms]`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.45)]"></span>
            <p className="text-white/60 text-[9px] font-semibold tracking-[0.28em] uppercase">What I Do Best</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 tracking-tight">
            A full suite of digital services <br />
            <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">tailored to your goals.</span>
          </h2>
          <p className="text-white/55 text-sm lg:text-base leading-relaxed font-medium">
            Delivered with intention, blending strategy, design, and technical mastery to scale your impact.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-6 lg:p-7 rounded-[1.75rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 backdrop-blur-md overflow-hidden motion-reduce:animate-none ${
                inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'
              } [animation-delay:${140 + index * 90}ms] ${
                index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : index === 2 ? 'lg:col-span-5' : 'lg:col-span-7'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-rose-500/0 group-hover:from-orange-500/6 group-hover:to-rose-500/6 rounded-[1.75rem] transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-rose-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-500/10`}>
                  <div className="w-full h-full bg-slate-900 rounded-[12px] flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Bottom Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
