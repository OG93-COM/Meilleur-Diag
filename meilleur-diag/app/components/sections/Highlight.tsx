'use client'

import {
  ShieldCheck,
  FileCheck,
  Scale,
  Home,
} from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'Protection des acheteurs',
    desc: 'Le diagnostic immobilier informe clairement sur l’état du bien avant un achat.',
  },
  {
    icon: <Home size={26} />,
    title: 'Protection des locataires',
    desc: 'Il garantit la sécurité, la transparence et la performance énergétique du logement.',
  },
  {
    icon: <Scale size={26} />,
    title: 'Obligation légale',
    desc: 'Les diagnostics sont obligatoires pour vendre ou louer un bien en France.',
  },
  {
    icon: <FileCheck size={26} />,
    title: 'Rapports Certifiés',
    desc: 'Documents conformes à la réglementation immobilière française.',
  },
]

export default function Highlight() {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-5">
            Diagnostic Immobilier Paris
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white"
            style={{ fontFamily: 'Syne, system-ui' }}
          >
            Pourquoi le diagnostic immobilier est-il important ?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Les diagnostics immobiliers permettent de sécuriser les transactions,
            protéger les occupants et garantir la conformité du bien avant une
            vente ou une location.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.05]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/20 rounded-full blur-2xl" />
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl font-semibold mb-3 text-white"
                  style={{ fontFamily: 'Syne, system-ui' }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}