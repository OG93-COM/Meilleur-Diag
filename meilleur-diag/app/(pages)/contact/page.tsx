import CTAYellow from '@/app/components/CTAYellow'
import PageHeader from '@/app/components/PageHeader'
import React from 'react'

export default function Contact() {
  return (
    <>
        <PageHeader
            title="Contact Diagnostic Immobilier à Paris"
            subtitle="Obtenez rapidement votre devis pour tous vos diagnostics immobiliers : DPE, amiante, plomb, gaz, électricité et termites. Intervention rapide et diagnostiqueurs certifiés."
            crumbs={[
                { label: 'Accueil', href: '/' },
                { label: 'Devis', href: '/devis-diagnostic-immobilier' }
            ]}
            />
        <div className='h-100'>
            Form
        </div>
        <CTAYellow/>
    </>
  )
}
