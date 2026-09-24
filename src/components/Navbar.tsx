import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { PageId } from '../types.ts';
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, subSectionHash?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: {
    id: PageId;
    label: string;
    subItems?: { label: string; hash: string }[];
  }[] = [
    {
      id: 'offices',
      label: 'Dla biur',
      subItems: [
        { label: 'Open space i strefy pracy', hash: 'open-space' },
        { label: 'Sale konferencyjne', hash: 'konferencyjne' },
        { label: 'Recepcje i przestrzenie wspólne', hash: 'recepcja' },
        { label: 'Gabinety zarządu', hash: 'gabinety' },
        { label: 'Modernizacja biura', hash: 'modernizacja' },
        { label: 'Audyt projektu i wycena', hash: 'audyt' },
      ],
    },
    {
      id: 'homes',
      label: 'Domy i apartamenty',
      subItems: [
        { label: 'Dom jednorodzinny', hash: 'dom' },
        { label: 'Apartament i rezydencja', hash: 'apartament' },
        { label: 'Modernizacja instalacji', hash: 'modernizacja' },
      ],
    },
    {
      id: 'solutions',
      label: 'Rozwiązania',
      subItems: [
        { label: 'Oświetlenie i DALI', hash: 'dali' },
        { label: 'Rolety, żaluzje i fasady', hash: 'fasady' },
        { label: 'HVAC i wentylacja', hash: 'hvac' },
        { label: 'Sceny i sterowanie', hash: 'sceny' },
        { label: 'Energia i pomiary', hash: 'energia' },
        { label: 'Bezpieczeństwo i integracje', hash: 'integracje' },
      ],
    },
    {
      id: 'architects',
      label: 'Dla architektów',
      subItems: [
        { label: 'Wsparcie projektowe', hash: 'wsparcie' },
        { label: 'Wytyczne dla instalacji', hash: 'wytyczne' },
        { label: 'Osprzęt premium JUNG', hash: 'jung' },
        { label: 'Konsultacja techniczna', hash: 'konsultacja' },
      ],
    },
    {
      id: 'knx',
      label: 'KNX',
    },
    {
      id: 'projects',
      label: 'Realizacje',
    },
    {
      id: 'knowledge',
      label: 'Wiedza',
    },
    {
      id: 'contact',
      label: 'Kontakt',
    },
  ];

  const handleNavClick = (pageId: PageId, hash?: string) => {
    onNavigate(pageId, hash);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F8F5]/95 backdrop-blur-md border-b border-[#17211C]/10 transition-colors">
      {/* 1. Pre-Header Informational Strip */}
      <div className="bg-[#0E4637] text-[#EDE9DF] text-[11px] font-medium tracking-wider uppercase border-b border-[#0E4637]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E6F15A]" />
            <span>KNX dla biur, domów i apartamentów</span>
          </div>
          <div className="flex items-center gap-3 text-[#CFE3C4]">
            <span>Warszawa · realizacje w całej Polsce</span>
            <span aria-hidden="true">·</span>
            <a
              href="tel:+48228901234"
              className="hover:text-white transition-colors flex items-center gap-1 normal-case font-mono tracking-normal text-xs"
            >
              +48 22 890 12 34
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Connected Grid Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4637] rounded-md p-1 -m-1"
          aria-label="Delitech Smart Spaces - Strona główna"
        >
          <Logo variant="light" size="md" />
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium tracking-tight text-[#17211C]"
          aria-label="Główne menu"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            const hasChildren = item.subItems && item.subItems.length > 0;

            if (hasChildren) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-[#0E4637] font-semibold bg-[#CFE3C4]/25'
                        : 'text-[#17211C]/80 hover:text-[#0E4637] hover:bg-black/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.id && (
                    <div className="absolute top-full left-0 w-64 pt-2 shadow-xl z-50">
                      <div className="bg-white border border-[#17211C]/10 rounded-xl p-2 shadow-lg backdrop-blur-sm">
                        {item.subItems?.map((sub) => (
                          <button
                            key={sub.hash}
                            onClick={() => handleNavClick(item.id, sub.hash)}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-[#17211C]/85 hover:text-[#0E4637] hover:bg-[#F7F8F5] rounded-lg transition-colors flex items-center justify-between group"
                          >
                            <span>{sub.label}</span>
                            <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#E6F15A] transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#0E4637] font-semibold bg-[#CFE3C4]/25'
                    : 'text-[#17211C]/80 hover:text-[#0E4637] hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#E6F15A]" />
            <span>Umów konsultację</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#17211C] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#0E4637]"
            aria-label="Otwórz menu mobilne"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F8F5] border-t border-[#17211C]/10 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.id} className="py-1">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg flex items-center justify-between ${
                    currentPage === item.id
                      ? 'bg-[#0E4637] text-white'
                      : 'text-[#17211C] hover:bg-black/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>

                {item.subItems && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-[#0E4637]/20 ml-3">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.hash}
                        onClick={() => handleNavClick(item.id, sub.hash)}
                        className="w-full text-left px-3 py-1.5 text-xs text-[#17211C]/75 hover:text-[#0E4637] rounded-md transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-3 border-t border-[#17211C]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#0E4637] text-[#E6F15A] font-semibold text-xs uppercase tracking-wider rounded-lg text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Umów konsultację</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 border border-[#0E4637]/20 text-[#0E4637] font-medium text-xs uppercase tracking-wider rounded-lg text-center"
              >
                Prześlij rzuty do wyceny
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
