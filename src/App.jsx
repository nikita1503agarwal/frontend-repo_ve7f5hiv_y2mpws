import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <main>
        <Hero />

        <Section id="about" title="About" subtitle="Concise personal bio, values, education, location">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 shadow-xl/10">
                <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="Portrait of Bhuvaneshwaran" className="w-28 h-28 rounded-2xl object-cover" />
                <h3 className="mt-4 text-xl font-semibold">Bhuvaneshwaran C</h3>
                <p className="text-slate-300">Aspiring Software Developer</p>
                <a href="/resume.pdf" className="mt-4 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20">Download Resume</a>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4 text-slate-300">
              <p>I build modern, cloud-first web experiences focused on performance, accessibility, and clean design. I enjoy working across the stack and collaborating closely with design and product.</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {['Education: B.E / B.Tech (insert)', 'Location: India', 'Values: Clarity, craft, iteration', 'Interests: UI, cloud, open-source'].map(i => (
                  <li key={i} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Technical stack, proficiency, and tools">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Frontend', items: ['React', 'Tailwind', 'Vite', 'Framer Motion'] },
              { name: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB'] },
              { name: 'Cloud & Tools', items: ['Git', 'Vercel/Netlify', 'Docker'] },
            ].map(group => (
              <div key={group.name} className="p-6 rounded-2xl bg-[#0f172a] border border-white/10">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map(i => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work and case studies">
          <Projects />
        </Section>

        <Section id="contact" title="Contact" subtitle="Frictionless ways to get in touch">
          <Contact />
        </Section>
      </main>

      <footer className="py-10 text-center text-slate-400 border-t border-white/5">
        <p>© {new Date().getFullYear()} Bhuvaneshwaran C. Built with care.</p>
      </footer>
    </div>
  )
}

export default App
