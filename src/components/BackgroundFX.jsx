import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(0,184,148,0.22),transparent),radial-gradient(900px_600px_at_10%_10%,rgba(255,255,255,0.04),transparent),linear-gradient(180deg,#0b1020,rgba(11,16,32,0.9))]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Floating accent blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(0,184,148,0.35), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
        className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(0,184,148,0.28), transparent)' }}
      />

      {/* Slow drifting lights */}
      <motion.div
        className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(0,184,148,0.22), transparent 60%)' }}
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(0,184,148,0.18), transparent 60%)' }}
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light" style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'>\n<filter id=\'n\'>\n  <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/>\n  <feColorMatrix type=\'saturate\' values=\'0\'/>\n</filter>\n<rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/>\n</svg>")',
        backgroundSize: '200px 200px',
      }} />
    </div>
  )
}
