import React from 'react';
import { PageId } from '../types.ts';
import { Award, ShieldCheck, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Inżynieria · Doświadczenie · Standard KNX
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              O Delitech Smart Spaces
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2 font-display">
              „Automatyka budynku, która pracuje dla ludzi i przestrzeni.”
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story & Positioning */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block">
                Kim jesteśmy
              </span>
              <h2 className="text-3xl font-bold font-display text-[#17211C] tracking-tight">
                Integrator automatyki budynkowej nowej generacji
              </h2>
              <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed">
                Delitech Smart Spaces powstał z potrzeby wypełnienia luki pomiędzy światem ambitnej architektury a surową inżynierią instalacyjną. Nie pozycjonujemy się jako sprzedawca elektronicznych gadżetów smart home. Jesteśmy kompetentnym partnerem technicznym i projektowym dla inwestorów, architektów wnętrz, projektantów instalacji oraz generalnych wykonawców fit-out.
              </p>
              <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed">
                Stawiamy na międzynarodowy, otwarty standard KNX oraz protokół DALI-2. Łączymy komfort użytkowników z wymierną efektywnością energetyczną (ESG) oraz szlachetnym detalem wnętrza.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="px-4 py-2 bg-[#F7F8F5] border border-[#17211C]/10 rounded-lg text-xs font-semibold text-[#0E4637] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0E4637]" />
                  <span>KNX Partner Certified No. 104820</span>
                </div>
                <div className="px-4 py-2 bg-[#F7F8F5] border border-[#17211C]/10 rounded-lg text-xs font-semibold text-[#0E4637] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0E4637]" />
                  <span>DALI-2 Certified Specialist</span>
                </div>
              </div>
            </div>

            {/* Right Card: Zakres odpowiedzialności */}
            <div className="lg:col-span-6 bg-[#F7F8F5] border border-[#17211C]/15 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold font-display text-[#17211C]">
                Pełny cykl życia inwestycji w naszych rękach:
              </h3>

              <div className="space-y-3 text-xs text-[#17211C]/80">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#17211C]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#17211C] block text-sm">1. Doradztwo i audyt koncepcji:</strong>
                    Analiza rzutów, weryfikacja założeń funkcjonalnych, optymalizacja budżetu inwestycji.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#17211C]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#17211C] block text-sm">2. Dokumentacja wykonawcza:</strong>
                    Trasy magistrali, schematy rozdzielnic, wytyczne dla elektryków i koordynacja HVAC.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#17211C]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#17211C] block text-sm">3. Dostawa i prefabrykacja szaf:</strong>
                    Własny warsztat prefabrykacji szaf KNX, certyfikowane komponenty i testy przedmontażowe.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#17211C]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#17211C] block text-sm">4. Programowanie ETS i odbiory:</strong>
                    Uruchomienie scen, integracje BMS, szkolenie zarządcy i asysta powdrożeniowa.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Warsaw */}
      <section className="py-16 sm:py-20 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#17211C] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold">
                Siedziba &amp; Realizacje
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Warszawa · Projekty w całej Polsce
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE9DF]/75 max-w-xl leading-relaxed">
                Nasze biuro projektowe i showroom osprzętu zlokalizowane są przy ul. Prostej 68 w Warszawie (Wola Center). Realizujemy wdrożenia biurowe i rezydencjalne na terenie całego kraju.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-[#E6F15A] hover:bg-white text-[#0E4637] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
            >
              Spotkajmy się w Warszawie
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
