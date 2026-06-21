// Scaffold shell — full section composition is wired in Task 10.
export function LandingPage({ locale }: { locale: "en" | "vi" }) {
  return (
    <div className="text-on-surface bg-background landing-grass-bg min-h-screen">
      <main className="pt-20 sm:pt-24 overflow-x-hidden">
        <p className="max-w-[1200px] mx-auto px-4 py-24 text-primary">
          The Chicken Fortress ({locale}) — under construction.
        </p>
      </main>
    </div>
  );
}
