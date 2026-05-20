import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

interface PageHeaderProps {
  title: string
  subtitle?: string
  crumbs: Crumb[]
}

export default function PageHeader({ title, subtitle, crumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-black pt-32 pb-22 overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(rgba(255,170,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,170,23,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px', }}/>
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-5" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-white/20" />}
              {c.href ? (
                <Link href={c.href} className="text-xs text-white/40 hover:text-primary transition-colors font-medium">
                  {c.label}
                </Link>
              ) : (
                <span className="text-xs text-primary font-semibold">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight "
          style={{ fontFamily: 'Syne, system-ui' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/50 text-base max-w-5xl leading-relaxed">{subtitle}</p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-b from-transparent to-black" />
    </section>
  )
}