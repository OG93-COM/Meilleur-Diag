'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ArrowRight, CheckCircle2, Loader2,
  User, Mail, Phone, MessageSquare, Tag,
} from 'lucide-react'
import { sendContactEmail } from '@/app/libs/actions'
import { contactSchema } from '@/app/libs/validations'

const sujets = [
  'Demande informations',
  'Demande de devis',
  'Diagnostic DPE',
  'Pack Vente',
  'Pack Location',
  'Audit Énergétique',
  'Autre',
]

type FormState = {
  nom: string
  email: string
  tel: string
  sujet: string
  message: string
  honeypot: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const INIT: FormState = {
  nom: '', email: '', tel: '', sujet: '', message: '', honeypot: '',
}

// ── Composant champ ────────────────────────────────────────────────────────────
function Field({
  label, required, error, children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wide text-black mb-1.5">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  'w-full py-3 rounded-xl border bg-white text-sm text-black placeholder:text-[#ccc] focus:outline-none transition-colors'

function inputClass(error?: string) {
  return `${inputBase} ${error ? 'border-red-300 focus:border-red-400' : 'border-[#e8e8e8] focus:border-primary'}`
}

// ── Validation live (champ par champ) ─────────────────────────────────────────
function validateField(name: keyof FormState, value: string): string {
  const partial = { [name]: value }

  // On parse seulement le champ concerné
  const fieldSchema = contactSchema.shape[name as keyof typeof contactSchema.shape]
  if (!fieldSchema) return ''

  const result = fieldSchema.safeParse(value)
  if (!result.success) {
    return result.error.issues[0]?.message ?? 'Valeur invalide.'
  }
  return ''
}

// ── Composant principal ────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form,       setForm]       = useState<FormState>(INIT)
  const [errors,     setErrors]     = useState<FieldErrors>({})
  const [touched,    setTouched]    = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [loading,    setLoading]    = useState(false)
  const [sent,       setSent]       = useState(false)
  const [globalErr,  setGlobalErr]  = useState('')
  const startTs = useRef<number>(Date.now())

  useEffect(() => { startTs.current = Date.now() }, [])

  // Mise à jour d'un champ + validation live si déjà touché
  function set(k: keyof FormState, v: string) {
    setForm(f => ({ ...f, [k]: v }))
    if (touched[k]) {
      setErrors(e => ({ ...e, [k]: validateField(k, v) }))
    }
  }

  // Validation au blur
  function handleBlur(k: keyof FormState) {
    setTouched(t => ({ ...t, [k]: true }))
    setErrors(e => ({ ...e, [k]: validateField(k, form[k]) }))
  }

  // Validation complète avant envoi
  function validateAll(): boolean {
    const result = contactSchema.safeParse({ ...form, timestamp: startTs.current })
    if (result.success) {
      setErrors({})
      return true
    }
    const fieldErrors: FieldErrors = {}
    for (const err of result.error.issues) {
      const field = err.path[0] as keyof FormState
      if (!fieldErrors[field]) fieldErrors[field] = err.message
    }
    setErrors(fieldErrors)
    // Marquer tous les champs comme touchés pour afficher les erreurs
    setTouched({ nom: true, email: true, sujet: true, message: true })
    return false
  }

  const canSubmit =
    form.nom && form.email && form.sujet && form.message.length >= 10 &&
    !Object.values(errors).some(Boolean)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validateAll()) return
    setLoading(true)
    setGlobalErr('')

    const result = await sendContactEmail(
      { ...form, timestamp: startTs.current },
      'client'
    )
    setLoading(false)
    if (result.success) setSent(true)
    else setGlobalErr(result.error ?? 'Une erreur est survenue.')
  }

  // ── Succès ──────────────────────────────────────────────────────────────────
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

  // ── Formulaire ──────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Honeypot — invisible aux humains */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
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
        <Field label="Nom complet" required error={errors.nom}>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <input
              type="text"
              placeholder="Jean Dupont"
              value={form.nom}
              onChange={e => set('nom', e.target.value)}
              onBlur={() => handleBlur('nom')}
              autoComplete="name"
              className={`${inputClass(errors.nom)} pl-10 pr-4`}
            />
            {/* Indicateur vert si valide et touché */}
            {touched.nom && !errors.nom && form.nom && (
              <CheckCircle2 size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400" />
            )}
          </div>
        </Field>

        {/* Email */}
        <Field label="Email" required error={errors.email}>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <input
              type="email"
              placeholder="jean.dupont@gmail.com"
              value={form.email}
              onChange={e => set('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              autoComplete="email"
              className={`${inputClass(errors.email)} pl-10 pr-4`}
            />
            {touched.email && !errors.email && form.email && (
              <CheckCircle2 size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400" />
            )}
          </div>
          {/* Aide contextuelle */}
          {touched.email && errors.email && (
            <p className="text-[10px] text-[#bbb] mt-1">
              Ex : votre.nom@gmail.com, contact@entreprise.fr
            </p>
          )}
        </Field>

        {/* Téléphone */}
        <Field label="Téléphone" error={errors.tel}>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              value={form.tel}
              onChange={e => set('tel', e.target.value)}
              onBlur={() => handleBlur('tel')}
              autoComplete="tel"
              className={`${inputClass(errors.tel)} pl-10 pr-4`}
            />
          </div>
        </Field>

        {/* Sujet */}
        <Field label="Sujet" required error={errors.sujet}>
          <div className="relative">
            <Tag size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bbb] pointer-events-none" />
            <select
              value={form.sujet}
              onChange={e => set('sujet', e.target.value)}
              onBlur={() => handleBlur('sujet')}
              className={`${inputClass(errors.sujet)} pl-10 pr-8 appearance-none cursor-pointer`}
            >
              <option value="">Choisissez un sujet…</option>
              {sujets.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#bbb]"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </Field>

        {/* Message */}
        <div className="sm:col-span-2">
          <Field label="Message" required error={errors.message}>
            <div className="relative">
              <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-[#bbb] pointer-events-none" />
              <textarea
                placeholder="Décrivez votre besoin, le type de bien, la surface approximative…"
                value={form.message}
                onChange={e => set('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                rows={5}
                maxLength={2000}
                className={`${inputClass(errors.message)} pl-10 pr-4 resize-none`}
              />
            </div>
            <div className="flex items-center justify-between mt-1">
              {/* Barre de progression message */}
              <div className="flex-1 mr-4">
                <div className="h-0.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      form.message.length < 10
                        ? 'bg-red-300'
                        : form.message.length < 50
                          ? 'bg-amber-300'
                          : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, (form.message.length / 200) * 100)}%` }}
                  />
                </div>
              </div>
              <p className="text-[11px] text-[#bbb] shrink-0">
                {form.message.length} / 2000
              </p>
            </div>
          </Field>
        </div>
      </div>

      {/* Erreur globale */}
      {globalErr && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-600 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {globalErr}
        </div>
      )}

      {/* Résumé des erreurs si plusieurs */}
      {Object.values(errors).filter(Boolean).length > 1 && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-700">
          Veuillez corriger les erreurs dans le formulaire avant d'envoyer.
        </div>
      )}

      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <p className="text-[11px] text-[#bbb] leading-relaxed max-w-xs">
          Vos données sont traitées uniquement pour répondre à votre demande.
          Aucune transmission à des tiers.
          <a href="/politique-confidentialite" className="underline ml-1 hover:text-mygray transition-colors">
            Politique de confidentialité
          </a>
        </p>

        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200
            ${!loading
              ? 'bg-black text-white hover:bg-primary hover:text-black cursor-pointer shadow-lg shadow-black/10'
              : 'bg-[#f0f0f0] text-[#bbb] cursor-not-allowed'
            }`}
          style={{ fontFamily: 'Syne, system-ui' }}
        >
          {loading
            ? <><Loader2 size={15} className="animate-spin" /> Envoi en cours…</>
            : <>Envoyer le message <ArrowRight size={15} /></>
          }
        </button>
      </div>
    </form>
  )
}