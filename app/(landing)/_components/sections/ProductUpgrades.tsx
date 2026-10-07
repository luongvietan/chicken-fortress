import Image from "next/image";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function ProductUpgrades({ locale }: { locale: Locale }) {
  const copy = landingCopy.upgrades;

  return (
    <section id="upgrades" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-28">
      <div className="max-w-3xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-primary mb-3">{t(locale, copy.title)}</h2>
        <p className="text-on-surface-variant">{t(locale, copy.intro)}</p>
      </div>
      <figure className="overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30">
        <Image src="/images/new-design.webp" alt={t(locale, copy.designCaption)} width={1800} height={844} sizes="(max-width: 1200px) 100vw, 1136px" className="w-full h-auto" />
        <figcaption className="p-4 text-sm font-semibold text-primary">{t(locale, copy.designCaption)}</figcaption>
      </figure>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {copy.images.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30">
            <Image src={item.src} alt={t(locale, item.caption)} width={1800} height={869} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto" />
            <figcaption className="p-4 text-sm font-semibold text-primary">{t(locale, item.caption)}</figcaption>
          </figure>
        ))}
      </div>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-10">
        {copy.items.map((item) => (
          <div key={item.title.en} className="py-5 border-t border-outline-variant/40">
            <dt className="font-bold text-lg text-primary mb-2">{t(locale, item.title)}</dt>
            <dd className="text-on-surface-variant leading-relaxed">{t(locale, item.desc)}</dd>
          </div>
        ))}
      </dl>
      <a href="https://youtu.be/KzXumuvrEPo" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 font-bold text-primary underline underline-offset-4 hover:opacity-80">
        {t(locale, copy.videoLabel)} ↗
      </a>
    </section>
  );
}
