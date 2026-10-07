import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function Contact({ locale }: { locale: Locale }) {
  const copy = landingCopy.contact;

  return (
    <section id="contact" className="bg-primary text-white py-16 sm:py-24 scroll-mt-28">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-5">{t(locale, copy.title)}</h2>
        <p className="max-w-2xl mx-auto text-primary-fixed leading-relaxed">{t(locale, copy.body)}</p>
        <a href={`mailto:${copy.email}`} className="inline-flex mt-8 bg-tertiary-fixed-dim text-primary px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          {t(locale, copy.cta)}
        </a>
        <p className="mt-4 text-sm break-all">{copy.email}</p>
      </div>
    </section>
  );
}
