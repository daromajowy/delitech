import React, { useState, useEffect } from 'react';
import { Cookie, Shield } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: (tab?: 'cookies') => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('delitech_cookie_consent');
    if (!consent) {
      // Small timeout for calm appearance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('delitech_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('delitech_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#17211C] text-[#EDE9DF] border border-white/15 rounded-xl p-4 sm:p-5 shadow-2xl animate-fade-in text-xs leading-relaxed"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-[#E6F15A] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="font-semibold text-white">Szanujemy Twoją prywatność</p>
          <p className="text-[#EDE9DF]/75">
            Używamy niezbędnych plików cookie w celu zapewnienia sprawnego działania portalu oraz analizy ruchu technicznego. Nie profilujemy reklamowo.{' '}
            <button
              onClick={() => onOpenPrivacy('cookies')}
              className="text-[#E6F15A] underline underline-offset-2 hover:text-white"
            >
              Polityka cookies
            </button>
            .
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-[#E6F15A] text-[#0E4637] font-semibold text-[11px] uppercase tracking-wider rounded hover:bg-white transition-colors"
            >
              Akceptuję wszystkie
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-[11px] font-medium rounded transition-colors"
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
