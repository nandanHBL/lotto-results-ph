import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { DrawCard } from '@/components/DrawCard';
import { mockLotteryData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: '6/55 Grand Lotto Results - PCSO Draws',
  description: 'Check the latest 6/55 Grand Lotto results. Daily draws at 2 PM, 5 PM, and 9 PM. Pick 6 numbers from 1-55 for a chance to win up to ₱15 million.',
};

const quickSummaryBullets = [
  'The 6/55 Grand Lotto offers substantial jackpot prizes reaching up to ₱15 million with draws conducted three times daily.',
  'Select 6 numbers from 1 to 55 for each ticket, with chances to win secondary prizes by matching 3, 4, or 5 numbers.',
  'Official draws are held at 2 PM, 5 PM, and 9 PM daily from Monday to Sunday, providing multiple opportunities to play weekly.',
];

export default function SixFiftyFiveGrandPage() {
  const data = mockLotteryData.sixFiftyFiveGrand;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              What are the 6/55 Grand Lotto winning numbers today?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Check the latest 6/55 Grand Lotto results with substantial jackpot prizes.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="6/55 Grand Lotto" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Draw Results */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              When are 6/55 Grand Lotto draws held?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.drawTimes.map((draw, idx) => (
                <DrawCard
                  key={idx}
                  gameType={`6/55 Grand - ${draw.time}`}
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
                How to play 6/55 Grand Lotto
              </h3>
              <ol className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span>Pick 6 numbers from 1 to 55 on the playslip</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span>Pay the ticket cost at any authorized PCSO outlet</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span>Attend the official draw at 2 PM, 5 PM, or 9 PM</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">4.</span>
                  <span>Compare your numbers with the winning combination</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">5.</span>
                  <span>Claim rewards at designated PCSO branches</span>
                </li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                Prize breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">All 6 numbers</span>
                  <span className="font-bold text-accent">Jackpot Prize</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">5 numbers</span>
                  <span className="font-bold text-accent">₱300,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">4 numbers</span>
                  <span className="font-bold text-accent">₱6,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">3 numbers</span>
                  <span className="font-bold text-accent">₱300</span>
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
                    name: 'What are the 6/55 Grand Lotto winning numbers today?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Check this page for the latest 6/55 Grand Lotto results drawn at 2 PM, 5 PM, and 9 PM daily.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much can I win at 6/55 Grand Lotto?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The jackpot can reach up to ₱15 million. Additional prizes are awarded for matching 3, 4, or 5 numbers.',
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
