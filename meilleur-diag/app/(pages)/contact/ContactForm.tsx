'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowRight, CheckCircle2, Loader2, User, Mail, Phone, MessageSquare, Tag } from 'lucide-react'
import { sendContactEmail } from '@/app/libs/actions'

const sujets = [
  'Demande de devis',
  'Diagnostic DPE',
  'Diagnostic Amiante',
  'Diagnostic Termites',
  'Pack Vente',
  'Pack Location',
  'Audit Énergétique',
  'Autre',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: '', email: '', tel: '', sujet: '', message: '', honeypot: '',
  })
  const [loading,  setLoading]  = useState(false)
  const [sent,     setSent]     = useState(false)
  const [error,    setError]    = useState('')
  const startTs = useRef<number>(Date.now())

  useEffect(() => { startTs.current = Date.now() }, [])

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const canSubmit = form.nom && form.email && form.sujet && form.message.length >= 10

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError('')
    const result = await sendContactEmail(
      { ...form, timestamp: startTs.current },
      'client'
    )
    setLoading(false)
    if (result.success) setSent(true)
    else setError(result.error ?? 'Une erreur est survenue.')
  }

  if (sent) return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
        <CheckCircle2 size={32} className="text-emerald-500" />
      </div>
      <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'Syne, system-ui' }}>
        Message envoyé !
      </h3>
      <p className="text-mygray text-sm leading-relaxed max-w-xs">
        Merci <strong className="text-black">{form.nom}</strong>. Nous vous répondons généralement dans l'heure.
        Un email de confirmation vous a été envoyé.
      </p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none'}}>
        <input
          type="text"
          name="website"
          value={form.honeypot}
          onChange={e => set('honeypot', e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Nom */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
            Nom complet <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]" />
            <input
              type="text"
              placeholder="Jean Dupont"
              value={form.nom}
              onChange={e => set('nom', e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e8e8] bg-white text-sm text-black placeholder:text-[#ccc] focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
            Email <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]" />
            <input
              type="email"
              placeholder="jean@exemple.com"
              value={form.email}
              onChange={e => set('email', e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e8e8] bg-white text-sm text-black placeholder:text-[#ccc] focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
            Téléphone
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb]" />
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              value={form.tel}
              onChange={e => set('tel', e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e8e8] bg-white text-sm text-black placeholder:text-[#ccc] focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Sujet */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
            Sujet <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Tag size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <select
              value={form.sujet}
              onChange={e => set('sujet', e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e8e8] bg-white text-sm text-black focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="">Choisissez un sujet…</option>
              {sujets.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#bbb]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
            Message <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-[#bbb]" />
            <textarea
              placeholder="Décrivez votre besoin, le type de bien, la surface approximative…"
              value={form.message}
              onChange={e => set('message', e.target.value)}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e8e8e8] bg-white text-sm text-black placeholder:text-[#ccc] focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <p className="text-[11px] text-[#bbb] mt-1 text-right">{form.message.length} / 2000</p>
        </div>
      </div>

      {error && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-600">
          {error}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <p className="text-[11px] text-[#bbb] leading-relaxed max-w-xs">
          Vos données sont traitées uniquement pour répondre à votre demande. Aucune transmission à des tiers.
        </p>
        <button
          type="submit"
          disabled={!canSubmit || loading}
          className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
            ${canSubmit && !loading
              ? 'bg-black text-white hover:bg-primary hover:text-black cursor-pointer shadow-lg shadow-black/10'
              : 'bg-[#f0f0f0] text-[#bbb] cursor-not-allowed'
            }`}
          style={{ fontFamily: 'Syne, system-ui' }}
        >
          {loading
            ? <><Loader2 size={15} className="animate-spin" /> Envoi…</>
            : <>Envoyer le message <ArrowRight size={15} /></>
          }
        </button>
      </div>
    </form>
  )
}