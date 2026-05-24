import CTAYellow from '@/app/components/CTAYellow'
import PageHeader from '@/app/components/PageHeader'
import DevisFormMulti from '@/app/components/sections/DevisFormMulti'

export default function DevisPage() {
  return (
    <>
        <PageHeader
            title="Devis Diagnostic Immobilier à Paris | Meilleur Diag"
            subtitle="Obtenez rapidement votre devis pour tous vos diagnostics immobiliers : DPE, amiante, plomb, gaz, électricité et termites. Intervention rapide et diagnostiqueurs certifiés."
            crumbs={[
                { label: 'Accueil', href: '/' },
                { label: 'Devis', href: '/devis-diagnostic-immobilier' }
            ]}
            />
        <DevisFormMulti/>
        <CTAYellow/>
    </>
  )
}
