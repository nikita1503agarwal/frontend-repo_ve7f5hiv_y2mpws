import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  return (
    <form
      action="https://formspree.io/f/mjkvpvej"
      method="POST"
      onSubmit={() => setStatus('submitting')}
      className="max-w-2xl"
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-slate-200 text-sm">Name</span>
          <input name="name" required className="mt-1 w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-slate-200 text-sm">Email</span>
          <input type="email" name="email" required className="mt-1 w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
        </label>
      </div>
      <label className="block mt-4">
        <span className="text-slate-200 text-sm">Budget (optional)</span>
        <input name="budget" className="mt-1 w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="$1k–$5k" />
      </label>
      <label className="block mt-4">
        <span className="text-slate-200 text-sm">Message</span>
        <textarea name="message" required rows="5" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
      </label>
      <button type="submit" className="mt-5 inline-flex items-center px-5 py-3 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/20 hover:bg-emerald-500/30">
        {status==='submitting' ? 'Sending…' : "Let’s build something — say hi"}
      </button>
      <p className="mt-3 text-sm text-slate-400">You can also reach me via <a className="underline" href="mailto:hello@bhuvan.dev">email</a>, <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>, or <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>.</p>
    </form>
  )
}
