import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function FAQ({ locale }: { locale: Locale }) {
  return (
    <section id="faq" className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-28">
      <h2 className="text-3xl sm:text-4xl font-black text-primary mb-8">{t(locale, landingCopy.faq.title)}</h2>
      <div className="border-t border-outline-variant/40">
        {landingCopy.faq.items.map((item, index) => (
          <details key={item.question.en} className="group border-b border-outline-variant/40 py-5">
            <summary className="cursor-pointer font-bold text-primary text-lg rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {t(locale, item.question)}
            </summary>
            <div className="mt-4 text-on-surface-variant leading-relaxed">
              <p>{t(locale, item.answer)}</p>
              {index === 4 && (
                <a href="https://youtu.be/KzXumuvrEPo" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-semibold text-primary underline underline-offset-4">
                  {t(locale, landingCopy.upgrades.videoLabel)} ↗
                </a>
              )}
              {index === 5 && (
                <a href={`mailto:${landingCopy.contact.email}`} className="inline-block mt-3 font-semibold text-primary underline underline-offset-4 break-all">
                  {landingCopy.contact.email}
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
