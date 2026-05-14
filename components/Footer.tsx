export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-secondary mb-3 font-heading">
              Lotto Results PH
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for PCSO lottery results and draw schedules.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-bold text-foreground mb-3 font-heading text-sm">Games</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/6-58-ultra" className="hover:text-secondary transition-colors">
                  6/58 Ultra Lotto
                </a>
              </li>
              <li>
                <a href="/6-55-grand" className="hover:text-secondary transition-colors">
                  6/55 Grand Lotto
                </a>
              </li>
              <li>
                <a href="/3d-swertres" className="hover:text-secondary transition-colors">
                  3D Swertres
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-3 font-heading text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/draw-schedule" className="hover:text-secondary transition-colors">
                  Draw Schedule
                </a>
              </li>
              <li>
                <a href="/jackpot-tracker" className="hover:text-secondary transition-colors">
                  Jackpot Tracker
                </a>
              </li>
              <li>
                <a href="/lucky-pick" className="hover:text-secondary transition-colors">
                  Lucky Numbers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-3 font-heading text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            © {currentYear} Lotto Results PH. Created by{' '}
            <span className="text-secondary font-bold">Abhi C</span>. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-xs">
            This site is not affiliated with PCSO. Lottery results are provided for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
