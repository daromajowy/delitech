import React from 'react';
import { Logo } from './Logo.tsx';
import { PageId } from '../types.ts';
import { MapPin, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenPrivacy: (tab?: 'privacy' | 'cookies' | 'rodo') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy }) => {
  return (
    <footer className="bg-[#17211C] text-[#EDE9DF] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-xs sm:text-sm text-[#EDE9DF]/70 max-w-sm leading-relaxed pt-2">
              Automatyka budynku, która pracuje dla ludzi i przestrzeni. Certyfikowany integrator otwartego standardu KNX dla biur komercyjnych, rezydencji oraz apartamentów premium.
            </p>

            <div className="pt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0E4637] rounded-lg border border-[#CFE3C4]/20 text-[11px] font-mono text-[#CFE3C4]">
                <Award className="w-4 h-4 text-[#E6F15A]" />
                <span>Certyfikowany Partner KNX International</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#EDE9DF]/50 space-y-0.5 font-mono">
              <p>NIP: 525-28-40-192 · REGON: 387129012</p>
              <p>Delitech Smart Spaces Sp. z o.o.</p>
            </div>
          </div>

          {/* Col 2: Oferta i Segmenty */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CFE3C4]">
              Obszary &amp; Usługi
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE9DF]/75">
              <li>
                <button
                  onClick={() => onNavigate('offices')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Automatyka dla biur &amp; Fit-out
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offices', 'konferencyjne')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Sale konferencyjne &amp; Zarząd
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('homes')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Domy jednorodzinne &amp; Rezydencje
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('homes', 'apartament')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Apartamenty premium
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'dali')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Sterowanie DALI &amp; Oświetlenie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'hvac')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Integracja HVAC &amp; Energia
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Architekci & Standard KNX */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CFE3C4]">
              Standard &amp; Partnerzy
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE9DF]/75">
              <li>
                <button
                  onClick={() => onNavigate('architects')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Strefa architekta i projektanta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('architects', 'jung')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Osprzęt architektoniczny JUNG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knx')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Dlaczego standard KNX?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Przykładowe zakresy realizacji
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knowledge')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Baza wiedzy &amp; FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  O firmie &amp; Filozofia
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Siedziba i Kontakt */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CFE3C4]">
              Biuro Warszawa
            </h4>
            <div className="space-y-2.5 text-xs text-[#EDE9DF]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E6F15A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">ul. Prosta 68</p>
                  <p>00-838 Warszawa (Wola Center)</p>
                  <p className="text-[11px] text-[#EDE9DF]/50">Realizacje w całej Polsce</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E6F15A] shrink-0" />
                <a href="tel:+48228901234" className="hover:text-white font-mono">
                  +48 22 890 12 34
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E6F15A] shrink-0" />
                <a href="mailto:kontakt@delitech.pl" className="hover:text-white font-mono">
                  kontakt@delitech.pl
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0E4637] hover:bg-[#0E4637]/80 text-[#E6F15A] font-semibold text-[11px] uppercase tracking-wider rounded transition-colors"
                >
                  <span>Prześlij rzuty</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE9DF]/50">
          <p>© {new Date().getFullYear()} Delitech Smart Spaces. Wszelkie prawa zastrzeżone.</p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="hover:text-white transition-colors"
            >
              Polityka prywatności
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPrivacy('rodo')}
              className="hover:text-white transition-colors"
            >
              Klauzula RODO
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPrivacy('cookies')}
              className="hover:text-white transition-colors"
            >
              Ustawienia cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
