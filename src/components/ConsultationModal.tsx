import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  onOpenPrivacy: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Konsultacja projektu automatyki KNX',
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investmentType: 'biuro',
    mode: 'warszawa-biuro', // 'warszawa-biuro', 'in-situ', 'online'
    preferredTime: 'rano',
    notes: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.consent) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#17211C]/15 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#17211C]/60 hover:text-[#17211C] hover:bg-black/5"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto bg-[#CFE3C4]/50 rounded-full flex items-center justify-center text-[#0E4637]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#17211C]">
              Konsultacja została zarezerwowana
            </h3>
            <p className="text-sm text-[#17211C]/75 max-w-md mx-auto">
              Nasz inżynier prowadzący skontaktuje się telefonicznie w ciągu 4 godzin roboczych, aby potwierdzić dogodną godzinę spotkania (online lub w naszym biurze przy ul. Prostej w Warszawie).
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#0E4637] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C]"
              >
                Zamknij okno
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0E4637] bg-[#CFE3C4]/30 px-2 py-0.5 rounded">
                Bezpośredni kontakt z inżynierem KNX
              </span>
              <h2 className="text-2xl font-bold font-display text-[#17211C] mt-2">
                Umów bezpłatną konsultację
              </h2>
              <p className="text-xs text-[#17211C]/70 mt-1">
                30 minut merytorycznej rozmowy: rzuty, scenariusze, standard DALI, budżet i koordynacja branżowa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#17211C] mb-1">
                    Imię i nazwisko / Firma *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="np. Jan Kowalski"
                    className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17211C] mb-1">
                    Numer telefonu *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+48 600 000 000"
                    className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17211C] mb-1">
                  Adres e-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="kontakt@twojafirma.pl"
                  className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#17211C] mb-1">
                    Forma spotkania
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637]"
                  >
                    <option value="warszawa-biuro">Biuro Warszawa (ul. Prosta 68)</option>
                    <option value="online">Wideokonferencja online (Google Meet)</option>
                    <option value="in-situ">Wizyta na budowie / w lokalu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17211C] mb-1">
                    Preferowana pora
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637]"
                  >
                    <option value="rano">Poranek (09:00 – 12:00)</option>
                    <option value="poludnie">Południe (12:00 – 15:00)</option>
                    <option value="popoludnie">Popołudnie (15:00 – 18:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17211C] mb-1">
                  Krótki opis tematu rozmowy
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="np. Weryfikacja projektu instalacji elektrycznej pod KNX, dobór osprzętu JUNG do apartamentu..."
                  className="w-full px-3 py-2 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-xs focus:ring-2 focus:ring-[#0E4637] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-[11px] text-[#17211C]/75 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#0E4637] focus:ring-[#0E4637]"
                  />
                  <span>
                    Wyrażam zgodę na kontakt w celu umówienia konsultacji technicznej zgodnie z{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="text-[#0E4637] font-semibold underline"
                    >
                      Polityką prywatności
                    </button>
                    .
                  </span>
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#17211C]/70 hover:text-[#17211C]"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Potwierdź konsultację
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
