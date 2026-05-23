"use client"

import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function FooterSocial() {
  return (
    <div className="flex gap-3">
              <Link href="https://www.facebook.com/MeilleurDiagParis" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookLogoIcon size={20} className="text-white/60 hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/company/meilleur-diag" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <LinkedinLogoIcon size={20} className="text-white/60 hover:text-primary" />
              </Link>
              <Link href="https://www.instagram.com/meilleur.diag/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramLogoIcon size={20} className="text-white/60 hover:text-primary" />
              </Link>
    </div>
  );
}
