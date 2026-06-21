import type { Locale } from "../content/landingCopy";
import { TopNav } from "./layout/TopNav";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { TrustStrip } from "./sections/TrustStrip";
import { CompanyOverview } from "./sections/CompanyOverview";
import { ProductOverview } from "./sections/ProductOverview";
import { UniqueValue } from "./sections/UniqueValue";
import { HowItWorks } from "./sections/HowItWorks";
import { WhatsIncluded } from "./sections/WhatsIncluded";
import { FeaturesGrid } from "./sections/FeaturesGrid";
import { TechnicalSpecs } from "./sections/TechnicalSpecs";
import { ProductDetails } from "./sections/ProductDetails";
import { Gallery } from "./sections/Gallery";
import { ProfitMetrics } from "./sections/ProfitMetrics";
import { FinancialModel } from "./sections/FinancialModel";
import { PreOrderCTA } from "./sections/PreOrderCTA";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div className="text-on-surface bg-background landing-grass-bg min-h-screen">
      <TopNav locale={locale} />
      <main className="pt-20 sm:pt-24 overflow-x-hidden">
        <Hero locale={locale} />
        <TrustStrip locale={locale} />
        <CompanyOverview locale={locale} />
        <ProductOverview locale={locale} />
        <UniqueValue locale={locale} />
        <HowItWorks locale={locale} />
        <WhatsIncluded locale={locale} />
        <FeaturesGrid locale={locale} />
        <TechnicalSpecs locale={locale} />
        <ProductDetails locale={locale} />
        <Gallery locale={locale} />
        <ProfitMetrics locale={locale} />
        <FinancialModel locale={locale} />
        <PreOrderCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
