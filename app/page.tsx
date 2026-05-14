import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { DrawCard } from '@/components/DrawCard';
import { mockLotteryData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Lotto Results PH - Latest PCSO Lottery Results Today',
  description: 'Check latest PCSO lottery results for 6/58 Ultra, 6/55 Grand, and 3D Swertres. Daily draws at 2 PM, 5 PM, and 9 PM. Updated in real-time.',
  openGraph: {
    title: 'Lotto Results PH - Latest PCSO Lottery Results Today',
    description: 'Check latest PCSO lottery results for 6/58 Ultra, 6/55 Grand, and 3D Swertres. Daily draws at 2 PM, 5 PM, and 9 PM.',
  },
};

const quickSummaryBullets = [
  'PCSO conducts official lottery draws three times daily at 2 PM, 5 PM, and 9 PM from Monday to Sunday.',
  'Check winning numbers immediately after each draw for 6/58 Ultra, 6/55 Grand, 3D Swertres, and other lottery games.',
  'Use our Lucky Pick generator to discover your next winning combination based on mathematical probability.',
];

export default function Home() {
  const latestDraws = mockLotteryData;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              What are the latest PCSO lottery results?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Stay updated with real-time PCSO lottery results. Check your numbers instantly for all major lottery games.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/6-58-ultra"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-accent transition-colors font-heading"
              >
                Check 6/58 Ultra Results
              </Link>
              <Link
                href="/lucky-pick"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-colors font-heading"
              >
                Generate Lucky Numbers
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
