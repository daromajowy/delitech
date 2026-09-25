import React from 'react';
import { X, ShieldCheck, Lock, FileCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'cookies' | 'rodo';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'cookies' | 'rodo'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#17211C]/15 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#17211C]/10 flex items-center justify-between bg-[#F7F8F5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-lg font-bold font-display text-[#17211C]">
                Informacje Prawne i Ochrona Danych
              </h2>
              <p className="text-xs text-[#17211C]/60">Delitech Smart Spaces · Warszawa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#17211C]/60 hover:text-[#17211C] hover:bg-black/5 transition-colors"
            aria-label="Zamknij okno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#17211C]/10 px-6 bg-[#F7F8F5]/50 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-[#0E4637] text-[#0E4637]'
                : 'border-transparent text-[#17211C]/60 hover:text-[#17211C]'
            }`}
          >
            Polityka Prywatności
          </button>
          <button
            onClick={() => setActiveTab('rodo')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'rodo'
                ? 'border-[#0E4637] text-[#0E4637]'
                : 'border-transparent text-[#17211C]/60 hover:text-[#17211C]'
            }`}
          >
            Klauzula Informacyjna RODO
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'cookies'
                ? 'border-[#0E4637] text-[#0E4637]'
                : 'border-transparent text-[#17211C]/60 hover:text-[#17211C]'
            }`}
          >
            Polityka Cookies
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm text-[#17211C]/80 space-y-4 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h3 className="font-bold text-[#17211C] text-base">1. Administrator Danych Osobowych</h3>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem portalu jest Delitech Smart Spaces z siedzibą przy ul. Prostej 68, 00-838 Warszawa, NIP: 525-28-40-192, e-mail: kontakt@delitech.pl, tel: +48 22 354 67 76.
              </p>

              <h3 className="font-bold text-[#17211C] text-base pt-2">2. Zakres i Cel Zbierania Danych</h3>
              <p>
                Przetwarzamy dane osobowe (imię, nazwisko, adres e-mail, numer telefonu, nazwa pracowni/firmy, dokumentacja rzutów architektonicznych i instalacyjnych) wyłącznie w celach:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>przygotowania analizy technicznej, audytu rzutów oraz oferty cenowo-funkcjonalnej automatyki KNX (art. 6 ust. 1 lit. b RODO),</li>
                <li>kontaktu telefonicznego i mailowego w sprawie przesłanego zapytania (art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora),</li>
                <li>realizacji umów wdrożeniowych, programistycznych i serwisowych.</li>
              </ul>

              <h3 className="font-bold text-[#17211C] text-base pt-2">3. Poufność Rzutów Architektonicznych</h3>
              <p className="text-xs bg-[#F7F8F5] p-3 rounded-lg border border-[#17211C]/10">
                Wszelkie materiały projektowe (pliki DWG, PDF, modele BIM, specyfikacje techniczne) przesłane przez formularz podlegają ścisłej tajemnicy zawodowej i nie są udostępniane podmiotom trzecim bez wyraźnej pisemnej zgody inwestora lub architekta.
              </p>
            </div>
          )}

          {activeTab === 'rodo' && (
            <div className="space-y-3">
              <h3 className="font-bold text-[#17211C] text-base">Prawa Osób, Których Dane Dotyczą</h3>
              <p>
                Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO), każdemu użytkownikowi przysługuje prawo do:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#0E4637] block">Prawo dostępu do danych</span>
                  Możliwość uzyskania informacji o przetwarzanych danych i ich kopii.
                </div>
                <div className="p-2.5 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#0E4637] block">Prawo do sprostowania</span>
                  Możliwość poprawienia nieprawidłowych lub nieaktualnych informacji.
                </div>
                <div className="p-2.5 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#0E4637] block">Prawo do usunięcia danych</span>
                  Prawo do bycia zapomnianym po zakończeniu procesu ofertowania/realizacji.
                </div>
                <div className="p-2.5 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#0E4637] block">Prawo do sprzeciwu</span>
                  Prawo do wniesienia sprzeciwu wobec przetwarzania na podstawie art. 6 ust. 1 lit. f RODO.
                </div>
              </div>
              <p className="text-xs pt-2">
                W celu realizacji powyższych praw prosimy o kontakt pod adresem: <span className="font-mono text-[#0E4637] font-semibold">rodo@delitech.pl</span>.
              </p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-3">
              <h3 className="font-bold text-[#17211C] text-base">Zasady Wykorzystywania Plików Cookies</h3>
              <p>
                Nasz portal wykorzystuje niezbędne pliki cookies służące do prawidłowego działania sesji, zapamiętywania preferencji nawigacji oraz anonimowych pomiarów wydajnościowych.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#17211C]">Cookies techniczne (niezbędne):</span>
                  <p className="text-[#17211C]/70 mt-0.5">Umożliwiają poprawne renderowanie podstron, zapamiętanie statusu formularza oraz polityki cookies.</p>
                </div>
                <div className="p-3 bg-[#F7F8F5] rounded-lg border border-[#17211C]/10">
                  <span className="font-semibold text-[#17211C]">Brak inwazyjnego śledzenia reklamowego:</span>
                  <p className="text-[#17211C]/70 mt-0.5">Nie profilujemy użytkowników komercyjnie ani nie przekazujemy danych brokerom behawioralnym.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F8F5] border-t border-[#17211C]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0E4637] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};
