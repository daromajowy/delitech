import React, { useState } from 'react';
import { PageId } from '../types.ts';
import {
  SunMedium,
  Sliders,
  Wind,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
  initialHash?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  initialHash,
}) => {
  const [activeSolution, setActiveSolution] = useState<string>(initialHash || 'dali');

  const solutions = [
    {
      id: 'dali',
      title: 'Oświetlenie i DALI-2',
      badge: 'Architektura światła',
      icon: SunMedium,
      lead: 'Profesjonalne sterowanie oprawami architektonicznymi bez migotania i z płynną regulacją.',
      content:
        'Standard DALI (Digital Addressable Lighting Interface) połączony z magistralą KNX to złoty standard nowoczesnych wnętrz. Pozwala na indywidualne adresowanie każdej oprawy, płynne ściemnianie do 0,1%, regulację temperatury barwowej Tunable White (zgodnie z cyklem dobowym człowieka) oraz pełną diagnostykę stanu zasilaczy LED.',
      features: [
        'Adresowanie do 64 opraw na jednym kanale DALI',
        'Sterowanie Tunable White (HCL — Human Centric Lighting)',
        'Stała kontrola natężenia światła (Constant Light Control)',
        'Wyciszenie zasilaczy i brak zjawiska piszczenia przetwornic',
      ],
    },
    {
      id: 'fasady',
      title: 'Rolety, żaluzje i fasady',
      badge: 'Komfort termiczny i optyczny',
      icon: Sliders,
      lead: 'Automatyczna ochrona przed przegrzewaniem wnętrza latem i ucieczką ciepła zimą.',
      content:
        'Żaluzje zewnętrzne i fasadowe nie służą tylko do zasłaniania okien. System KNX wyposażony w stację meteorologiczną na dachu śledzi dokładną pozycję słońca (Sun Tracking) i ustawia lamele pod optymalnym kątem — tak, aby wpuścić naturalne dzienne światło, ale zatrzymać bezpośrednie promieniowanie cieplne.',
      features: [
        'Automatyczny kąt lameli żaluzji fasadowych w zależności od azymutu słońca',
        'Zabezpieczenie przed silnym wiatrem, oblodzeniem i gradem',
        'Ciche sterowanie roletami screen, zasłonami i karniszami elektrycznymi',
        'Zintegrowane sceny prywatności o zmroku',
      ],
    },
    {
      id: 'hvac',
      title: 'HVAC: Ogrzewanie, Chłodzenie i Wentylacja',
      badge: 'Klimat pod pełną kontrolą',
      icon: Wind,
      lead: 'Harmonia pomiędzy podłogówką, klimatyzacją kanałową i rekuperacją.',
      content:
        'W tradycyjnych instalacjach klimatyzacja często chłodzi przestrzeń, podczas gdy grzejniki lub podłogówka dogrzewają pomieszczenie. Integracja KNX eliminuje ten konflikt (Deadband Control). Jeden estetyczny regulator zarządza zaworami grzewczymi, siłownikami, klimakonwektorami i centralą wentylacyjną.',
      features: [
        'Eliminacja martwych stref i jednoczesnego grzania i chłodzenia',
        'Automatyczne obniżenie nastawy temperatury po otwarciu okna (kontaktrony)',
        'Kontrola wilgotności powietrza i stężenia CO2 (sterowanie nawiewem)',
        'Zdalna zmiana harmonogramu przed powrotem do domu lub biura',
      ],
    },
    {
      id: 'sceny',
      title: 'Sceny i sterowanie',
      badge: 'Intuicyjna obsługa przestrzeni',
      icon: Sparkles,
      lead: 'Zamiast dziesięciu włączników — jeden czytelny gest.',
      content:
        'Sceny to sedno automatyki budynkowej. Zamiast manualnego ustawiania kilkunastu obwodów, rolet i temperatury, użytkownik naciska jeden klawisz lub wybiera scenę w telefonie. „Spotkanie zarządu”, „Kino domowe”, „Kolacja z przyjaciółmi”, „Wyjście z obiektu” — cała przestrzeń reaguje synchronicznie.',
      features: [
        'Programowanie scen dopasowanych do stylu życia i procedur biurowych',
        'Klawiatury wielofunkcyjne JUNG z grawerowanymi symbolami lub tekstem',
        'Dotykowe panele ścienne z podglądem całego obiektu',
        'Możliwość samodzielnej modyfikacji poziomów scen przez użytkownika',
      ],
    },
    {
      id: 'energia',
      title: 'Energia i pomiary',
      badge: 'Efektywność i oszczędności',
      icon: Zap,
      lead: 'Dokładny wgląd w zużycie prądu, wody i ciepła dla inwestora i zarządcy.',
      content:
        'Instalujemy certyfikowane liczniki energii na magistralę KNX / Modbus. W biurach umożliwia to dokładne rozliczenie poszczególnych najemców i generowanie raportów ESG. W domach — inteligentne kierowanie nadwyżek z fotowoltaiki do ładowania auta elektrycznego lub podgrzewania bufora ciepła.',
      features: [
        'Pomiar energii elektrycznej z podziałem na obwody (oświetlenie, HVAC, gniazda)',
        'Zarządzanie obciążeniem (Load Shedding) — ochrona przed przekroczeniem mocy umownej',
        'Integracja z falownikami fotowoltaicznymi i magazynami energii',
        'Raporty miesięczne i roczne w formatach zgodnych z BREEAM',
      ],
    },
    {
      id: 'bezpieczenstwo',
      title: 'Bezpieczeństwo i monitoring',
      badge: 'Ochrona mienia i instalacji',
      icon: ShieldCheck,
      lead: 'Działania prewencyjne: czujniki zalania, dymu, kontaktrony i symulacja obecności.',
      content:
        'System KNX współpracuje z instalacją alarmową (SSWiN) i przeciwpożarową. W przypadku wykrycia wycieku wody, system automatycznie odcina główny elektrozawór i wysyła powiadomienie. Podczas urlopu system odtwarza realistyczną symulację obecności domowników.',
      features: [
        'Automatyczne odcięcie wody po detekcji zalania',
        'Współpraca z centralami alarmowymi Satel / DSC',
        'Symulacja obecności oparta na realnych nawykach oświetleniowych',
        'Oświetlenie ewakuacyjne i odblokowanie rolet w razie alarmu pożarowego',
      ],
    },
    {
      id: 'integracje',
      title: 'Integracje systemowe i IoT',
      badge: 'Otwartość na przyszłość',
      icon: Cpu,
      lead: 'Połączenie niezawodnej magistrali przewodowej z nowoczesnym ekosystemem IP.',
      content:
        'Łączymy stabilność standardu KNX z aplikacjami mobilnymi, Apple HomeKit, asystentami głosowymi, systemami multiroom audio (Sonos, Bluesound) oraz protokołami automatyki budynkowej BMS (BACnet, Modbus, MQTT).',
      features: [
        'Bramki KNX-IP z szyfrowaniem KNX Secure',
        'Natywne wsparcie Apple HomeKit, Google Assistant, Amazon Alexa',
        'Integracja systemów audio-wideo i sal spotkań',
        'API do autorskich systemów rezerwacji biurowej',
      ],
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Inżynieria systemów budynkowych
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Rozwiązania technologiczne KNX
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Zobacz poszczególne elementy układanki. Każdy moduł projektujemy z dbałością o najwyższą niezawodność, ergonomię użytkowania oraz kompatybilność na dekady.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Solutions Browser */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pills / tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#17211C]/10 pb-4">
            {solutions.map((sol) => {
              const isActive = activeSolution === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolution(sol.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#0E4637] text-[#E6F15A] shadow-sm'
                      : 'bg-[#F7F8F5] text-[#17211C]/75 hover:text-[#17211C] hover:bg-black/5'
                  }`}
                >
                  {sol.title}
                </button>
              );
            })}
          </div>

          {/* Solution details */}
          {solutions
            .filter((s) => s.id === activeSolution)
            .map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-[#F7F8F5] border border-[#17211C]/15 rounded-2xl p-8 sm:p-12 shadow-sm animate-fade-in"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-8 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                            {s.badge}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17211C]">
                            {s.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-[#0E4637] font-display">
                        {s.lead}
                      </p>

                      <p className="text-sm text-[#17211C]/80 leading-relaxed">
                        {s.content}
                      </p>

                      <div className="pt-2 space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#17211C] block mb-2">
                          Standardy inżynierskie Delitech:
                        </span>
                        {s.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#17211C]/85">
                            <CheckCircle2 className="w-4 h-4 text-[#0E4637] shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-[#17211C]/10 flex items-center gap-4">
                        <button
                          onClick={onOpenConsultation}
                          className="px-5 py-2.5 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span>Skonsultuj rozwiązanie z inżynierem</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="text-xs font-semibold text-[#0E4637] hover:underline"
                        >
                          Prześlij specyfikację
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#17211C]/10 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#17211C] pb-2 border-b border-[#17211C]/10">
                        Integracja w obiekcie
                      </h3>
                      <div className="text-xs text-[#17211C]/75 space-y-3">
                        <p>
                          <strong className="text-[#17211C]">Niezależność:</strong> Wszystkie moduły montujemy w certyfikowanych szafach rozdzielczych, przetestowanych przed dostarczeniem na budowę.
                        </p>
                        <p>
                          <strong className="text-[#17211C]">Gwarancja:</strong> Udzielamy pełnej rękojmi inżynierskiej oraz prowadzimy serwis pogwarancyjny w Warszawie i całej Polsce.
                        </p>
                        <p>
                          <strong className="text-[#17211C]">Dokumentacja:</strong> Każdy obwód, adres DALI i adres fizyczny KNX otrzymuje dokładne oznaczenie na schemacie powykonawczym.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};
