import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { ContactForm } from '../components/ContactForm.tsx';
import {
  Monitor,
  Users,
  Building2,
  Briefcase,
  RefreshCw,
  FileSearch,
  ArrowRight,
  Sun,
  Wind,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

interface OfficesPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  initialHash?: string;
}

export const OfficesPage: React.FC<OfficesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPrivacy,
  initialHash,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>(initialHash || 'open-space');

  const zones = [
    {
      id: 'open-space',
      title: 'Open space i strefy pracy',
      subtitle: 'Światło, które podąża za słońcem i skupieniem zespołu',
      icon: Users,
      desc: 'W dużych strefach open space kluczem jest unikanie olśnienia i zmęczenia wzroku pracowników. Magistrala KNX zintegrowana z DALI-2 automatycznie dopasowuje natężenie i temperaturę barwową opraw do ilości światła wpadającego przez fasadę szklaną (Daylight Harvesting).',
      bullets: [
        'Regulacja Tunable White (2700K – 6500K) wspierająca rytm dobowy i koncentrację',
        'Strefowe sensory obecności o wysokiej czułości w technologii PIR / ultradźwiękowej',
        'Zintegrowane żaluzje fasadowe redukujące refleksy na monitorach komputerowych',
        'Automatyczne odłączenie zbędnych odbiorników po wyjściu ostatniego pracownika',
      ],
      tag: 'Biurowa strefa operacyjna',
    },
    {
      id: 'konferencyjne',
      title: 'Sale konferencyjne i meeting roomy',
      subtitle: 'Jeden przycisk przygotowuje całą salę do spotkania lub prezentacji',
      icon: Monitor,
      desc: 'Koniec z szukaniem włączników i pilotów przed ważnym spotkaniem z klientem. Integracja KNX z systemem AV pozwala za pomocą jednego kliknięcia lub komendy z panelu rezerwacji uruchomić scenę „Prezentacja” lub „Wideokonferencja”.',
      bullets: [
        'Scena „Prezentacja”: rolety opadają, światło nad ekranem gaśnie, oprawy obwodowe przyciemniają się do 25%',
        'Scena „Wideorozmowa”: podświetlenie twarzy bez cieni pod oczami (idealny wskaźnik Ra/CRI)',
        'Monitorowanie poziomu CO2 i automatyczne zwiększanie wydatku wentylacji w czasie długich spotkań',
        'Integracja z kalendarzem Google Workspace / MS Teams i dotykowymi panelami rezerwacji sal',
      ],
      tag: 'Prezencja i ergonomia spotkań',
    },
    {
      id: 'recepcja',
      title: 'Recepcje i przestrzenie wspólne',
      subtitle: 'Pierwsze wrażenie gościa i dyskretny prestiż organizacji',
      icon: Building2,
      desc: 'Recepcja i hol wejściowy budują wizerunek firmy od progu. Sceny świetlne płynnie zmieniają się w zależności od pory roku i dnia: poranny powitalny blask, dynamiczne światło w ciągu dnia oraz kameralny nastrój wieczorny.',
      bullets: [
        'Scenariusze powitalne skorelowane z zegarem astronomicznym i obecnością',
        'Wyróżnienie elementów brandingu i ścian recepcyjnych akcentowym oświetleniem DALI',
        'Sterowanie strefami chillout, kawiarniami biurowymi i ciągami komunikacyjnymi',
        'Harmonogramy weekendowe i świąteczne bez konieczności pamiętania przez recepcjonistę',
      ],
      tag: 'Strefa reprezentacyjna',
    },
    {
      id: 'gabinety',
      title: 'Gabinety i biura zarządu',
      subtitle: 'Maksymalna prywatność, akustyka i indywidualna kontrola klimatu',
      icon: Briefcase,
      desc: 'W przestrzeniach gabinetowych liczy się absolutna dyskrecja, komfort akustyczny i natychmiastowa reakcja na potrzeby użytkownika. Zapewniamy ciche silniki żaluzji i zlicowany osprzęt JUNG z szlachetnych metali.',
      bullets: [
        'Klawiatury dotykowe JUNG LS 990 w wykończeniach mosiądz, stal szlachetna lub ciemny antracyt',
        'Indywidualny termostat i precyzyjne utrzymanie zadanej temperatury bez przeciągów',
        'Scena „Poufne spotkanie”: zaciemnienie przeszkleń (szkło ciekłokrystaliczne / rolety) i wyciszenie',
        'Dyskretna integracja z gabinetowym systemem nagłośnienia multiroom',
      ],
      tag: 'Segment Executive',
    },
    {
      id: 'modernizacja',
      title: 'Modernizacja istniejących biur',
      subtitle: 'Wymiana przestarzałego sterowania bez paraliżu bieżącej pracy firmy',
      icon: RefreshCw,
      desc: 'Specjalizujemy się w modernizacjach instalacji w działających biurach. Wykorzystujemy istniejące okablowanie lub wprowadzamy magistralę KNX i moduły radiowe KNX RF tam, gdzie kucie ścian jest wykluczone.',
      bullets: [
        'Audyt istniejącej infrastruktury elektrycznej i oświetleniowej',
        'Możliwość etapowania prac (np. piętro po piętrze, po godzinach pracy biura lub w weekendy)',
        'Szybki zwrot z inwestycji dzięki wymianie opraw na DALI i redukcji strat energii o 30–45%',
        'Współpraca z zarządcami budynków biurowych klasy A i B+ w Warszawie',
      ],
      tag: 'Modernizacja i optymalizacja',
    },
    {
      id: 'audyt',
      title: 'Audyt projektu i wycena',
      subtitle: 'Weryfikacja rzutów fit-out pod kątem instalacji niskoprądowych i KNX',
      icon: FileSearch,
      desc: 'Przesyłasz nam rzuty aranżacji wnętrz i branży elektrycznej. Wskazujemy miejsca kolizji, sugerujemy uproszczenie tras kablowych i przygotowujemy rzetelny kosztorys urządzeń oraz wdrożenia.',
      bullets: [
        'Weryfikacja poprawności doboru bramek DALI i zasilaczy magistrali',
        'Wytyczne dla podwykonawcy elektrycznego przed rozpoczęciem prac na budowie',
        'Wycena modułów automatyki, prefabrykacji szaf i programowania ETS',
        'Analiza zgodności z wymogami certyfikacji BREEAM / LEED',
      ],
      tag: 'Doradztwo inżynierskie',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Subpage */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Biurowy standard KNX · Warszawa i Polska
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Automatyka dla biur i przestrzeni komercyjnych
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Projektujemy inteligentne systemy KNX dla biur open space, gabinetów zarządu i sal konferencyjnych. Ograniczamy zużycie energii i tworzymy środowisko pracy wspierające zdrowie i produktywność zespołu.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#E6F15A] hover:bg-white text-[#0E4637] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Skonsultuj projekt biura</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('biuro-kontakt');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-lg transition-colors border border-white/15"
              >
                Prześlij rzuty do audytu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Zone Navigator */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Strefy obiektu biurowego
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Wybierz strefę i poznaj scenariusze sterowania
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
            {zones.map((z) => {
              const isActive = selectedZone === z.id;
              const Icon = z.icon;
              return (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`p-3.5 text-left rounded-xl border transition-all flex flex-col justify-between gap-3 ${
                    isActive
                      ? 'bg-[#0E4637] text-white border-[#0E4637] shadow-md'
                      : 'bg-[#F7F8F5] text-[#17211C] border-[#17211C]/10 hover:bg-black/5'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#E6F15A]' : 'text-[#0E4637]'}`} />
                  <span className="text-xs font-bold leading-tight line-clamp-2">
                    {z.title.split(' i ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Card */}
          {zones
            .filter((z) => z.id === selectedZone)
            .map((z) => {
              const Icon = z.icon;
              return (
                <div
                  key={z.id}
                  className="bg-[#F7F8F5] border border-[#17211C]/15 rounded-2xl p-8 sm:p-12 shadow-sm animate-fade-in"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                            {z.tag}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17211C]">
                            {z.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base text-[#0E4637] font-semibold font-display">
                        {z.subtitle}
                      </p>

                      <p className="text-sm text-[#17211C]/80 leading-relaxed">
                        {z.desc}
                      </p>

                      <div className="pt-2 space-y-2.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#17211C] block mb-2">
                          Kluczowe funkcjonalności automatyki:
                        </span>
                        {z.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                            <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-[#17211C]/10 flex flex-wrap gap-4">
                        <button
                          onClick={onOpenConsultation}
                          className="px-5 py-2.5 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span>Skonsultuj projekt biura</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Technical spec sidebar */}
                    <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-[#17211C]/10 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#17211C] pb-2 border-b border-[#17211C]/10">
                        Specyfikacja integracji KNX
                      </h4>

                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px]">Protokół magistralny:</span>
                          <span className="font-semibold text-[#17211C]">KNX TP (skrętka certyfikowana) + DALI-2</span>
                        </div>
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px]">Integracja HVAC:</span>
                          <span className="font-semibold text-[#17211C]">Bramki Modbus / BACnet do BMS obiektu</span>
                        </div>
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px]">Osprzęt sterujący:</span>
                          <span className="font-semibold text-[#17211C]">JUNG KNX F 40 / F 50 / czujniki obecności Mini</span>
                        </div>
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px]">Wpływ na zużycie energii:</span>
                          <span className="font-semibold text-[#0E4637]">Redukcja kosztów oświetlenia do -40%</span>
                        </div>
                      </div>

                      <div className="p-3.5 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10 text-[11px] text-[#17211C]/75">
                        <p className="font-semibold text-[#17211C] mb-1">Dla firm fit-out i generalnych wykonawców:</p>
                        Dostarczamy gotowe schematy podłączenia rozdzielnic oraz wsparcie na budowie w Warszawie i okolicach.
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Office Lead Capture Form */}
      <section id="biuro-kontakt" className="py-16 sm:py-24 bg-[#F7F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Audyt i Wycena
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Prześlij rzuty biura do wstępnej analizy
            </h2>
            <p className="text-sm text-[#17211C]/75 mt-2">
              Otrzymasz wstępną koncepcję magistrali KNX, podział na strefy DALI oraz szacunek kosztów wdrożenia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm
              onOpenPrivacy={onOpenPrivacy}
              defaultType="biuro"
              sourceContext="Podstrona: Automatyka dla biur"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
