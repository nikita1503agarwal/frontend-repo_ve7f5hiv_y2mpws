import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const sections = links.map(l => document.querySelector(l.href))
      const scrollPos = window.scrollY + window.innerHeight / 3
      let current = '#home'
      sections.forEach((sec, idx) => {
        if (sec && sec.offsetTop <= scrollPos) current = links[idx].href
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (!el) return
    setOpen(false)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/5' : 'bg-transparent'}`} aria-label="Primary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>Bhuvaneshwaran C</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="relative text-sm text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
              >
                {link.label}
                {active === link.href && (
                  <motion.span layoutId="nav-underline" className="absolute left-0 -bottom-1 h-0.5 bg-emerald-400" style={{ width: '100%' }} />
                )}
              </a>
            ))}
            <a href="#contact" onClick={(e)=>onNavClick(e,'#contact')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 hover:text-white hover:bg-emerald-500/20 border border-emerald-400/20 transition-colors">
              <Mail className="w-4 h-4" /> Hire Me
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors">
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <ul className="px-4 py-3 space-y-2">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={(e)=>onNavClick(e,l.href)} className={`block px-3 py-2 rounded ${active===l.href?'bg-white/10 text-white':'text-slate-300 hover:text-white'}`}>{l.label}</a>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <a href="#contact" onClick={(e)=>onNavClick(e,'#contact')} className="flex-1 px-3 py-2 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/20 text-center">Hire Me</a>
              <a href="/resume.pdf" className="flex-1 px-3 py-2 rounded bg-white/10 text-white border border-white/20 text-center">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
