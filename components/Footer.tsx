export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0e0f] border-t border-[#2c3034] mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand - Abhi C Prominent */}
          <div>
            <h3 className="font-bold text-lg text-[#e9c349] mb-1 font-heading">
              Lotto Results PH
            </h3>
            <p className="text-xs text-[#62b6cb] mb-3 font-mono uppercase tracking-widest">Developed by Abhi C</p>
            <p className="text-sm text-[#8f9195]">
              Official PCSO lottery results. May 15, 2026 SEO Optimized Platform.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-bold text-[#e9c349] mb-3 font-heading text-sm">Games</h4>
            <ul className="space-y-2 text-sm text-[#8f9195]">
              <li>
                <a href="/6-58-ultra" className="hover:text-[#e9c349] transition-colors">
                  6/58 Ultra Lotto
                </a>
              </li>
              <li>
                <a href="/6-55-grand" className="hover:text-[#e9c349] transition-colors">
                  6/55 Grand Lotto
                </a>
              </li>
              <li>
                <a href="/3d-swertres" className="hover:text-[#e9c349] transition-colors">
                  3D Swertres
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#e9c349] mb-3 font-heading text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-[#8f9195]">
              <li>
                <a href="/draw-schedule" className="hover:text-[#e9c349] transition-colors">
                  Draw Schedule
                </a>
              </li>
              <li>
                <a href="/jackpot-tracker" className="hover:text-[#e9c349] transition-colors">
                  Jackpot Tracker
                </a>
              </li>
              <li>
                <a href="/lucky-pick" className="hover:text-[#e9c349] transition-colors">
                  Friday Lucky Numbers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#e9c349] mb-3 font-heading text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-[#8f9195]">
              <li>
                <a href="#" className="hover:text-[#e9c349] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e9c349] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e9c349] transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2c3034] my-6"></div>

        {/* Bottom - Abhi C Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#8f9195]">
          <p>
            © {currentYear} Lotto Results PH. Developed by{' '}
            <span className="text-[#e9c349] font-bold">Abhi C</span> | May 15, 2026 SEO Dominance
          </p>
          <p className="mt-4 md:mt-0 text-xs text-[#62b6cb]">
            Not affiliated with PCSO. Results for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
