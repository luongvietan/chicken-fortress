"use client";

import { useState } from "react";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function TechnicalSpecs({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="specs" data-animate="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-3">
          {t(locale, landingCopy.specs.title)}
        </h2>
        <p data-anim="subtitle" className="text-on-surface-variant max-w-2xl mx-auto">
          {t(locale, landingCopy.specs.intro)}
        </p>
      </div>

      <div className="space-y-3">
        {landingCopy.specs.groups.map((g, i) => {
          const isOpen = open === i;
          const panelId = `spec-panel-${i}`;
          return (
            <div
              key={i}
              data-anim="card"
              className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-black/[0.02] transition-colors"
              >
                <span className="font-black text-primary">{t(locale, g.title)}</span>
                <LandingIcon
                  name={isOpen ? "minus" : "plus"}
                  size={20}
                  className="text-primary shrink-0"
                />
              </button>
              {isOpen ? (
                <div id={panelId} className="px-5 pb-5">
                  {g.rows.map((r, j) => (
                    <div
                      key={j}
                      className="flex items-start justify-between gap-6 py-3 border-b border-outline-variant/20 last:border-0"
                    >
                      <p className="text-on-surface-variant">{t(locale, r.label)}</p>
                      <p className="font-bold text-primary text-right">{t(locale, r.value)}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
