'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { FaqItem } from '../(pages)/faq/page'

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map(({ question, answer, links }, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
            open === i ? 'border-[#ffaa17]/40 bg-[#fffdf7]' : 'border-[#ebebeb] bg-white hover:border-[#ffaa17]/20'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer"
          >
            <span
              className={`font-semibold text-sm leading-snug transition-colors ${
                open === i ? 'text-[#222429]' : 'text-[#222429]'
              }`}
              style={{ fontFamily: 'Syne, system-ui' }}
            >
              {question}
            </span>
            <ChevronDown
              size={18}
              className={`text-[#ffaa17] shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>

          {open === i && (
            <div className="px-5 pb-5">
              <div className="border-t border-[#ffaa17]/10 pt-4">
                <p className="text-sm text-[#686a6f] leading-relaxed mb-3">{answer}</p>
                {links && links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {links.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffaa17] hover:text-[#e09200] transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#ffaa17]" />
                        {label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}