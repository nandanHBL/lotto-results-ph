import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'PCSO Jackpot Tracker - Current Prize Amounts 2026',
  description: 'Track current PCSO lottery jackpot amounts for all games. See real-time prize pools and progressive jackpots.',
};

const quickSummaryBullets = [
  'PCSO lottery jackpots accumulate progressively, growing with each draw until someone wins, creating increasingly larger prize pools.',
  'The 6/58 Ultra Lotto offers the highest jackpots, regularly exceeding ₱25 million with potential for even larger amounts.',
  'Track jackpot amounts in real-time to plan your plays around larger prize pools and maximize your potential winnings.',
];

const jackpotData = [
  {
    game: '6/58 Ultra Lotto',
    currentJackpot: '₱28,500,000',
    trend: 'up',
    lastUpdate: 'Today, 9:00 PM',
    description: 'Highest jackpot lottery with progressive prizes',
  },
  {
    game: '6/55 Grand Lotto',
    currentJackpot: '₱16,200,000',
    trend: 'up',
    lastUpdate: 'Today, 9:00 PM',
    description: 'Major lottery with substantial prize pool',
  },
  {
    game: 'Mega Lotto 6/45',
    currentJackpot: '₱12,500,000',
    trend: 'stable',
    lastUpdate: 'Today, 9:00 PM',
    description: 'Mid-range lottery game',
  },
  {
    game: 'Super Lotto 6/49',
    currentJackpot: '₱18,750,000',
    trend: 'up',
    lastUpdate: 'Today, 9:00 PM',
    description: 'Popular 6-number lottery',
  },
  {
    game: '3D Swertres',
    currentJackpot: '₱4,500',
    trend: 'stable',
    lastUpdate: 'Today, 9:00 PM',
    description: 'Daily 3-digit game',
  },
];

function getTrendIcon(trend: string) {
  if (trend === 'up') return '📈';
  if (trend === 'down') return '📉';
  return '➡️';
}

export default function JackpotTrackerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              What are the current PCSO lottery jackpot amounts?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Track real-time jackpot amounts across all PCSO lottery games in 2026.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="Jackpot Tracker" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Jackpot Cards */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              Which lottery has the largest current jackpot?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jackpotData.map((data, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1 font-heading">
                        {data.game}
                      </h3>
                      <p className="text-xs text-muted-foreground">{data.description}</p>
                    </div>
                    <span className="text-2xl">{getTrendIcon(data.trend)}</span>
                  </div>

                  <div className="bg-primary/10 border border-primary rounded p-4 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Current Jackpot</p>
                    <p className="text-3xl font-bold text-accent">{data.currentJackpot}</p>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Updated: {data.lastUpdate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Slot 2 */}
          <AdSlot type="native-4x1" />

          {/* Information Grid */}
          <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                How do jackpots grow?
              </h3>
              <p className="text-sm text-foreground mb-4">
                Jackpots accumulate through a progressive system:
              </p>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span>A percentage of ticket sales is allocated to the jackpot fund</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span>With each draw without a winner, the jackpot increases</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span>Large jackpots attract more players, creating larger pools</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">4.</span>
                  <span>When someone wins, the jackpot resets to minimum</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">5.</span>
                  <span>The cycle begins again with growth accumulation</span>
                </li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                Why track jackpots?
              </h3>
              <p className="text-sm text-foreground mb-4">
                Monitoring jackpot amounts helps you:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Identify games with larger potential winnings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Plan plays when jackpots are at historical highs</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Understand risk vs. reward for each game</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Make informed decisions about ticket purchases</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Stay updated on the hottest lottery games</span>
                </li>
              </ul>
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

          {/* CTA */}
          <section className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4 font-heading">
              Big jackpots are calling
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With ₱28+ million available in 6/58 Ultra Lotto, now is a great time to play. Check current results and try your luck!
            </p>
            <a
              href="/6-58-ultra"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-secondary transition-colors font-heading"
            >
              Check Ultra Lotto Results
            </a>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
