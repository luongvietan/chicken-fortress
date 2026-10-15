import Image from "next/image";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function BulletCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm" data-anim="card">
      <p className="font-black text-primary mb-2">{title}</p>
      <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
    </div>
  );
}

export function UniqueValue({ locale }: { locale: Locale }) {
  return (
    <section data-animate="value" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-4">
          {t(locale, landingCopy.valueProp.title)}
        </h2>
        <p data-anim="subtitle" className="text-on-surface-variant text-lg max-w-3xl mx-auto">
          {t(locale, landingCopy.valueProp.intro)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {landingCopy.valueProp.bullets.map((b) => (
          <BulletCard
            key={t(locale, b.title)}
            title={t(locale, b.title)}
            desc={t(locale, b.desc)}
          />
        ))}
      </div>

      <div className="mt-10 sm:mt-12 space-y-6">
        {landingCopy.valueProp.images.map((item) => {
          const image = item[locale];

          return (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(locale, landingCopy.valueProp.openImage)}: ${t(locale, item.alt)}`}
              className="block overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src={image.src}
                alt={t(locale, item.alt)}
                width={image.width}
                height={image.height}
                sizes="(max-width: 1200px) 100vw, 1136px"
                className="w-full h-auto"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
