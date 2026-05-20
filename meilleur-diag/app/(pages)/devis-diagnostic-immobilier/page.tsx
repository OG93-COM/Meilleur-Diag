import CTAYellow from '@/app/components/CTAYellow'
import PageHeader from '@/app/components/PageHeader'
import DevisForm from '@/app/components/sections/DevisForm'
import Stats from '@/app/components/sections/Stats'

export default function DevisPage() {
  return (
    <>
        <PageHeader
            title="Devis Diagnostic Immobilier à Paris"
            subtitle="Obtenez rapidement votre devis pour tous vos diagnostics immobiliers : DPE, amiante, plomb, gaz, électricité et termites. Intervention rapide et diagnostiqueurs certifiés."
            crumbs={[
                { label: 'Accueil', href: '/' },
                { label: 'Devis', href: '/devis-diagnostic-immobilier' }
            ]}
            />
        <Stats/>
        <DevisForm/>
        <CTAYellow/>
    </>
  )
}
