'use client'
import { useEffect, useRef } from 'react'
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  MapPinned,
} from 'lucide-react'

const stats = [
  {
    icon: <BadgeCheck size={22} />,
    label: 'Diagnostics réalisés',
    desc: 'pour ventes & locations',
  },
  {
    icon: <ShieldCheck size={22} />,
    label: 'Diagnostiqueurs certifiés',
    desc: 'rapports conformes DDT',
  },
  {
    icon: <Clock3 size={22} />,
    label: 'Rapport livré rapidement',
    desc: 'après intervention',
  },
  {
    icon: <MapPinned size={22} />,
    label: 'Paris & IDF',
    desc: 'Intervention rapide',
  },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.stat-item').forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 120)
            })
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="hidden lg:flex relative overflow-hidden pb-6 bg-black border-b" style={{ borderColor: '#1f1f1f' }} >

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="stat-item animate-on-scroll text-center px-6 py-5"
            >
              <div className="flex justify-center mb-4 text-primary">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                  {icon}
                </div>
              </div>

              <p className="font-semibold text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Syne, system-ui', color: '#fff' }}
              >
                {label}
              </p>

              <p className="text-sm text-gray-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}