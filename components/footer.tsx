import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hart & Co</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional tax returns for UK self-employed professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-sm mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="opacity-80 hover:opacity-100 transition-opacity">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="opacity-80 hover:opacity-100 transition-opacity">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-sm mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@hart-and-co.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@hart-and-co.com
                </a>
              </li>
              <li>
                <a href="tel:+442071838372" className="opacity-80 hover:opacity-100 transition-opacity">
                  +44 (0)20 7183 8372
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold text-sm mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © {currentYear} Hart & Co Accountancy. All rights reserved.
          </p>
          <p className="text-xs opacity-70 max-w-lg text-center">
            Hart & Co is an independent accountancy practice. We are not affiliated with any larger firm and provide bespoke tax services for self-employed professionals and small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
