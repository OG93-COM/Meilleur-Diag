'use client'

import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative flex items-center justify-center w-55 h-25 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl border border-primary/20" />

          <div className="absolute inset-0">
            <div className="absolute top-0 left-[-40%] w-[40%] h-full bg-linear-to-r from-transparent via-primary/30 to-transparent skew-x-[-20deg] animate-shine" />
          </div>

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Meilleur Diag"
            width={190}
            height={70}
            priority
            className="object-contain relative z-10"
          />
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
          <span
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: '0.15s' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: '0.3s' }}
          />
        </div>

        <p className="mt-5 text-sm tracking-[0.3em] uppercase text-gray-400">
          Chargement...
        </p>
      </div>
    </div>
  )
}