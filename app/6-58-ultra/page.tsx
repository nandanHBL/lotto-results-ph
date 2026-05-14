import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { DrawCard } from '@/components/DrawCard';
import { mockLotteryData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: '6/58 Ultra Lotto Results - PCSO Draws Today',
  description: 'Check the latest 6/58 Ultra Lotto results. Daily draws at 2 PM, 5 PM, and 9 PM. Pick 6 numbers from 1-58 for a chance to win up to ₱25 million.',
  openGraph: {
    title: '6/58 Ultra Lotto Results - PCSO Draws Today',
    description: 'Check the latest 6/58 Ultra Lotto results. Daily draws at 2 PM, 5 PM, and 9 PM.',
  },
};

const quickSummaryBullets = [
  'The 6/58 Ultra Lotto features the highest jackpot prize among PCSO lotteries, reaching up to ₱25 million or more.',
  'Players must select 6 numbers from 1 to 58 for each bet, with official draws conducted daily at 2 PM, 5 PM, and 9 PM.',
  'Match all 6 numbers in the exact order drawn to win the jackpot, or win smaller prizes by matching 3, 4, or 5 numbers.',
];

export default function SixFiftyEightPage() {
  const data = mockLotteryData.sixFiftEightUltra;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              What are the 6/58 Ultra Lotto winning numbers today?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Check the latest 6/58 Ultra Lotto results with the highest jackpot prizes in the Philippines.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="6/58 Ultra Lotto" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Draw Results */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              How often are 6/58 Ultra Lotto draws conducted?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.drawTimes.map((draw, idx) => (
                <DrawCard
                  key={idx}
                  gameType={`6/58 Ultra - ${draw.time}`}
                  drawTime="Today"
                  numbers={draw.numbers}
                  status="completed"
                  jackpot={data.jackpot}
                />
              ))}
            </div>
          </div>

          {/* Ad Slot 2 */}
          <AdSlot type="native-4x1" />

          {/* Game Information */}
          <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                How do I play 6/58 Ultra Lotto?
              </h3>
              <ol className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span>Select 6 different numbers from 1 to 58 on your playslip</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span>Choose your bet amount at an authorized PCSO retailer</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span>Wait for the official draw at 2 PM, 5 PM, or 9 PM</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">4.</span>
                  <span>Check your numbers against the winning combination</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">5.</span>
                  <span>Claim your prize at official PCSO claiming centers</span>
                </li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                What are the prize tiers?
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Match all 6 numbers</span>
                  <span className="font-bold text-accent">Jackpot Prize</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Match 5 numbers</span>
                  <span className="font-bold text-accent">₱500,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Match 4 numbers</span>
                  <span className="font-bold text-accent">₱10,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Match 3 numbers</span>
                  <span className="font-bold text-accent">₱500</span>
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

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What are the 6/58 Ultra Lotto winning numbers today?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The 6/58 Ultra Lotto draws are conducted daily at 2 PM, 5 PM, and 9 PM. Check this page for the latest winning numbers.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I play 6/58 Ultra Lotto?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Select 6 numbers from 1 to 58, purchase a ticket at an authorized retailer, and wait for the official draw at 2 PM, 5 PM, or 9 PM.',
                    },
                  },
                ],
              }),
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
