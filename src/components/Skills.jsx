import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

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

  const skillGroups = [
    {
      title: "Creative & Design",
      icon: "🎨",
      skills: ["Graphic Design", "Brand Identity", "Visual Storytelling", "UI/UX Design", "Design Systems", "Typography", "Color Theory", "Motion Graphics", "Social Media Content Design", "Print Design"],
      color: "from-orange-500/10 to-rose-500/10",
      accent: "text-orange-400"
    },
    {
      title: "Web & Development",
      icon: "💻",
      skills: ["HTML & CSS", "JavaScript", "React", "Next.js", "WordPress", "Responsive Design", "Web Performance", "Component Architecture", "Design Tokens", "Version Control (Git)"],
      color: "from-amber-400/10 to-orange-600/10",
      accent: "text-amber-400"
    },
    {
      title: "Social Media & Strategy",
      icon: "📱",
      skills: ["Social Media Management", "Content Strategy", "Content Scheduling", "Community Engagement", "Audience Growth", "Analytics & Reporting", "Campaign Planning", "Platform Management (Instagram, Facebook, LinkedIn, TikTok, X)"],
      color: "from-rose-500/10 to-orange-700/10",
      accent: "text-rose-400"
    },
    {
      title: "IT & Technical Support",
      icon: "🖥️",
      skills: ["IT Support & Troubleshooting", "Network Setup & Management", "System Administration", "Hardware & Software Setup", "Digital Transformation Consulting", "Technical Documentation"],
      color: "from-orange-400/10 to-amber-600/10",
      accent: "text-orange-500"
    }
  ]

  return (
    <section ref={sectionRef} id="skills" className="relative py-16 lg:py-20 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-600/[0.03] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-rose-600/[0.03] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className={`max-w-3xl mb-12 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:50ms]`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
            <p className="text-white/60 text-[9px] font-semibold tracking-[0.28em] uppercase">My Skills</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
            What I Bring to <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">the Table.</span>
          </h2>
          <p className="text-white/50 text-sm lg:text-base leading-relaxed font-medium">
            A carefully built skillset across creativity, technology, and strategy <br className="hidden lg:block" />
            developed over 3 years of real client work.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-700 backdrop-blur-[2px] overflow-hidden motion-reduce:animate-none ${
                inView ? 'animate-fade-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              {/* Category Glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${group.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{group.icon}</span>
                  <h3 className="text-xl font-black text-white tracking-tight">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/60 text-xs font-bold tracking-wide hover:bg-white/[0.06] hover:border-white/10 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/[0.02] pointer-events-none rounded-br-[2.5rem]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
