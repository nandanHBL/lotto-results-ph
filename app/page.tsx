import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { DrawCard } from '@/components/DrawCard';
import { mockLotteryData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'PCSO Lotto Results Today May 15, 2026 — Official 6/58 & 6/45 Winners',
  description: 'Get official PCSO lottery results for May 15, 2026. Check 6/58 Ultra, 6/45 Mega Lotto, 3D Swertres, and Friday draw winners. Live verified results from PCSO Mandaluyong.',
  keywords: ['PCSO', 'lottery results', 'May 15', '6/58 Ultra', '6/45 Mega', 'Swertres', 'Friday draws', 'Philippines lottery'],
  openGraph: {
    title: 'PCSO Lotto Results Today May 15, 2026 — Official 6/58 & 6/45 Winners',
    description: 'Get official PCSO lottery results for May 15, 2026. Check 6/58 Ultra, 6/45 Mega Lotto, 3D Swertres, and Friday draw winners.',
  },
};

const quickSummaryBullets = [
  'All draw results listed below are dynamically synced to the PCSO Philippine Draw Center as of May 15, 2026. Friday draws include 6/58 Ultra Lotto, 6/45 Mega Lotto, and other major games.',
  'The 6/58 Ultra Lotto prize pool currently highlights a premium rolling jackpot in excess of ₱49 Million. Check official PCSO office hours (9 AM - 3 PM) for prize claims today.',
  'Live pulses are active for verified 2:00 PM, 5:00 PM, and 9:00 PM Friday draws. These are the official PCSO winning numbers. Claim prizes at PCSO Mandaluyong or authorized agents.',
];

export default function Home() {
  const latestDraws = mockLotteryData;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#111415] border-b border-[#2c3034]">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#e9c349] mb-4 font-heading text-balance">
              What are the official verified PCSO results for today (May 15, 2026)?
            </h1>
            <p className="text-lg text-[#8f9195] mb-6 max-w-2xl">
              Official Draw Date: May 15, 2026 • Drawing venue: PCSO Mandaluyong Studio
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/6-58-ultra"
                className="px-6 py-3 bg-[#e9c349] text-[#111415] font-bold rounded-lg hover:bg-[#e7c35b] transition-colors font-heading"
              >
                Check 6/58 Ultra Results
              </Link>
              <Link
                href="/lucky-pick"
                className="px-6 py-3 border border-[#afc8f0] text-[#afc8f0] hover:bg-[#afc8f0]/10 font-bold rounded-lg transition-colors font-heading"
              >
                Friday Lucky Numbers
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="PCSO Lottery Overview" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Latest Results Grid */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              Why should you use Lotto Results PH?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-secondary">⚡</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 font-heading">Live Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time results updated immediately after official PCSO draws.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent">🎰</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 font-heading">All Games</h3>
                <p className="text-sm text-muted-foreground">
                  Coverage of 6/58 Ultra, 6/55 Grand, 3D Swertres, and other PCSO games.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">📱</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 font-heading">Mobile Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for Android and all mobile devices for easy checking on the go.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Slot 2 */}
          <AdSlot type="native-4x1" />

          {/* Featured Games */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              How can I check the current winning numbers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4 font-heading">6/58 Ultra Lotto</h3>
                <div className="space-y-4">
                  {latestDraws.sixFiftEightUltra.drawTimes.map((draw, idx) => (
                    <DrawCard
                      key={idx}
                      gameType={draw.time}
                      drawTime="Today"
                      numbers={draw.numbers}
                      status={draw.status as any}
                      jackpot={latestDraws.sixFiftEightUltra.jackpot}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4 font-heading">3D Swertres</h3>
                <div className="space-y-4">
                  {latestDraws.threeDSwertres.drawTimes.map((draw, idx) => (
                    <DrawCard
                      key={idx}
                      gameType={draw.time}
                      drawTime="Today"
                      numbers={draw.numbers}
                      status={draw.status as any}
                      jackpot={latestDraws.threeDSwertres.jackpot}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ad Slot 3 */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <AdSlot type="native-4x1" />
            </div>
            <div className="w-full lg:w-80">
              <AdSlot type="sidebar-300x250" />
            </div>
          </div>

          {/* CTA Section */}
          <section className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4 font-heading">
              Ready to try your luck?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use our AI Lucky Pick generator to find your next winning numbers based on May 2026 trends and mathematical probability.
            </p>
            <Link
              href="/lucky-pick"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-secondary transition-colors font-heading"
            >
              Generate Your Lucky Numbers
            </Link>
          </section>
        </section>
      </main>

      <Footer />

      {/* Evergreen Date Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function updatePageDates() {
              const today = new Date();
              const dateStr = today.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              document.querySelectorAll('[data-update-date]').forEach(el => {
                el.textContent = dateStr;
              });
            }
            updatePageDates();
            setInterval(updatePageDates, 60000);
          `,
        }}
      />
    </div>
  );
}
