import React, { useEffect, useMemo, useRef, useState } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.18 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const email = 'danfrankline40@gmail.com'
  const phoneDisplay = '0704742914'
  const phoneTel = useMemo(() => phoneDisplay.replace(/[^\d+]/g, ''), [phoneDisplay])
  const githubUrl = 'https://github.com/dantekin-uk'
  const linkedinUrl = 'https://www.linkedin.com/in/dan-frankline-b0a69b30a/'
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(
    "Hi Dan,\n\nI'm reaching out about...\n\n"
  )}`

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Ambient background */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[520px] h-[520px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.10),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.10),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(251,191,36,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mb-14 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:60ms]`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
            <p className="text-white/60 text-[9px] font-semibold tracking-[0.28em] uppercase">Contact</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 tracking-tight">
            Let’s build something <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">worth remembering</span>.
          </h2>
          <p className="text-white/55 text-sm lg:text-base leading-relaxed font-medium">
            Send a message, share a brief, or just say hi. I’ll reply as soon as possible.
          </p>
        </div>

        {/* Bento layout */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Left: contact methods */}
          <div className={`lg:col-span-5 space-y-5 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:140ms]`}>
            <div className="rounded-[1.75rem] bg-white/[0.03] border border-white/5 backdrop-blur-md p-6 lg:p-7 overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-rose-500/10 rounded-full blur-3xl opacity-70" />
              <div className="relative">
                <h3 className="text-white font-bold text-lg">Direct</h3>
                <p className="text-white/50 text-sm mt-1">Fastest way to reach me.</p>

                <div className="mt-5 space-y-3">
                  <a
                    href={mailtoHref}
                    className="group flex items-center justify-between rounded-2xl bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 hover:border-orange-500/30 transition-all duration-300 px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 p-[1px] shadow-lg shadow-orange-500/10">
                        <div className="w-full h-full rounded-[11px] bg-slate-900 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">Email</p>
                        <p className="text-white font-semibold truncate">{email}</p>
                      </div>
                    </div>
                    <span className="text-white/50 text-xs group-hover:text-white transition-colors">Send</span>
                  </a>

                  <a
                    href={`tel:${phoneTel}`}
                    className="group flex items-center justify-between rounded-2xl bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 hover:border-amber-500/30 transition-all duration-300 px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 p-[1px] shadow-lg shadow-orange-500/10">
                        <div className="w-full h-full rounded-[11px] bg-slate-900 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.1 1.05a11.04 11.04 0 005.52 5.52l1.05-2.1a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">Phone / WhatsApp</p>
                        <p className="text-white font-semibold truncate">{phoneDisplay}</p>
                      </div>
                    </div>
                    <span className="text-white/50 text-xs group-hover:text-white transition-colors">Call</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white/[0.03] border border-white/5 backdrop-blur-md p-6 lg:p-7">
              <h3 className="text-white font-bold text-lg">Links</h3>
              <p className="text-white/50 text-sm mt-1">Find my work and profile.</p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.58 2 12.253c0 4.53 2.865 8.373 6.839 9.73.5.096.683-.22.683-.488 0-.24-.009-.877-.014-1.721-2.782.622-3.369-1.373-3.369-1.373-.454-1.185-1.11-1.5-1.11-1.5-.908-.638.069-.625.069-.625 1.003.073 1.53 1.06 1.53 1.06.892 1.567 2.341 1.115 2.91.852.09-.664.35-1.115.636-1.37-2.222-.26-4.555-1.14-4.555-5.07 0-1.12.389-2.034 1.026-2.752-.103-.26-.445-1.307.098-2.724 0 0 .84-.276 2.75 1.052A9.31 9.31 0 0 1 12 6.844c.85.004 1.705.118 2.504.345 1.909-1.328 2.748-1.052 2.748-1.052.544 1.417.202 2.464.1 2.724.64.718 1.025 1.632 1.025 2.752 0 3.94-2.336 4.807-4.566 5.062.36.318.68.946.68 1.907 0 1.377-.012 2.487-.012 2.826 0 .27.18.59.688.487 3.97-1.36 6.832-5.2 6.832-9.727C22 6.58 17.523 2 12 2z" />
                    </svg>
                    <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">GitHub</p>
                  </div>
                  <p className="text-white font-semibold mt-1 group-hover:text-orange-300 transition-colors">dantekin-uk</p>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.003V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.073-1.69 3.286 0 3.89 2.164 3.89 4.977v6.604zM5.337 7.433a1.83 1.83 0 1 1 0-3.66 1.83 1.83 0 0 1 0 3.66zM6.956 20.452H3.716V9h3.24v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <p className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">LinkedIn</p>
                  </div>
                  <p className="text-white font-semibold mt-1 group-hover:text-rose-300 transition-colors">Dan Frankline</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right: modern form (mailto) */}
          <div className={`lg:col-span-7 motion-reduce:animate-none ${inView ? 'animate-fade-up' : 'opacity-0 translate-y-4'} [animation-delay:220ms]`}>
            <div className="rounded-[1.75rem] bg-white/[0.03] border border-white/5 backdrop-blur-md p-6 lg:p-7 relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-amber-400/10 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-br from-rose-500/12 to-orange-500/10 rounded-full blur-3xl opacity-60" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">Send a message</h3>
                    <p className="text-white/50 text-sm mt-1">This opens your email app with everything filled in.</p>
                  </div>
                  <a
                    href={mailtoHref}
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 text-white text-xs font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Email me</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <form
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.location.href = mailtoHref
                  }}
                >
                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl bg-white/[0.04] border border-white/10 focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20 outline-none px-4 py-3 text-white placeholder:text-white/30 transition"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-2xl bg-white/[0.04] border border-white/10 focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20 outline-none px-4 py-3 text-white placeholder:text-white/30 transition"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me a bit about your project…"
                      className="w-full rounded-2xl bg-white/[0.04] border border-white/10 focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20 outline-none px-4 py-3 text-white placeholder:text-white/30 transition resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-1">
                    <p className="text-white/40 text-xs">
                      Prefer WhatsApp? Use the phone number above.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-xs font-bold transition-all duration-300"
                    >
                      <span>Open Email</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

