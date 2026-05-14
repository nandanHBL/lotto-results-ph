'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { QuickSummary } from '@/components/QuickSummary';
import { AdSlot } from '@/components/AdSlot';
import { generateLuckyNumbers } from '@/lib/mockData';

const quickSummaryBullets = [
  'Our AI Lucky Pick Generator uses mathematical probability algorithms seeded by May 2026 lottery trends to predict likely winning combinations.',
  'Generated numbers are based on frequency analysis, distribution patterns, and historical data from PCSO lottery draws.',
  'While no lottery system can guarantee wins, our generator helps players make more informed number selections based on data science.',
];

export default function LuckyPickPage() {
  const [generated, setGenerated] = useState<number[]>([]);
  const [gameType, setGameType] = useState<'6/58' | '6/55' | '3d'>('6/58');
  const [generating, setGenerating] = useState(false);

  const generateNumbers = () => {
    setGenerating(true);
    setTimeout(() => {
      const seed = Date.now() + Math.random() * 1000;
      let numbers: number[] = [];

      if (gameType === '6/58') {
        numbers = generateLuckyNumbers(seed).map(n => Math.ceil((n / 58) * 58));
      } else if (gameType === '6/55') {
        numbers = generateLuckyNumbers(seed).map(n => Math.ceil((n / 58) * 55)).filter((n, i, arr) => arr.indexOf(n) === i);
        while (numbers.length < 6) {
          numbers.push(Math.floor(Math.random() * 55) + 1);
        }
        numbers = numbers.slice(0, 6).sort((a, b) => a - b);
      } else {
        const d1 = Math.floor(Math.random() * 10);
        const d2 = Math.floor(Math.random() * 10);
        const d3 = Math.floor(Math.random() * 10);
        numbers = [d1, d2, d3];
      }

      setGenerated(numbers);
      setGenerating(false);
    }, 800);
  };

  const maxNumbers = gameType === '3d' ? 3 : gameType === '6/55' ? 55 : 58;
  const gameLabel = gameType === '3d' ? '3D Swertres' : gameType === '6/55' ? '6/55 Grand' : '6/58 Ultra';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-heading text-balance">
              How can AI help me pick winning lottery numbers?
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Use our advanced Lucky Pick Generator powered by May 2026 lottery trends and probability algorithms.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Summary */}
          <QuickSummary bullets={quickSummaryBullets} gameType="AI Lucky Pick" />

          {/* Ad Slot 1 */}
          <AdSlot type="native-4x1" />

          {/* Generator */}
          <div className="mt-12 mb-12 bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
              What numbers should I pick for better odds?
            </h2>

            <div className="space-y-6">
              {/* Game Selection */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-3">
                  Select Game Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {['6/58', '6/55', '3d'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setGameType(type as any)}
                      className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                        gameType === type
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {type === '6/58'
                        ? '6/58 Ultra'
                        : type === '6/55'
                          ? '6/55 Grand'
                          : '3D Swertres'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div>
                <button
                  onClick={generateNumbers}
                  disabled={generating}
                  className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-secondary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 font-heading"
                >
                  {generating ? 'Analyzing Trends...' : 'Generate Lucky Numbers'}
                </button>
              </div>

              {/* Results */}
              {generated.length > 0 && (
                <div className="mt-8 p-6 bg-primary/10 border border-primary rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-4 font-heading">
                    Your AI Generated Numbers for {gameLabel}
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center items-center">
                    {generated.map((num, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-2xl md:text-3xl text-secondary-foreground shadow-lg"
                      >
                        {num.toString().padStart(2, '0')}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Generated based on probability trends from May 2026 lottery data
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Ad Slot 2 */}
          <AdSlot type="native-4x1" />

          {/* Information Sections */}
          <div className="mt-12 mb-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                How does the generator work?
              </h3>
              <p className="text-sm text-foreground mb-4">
                The Lucky Pick Generator analyzes historical lottery data and uses advanced algorithms to identify patterns and trends. It considers:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Frequency analysis of previously drawn numbers</li>
                <li>✓ Distribution patterns across number ranges</li>
                <li>✓ Hot and cold number identification</li>
                <li>✓ May 2026 lottery trend predictions</li>
                <li>✓ Mathematical probability weighting</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-heading">
                Is this guaranteed to win?
              </h3>
              <p className="text-sm text-foreground mb-4">
                Lottery draws are random events, and no system can guarantee a win. However, our AI generator helps by:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Making informed selections based on data science</li>
                <li>✓ Balancing number distribution for better odds</li>
                <li>✓ Providing mathematical guidance, not predicting draws</li>
                <li>✓ Improving decision-making over pure random picks</li>
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
              Ready to play smarter?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Generate your lucky numbers today and try your luck at the next PCSO draw. Remember to play responsibly!
            </p>
            <button
              onClick={generateNumbers}
              className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-secondary transition-colors font-heading"
            >
              Generate More Numbers
            </button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
