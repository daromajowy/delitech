import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { CheckCircle2, ArrowRight, Layers, Sliders, Sun, Building2, Home } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [filter, setFilter] = useState<'all' | 'biuro' | 'dom' | 'apartament'>('all');

  const projects = [
    {
      id: 'biuro-1',
      type: 'biuro',
      title: 'Przykładowy zakres: Biuro — światło, sale spotkań i komfort stref',
      subtitle: 'Powierzchnia biurowa fit-out · Warszawa Wola · ~850 m²',
      image: '/src/assets/images/office_commercial_space_1790288126038.jpg',
      summary:
        'Architektura systemu obejmująca centralne zarządzanie oświetleniem DALI-2, koordynację 28 klimakonwektorów 4-rurowych, integrację sal konferencyjnych z systemem wideokonferencji oraz automatyczne procedury redukcji poboru mocy po godzinach pracy.',
      zones: [
        'Open space: 4 strefy pracy ciągłej z pomiarem światła dziennego',
        'Sale konferencyjne: 3 sale z panelami scen prezentacji i czujnikami CO2',
        'Gabinet prezesa: dyskretne sterowanie klimatem i roletami',
        'Strefa kuchenna i chillout: oświetlenie nastrojowe i nagłośnienie',
      ],
      protocols: ['KNX TP', 'DALI-2', 'BACnet/IP do BMS obiektu', 'Modbus RTU dla liczników energii'],
      hardware: ['JUNG KNX F 40', 'Bramki DALI-2 IP', 'Sensory obecności Theben PlanoSpot'],
    },
    {
      id: 'dom-1',
      type: 'dom',
      title: 'Przykładowy zakres: Dom — światło, rolety i temperatura',
      subtitle: 'Rezydencja podmiejska · Okolice Warszawy (Konstancin) · ~420 m²',
      image: '/src/assets/images/residential_residence_1790288136955.jpg',
      summary:
        'Zintegrowana automatyka willi jednorodzinnej. Połączenie sterowania strefami podłogówki, sufitów chłodzących, stacji pogodowej ze śledzeniem pozycji słońca oraz designerskiego osprzętu JUNG w wykończeniu z ciemnego mosiądzu i aluminium.',
      zones: [
        'Strefa dzienna: salon o podwójnej wysokości z wieloobwodowym oświetleniem DALI',
        'Sypialnie i garderoby: indywidualne harmonogramy termiczne i ciche karnisze',
        'Strefa SPA / basen: kontrola wilgotności, temperatury i oświetlenia relaksacyjnego',
        'Ogród i taras: automatyka nawadniania, oświetlenie zmierzchowe i markizy',
      ],
      protocols: ['KNX TP', 'DALI-2', 'Bramka KNX-Modbus do pompy ciepła', 'Interfejs Apple HomeKit'],
      hardware: ['JUNG LS 990 Mosiądz Antyczny', 'Stacja pogodowa KNX GPS', 'Zawory termoelektryczne 24V'],
    },
    {
      id: 'apartament-1',
      type: 'apartament',
      title: 'Przykładowy zakres: Apartament penthouse — strefy DALI i zintegrowany HVAC',
      subtitle: 'Apartament z tarasem · Warszawa Śródmieście · ~180 m²',
      image: '/src/assets/images/knx_switch_hardware_1790288148780.jpg',
      summary:
        'Kompaktowa, wyrafinowana rozdzielnica KNX ukryta w szafie gospodarczej. Pełna eliminacja termostatów ściennych i włączników wieloramkowych na rzecz pojedynczych manipulatorów JUNG LS ZERO zlicowanych ze strukturą tynku.',
      zones: [
        'Salon z aneksem kuchennym: sceny świetlne do gotowania, kolacji i seansów filmowych',
        'Master bedroom: sterowanie żaluzjami zaciemniającymi blackout i klimatyzacją',
        'Taras widokowy: ogrzewanie promiennikowe i oświetlenie obwodowe',
      ],
      protocols: ['KNX TP', 'DALI-2 Tunable White', 'Integracja klimatyzacji kanałowej VRF'],
      hardware: ['JUNG LS ZERO', 'Bramka Intesis KNX-VRF', 'Aktory ściemniające LED 24V'],
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Dokumentacja i Zakresy Referencyjne
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Przykładowe zakresy realizacji
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Przedstawiamy wzorcowe konfiguracje systemów KNX dla biur komercyjnych, rezydencji i apartamentów. Poznaj architekturę sprzętową, protokoły oraz sposób podziału na strefy funkcjonalne.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar & List */}
      <section className="py-16 sm:py-24 bg-[#F7F8F5] border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Segmented Filter Bar (functional buttons) */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'bg-white text-[#17211C]/70 hover:text-[#17211C] border border-[#17211C]/10'
              }`}
            >
              Wszystkie opracowania
            </button>
            <button
              onClick={() => setFilter('biuro')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'biuro'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'bg-white text-[#17211C]/70 hover:text-[#17211C] border border-[#17211C]/10'
              }`}
            >
              Biura i Fit-out
            </button>
            <button
              onClick={() => setFilter('dom')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'dom'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'bg-white text-[#17211C]/70 hover:text-[#17211C] border border-[#17211C]/10'
              }`}
            >
              Domy i Rezydencje
            </button>
            <button
              onClick={() => setFilter('apartament')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'apartament'
                  ? 'bg-[#0E4637] text-white shadow-sm'
                  : 'bg-white text-[#17211C]/70 hover:text-[#17211C] border border-[#17211C]/10'
              }`}
            >
              Apartamenty
            </button>
          </div>

          {/* Cards Grid */}
          <div className="space-y-12">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-[#17211C]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Col (5 cols) */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto bg-[#17211C]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#17211C]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                      {p.subtitle}
                    </div>
                  </div>

                  {/* Details Col (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                        Koncepcja architektoniczno-inżynierska
                      </span>
                      <h3 className="text-2xl font-bold font-display text-[#17211C] mt-1">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#17211C]/75 mt-3 leading-relaxed">
                        {p.summary}
                      </p>

                      <div className="mt-6 pt-4 border-t border-[#17211C]/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#17211C] block mb-2">
                          Podział na strefy instalacyjne:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#17211C]/80">
                          {p.zones.map((z, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4637] mt-1.5 shrink-0" />
                              <span>{z}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#17211C]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px] font-mono">Protokoły:</span>
                          <span className="font-semibold text-[#17211C]">{p.protocols.join(' · ')}</span>
                        </div>
                        <div>
                          <span className="text-[#17211C]/60 block text-[11px] font-mono">Osprzęt i moduły:</span>
                          <span className="font-semibold text-[#17211C]">{p.hardware.join(' · ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#17211C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <button
                        onClick={onOpenConsultation}
                        className="px-5 py-2.5 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Skonsultuj podobny zakres</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="text-xs font-semibold text-[#0E4637] hover:underline text-center"
                      >
                        Prześlij rzuty do wyceny
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
