import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const featured = [
  {
    title: 'Cloud Taskboard',
    desc: 'Kanban task board with real-time sync and cloud functions.',
    stack: ['React', 'Tailwind', 'Firebase'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Dev Analytics',
    desc: 'Minimal analytics for portfolio traffic and conversions.',
    stack: ['Next.js', 'Plausible', 'Vercel'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'API Starter',
    desc: 'FastAPI + MongoDB starter with auth and CRUD boilerplate.',
    stack: ['FastAPI', 'MongoDB', 'Docker'],
    live: 'https://example.com',
    code: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1549185856-46f74cfc0d20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBUEklMjBTdGFydGVyfGVufDB8MHx8fDE3NjM2NTgwNzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

function Card({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={p.image} alt="Project cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg">{p.title}</h3>
        <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map(s => (
            <span key={s} className="px-2 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">{s}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a href={p.live} className="inline-flex items-center gap-2 text-emerald-300 hover:text-white"><ExternalLink className="w-4 h-4"/> Live</a>
          <a href={p.code} className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Github className="w-4 h-4"/> Code</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map((p) => (
        <Card key={p.title} p={p} />
      ))}
    </div>
  )
}
