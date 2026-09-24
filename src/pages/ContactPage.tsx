import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { ContactForm } from '../components/ContactForm.tsx';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Calculator, Check, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onOpenPrivacy: (tab?: 'privacy' | 'cookies' | 'rodo') => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenPrivacy,
  onOpenConsultation,
}) => {
  // Quick Preliminary Scope Estimator for Architects and Investors
  const [calcSpace, setCalcSpace] = useState<'biuro' | 'dom' | 'apartament'>('biuro');
  const [calcArea, setCalcArea] = useState<number>(350);
  const [calcDali, setCalcDali] = useState(true);
  const [calcHvac, setCalcHvac] = useState(true);
  const [calcShading, setCalcShading] = useState(true);
  const [calcEnergy, setCalcEnergy] = useState(true);

  // Approximate module count calculation based on technical standards
  const estimatedZones = Math.max(2, Math.round(calcArea / 35));
  const estimatedDaliBusses = Math.max(1, Math.ceil(calcArea / 300));
  const estimatedKnxChannels = Math.round(estimatedZones * 2.5);

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Centrum Zapytań Projektowych
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Prześlij rzuty. Wrócimy z konkretnymi pytaniami.
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Warszawa i okolice · realizacje w całej Polsce. Przeanalizujemy rzuty architektoniczne, wskażemy optymalne rozwiązania instalacji KNX i przygotujemy rzeczowy kosztorys.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Map Placeholder + Interactive Form */}
      <section className="py-16 sm:py-24 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Contact Details & Google Maps */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Details Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#17211C]/10 shadow-sm space-y-6">
                <h2 className="text-xl font-bold font-display text-[#17211C]">
                  Biuro inżynierskie w Warszawie
                </h2>

                <div className="space-y-4 text-xs text-[#17211C]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0E4637] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-[#17211C]">Delitech Smart Spaces Sp. z o.o.</p>
                      <p>ul. Prosta 68 (budynek Wola Center)</p>
                      <p>00-838 Warszawa, Polska</p>
                      <p className="text-[#17211C]/60 text-[11px] mt-0.5">
                        Dojazd: Metro Rondo Daszyńskiego (3 min pieszo) · Miejsca parkingowe dla gości
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0E4637] shrink-0" />
                    <div>
                      <span className="text-[11px] text-[#17211C]/60 block">Infolinia techniczna / Biuro:</span>
                      <a href="tel:+48228901234" className="font-mono text-sm font-semibold text-[#0E4637] hover:underline">
                        +48 22 890 12 34
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0E4637] shrink-0" />
                    <div>
                      <span className="text-[11px] text-[#17211C]/60 block">Adres dla zapytań i rzutów:</span>
                      <a href="mailto:kontakt@delitech.pl" className="font-mono text-sm font-semibold text-[#0E4637] hover:underline">
                        kontakt@delitech.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#0E4637] shrink-0" />
                    <div>
                      <span className="text-[11px] text-[#17211C]/60 block">Godziny pracy inżynierów:</span>
                      <span className="font-medium">Poniedziałek – Piątek: 08:30 – 17:30</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#17211C]/10 text-[11px] font-mono text-[#17211C]/60 space-y-0.5">
                  <p>NIP: 525-28-40-192 · REGON: 387129012 · KRS: 0000865120</p>
                  <p>Konto bankowe: mBank S.A. (PLN / EUR)</p>
                </div>
              </div>

              {/* Stylized Google Maps Area */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#17211C]/10 shadow-sm">
                <div className="p-4 bg-[#F7F8F5] border-b border-[#17211C]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#17211C]">Lokalizacja: Warszawa Wola</span>
                  <a
                    href="https://maps.google.com/?q=Prosta+68,+Warszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#0E4637] font-semibold hover:underline"
                  >
                    Otwórz w Google Maps →
                  </a>
                </div>

                <div className="h-64 bg-[#17211C] relative flex items-center justify-center p-6 text-center text-white overflow-hidden">
                  <div className="absolute inset-0 bg-grid-dark-subtle opacity-40" />
                  
                  {/* Map Pin Mockup */}
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 mx-auto bg-[#0E4637] border-2 border-[#E6F15A] rounded-full flex items-center justify-center shadow-xl">
                      <MapPin className="w-5 h-5 text-[#E6F15A]" />
                    </div>
                    <p className="font-bold text-sm text-white">Delitech Smart Spaces</p>
                    <p className="text-xs text-[#EDE9DF]/70">ul. Prosta 68, 00-838 Warszawa</p>
                    <span className="inline-block text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded text-[#CFE3C4]">
                      Współrzędne GPS: 52.2307° N, 20.9882° E
                    </span>
                  </div>
                </div>
              </div>

              {/* Preliminary Scope Calculator Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#17211C]/10 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-[#0E4637]">
                  <Calculator className="w-4 h-4" />
                  <span>Wstępny estymator skali instalacji</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold mb-1 text-[#17211C]">Typ obiektu:</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['biuro', 'dom', 'apartament'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setCalcSpace(t)}
                          className={`py-1.5 text-xs font-semibold rounded capitalize transition-colors ${
                            calcSpace === t
                              ? 'bg-[#0E4637] text-white'
                              : 'bg-[#F7F8F5] text-[#17211C]/70 hover:bg-black/5'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-[#17211C]">
                      <span>Powierzchnia użytkowa:</span>
                      <span className="font-mono text-[#0E4637]">{calcArea} m²</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={1500}
                      step={10}
                      value={calcArea}
                      onChange={(e) => setCalcArea(Number(e.target.value))}
                      className="w-full accent-[#0E4637]"
                    />
                  </div>

                  <div className="p-3 bg-[#F7F8F5] rounded-xl border border-[#17211C]/10 space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#17211C]/60">Szacowana liczba stref regulacji:</span>
                      <span className="font-bold text-[#17211C]">~{estimatedZones} stref</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#17211C]/60">Bramki magistrali DALI-2:</span>
                      <span className="font-bold text-[#17211C]">{estimatedDaliBusses} magistrala(e)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#17211C]/60">Kanały wykonawcze KNX:</span>
                      <span className="font-bold text-[#17211C]">~{estimatedKnxChannels} kanałów</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Full Blueprint & Request Form */}
            <div className="lg:col-span-7">
              <ContactForm
                onOpenPrivacy={() => onOpenPrivacy('privacy')}
                defaultType="biuro"
                sourceContext="Formularz główny portalu"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
