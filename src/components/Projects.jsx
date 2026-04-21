import React, { useEffect, useMemo, useRef, useState } from 'react'
import sample1 from '../assets/sample1.png'
import sample2 from '../assets/sample2.png'

const Projects = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.16 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  const items = useMemo(
    () => [
      {
        title: 'Fundify',
        category: 'System Design',
        subtitle: 'System Design',
        description:
          'A fund management platform used by NGOs to track allocations, approvals, and reporting built for clarity, accountability, and speed.',
        tags: ['System Design', 'Web App'],
        href: 'https://fundifyvc.vercel.app/',
        accent: 'from-orange-500/25 via-rose-500/10 to-transparent',
        span: 'lg:col-span-7',
      },
      {
        title: 'Kenya Transport Summit & Expo',
        category: 'Web Development',
        subtitle: 'Web Development',
        description:
          'A high-impact event website built to communicate a national vision with clarity structured content, clear calls-to-action, and responsive performance for attendees, partners, and stakeholders.',
        tags: ['Web Development', 'Event', 'UI/UX'],
        href: 'https://www.kenyatransportsummit.com/',
        accent: 'from-amber-400/25 via-orange-500/10 to-transparent',
        span: 'lg:col-span-5',
      },
      {
        title: 'Midland',
        category: 'Web Development',
        subtitle: 'Web Development',
        description:
          'A modern company website for professional surveying services designed to feel trustworthy and premium, with crisp hierarchy, service-focused sections, and smooth, mobile first interactions.',
        tags: ['Web Development', 'Brand', 'Services'],
        href: 'https://midland-mu.vercel.app/',
        accent: 'from-rose-500/20 via-orange-500/10 to-transparent',
        span: 'lg:col-span-5',
      },
      {
        title: 'Women Shaping Cities',
        category: 'Social Media',
        subtitle: 'Social Media Management',
        description:
          'Social presence management and content direction that keeps messaging consistent, active, and engaging.',
        tags: ['Social Media', 'Strategy'],
        href: 'https://www.linkedin.com/company/women-shaping-cities/',
        accent: 'from-sky-400/20 via-rose-500/10 to-transparent',
        span: 'lg:col-span-7',
      },
      {
        title: 'NAPTA',
        category: 'Social Media',
        subtitle: 'Social Media Management',
        description:
          'Ongoing social management and posting support maintaining a consistent brand voice and steady engagement.',
        tags: ['Social Media', 'Management'],
        href: 'https://www.linkedin.com/company/88047507',
        accent: 'from-indigo-400/20 via-sky-400/10 to-transparent',
        span: 'lg:col-span-5',
      },
      {
        title: 'Poster Series Sample 01',
        category: 'Graphic Design',
        subtitle: 'Graphic Design',
        description:
          'High-contrast poster layout with strong hierarchy and modern typography built for attention and readability.',
        tags: ['Graphic Design', 'Poster'],
        image: sample1,
        href: null,
        accent: 'from-orange-500/20 via-amber-400/10 to-transparent',
        span: 'lg:col-span-6',
      },
      {
        title: 'Poster Series Sample 02',
        category: 'Graphic Design',
        subtitle: 'Graphic Design',
        description:
          'Clean grid-based composition with bold color and brand ready spacing, designed for quick scanning.',
        tags: ['Graphic Design', 'Poster'],
        image: sample2,
        href: null,
        accent: 'from-rose-500/20 via-orange-500/10 to-transparent',
        span: 'lg:col-span-6',
      },
    ],
    []
  )

  const categories = ['All', 'Web Development', 'System Design', 'Graphic Design', 'Social Media']
  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Ambient background */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-orange-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[520px] h-[520px] bg-rose-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.10),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.10),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(251,191,36,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-3xl mb-14 motion-reduce:animate-none ${
            inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'
          } [animation-delay:60ms]`}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
            <p className="text-white/60 text-[9px] font-semibold tracking-[0.28em] uppercase">Projects</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 tracking-tight">
            Selected work across <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">design + development</span>.
          </h2>
          <p className="text-white/55 text-sm lg:text-base leading-relaxed font-medium">
            Web experiences, systems, design work, and social strategy focused on outcomes and polish.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap gap-2 mb-8 motion-reduce:animate-none ${
            inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'
          } [animation-delay:120ms]`}
        >
          {categories.map((c) => {
            const isActive = c === active
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 border backdrop-blur-md ${
                  isActive
                    ? 'bg-orange-500/15 border-orange-500/25 text-white shadow-sm shadow-orange-500/10'
                    : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {filtered.map((p, idx) => {
            const clickable = Boolean(p.href)
            const isLightbox = Boolean(p.image) && !p.href
            const CardTag = clickable ? 'a' : isLightbox ? 'button' : 'div'
            const sharedProps = clickable
              ? { href: p.href, target: '_blank', rel: 'noreferrer' }
              : isLightbox
                ? {
                    type: 'button',
                    onClick: () => setLightbox({ title: p.title, src: p.image }),
                  }
                : {}

            return (
              <CardTag
                key={`${p.title}-${idx}`}
                {...sharedProps}
                className={`group relative ${p.span} rounded-[1.75rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/25 transition-all duration-500 backdrop-blur-md overflow-hidden p-6 lg:p-7 motion-reduce:animate-none ${
                  inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'
                } [animation-delay:${180 + idx * 80}ms] ${clickable ? 'cursor-pointer' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange-500/12 to-rose-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">{p.subtitle}</p>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mt-2 group-hover:text-orange-300 transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    {clickable ? (
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/20 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    ) : isLightbox ? (
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/20 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 7h16M4 17h16M7 4v16M17 4v16" />
                        </svg>
                      </div>
                    ) : (
                      <div className="shrink-0 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/50 text-[10px] font-semibold tracking-[0.22em] uppercase">
                        Sample
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-white/50 text-sm lg:text-[15px] leading-relaxed flex-grow">{p.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-white/55 text-[10px] font-semibold tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
                </div>
              </CardTag>
            )
          })}
        </div>
      </div>

      {/* Poster lightbox */}
      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6 bg-black/70 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightbox(null)
          }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80">
              <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
            <p className="mt-3 text-center text-white/70 text-sm">{lightbox.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Projects

