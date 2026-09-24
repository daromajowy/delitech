import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { ContactForm } from '../components/ContactForm.tsx';
import { IMAGES } from '../assets.ts';
import {
  Home,
  Building,
  RefreshCw,
  Sun,
  Shield,
  Smartphone,
  Flame,
  ArrowRight,
  CheckCircle2,
  Sliders,
} from 'lucide-react';

interface HomesPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  initialHash?: string;
}

export const HomesPage: React.FC<HomesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPrivacy,
  initialHash,
}) => {
  const [activeTab, setActiveTab] = useState<'dom' | 'apartament' | 'modernizacja'>(
    (initialHash as any) || 'dom'
  );

  return (
    <div className="space-y-0">
      {/* Hero Subpage */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Smart Home Premium · Warszawa &amp; Mazowsze
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Automatyka dla domów i apartamentów
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              „Komfort od pierwszego dotknięcia.” Tworzymy spójne instalacje KNX w domach jednorodzinnych, willach i luksusowych apartamentach. Zastępujemy baterie włączników na ścianach szlachetnymi manipulatorami JUNG i automatycznymi scenami.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#E6F15A] hover:bg-white text-[#0E4637] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Umów konsultację rezydencji</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('dom-kontakt');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-lg transition-colors border border-white/15"
              >
                Prześlij rzuty do analizy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Segment switcher */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 max-w-xl mx-auto mb-12 p-1.5 bg-[#F7F8F5] border border-[#17211C]/10 rounded-xl">
            <button
              onClick={() => setActiveTab('dom')}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'dom'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'text-[#17211C]/70 hover:text-[#17211C]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dom jednorodzinny / Rezydencja</span>
            </button>
            <button
              onClick={() => setActiveTab('apartament')}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'apartament'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'text-[#17211C]/70 hover:text-[#17211C]'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Apartament i Penthouse</span>
            </button>
            <button
              onClick={() => setActiveTab('modernizacja')}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeTab === 'modernizacja'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'text-[#17211C]/70 hover:text-[#17211C]'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Modernizacja instalacji</span>
            </button>
          </div>

          {/* Active Tab Content */}
          {activeTab === 'dom' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                  Rezydencje od 200 do 1200+ m²
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#17211C]">
                  Pełna kontrola nad domem i ogrodem
                </h2>
                <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed">
                  W dużym domu automatyka jest niezbędna, aby nie biegać po kondygnacjach sprawdzając, czy zgaszono światła, zamknięto rolety i opuszczono temperaturę. Jeden przycisk „Wyjście z domu” przy drzwiach lub bramie garażowej gasi wszystkie zbędne obwody, uzbraja alarm i przestawia rekuperację w tryb ekonomiczny.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Zintegrowana stacja pogodowa KNX chroniąca żaluzje przed wiatrem i gradu</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Niezależna regulacja strefowa: sypialnie chłodniejsze w nocy, salon ciepły wieczorem</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Oświetlenie elewacji i ogrodu powiązane z zegarem astronomicznym i zmierzchem</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Integracja z pompą ciepła, rekuperacją, panelami fotowoltaicznymi i ładowarką auta</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3 bg-[#0E4637] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
                  >
                    Umów bezpłatną konsultację rzutów domu
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#17211C]/15 shadow-xl bg-[#17211C] aspect-[4/3]">
                  <img
                    src={IMAGES.residentialResidence}
                    alt="Nowoczesna rezydencja z automatyką KNX"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apartament' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                  Apartamenty i Penthousy 90–400 m²
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#17211C]">
                  Czyste ściany i wyrafinowana estetyka detalu
                </h2>
                <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed">
                  W apartamentach premium architekci walczą o każdy detal wykończenia. Zamiast rzędu 5 puszek elektrycznych (światło, rolety, termostat, klimatyzacja, audio) instalujemy pojedynczy szlachetny kontroler pokojowy JUNG F 40 lub F 50 o zlicowanym profilu.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Dyskretny montaż rozdzielnicy KNX w szafie technicznej lub garderobie</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Scenariusze nastrojowe: „Kolacja”, „Kino domowe”, „Relaks”, „Czystość”</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Wyciszone napędy zasłon elektrycznych i żaluzji wewnętrznych</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                    <span>Dostęp z intuicyjnej aplikacji na iOS/Android oraz Apple HomeKit / Siri</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3 bg-[#0E4637] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
                  >
                    Porozmawiaj o automatyce apartamentu
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#17211C]/15 shadow-xl bg-[#17211C] aspect-[4/3]">
                  <img
                    src={IMAGES.knxSwitchHardware}
                    alt="Dotykowy osprzęt JUNG w minimalistycznym apartamencie"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'modernizacja' && (
            <div className="bg-[#F7F8F5] border border-[#17211C]/15 rounded-2xl p-8 sm:p-12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                Domy zamieszkałe i remonty kapitalne
              </span>
              <h2 className="text-3xl font-bold font-display text-[#17211C]">
                Modernizacja instalacji bez niszczenia wnętrz
              </h2>
              <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed max-w-3xl">
                Kupiłeś dom z rynku wtórnego lub chcesz unowocześnić istniejącą instalację elektryczną? Standard KNX oferuje zarówno rozwiązania przewodowe (przy generalnym remoncie), jak i moduły radiowe KNX RF oraz hybrydowe, które instalujemy w istniejących puszkach podtynkowych.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 bg-white rounded-xl border border-[#17211C]/10 space-y-2">
                  <h4 className="font-bold text-sm text-[#17211C]">1. Audyt instalacji</h4>
                  <p className="text-xs text-[#17211C]/70">
                    Oceniamy stan rozdzielnicy głównej, przekroje przewodów i możliwości dołożenia magistrali.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#17211C]/10 space-y-2">
                  <h4 className="font-bold text-sm text-[#17211C]">2. Dobór rozwiązań hybrydowych</h4>
                  <p className="text-xs text-[#17211C]/70">
                    Łączymy przewodową rozdzielnicę z bezprzewodowymi przyciskami KNX RF tam, gdzie brakuje kabli.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#17211C]/10 space-y-2">
                  <h4 className="font-bold text-sm text-[#17211C]">3. Nowe funkcje bez kurzu</h4>
                  <p className="text-xs text-[#17211C]/70">
                    Zyskujesz sceny, sterowanie smartfonem i oszczędność na ogrzewaniu w ciągu zaledwie kilku dni.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Form Anchor */}
      <section id="dom-kontakt" className="py-16 sm:py-24 bg-[#F7F8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Wycena Rezydencji
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Prześlij rzuty domu lub apartamentu
            </h2>
            <p className="text-sm text-[#17211C]/70 mt-2">
              Przeanalizujemy rozkład pomieszczeń, punkty świetlne i zaproponujemy optymalny zakres automatyki KNX.
            </p>
          </div>

          <ContactForm
            onOpenPrivacy={onOpenPrivacy}
            defaultType="dom"
            sourceContext="Podstrona: Domy i apartamenty"
          />
        </div>
      </section>
    </div>
  );
};
