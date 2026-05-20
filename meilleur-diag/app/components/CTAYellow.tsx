import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTAYellow() {
return (
    <div className="bg-primary">
        <div className="container-custom py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                <h3 className="font-display text-2xl font-bold text-black">
                    Besoin d'un diagnostic immobilier à Paris ?
                </h3>
                <p className="text-black/70 mt-1 text-sm">
                    Intervention 7j/7 — Rapport en moins de 24h — Diagnostiqueurs certifiés
                </p>
                </div>
                <div className="flex gap-3 shrink-0">
                <Link href="tel:+33782326451" className="flex items-center gap-2 bg-black text-white font-semibold px-5 py-3 rounded-lg hover:bg-black/80 transition-colors text-sm">
                    <Phone size={16} />
                    07 82 32 64 51
                </Link>
                <Link href="/devis-diagnostic-immobilier" className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm">
                    Devis Gratuit
                    <ArrowRight size={16} />
                </Link>
                </div>
            </div>
        </div>
    </div>
)
}
