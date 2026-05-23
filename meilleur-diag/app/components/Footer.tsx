
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import FooterSocial from './FooterSocial'

const services = [
  { label: 'DPE (Performance Énergétique)', href: '/services/diagnostic-performance-energetique' },
  { label: 'Diagnostic Amiante', href: '/services/diagnostic-amiante' },
  { label: 'Diagnostic Plomb', href: '/services/diagnostic-plomb' },
  { label: 'Diagnostic Électricité', href: '/services/diagnostic-electricite' },
  { label: 'Diagnostic Gaz', href: '/services/diagnostic-gaz' },
  { label: 'Diagnostic Termites', href: '/services/diagnostic-termites' },
  { label: 'Loi Carrez', href: '/services/diagnostic-loi-carrez' },
  { label: 'Loi Boutin', href: '/services/diagnostic-loi-boutin' },
  { label: 'Risques Naturels (ERP)', href: '/services/diagnostic-risques-naturels' },
  { label: 'Assainissement', href: '/services/diagnostic-assainissement' },
]

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Services', href: '/services' },
  { label: 'Pourquoi Meilleur Diag ?', href: '/diagnostic-immobilier-paris' },
  { label: 'Diagnostic Immobiler Paris', href: '/diagnostic-immobilier' },
  { label: 'Demande de Devis', href: '/devis-diagnostic-immobilier' },
  { label: 'Contactez-Nous', href: '/contact' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'FAQ', href: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className='flex flex-col items-center justify-center'>
            <div className="flex items-center justify-center gap-2 mb-5">
            <Image src={"/images/logo.png"} width={200} height={150} alt='logo'/>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 text-center">
              Votre expert en diagnostic immobilier à Paris et Île-de-France. Diagnostiqueurs certifiés, tarifs transparents, résultats rapides.
            </p>
            <FooterSocial/>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Nos Diagnostics
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-primary text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-primary text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contactez-Nous
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="tel:+33782326451" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Appelez-nous</p>
                    <p className="text-white text-sm font-semibold group-hover:text-primary transition-colors">07 82 32 64 51</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@meilleur-diag.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Email</p>
                    <p className="text-white text-sm group-hover:text-primary transition-colors">contact@meilleur-diag.com</p>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Zone d'intervention</p>
                    <p className="text-white text-sm">Paris & Île-de-France</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              © 2026 Meilleur Diag. Tous droits réservés.
            </p>
            <p className="text-white/20 text-xs">
              Développé par{' '}
              <Link href="https://og93.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                OG93
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}