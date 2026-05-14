import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { drawSchedule } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'PCSO Lottery Draw Schedule 2026 - Daily Times',
  description: 'Complete PCSO lottery draw schedule for all games. Daily draws at 2 PM, 5 PM, and 9 PM for Ultra Lotto, Grand Lotto, and more.',
};

const quickSummaryBullets = [
  'PCSO conducts official lottery draws three times daily for major lotteries at 2 PM, 5 PM, and 9 PM from Monday to Sunday.',
  'Swertres 3D and 2D draws are held with additional sessions at 11 AM, 4 PM, and 9 PM for more frequent playing opportunities.',
  'Drawing times remain consistent throughout 2026, with no holidays or schedule changes affecting the regular draw calendar.',
];

export default function DrawSchedulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              When are PCSO lottery draws scheduled?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Complete 2026 schedule for all PCSO lottery games and their official draw times.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="Draw Schedule" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Schedule Table */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              What is the complete 2026 draw schedule?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-4 font-bold text-secondary font-heading">Game Name</th>
                    <th className="text-left px-4 py-4 font-bold text-secondary font-heading">Draw Days</th>
                    <th className="text-left px-4 py-4 font-bold text-secondary font-heading">Draw Times</th>
                  </tr>
                </thead>
                <tbody>
                  {drawSchedule.map((game, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border hover:bg-card/50 transition-colors ${
                        idx % 2 === 0 ? 'bg-card/20' : ''
                      }`}
                    >
                      <td className="px-4 py-4 font-bold text-foreground">{game.game}</td>
                      <td className="px-4 py-4 text-muted-foreground">{game.draws}</td>
                      <td className="px-4 py-4 text-primary font-bold">{game.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ad Slot 2 */}
          <AdSlot type="native-4x1" />

          {/* Important Information */}
          <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                How often can I play?
              </h3>
              <p className="text-sm text-foreground mb-4">
                Lottery draws are available daily with multiple opportunities:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Ultra/Grand Lotto:</strong> 3 draws daily</li>
                <li>• <strong>Swertres 3D/2D:</strong> 3 draws daily</li>
                <li>• <strong>Mega Lotto:</strong> 3 draws on designated days</li>
                <li>• <strong>Super Lotto:</strong> 3 draws on designated days</li>
                <li>• <strong>Total:</strong> 9+ draw opportunities daily</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                Important reminders
              </h3>
              <p className="text-sm text-foreground mb-4">
                Keep these points in mind:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Purchase tickets before cut-off time</li>
                <li>✓ Cut-off is typically 30 minutes before draw</li>
                <li>✓ Keep your ticket safe until results announced</li>
                <li>✓ Claim prizes within validity period</li>
                <li>✓ Check official PCSO sources for updates</li>
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
              Set your lottery routine
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With multiple draws daily, you can play at different times that fit your schedule. Plan your plays with this complete draw schedule.
            </p>
            <a
              href="/6-58-ultra"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-secondary transition-colors font-heading"
            >
              Check Latest Results
            </a>
          </section>

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://lottoresponsesph.vercel.app',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Draw Schedule',
                    item: 'https://lottoresponsesph.vercel.app/draw-schedule',
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
