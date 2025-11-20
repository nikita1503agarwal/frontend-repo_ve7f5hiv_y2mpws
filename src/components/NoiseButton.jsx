import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function NoiseButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 150, damping: 15 })
  const sy = useSpring(my, { stiffness: 150, damping: 15 })

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    mx.set(Math.max(-40, Math.min(40, x)))
    my.set(Math.max(-40, Math.min(40, y)))
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      style={{ perspective: 800 }}
      className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur ${className}`}
      {...props}
    >
      <motion.span
        style={{ rotateX: sy.to([ -40, 40 ], [ 10, -10 ]), rotateY: sx.to([ -40, 40 ], [ -10, 10 ]), transformStyle: 'preserve-3d' }}
        className="relative z-10"
      >
        {children}
      </motion.span>
      {/* Glow that follows cursor */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
        style={{
          background: 'radial-gradient(140px 80px at 50% 50%, rgba(0,184,148,0.45), transparent)',
          translateX: sx,
          translateY: sy,
        }}
      />
      {/* Shimmer edge */}
      <span aria-hidden className="absolute inset-0 rounded-2xl [mask-image:radial-gradient(260px_80px_at_50%_30px,black,transparent)] bg-[linear-gradient(120deg,rgba(255,255,255,0.28),transparent_50%)] mix-blend-overlay" />
    </motion.button>
  )
}
