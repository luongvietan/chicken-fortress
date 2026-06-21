import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function Gallery({ locale }: { locale: Locale }) {
  return (
    <section id="gallery" data-animate="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-10 sm:mb-12 text-center">
        {t(locale, landingCopy.gallery.title)}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {landingCopy.gallery.items.map((img) => (
          <figure
            key={img.src}
            data-anim="card"
            className="group rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 bg-surface-container-lowest"
          >
            <img
              src={img.src}
              alt={t(locale, img.alt)}
              loading="lazy"
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="p-3 text-sm text-on-surface-variant">{t(locale, img.alt)}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
