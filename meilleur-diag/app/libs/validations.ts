import { z } from 'zod'

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Vérifie que le nom ressemble à un vrai nom humain */
const nomRegex = /^[a-zA-ZÀ-ÿ\s'\-]{2,60}$/

/** Vérifie que l'email a un domaine valide avec une extension réelle */
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

/** Vérifie que le domaine email n'est pas clairement faux */
function isEmailDomainPlausible(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase() ?? ''

  // Domaines jetables / faux connus
  const blacklist = [
    'test.com', 'fake.com', 'example.com', 'mail.com',
    'fsdfd.com', 'asdf.com', 'qwerty.com', 'aaaa.com',
    'zzzz.com', 'abc.com', 'xxx.com', '123.com',
  ]
  if (blacklist.includes(domain)) return false

  // Le domaine doit avoir au moins un point et une extension de 2+ chars
  const parts = domain.split('.')
  if (parts.length < 2) return false
  if (parts[parts.length - 1].length < 2) return false

  // Le domaine local (avant @) ne doit pas être que des lettres répétées
  const local = email.split('@')[0]
  if (/^(.)\1{3,}$/.test(local)) return false  // ex: aaaa, bbbbbb

  return true
}

/** Vérifie que le nom n'est pas juste des caractères répétés ou du clavier */
function isNomPlausible(nom: string): boolean {
  const cleaned = nom.trim().toLowerCase()

  // Pas que des consonnes (covn, asdf, qwerty…)
  const vowels = /[aeiouyàâäéèêëîïôöùûüÿ]/i
  if (!vowels.test(cleaned)) return false

  // Pas une séquence de clavier évidente
  const keyboard = ['qwerty', 'azerty', 'asdf', 'zxcv', 'qsdf', 'wxcv']
  if (keyboard.some(k => cleaned.includes(k))) return false

  // Pas que des caractères répétés (aaaaaa, bbbbb)
  if (/^(.)\1{2,}$/.test(cleaned.replace(/\s/g, ''))) return false

  // Doit contenir au moins 2 lettres distinctes
  const unique = new Set(cleaned.replace(/[\s'\-]/g, '').split(''))
  if (unique.size < 2) return false

  return true
}

// ── Schéma Contact ─────────────────────────────────────────────────────────────

export const contactSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères.')
    .max(60, 'Le nom est trop long.')
    .regex(nomRegex, 'Le nom contient des caractères non valides.')
    .refine(isNomPlausible, 'Veuillez entrer votre vrai nom.'),

  email: z
    .string()
    .min(5, 'L\'email est requis.')
    .max(100, 'L\'email est trop long.')
    .regex(emailRegex, 'L\'adresse email n\'est pas valide.')
    .refine(isEmailDomainPlausible, 'Ce domaine email ne semble pas valide.'),

  tel: z
    .string()
    .max(20, 'Numéro trop long.')
    .optional()
    .or(z.literal('')),

  sujet: z
    .string()
    .min(1, 'Veuillez choisir un sujet.'),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères.')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères.'),

  honeypot: z.string().optional(),
  timestamp: z.number().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

// ── Schéma Devis ───────────────────────────────────────────────────────────────

export const devisSchema = z.object({
  pack: z.string().min(1, 'Veuillez choisir un pack.'),
  typeBien: z.string().min(1, 'Veuillez choisir un type de bien.'),
  anneeConstruction: z.string().min(1, 'L\'année de construction est requise.'),
  surface: z.string().min(1, 'La surface est requise.'),
  gaz: z.string().optional().or(z.literal('')),

  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères.')
    .max(60, 'Le nom est trop long.')
    .regex(nomRegex, 'Le nom contient des caractères non valides.')
    .refine(isNomPlausible, 'Veuillez entrer votre vrai nom.'),

  email: z
    .string()
    .min(5, 'L\'email est requis.')
    .max(100, 'L\'email est trop long.')
    .regex(emailRegex, 'L\'adresse email n\'est pas valide.')
    .refine(isEmailDomainPlausible, 'Ce domaine email ne semble pas valide.'),

  tel: z
    .string()
    .max(20)
    .optional()
    .or(z.literal('')),

  adresse: z
    .string()
    .max(200)
    .optional()
    .or(z.literal('')),

  honeypot: z.string().optional(),
  timestamp: z.number().optional(),
})

export type DevisFormData = z.infer<typeof devisSchema>