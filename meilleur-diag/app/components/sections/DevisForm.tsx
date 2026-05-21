'use client'
import { useState } from 'react'
import { ArrowRight, ArrowLeft, Check, Home, Building2, BarChart3, User, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react'

type FormData = {
  pack: string
  typeBien: string
  anneeConstruction: string
  surface: string
  gaz: string
  nom: string
  email: string
  tel: string
  adresse: string
  ville: string
  codePostal: string
}

const INITIAL: FormData = {
  pack: '', typeBien: '', anneeConstruction: '', surface: '', gaz: '',
  nom: '', email: '', tel: '', adresse: '', ville: '', codePostal: '',
}

const packs = [
  {
    value: 'Pack diagnostics complet VENTE',
    label: 'Vente',
    icon: Home,
    desc: 'DPE, Amiante, Plomb, Électricité, Gaz, ERP, Loi Carrez…',
  },
  {
    value: 'Pack diagnostics complet Location',
    label: 'Location',
    icon: Building2,
    desc: 'DPE, Amiante, Plomb, Électricité, Gaz, ERP, Loi Boutin…',
  },
  {
    value: 'Audit Énergétique',
    label: 'Audit Énergétique',
    icon: BarChart3,
    desc: 'Audit complet des performances énergétiques du logement.',
  },
]

const typesBien = ['Maison', 'Appartement', 'Local commercial', 'Immeuble']
const annees = ['Avant 1948', 'Entre 1948 et 1997', 'Après 1997']
const surfaces = ['Moins de 50 m²', '51 à 100 m²', '101 à 150 m²', '150 à 200 m²', 'Plus de 200 m²']

const steps = [
  { label: 'Votre bien', icon: Home },
  { label: 'Vos coordonnées', icon: User },
  { label: 'Confirmation', icon: Check },
]

export default function DevisForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof FormData, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const canNext0 = form.pack && form.typeBien && form.anneeConstruction && form.surface
  const canNext1 = form.nom && form.email

  async function submit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/send-devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) setSent(true)
      else setError('Une erreur est survenue. Veuillez réessayer ou nous appeler.')
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <section className="py-20 bg-[#f8f8f8]" id="devis">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: 'Syne, system-ui' }}>
              Demande envoyée !
            </h2>
            <p className="text-mygray text-base leading-relaxed mb-2">
              Merci <strong className="text-black">{form.nom}</strong>, votre demande de devis a bien été reçue.
            </p>
            <p className="text-mygray text-sm mb-8">
              Nous vous recontactons généralement dans l'heure. Un email de confirmation vous a été envoyé à <strong className="text-black">{form.email}</strong>.
            </p>
            <a href="tel:+33782326451" className="btn-primary inline-flex px-7 py-3 rounded-xl">
              <Phone size={16} />
              07 82 32 64 51
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-[#f8f8f8]" id="devis">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-secondary">
              Gratuit & sans engagement
            </span>
            <h2 className="section-title mb-3">
              Demandez votre <span className="text-primary">devis en ligne</span>
            </h2>
            <p className="text-mygray text-base">
              Réponse garantie dans l'heure — Intervention 7j/7 sur Paris & Île-de-France
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-10">
            {steps.map((s, i) => {
              const Icon = s.icon
              const done = step > i
              const active = step === i
              return (
                <div key={s.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-bold
                      ${done ? 'bg-emerald-500 text-white' : active ? 'bg-primary text-black' : 'bg-white border-2 border-[#e8e8e8] text-[#aaa]'}`}
                    >
                      {done ? <Check size={16} /> : <Icon size={16} />}
                    </div>
                    <span className={`text-[9px] sm:text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap ${active ? 'text-black' : 'text-[#aaa]'}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-2 sm:w-24 h-px mx-3 mb-5 transition-all duration-500 ${step > i ? 'bg-emerald-400' : 'bg-[#e8e8e8]'}`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#ebebeb] overflow-hidden">

            {/* Step 0 — Bien */}
            {step === 0 && (
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                  Quel type de diagnostic souhaitez-vous ?
                </h3>

                {/* Pack selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {packs.map((p) => {
                    const Icon = p.icon
                    const active = form.pack === p.value
                    return (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => set('pack', p.value)}
                        className={`relative flex flex-col items-center text-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer
                          ${active
                            ? 'border-primary bg-primary/5'
                            : 'border-[#ebebeb] bg-white hover:border-primary/40 hover:bg-primary/2'
                          }`}
                      >
                        {active && (
                          <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check size={11} className="text-white" strokeWidth={3} />
                          </span>
                        )}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${active ? 'bg-primary' : 'bg-light'}`}>
                          <Icon size={22} className={active ? 'text-white' : 'text-mygray'} />
                        </div>
                        <span className={`font-bold text-sm ${active ? 'text-black' : 'text-mygray'}`} style={{ fontFamily: 'Syne, system-ui' }}>
                          {p.label}
                        </span>
                        <span className="text-[11px] text-[#aaa] leading-snug">{p.desc}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Type de bien */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Type de bien <span className="text-primary">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {typesBien.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => set('typeBien', t)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer
                            ${form.typeBien === t
                              ? 'border-primary bg-primary/5 text-black'
                              : 'border-[#ebebeb] text-mygray hover:border-primary/40'
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Année */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Année de construction <span className="text-primary">*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {annees.map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => set('anneeConstruction', a)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all duration-200 text-left cursor-pointer
                            ${form.anneeConstruction === a
                              ? 'border-primary bg-primary/5 text-black'
                              : 'border-[#ebebeb] text-mygray hover:border-primary/40'
                            }`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Surface */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Surface habitable <span className="text-primary">*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {surfaces.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => set('surface', s)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all duration-200 text-left cursor-pointer
                            ${form.surface === s
                              ? 'border-primary bg-primary/5 text-black'
                              : 'border-[#ebebeb] text-mygray hover:border-primary/40'
                            }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gaz */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Installation gaz ?
                    </label>
                    <div className="flex gap-2">
                      {['Oui', 'Non'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => set('gaz', g)}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer
                            ${form.gaz === g
                              ? 'border-primary bg-primary/5 text-black'
                              : 'border-[#ebebeb] text-mygray hover:border-primary/40'
                            }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={!canNext0}
                    className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
                      ${canNext0
                        ? 'bg-primary text-black hover:bg-secondary cursor-pointer shadow-lg shadow-primary/20'
                        : 'bg-[#f0f0f0] text-[#aaa] cursor-not-allowed'
                      }`}
                    style={{ fontFamily: 'Syne, system-ui' }}
                  >
                    Continuer
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 1 — Coordonnées */}
            {step === 1 && (
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                  Vos coordonnées
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Nom complet <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        value={form.nom}
                        onChange={(e) => set('nom', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                      <input
                        type="email"
                        placeholder="jean@exemple.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={form.tel}
                        onChange={(e) => set('tel', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Adresse */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Adresse du bien
                    </label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                      <input
                        type="text"
                        placeholder="12 rue de la Paix"
                        value={form.adresse}
                        onChange={(e) => set('adresse', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Ville */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Ville
                    </label>
                    <input
                      type="text"
                      placeholder="Paris"
                      value={form.ville}
                      onChange={(e) => set('ville', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Code postal */}
                  <div>
                    <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-2">
                      Code postal
                    </label>
                    <input
                      type="text"
                      placeholder="75001"
                      value={form.codePostal}
                      onChange={(e) => set('codePostal', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-mygray hover:text-black transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={15} />
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canNext1}
                    className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
                      ${canNext1
                        ? 'bg-primary text-black hover:bg-secondary cursor-pointer shadow-lg shadow-primary/20'
                        : 'bg-[#f0f0f0] text-[#aaa] cursor-not-allowed'
                      }`}
                    style={{ fontFamily: 'Syne, system-ui' }}
                  >
                    Vérifier
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 — Confirmation */}
            {step === 2 && (
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-lg text-black mb-2" style={{ fontFamily: 'Syne, system-ui' }}>
                  Récapitulatif de votre demande
                </h3>
                <p className="text-sm text-mygray mb-7">Vérifiez les informations avant d'envoyer.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Bien card */}
                  <div className="rounded-2xl bg-[#f8f8f8] p-5 border border-[#ebebeb]">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#aaa] mb-3">Votre bien</p>
                    {[
                      ['Pack', form.pack],
                      ['Type', form.typeBien],
                      ['Construction', form.anneeConstruction],
                      ['Surface', form.surface],
                      ['Gaz', form.gaz || 'Non précisé'],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-center justify-between py-1.5 border-b border-[#ebebeb] last:border-0">
                        <span className="text-xs text-[#aaa] font-medium">{label}</span>
                        <span className="text-xs font-semibold text-black max-w-[55%] text-right">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact card */}
                  <div className="rounded-2xl bg-[#f8f8f8] p-5 border border-[#ebebeb]">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#aaa] mb-3">Vos coordonnées</p>
                    {[
                      ['Nom', form.nom],
                      ['Email', form.email],
                      ['Tél', form.tel || '—'],
                      ['Adresse', form.adresse || '—'],
                      ['Ville', form.ville || '—'],
                      ['CP', form.codePostal || '—'],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-center justify-between py-1.5 border-b border-[#ebebeb] last:border-0">
                        <span className="text-xs text-[#aaa] font-medium">{label}</span>
                        <span className="text-xs font-semibold text-black max-w-[60%] text-right truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notice */}
                <div className="flex gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4 mb-7">
                  <span className="text-base mt-0.5">💡</span>
                  <p className="text-xs text-mygray leading-relaxed">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par Meilleur Diag concernant votre demande de devis. Aucune donnée ne sera transmise à des tiers.
                  </p>
                </div>

                {error && (
                  <p className="text-xs text-red-500 bg-red-50 rounded-xl px-4 py-3 mb-5">{error}</p>
                )}

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-mygray hover:text-black transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={15} />
                    Modifier
                  </button>
                  <button
                    type="button"
                    onClick={submit}
                    disabled={loading}
                    className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm bg-primary text-black hover:bg-secondary transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Syne, system-ui' }}
                  >
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Envoi en cours…</>
                    ) : (
                      <><Check size={16} /> Envoyer ma demande</>
                    )}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Reassurance strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { icon: '🔒', text: 'Données sécurisées' },
              { icon: '⚡', text: 'Réponse en moins d\'1h' },
              { icon: '📋', text: 'Sans engagement' },
              { icon: '📞', text: '07 82 32 64 51' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs font-medium text-mygray">
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}