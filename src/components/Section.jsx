export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
