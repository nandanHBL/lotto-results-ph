import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { DrawCard } from '@/components/DrawCard';
import { mockLotteryData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: '3D Swertres Results - Daily PCSO Draws',
  description: 'Check 3D Swertres winning numbers. Daily draws at 11 AM, 4 PM, and 9 PM. Pick 3 numbers from 0-9 for a chance to win ₱4,500.',
};

const quickSummaryBullets = [
  'The 3D Swertres game requires players to pick 3 numbers from 0 to 9, with the objective of matching the exact arrangement drawn by PCSO.',
  'Three daily draws are conducted at 11 AM, 4 PM, and 9 PM, providing frequent opportunities to win prizes up to ₱4,500 per ticket.',
  'The game is simpler than 6-number lotteries and attracts many players due to lower ticket costs and higher frequency of winning possibilities.',
];

export default function ThreeDSwertresPage() {
  const data = mockLotteryData.threeDSwertres;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              What are the 3D Swertres winning numbers today?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Check the latest 3D Swertres results with draws held three times daily.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="3D Swertres" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Draw Results */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              When are 3D Swertres draws held daily?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.drawTimes.map((draw, idx) => (
                <DrawCard
                  key={idx}
                  gameType={`3D Swertres - ${draw.time}`}
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
                How do I play 3D Swertres?
              </h3>
              <ol className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">1.</span>
                  <span>Choose 3 numbers from 0 to 9 on your ticket</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">2.</span>
                  <span>The arrangement order matters (e.g., 1-2-3 is different from 3-2-1)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">3.</span>
                  <span>Purchase your ticket at an authorized PCSO retailer</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">4.</span>
                  <span>Wait for the draw at 11 AM, 4 PM, or 9 PM</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent flex-shrink-0">5.</span>
                  <span>Match all 3 numbers in the correct order to win</span>
                </li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                Win types and prizes
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Exact Order (Straight)</span>
                  <span className="font-bold text-accent">₱4,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Any Order (Combination)</span>
                  <span className="font-bold text-accent">₱1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">First 2 digits</span>
                  <span className="font-bold text-accent">₱400</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-foreground">Last 2 digits</span>
                  <span className="font-bold text-accent">₱400</span>
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
                    name: 'What are the 3D Swertres winning numbers today?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Check this page for the latest 3D Swertres results drawn at 11 AM, 4 PM, and 9 PM daily.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much can I win with 3D Swertres?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Match all 3 numbers in the exact order to win ₱4,500. Other prize tiers available for partial matches.',
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
