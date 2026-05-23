'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowRight, ArrowLeft, Check, Home, Building2, BarChart3,
  User, Mail, Phone, MapPin, CheckCircle2, Loader2, Shield, Clock, FileCheck,
} from 'lucide-react'
import { sendDevisEmail } from '@/app/libs/devis.actions'

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
}

const INITIAL: FormData = {
  pack: '', typeBien: '', anneeConstruction: '', surface: '', gaz: '',
  nom: '', email: '', tel: '', adresse: '',
}

const packs = [
  { value: 'Pack diagnostics complet VENTE',    label: 'Vente',             icon: Home,       desc: 'DPE, Amiante, Plomb, Gaz, ERP…' },
  { value: 'Pack diagnostics complet Location', label: 'Location',          icon: Building2,  desc: 'DPE, Amiante, Plomb, Gaz, ERP…' },
  { value: 'Audit Énergétique',                 label: 'Audit Énergétique', icon: BarChart3,  desc: 'Performances énergétiques complètes.' },
]

const typesBien = ['Maison', 'Appartement', 'Local commercial', 'Immeuble']
const annees   = ['Avant 1948', 'Entre 1948 et 1997', 'Après 1997']
const surfaces = ['< 50 m²', '50 – 100 m²', '101 – 150 m²', '151 – 200 m²', '> 200 m²']

const trust = [
  { icon: Shield,    text: 'Certifiés COFRAC' },
  { icon: Clock,     text: 'Rapport en 24h' },
  { icon: FileCheck, text: '100% conformes DDT' },
]

/* ─── Sidebar content per sub-step ─────────────────────────────── */
const sidebarContent = [
  {
    title: 'Quel diagnostic vous faut-il ?',
    body:  'Vente, location ou audit : nous couvrons tous les diagnostics obligatoires à Paris et en Île-de-France.',
    img:   '/images/devis/devis-diagnostic-vente.jpg',
  },
  {
    title: 'Maison, appartement, local…',
    body:  'Nos diagnostiqueurs certifiés s\'adaptent à tous les types de biens, de la chambre de bonne à l\'immeuble entier.',
    img:   '/images/devis/devis-type-bien.jpg',
  },
  {
    title: 'L\'année de construction compte',
    body:  'Elle détermine les diagnostics obligatoires — amiante, plomb, électricité — et le tarif final.',
    img:   '/images/devis/devis-annee-construction.jpg',
  },
  {
    title: 'Surface & installation gaz',
    body:  'La surface influe sur la durée d\'intervention. La présence de gaz nécessite un diagnostic spécifique.',
    img:   '/images/devis/devis-surface.jpg',
  },
]

export default function DevisFormMulti() {
  const [step, setStep]     = useState(0)
  const [sub,  setSub]      = useState(0)
  const [form, setForm]     = useState<FormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [error,   setError]   = useState('')
  const [honeypot, setHoneypot] = useState('')
  const startTs = useRef(Date.now())

  useEffect(() => { startTs.current = Date.now() }, [])

  const set = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }))

  const progress = step === 0 ? (sub / 4) * 33 : step === 1 ? 66 : 99

  const sidebar = step === 0 ? sidebarContent[sub] : null

  async function submit() {
    if (honeypot) return // silent bot block
    setLoading(true)
    setError('')
    const result = await sendDevisEmail({ ...form, honeypot, timestamp: startTs.current })
    setLoading(false)
    if (result.success) setSent(true)
    else setError(result.error ?? 'Une erreur est survenue.')
  }

  /* ── PillBtn helper ─────────────────────────────────────────── */
  const PillBtn = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      type="button" onClick={onClick}
      className={`relative flex items-center justify-between w-full px-5 py-4 rounded-2xl border-2 text-sm font-semibold transition-all duration-150 cursor-pointer text-left
        ${active ? 'border-primary bg-primary/5 text-black' : 'border-[#ebebeb] bg-white text-mygray hover:border-primary/40'}`}
      style={{ fontFamily: 'Syne, system-ui' }}
    >
      {label}
      {active && (
        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 ml-3">
          <Check size={11} className="text-white" strokeWidth={3} />
        </span>
      )}
    </button>
  )

  /* ── Success screen ─────────────────────────────────────────── */
  if (sent) return (
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
            Merci <strong className="text-black">{form.nom}</strong>, votre demande a bien été reçue.
          </p>
          <p className="text-mygray text-sm mb-8">
            Nous vous recontactons dans l'heure. Un email de confirmation a été envoyé à <strong className="text-black">{form.email}</strong>.
          </p>
          <a href="tel:+33782326451" className="btn-primary inline-flex px-7 py-3 rounded-xl">
            <Phone size={16} /> 07 82 32 64 51
          </a>
        </div>
      </div>
    </section>
  )

  /* ── Main layout ────────────────────────────────────────────── */
  return (
    <section className="py-16 md:py-20 bg-[#f8f8f8]" id="devis">
      <div className="container-custom">

        {/* Page header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-secondary">
            Gratuit & sans engagement
          </span>
          <h2 className="section-title mb-2">
            Devis <span className="text-primary">en ligne</span>
          </h2>
          <p className="text-mygray text-sm">Réponse dans l'heure — 7j/7 Paris & Île-de-France</p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="h-1.5 bg-[#e0e0e0] rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Desktop split / Mobile single column */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_480px] gap-0 bg-white rounded-3xl border border-[#ebebeb] shadow-sm overflow-hidden">

            {/* ── LEFT — image sidebar (desktop only) ─────────── */}
            <div className="hidden lg:flex flex-col relative overflow-hidden bg-black">

              {/* Image */}
              <div className="absolute inset-0">
                {sidebar ? (
                  <Image src={"/images/diagnostic-immo-paris.jpg"}  alt={sidebar.title} fill className="object-cover opacity-10 transition-all duration-700" priority />
                ) : (
                  <Image src="/images/meilleur-diagnostic-immobilier.jpg"  alt="Vos coordonnées" fill className="object-cover opacity-10" />
                )}
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content over image */}
              <div className="relative z-10 flex flex-col justify-between h-full p-9">


                {/* Dynamic text */}
                <div className="mb-4">
                  {sidebar ? (
                    <>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        Étape {sub + 1} / 4
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-snug" style={{ fontFamily: 'Syne, system-ui' }}>
                        {sidebar.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {sidebar.body}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        {step === 1 ? 'Vos coordonnées' : 'Récapitulatif'}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-snug" style={{ fontFamily: 'Syne, system-ui' }}>
                        {step === 1
                          ? 'Presque terminé !'
                          : 'Vérifiez votre demande'}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step === 1
                          ? 'Renseignez vos coordonnées pour recevoir votre devis personnalisé dans l\'heure.'
                          : 'Un dernier regard avant d\'envoyer. Nous vous répondons très rapidement.'}
                      </p>
                    </>
                  )}

                  {/* Trust badges */}
                  <div className="mt-7 flex flex-col gap-2.5">
                    {trust.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                          <Icon size={13} className="text-primary" />
                        </div>
                        <span className="text-xs text-white/70 font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT — form ────────────────────────────────── */}
            <div className="flex flex-col">

              {/* Honeypot — invisible to real users */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <input
                  type="text" name="website" value={honeypot} tabIndex={-1} autoComplete="off"
                  onChange={e => setHoneypot(e.target.value)}
                />
              </div>

              {/* ── sub 0 — Pack ──────────────────────────────── */}
              {step === 0 && sub === 0 && (
                <div className="p-5 md:p-9 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-2">1 / 4</p>
                  <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quel diagnostic souhaitez-vous ?
                  </h3>
                  <div className="space-y-3">
                    {packs.map(p => {
                      const Icon = p.icon
                      const active = form.pack === p.value
                      return (
                        <button key={p.value} type="button"
                          onClick={() => { set('pack', p.value); setSub(1) }}
                          className={`flex items-center gap-3 w-full px-3 py-4 rounded-2xl border-2 text-left transition-all duration-150 cursor-pointer
                            ${active ? 'border-primary bg-primary/5' : 'border-[#ebebeb] bg-white hover:border-primary/40'}`}
                        >
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-primary' : 'bg-[#f4f4f4]'}`}>
                            <Icon size={20} className={active ? 'text-white' : 'text-mygray'} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm text-black" style={{ fontFamily: 'Syne, system-ui' }}>{p.label}</p>
                            <p className="text-xs text-[#aaa] mt-0.5 truncate">{p.desc}</p>
                          </div>
                          {active && (
                            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                              <Check size={11} className="text-white" strokeWidth={3} />
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* ── sub 1 — Type de bien ──────────────────────── */}
              {step === 0 && sub === 1 && (
                <div className="p-7 md:p-9 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-2">2 / 4</p>
                  <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                    Quel type de bien ?
                  </h3>
                  <div className="space-y-3">
                    {typesBien.map(t => (
                      <PillBtn key={t} label={t} active={form.typeBien === t}
                        onClick={() => { set('typeBien', t); setSub(2) }} />
                    ))}
                  </div>
                  <button onClick={() => setSub(0)} className="flex items-center gap-1.5 text-xs text-[#aaa] hover:text-black mt-6 transition-colors cursor-pointer">
                    <ArrowLeft size={13} /> Retour
                  </button>
                </div>
              )}

              {/* ── sub 2 — Année ─────────────────────────────── */}
              {step === 0 && sub === 2 && (
                <div className="p-7 md:p-9 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-2">3 / 4</p>
                  <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                    Année de construction ?
                  </h3>
                  <div className="space-y-3">
                    {annees.map(a => (
                      <PillBtn key={a} label={a} active={form.anneeConstruction === a}
                        onClick={() => { set('anneeConstruction', a); setSub(3) }} />
                    ))}
                  </div>
                  <button onClick={() => setSub(1)} className="flex items-center gap-1.5 text-xs text-[#aaa] hover:text-black mt-6 transition-colors cursor-pointer">
                    <ArrowLeft size={13} /> Retour
                  </button>
                </div>
              )}

              {/* ── sub 3 — Surface + Gaz ─────────────────────── */}
              {step === 0 && sub === 3 && (
                <div className="p-7 md:p-9 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-2">4 / 4</p>
                  <h3 className="font-bold text-lg text-black mb-4" style={{ fontFamily: 'Syne, system-ui' }}>
                    Surface habitable ?
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-7">
                    {surfaces.map(s => (
                      <button key={s} type="button" onClick={() => set('surface', s)}
                        className={`py-3 px-3 rounded-xl border-2 text-xs font-semibold transition-all duration-150 cursor-pointer
                          ${form.surface === s ? 'border-primary bg-primary/5 text-black' : 'border-[#ebebeb] text-mygray hover:border-primary/40'}`}
                        style={{ fontFamily: 'Syne, system-ui' }}
                      >{s}</button>
                    ))}
                  </div>
                  <h3 className="font-bold text-sm text-black mb-3" style={{ fontFamily: 'Syne, system-ui' }}>
                    Installation gaz ?
                  </h3>
                  <div className="flex gap-3 mb-8">
                    {['Oui', 'Non'].map(g => (
                      <button key={g} type="button" onClick={() => set('gaz', g)}
                        className={`flex-1 py-3 rounded-xl border-2 text-xs font-semibold transition-all duration-150 cursor-pointer
                          ${form.gaz === g ? 'border-primary bg-primary/5 text-black' : 'border-[#ebebeb] text-mygray hover:border-primary/40'}`}
                        style={{ fontFamily: 'Syne, system-ui' }}
                      >{g}</button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setSub(2)} className="flex items-center gap-1.5 text-xs text-[#aaa] hover:text-black transition-colors cursor-pointer">
                      <ArrowLeft size={13} /> Retour
                    </button>
                    <button type="button" onClick={() => setStep(1)} disabled={!form.surface}
                      className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
                        ${form.surface ? 'bg-primary text-black hover:bg-secondary cursor-pointer shadow-lg shadow-primary/20' : 'bg-[#f0f0f0] text-[#aaa] cursor-not-allowed'}`}
                      style={{ fontFamily: 'Syne, system-ui' }}
                    >
                      Continuer <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 1 — Coordonnées ──────────────────────── */}
              {step === 1 && (
                <div className="p-7 md:p-9 flex-1">
                  <h3 className="font-bold text-lg text-black mb-6" style={{ fontFamily: 'Syne, system-ui' }}>
                    Vos coordonnées
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-1.5">
                        Nom complet <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                        <input type="text" placeholder="Nom et prenom" value={form.nom}
                          onChange={e => set('nom', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                        <input type="email" placeholder="nom@gmail.com" value={form.email}
                          onChange={e => set('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-1.5">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                        <input type="tel" placeholder="07 82 32 64 51" value={form.tel}
                          onChange={e => set('tel', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wide mb-1.5">
                        Adresse du bien
                      </label>
                      <div className="relative">
                        <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa]" />
                        <input type="text" placeholder="12 rue de la Paix, 75001 Paris" value={form.adresse}
                          onChange={e => set('adresse', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm text-black placeholder:text-[#bbb] focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button onClick={() => { setStep(0); setSub(3) }}
                      className="flex items-center gap-1.5 text-sm font-semibold text-mygray hover:text-black transition-colors cursor-pointer">
                      <ArrowLeft size={15} /> Retour
                    </button>
                    <button type="button" onClick={() => setStep(2)} disabled={!form.nom || !form.email}
                      className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
                        ${form.nom && form.email ? 'bg-primary text-black hover:bg-secondary cursor-pointer shadow-lg shadow-primary/20' : 'bg-[#f0f0f0] text-[#aaa] cursor-not-allowed'}`}
                      style={{ fontFamily: 'Syne, system-ui' }}
                    >
                      Vérifier <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 2 — Confirmation ─────────────────────── */}
              {step === 2 && (
                <div className="p-7 md:p-9 flex-1">
                  <h3 className="font-bold text-lg text-black mb-1" style={{ fontFamily: 'Syne, system-ui' }}>
                    Récapitulatif
                  </h3>
                  <p className="text-sm text-mygray mb-6">Vérifiez avant d'envoyer.</p>
                  <div className="rounded-2xl bg-[#f8f8f8] border border-[#ebebeb] divide-y divide-[#ebebeb] mb-5">
                    {([
                      ['Diagnostic',   form.pack],
                      ['Type',         form.typeBien],
                      ['Construction', form.anneeConstruction],
                      ['Surface',      form.surface],
                      ['Gaz',          form.gaz || '—'],
                      ['Nom',          form.nom],
                      ['Email',        form.email],
                      ['Tél',          form.tel || '—'],
                      ['Adresse',      form.adresse || '—'],
                    ] as [string, string][]).map(([label, val]) => (
                      <div key={label} className="flex items-center justify-between px-5 py-2.5">
                        <span className="text-xs text-[#aaa] font-medium">{label}</span>
                        <span className="text-xs font-semibold text-black max-w-[58%] text-right truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4 mb-6">
                    <span className="text-base mt-0.5">💡</span>
                    <p className="text-xs text-mygray leading-relaxed">
                      En soumettant ce formulaire, vous acceptez d'être recontacté par Meilleur Diag. Aucune donnée ne sera transmise à des tiers.
                    </p>
                  </div>
                  {error && (
                    <p className="text-xs text-red-500 bg-red-50 rounded-xl px-4 py-3 mb-5">{error}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <button onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-mygray hover:text-black transition-colors cursor-pointer">
                      <ArrowLeft size={15} /> Modifier
                    </button>
                    <button type="button" onClick={submit} disabled={loading}
                      className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm bg-primary text-black hover:bg-secondary transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Syne, system-ui' }}
                    >
                      {loading
                        ? <><Loader2 size={16} className="animate-spin" /> Envoi…</>
                        : <><Check size={16} /> Envoyer ma demande</>
                      }
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Reassurance strip */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            {[
              { icon: '🔒', text: 'Données sécurisées' },
              { icon: '⚡', text: "Réponse en – d'1h" },
              { icon: '📋', text: 'Sans engagement' },
              { icon: '📞', text: '07 82 32 64 51' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs font-medium text-mygray">
                <span>{icon}</span>{text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}