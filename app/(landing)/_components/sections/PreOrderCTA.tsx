import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-primary-fixed/30 pl-5">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">{label}</p>
      <p className="text-lg font-bold break-words">{value}</p>
    </div>
  );
}

export function PreOrderCTA({ locale }: { locale: Locale }) {
  const c = landingCopy.preOrder;
  const mailto = `mailto:${c.email}?subject=${encodeURIComponent(t(locale, c.mailSubject))}`;

  return (
    <section
      id="preorder"
      data-animate="funding"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center"
    >
      <div className="bg-primary text-white p-6 sm:p-10 lg:p-16 rounded-[2rem] space-y-7">
        <h2 data-anim="title" className="text-3xl sm:text-4xl lg:text-5xl font-black">
          {t(locale, c.title)}
        </h2>
        <p data-anim="body" className="text-primary-fixed/90 font-semibold max-w-3xl mx-auto leading-relaxed">
          {t(locale, c.subtitle)}
        </p>

        <div
          data-anim="card"
          className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-primary px-5 py-2.5 rounded-full font-bold"
        >
          <LandingIcon name="check_circle" size={18} className="text-primary" />
          {t(locale, c.bonus)}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-left max-w-3xl mx-auto pt-2">
          <ContactItem label={t(locale, c.emailLabel)} value={c.email} />
          <ContactItem label={t(locale, c.phoneLabel)} value={c.phone} />
          <ContactItem label={t(locale, c.zaloLabel)} value={c.zalo} />
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <a
            href={mailto}
            data-anim="cta"
            className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-primary px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform"
          >
            {t(locale, c.cta)}
            <LandingIcon name="mail" size={20} className="text-primary" />
          </a>
          <a
            href="/files/Chicken-Coop-Full-Product-Details.pdf"
            download
            className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/20 transition-colors"
          >
            {t(locale, c.downloadPdf)}
            <LandingIcon name="download" size={20} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
