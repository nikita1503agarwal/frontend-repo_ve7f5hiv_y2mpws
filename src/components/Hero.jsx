import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-[#0b1020]/50 to-[#0b1020] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7 text-white">
            <AnimatePresence>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              >
                Hi, I'm <span className="text-emerald-300">Bhuvaneshwaran C</span>
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-slate-300 max-w-2xl"
            >
              Aspiring Software Developer • Cloud & Web
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                className="px-5 py-3 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/20 hover:bg-emerald-500/30 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                Hire Me
              </a>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="mt-10 flex flex-wrap gap-4 text-slate-300"
              aria-label="Quick stats"
            >
              {[
                'Projects shipped: 6+',
                'Primary tech: React, Node, Cloud',
                'Location: India',
              ].map((item) => (
                <motion.li key={item} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="lg:col-span-5"></div>
        </div>
      </div>
    </section>
  )
}
