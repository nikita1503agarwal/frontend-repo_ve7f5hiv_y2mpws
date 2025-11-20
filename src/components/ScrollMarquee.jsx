import { motion } from 'framer-motion'

export default function ScrollMarquee() {
  const items = ['React', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion', 'TypeScript', 'Docker', 'Vercel']
  return (
    <div className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1020] via-transparent to-[#0b1020] [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 whitespace-nowrap">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
