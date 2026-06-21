import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function ProductDetails({ locale }: { locale: Locale }) {
  return (
    <section id="details" data-animate="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-3">
          {t(locale, landingCopy.details.title)}
        </h2>
        <p data-anim="subtitle" className="text-on-surface-variant max-w-2xl mx-auto">
          {t(locale, landingCopy.details.subtitle)}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {landingCopy.details.items.map((d) => (
          <figure
            key={d.src}
            data-anim="card"
            className="rounded-xl overflow-hidden shadow-sm border border-outline-variant/15 bg-surface-container-lowest"
          >
            <a
              href={d.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white"
              aria-label={t(locale, d.caption)}
            >
              <img
                src={d.src}
                alt={t(locale, d.caption)}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </a>
            <figcaption className="p-4 text-sm font-semibold text-primary">
              {t(locale, d.caption)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
