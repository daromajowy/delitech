import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { ChevronDown, Search, BookOpen, HelpCircle, FileText, ArrowRight } from 'lucide-react';

interface KnowledgePageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
}

export const KnowledgePage: React.FC<KnowledgePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [articleCategory, setArticleCategory] = useState<'wszystkie' | 'inwestorzy' | 'architekci' | 'biura'>('wszystkie');

  const faqs = [
    {
      q: 'Na jakim etapie inwestycji należy rozpocząć projektowanie automatyki KNX?',
      a: 'Optymalnym momentem jest faza koncepcji architektonicznej lub projektu budowlanego/wykonawczego, ZANIM elektryk rozpocznie układanie tras kablowych. KNX wymaga topologii magistralnej (przewód zielony KNX YCYM) doprowadzonej do włączników i czujników oraz sprowadzenia obwodów wykonawczych do rozdzielnicy głównej. Wczesne zaangażowanie pozwala uniknąć prucia ścian i niepotrzebnych kosztów tradycyjnego okablowania.',
    },
    {
      q: 'Czym różni się standard KNX od popularnych bezprzewodowych systemów smart home?',
      a: 'KNX to certyfikowany międzynarodowy standard przemysłowy (ISO/IEC 14543) oparty na magistrali przewodowej. Nie ma tu baterii wymagających wymiany, zrywania łączności Wi-Fi przez grube ściany ani uzależnienia od chmury jednego producenta (który może zbankrutować lub wyłączyć serwery). KNX działa autonomicznie przez 30+ lat i łączy urządzenia ponad 500 niezależnych fabryk.',
    },
    {
      q: 'Dlaczego warto łączyć oświetlenie DALI z automatyką KNX?',
      a: 'Bramka KNX-DALI to najlepsze z możliwych połączeń. Zamiast ciągnąć kable 230V z rozdzielnicy do każdego punktu świetlnego, prowadzimy 5-żyłowy przewód do całej szyny lub grupy opraw. Zyskujemy indywidualne adresowanie każdej oprawy, płynne ściemnianie do 0,1% bez migotania, regulację barwy Tunable White oraz dokładne informacje o ewentualnej awarii konkretnego zasilacza.',
    },
    {
      q: 'Czy instalacja KNX może być modyfikowana i rozbudowywana po zamieszkaniu lub odbiorze biura?',
      a: 'Tak, to jedna z największych zalet KNX. Przypisanie klawisza na ścianie do konkretnego źródła światła czy rolety odbywa się programowo w narzędziu ETS. Jeśli po roku zechcesz, aby dany przycisk sterował inną grupą opraw lub wywoływał nową scenę, zmiana zajmuje kilka minut bez dotykania tynku.',
    },
    {
      q: 'Jak wygląda koordynacja z branżą sanitarną / HVAC (klimatyzacja, pompy ciepła, rekuperacja)?',
      a: 'Przejmujemy bezpośrednią koordynację z dostawcami urządzeń klimatyzacyjnych i wentylacyjnych. Dobieramy bramki komunikacyjne (Modbus, BACnet, KNX Intesis), dzięki czemu klimatyzatory kanałowe i podłogówka współpracują ze sobą według wspólnego algorytmu, nie dopuszczając do jednoczesnego grzania i chłodzenia.',
    },
    {
      q: 'Czy Delitech Smart Spaces wykonuje również montaż fizyczny i prefabrykację szaf?',
      a: 'Tak. Świadczymy usługę kompleksową: od projektu i wytycznych, przez prefabrykację i testy szaf sterowniczych w naszym warsztacie, po dostawę osprzętu JUNG, uruchomienie, wdrożenie oprogramowania ETS i przekazanie dokumentacji powykonawczej wraz z licencją bazy projektu.',
    },
  ];

  const articles = [
    {
      category: 'architekci',
      title: 'Jak uniknąć „baterii włączników” na ścianie w projekcie premium',
      readTime: '6 min czytania',
      summary:
        'Praktyczny przewodnik po doborze manipulatorów wielofunkcyjnych JUNG LS 990 i integracji termostatów pokojowych w jednej puszce.',
    },
    {
      category: 'biura',
      title: 'Optymalizacja kosztów energii w biurze dzięki DALI-2 i obecności',
      readTime: '8 min czytania',
      summary:
        'Analiza redukcji zużycia energii elektrycznej w strefach open space i salach spotkań. Zgodność z kryteriami certyfikacji BREEAM i LEED.',
    },
    {
      category: 'inwestorzy',
      title: 'Przewodnik inwestora: Ile kosztuje i jak planować budżet na KNX',
      readTime: '10 min czytania',
      summary:
        'Przejrzyste omówienie składowych instalacji: okablowanie, moduły rozdzielcze, osprzęt końcowy, programowanie i serwis.',
    },
    {
      category: 'biura',
      title: 'Automatyka sal konferencyjnych: sceny prezentacji i wentylacja CO2',
      readTime: '5 min czytania',
      summary:
        'Jak przygotować salę konferencyjną do płynnych wideokonferencji bez pomocy działu IT.',
    },
    {
      category: 'inwestorzy',
      title: 'Otwarty standard KNX a systemy zamknięte — analiza ryzyka na 20 lat',
      readTime: '7 min czytania',
      summary:
        'Dlaczego warto zabezpieczyć wartość nieruchomości przed zjawiskiem vendor lock-in i wycofaniem wsparcia przez korporacje.',
    },
    {
      category: 'architekci',
      title: 'Wytyczne tras kablowych KNX i DALI dla projektantów instalacji elektrycznych',
      readTime: '9 min czytania',
      summary:
        'Techniczne kompendium: topologia magistrali, spadki napięć, zasilacze 640mA/1280mA i zasady prowadzenia obok instalacji 230V.',
    },
  ];

  const filteredArticles =
    articleCategory === 'wszystkie'
      ? articles
      : articles.filter((a) => a.category === articleCategory);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Baza Wiedzy Inżynierskiej
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Wiedza, poradniki i standardy KNX
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Dzielimy się wiedzą techniczną. Znajdziesz tu merytoryczne poradniki dla inwestorów, wytyczne dla pracowni architektonicznych oraz odpowiedzi na najczęstsze pytania dotyczące automatyki budynkowej.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
                Artykuły i Poradniki
              </span>
              <h2 className="text-3xl font-bold font-display text-[#17211C]">
                Praktyka inżynierska i projektowa
              </h2>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setArticleCategory('wszystkie')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  articleCategory === 'wszystkie'
                    ? 'bg-[#0E4637] text-white'
                    : 'bg-[#F7F8F5] text-[#17211C]/70 hover:bg-black/5'
                }`}
              >
                Wszystkie
              </button>
              <button
                onClick={() => setArticleCategory('architekci')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  articleCategory === 'architekci'
                    ? 'bg-[#0E4637] text-white'
                    : 'bg-[#F7F8F5] text-[#17211C]/70 hover:bg-black/5'
                }`}
              >
                Dla architektów
              </button>
              <button
                onClick={() => setArticleCategory('biura')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  articleCategory === 'biura'
                    ? 'bg-[#0E4637] text-white'
                    : 'bg-[#F7F8F5] text-[#17211C]/70 hover:bg-black/5'
                }`}
              >
                Dla biur &amp; fit-out
              </button>
              <button
                onClick={() => setArticleCategory('inwestorzy')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  articleCategory === 'inwestorzy'
                    ? 'bg-[#0E4637] text-white'
                    : 'bg-[#F7F8F5] text-[#17211C]/70 hover:bg-black/5'
                }`}
              >
                Dla inwestorów
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#F7F8F5] border border-[#17211C]/10 flex flex-col justify-between hover:border-[#0E4637]/40 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#17211C]/60">
                    <span className="font-mono uppercase font-semibold text-[#0E4637]">
                      {art.category === 'architekci'
                        ? 'Dla Architektów'
                        : art.category === 'biura'
                        ? 'Dla Biur'
                        : 'Dla Inwestorów'}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#17211C] group-hover:text-[#0E4637] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#17211C]/70 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#17211C]/10">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0E4637] group-hover:gap-2.5 transition-all"
                  >
                    <span>Skonsultuj to zagadnienie</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion and Search */}
      <section className="py-16 sm:py-24 bg-[#F7F8F5] border-b border-[#17211C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Odpowiedzi inżynierskie
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Najczęściej zadawane pytania (FAQ)
            </h2>
            <p className="text-sm text-[#17211C]/70 mt-2">
              Praktyczne odpowiedzi dotyczące kosztów, procesu, standardu DALI i odbiorów.
            </p>

            {/* Search Input */}
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-[#17211C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj pytania (np. DALI, koszt, etapy, HVAC)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#17211C]/15 rounded-lg text-xs text-[#17211C] focus:outline-none focus:ring-2 focus:ring-[#0E4637]"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#17211C]/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm text-[#17211C] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0E4637] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-[#17211C]/80 leading-relaxed border-t border-black/5 mt-1 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#17211C]/10 space-y-2">
            <h3 className="font-bold text-sm text-[#17211C]">Masz inne pytanie techniczne?</h3>
            <p className="text-xs text-[#17211C]/70">
              Nasi certyfikowani inżynierowie KNX odpowiedzą na każde pytanie dotyczące projektu instalacji.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#0E4637] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
              >
                Zapytaj inżyniera KNX
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
