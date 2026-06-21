import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function WhatsIncluded({ locale }: { locale: Locale }) {
  return (
    <section id="included" data-animate="value" className="bg-surface-container py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-3">
            {t(locale, landingCopy.included.title)}
          </h2>
          <p data-anim="subtitle" className="text-on-surface-variant max-w-2xl mx-auto">
            {t(locale, landingCopy.included.intro)}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {landingCopy.included.items.map((it) => (
            <li key={t(locale, it)} data-anim="card" className="flex gap-3 items-start">
              <LandingIcon
                name="check_circle"
                size={22}
                strokeWidth={2.5}
                className="text-primary shrink-0 mt-0.5"
              />
              <span className="text-on-surface">{t(locale, it)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
