import React, { useState, useRef } from 'react';
import { InquiryFormData } from '../types.ts';
import { Upload, FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface ContactFormProps {
  onOpenPrivacy: () => void;
  defaultType?: InquiryFormData['investmentType'];
  className?: string;
  sourceContext?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onOpenPrivacy,
  defaultType = 'biuro',
  className = '',
  sourceContext,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    investmentType: defaultType,
    location: 'Warszawa',
    stage: 'projekt',
    areaSquareMeters: '',
    scopeItems: ['Oświetlenie i DALI', 'Sterowanie HVAC'],
    description: '',
    files: [],
    consentDataProcessing: false,
    consentMarketing: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const scopeOptions = [
    'Oświetlenie i DALI',
    'Rolety i żaluzje fasadowe',
    'Sterowanie HVAC (klimatyzacja / ogrzewanie / wentylacja)',
    'Automatyka sal konferencyjnych i stref wspólnych',
    'Monitoring zużycia energii elektrycznej',
    'Osprzęt designerski JUNG / tactile panels',
    'Integracja z systemem BMS / Audio-Video',
    'Kontrola dostępu i bezpieczeństwo',
  ];

  const handleScopeToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.scopeItems.includes(item);
      return {
        ...prev,
        scopeItems: exists
          ? prev.scopeItems.filter((i) => i !== item)
          : [...prev.scopeItems, item],
      };
    });
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (newFiles: File[]) => {
    const formatted = newFiles.map((f) => ({
      name: f.name,
      size: Math.round(f.size / 1024), // in KB
      type: f.name.split('.').pop()?.toUpperCase() || 'PLIK',
    }));
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...formatted],
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Wpisz imię i nazwisko lub nazwę firmy';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Wprowadź prawidłowy adres e-mail';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Wprowadź numer telefonu kontaktowego';
    }
    if (!formData.consentDataProcessing) {
      newErrors.consent = 'Wymagana zgoda na przetwarzanie danych w celu przygotowania oferty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate CRM / backend pipeline integration
    setTimeout(() => {
      const ref = `KNX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedReference(ref);
      setIsSubmitting(false);
    }, 600);
  };

  const resetForm = () => {
    setSubmittedReference(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      investmentType: defaultType,
      location: 'Warszawa',
      stage: 'projekt',
      areaSquareMeters: '',
      scopeItems: ['Oświetlenie i DALI', 'Sterowanie HVAC'],
      description: '',
      files: [],
      consentDataProcessing: false,
      consentMarketing: false,
    });
    setErrors({});
  };

  if (submittedReference) {
    return (
      <div className={`bg-white border border-[#0E4637]/20 rounded-2xl p-8 sm:p-12 text-center ${className}`}>
        <div className="w-16 h-16 mx-auto mb-6 bg-[#CFE3C4]/40 rounded-full flex items-center justify-center text-[#0E4637]">
          <CheckCircle2 className="w-8 h-8 text-[#0E4637]" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[#0E4637] mb-2 font-semibold">
          Zgłoszenie przyjęte · ID: {submittedReference}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17211C] mb-4">
          Dziękujemy za przesłanie rzutów i zapytania
        </h3>
        <p className="text-[#17211C]/75 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
          Nasz inżynier prowadzący w Warszawie przeanalizuje nadesłaną dokumentację rzutów i specyfikację. Wrócimy z konkretnymi pytaniami technicznymi i wstępną koncepcją automatyki KNX w ciągu 24–48 godzin roboczych.
        </p>

        <div className="bg-[#F7F8F5] border border-[#17211C]/10 rounded-xl p-5 max-w-lg mx-auto text-left text-xs mb-8 space-y-2">
          <div className="flex justify-between border-b border-black/5 pb-1">
            <span className="text-[#17211C]/60">Inwestor / Kontakt:</span>
            <span className="font-semibold text-[#17211C]">{formData.name}</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-1">
            <span className="text-[#17211C]/60">Typ inwestycji:</span>
            <span className="font-semibold text-[#17211C] capitalize">{formData.investmentType} ({formData.location})</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-1">
            <span className="text-[#17211C]/60">Przesłane pliki:</span>
            <span className="font-semibold text-[#17211C]">{formData.files.length} załącznik(ów)</span>
          </div>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="px-6 py-2.5 bg-[#0E4637] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
        >
          Prześlij kolejne zapytanie
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-[#17211C]/10 rounded-2xl p-6 sm:p-10 shadow-sm ${className}`}>
      {sourceContext && (
        <div className="mb-4 text-xs font-mono uppercase tracking-wider text-[#0E4637] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6F15A] border border-[#0E4637]" />
          <span>Kontekst: {sourceContext}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Row 1: Dane kontaktowe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Imię i nazwisko / Firma <span className="text-[#0E4637]">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="np. Architektura Jan Kowalski / Sp. z o.o."
              className={`w-full px-3.5 py-2.5 bg-[#F7F8F5] border rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all ${
                errors.name ? 'border-red-500' : 'border-[#17211C]/15'
              }`}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Adres e-mail <span className="text-[#0E4637]">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="kontakt@twojadomena.pl"
              className={`w-full px-3.5 py-2.5 bg-[#F7F8F5] border rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all ${
                errors.email ? 'border-red-500' : 'border-[#17211C]/15'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Telefon i Lokalizacja */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Numer telefonu <span className="text-[#0E4637]">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+48 600 000 000"
              className={`w-full px-3.5 py-2.5 bg-[#F7F8F5] border rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all ${
                errors.phone ? 'border-red-500' : 'border-[#17211C]/15'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Lokalizacja inwestycji
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="np. Warszawa Mokotów, Konstancin, Wrocław..."
              className="w-full px-3.5 py-2.5 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Row 3: Rodzaj inwestycji i Etap */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Rodzaj obiektu
            </label>
            <select
              value={formData.investmentType}
              onChange={(e) => setFormData({ ...formData, investmentType: e.target.value as any })}
              className="w-full px-3.5 py-2.5 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-sm text-[#17211C] focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white"
            >
              <option value="biuro">Biuro / Przestrzeń komercyjna</option>
              <option value="dom">Dom jednorodzinny / Rezydencja</option>
              <option value="apartament">Apartament premium</option>
              <option value="komercyjny">Obiekt komercyjny / HoReCa</option>
              <option value="inne">Inny obiekt</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Etap inwestycji
            </label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value as any })}
              className="w-full px-3.5 py-2.5 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-sm text-[#17211C] focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white"
            >
              <option value="koncepcja">Koncepcja funkcjonalna / Rzuty wstępne</option>
              <option value="projekt">Projekt wykonawczy / Branżowy</option>
              <option value="stan-surowy">Stan surowy / Deweloperski</option>
              <option value="wykonczenie">Fit-out / Wykończenie wnętrz</option>
              <option value="modernizacja">Modernizacja działającego obiektu</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
              Powierzchnia (m²)
            </label>
            <input
              type="text"
              value={formData.areaSquareMeters}
              onChange={(e) => setFormData({ ...formData, areaSquareMeters: e.target.value })}
              placeholder="np. 450 m²"
              className="w-full px-3.5 py-2.5 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all font-mono"
            />
          </div>
        </div>

        {/* Row 4: Zakres automatyki (Checkboxy) */}
        <div>
          <label className="block text-xs font-semibold text-[#17211C] mb-2">
            Wstępnie planowany zakres instalacji (zaznacz interesujące obszary):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {scopeOptions.map((opt) => {
              const checked = formData.scopeItems.includes(opt);
              return (
                <label
                  key={opt}
                  onClick={() => handleScopeToggle(opt)}
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                    checked
                      ? 'bg-[#CFE3C4]/30 border-[#0E4637]/40 text-[#0E4637] font-medium'
                      : 'bg-[#F7F8F5] border-[#17211C]/10 text-[#17211C]/80 hover:bg-black/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="mt-0.5 rounded text-[#0E4637] focus:ring-[#0E4637]"
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Row 5: Drag & Drop upload rzutów */}
        <div>
          <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
            Rzuty architektoniczne / schematy instalacji (PDF, DWG, DXF, PNG, ZIP)
          </label>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#0E4637]/30 hover:border-[#0E4637] bg-[#F7F8F5] hover:bg-[#CFE3C4]/15 rounded-xl p-5 text-center cursor-pointer transition-all group"
          >
            <Upload className="w-6 h-6 mx-auto text-[#0E4637] mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-medium text-[#17211C]">
              Przeciągnij i upuść pliki rzutów tutaj lub <span className="text-[#0E4637] font-semibold underline underline-offset-2">przeglądaj dysk</span>
            </p>
            <p className="text-[11px] text-[#17211C]/60 mt-1">
              Akceptowane formaty: PDF, DWG, DXF, PNG, JPG, ZIP (do 50 MB)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileInputChange}
              className="hidden"
              accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
            />
          </div>

          {/* List of uploaded files */}
          {formData.files.length > 0 && (
            <div className="mt-3 space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0E4637]">
                Dołączone pliki ({formData.files.length}):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {formData.files.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-white border border-[#17211C]/15 rounded-lg text-xs"
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <FileText className="w-4 h-4 text-[#0E4637] shrink-0" />
                      <span className="truncate font-medium text-[#17211C]">{file.name}</span>
                      <span className="text-[10px] font-mono text-[#17211C]/50 shrink-0">
                        {file.size} KB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(idx);
                      }}
                      className="text-[#17211C]/40 hover:text-red-600 p-1"
                      aria-label="Usuń plik"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Row 6: Opis projektu */}
        <div>
          <label className="block text-xs font-semibold text-[#17211C] mb-1.5">
            Opis projektu, uwagi techniczne lub specyficzne wymagania
          </label>
          <textarea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Opisz specyfikę przestrzeni, oczekiwany harmonogram lub kluczowe założenia sterowania (np. sceny prezentacji w sali zarządu, integracja z pompą ciepła)..."
            className="w-full px-3.5 py-2.5 bg-[#F7F8F5] border border-[#17211C]/15 rounded-lg text-sm text-[#17211C] placeholder:text-[#17211C]/40 focus:outline-none focus:ring-2 focus:ring-[#0E4637] focus:bg-white transition-all resize-y"
          />
        </div>

        {/* Row 7: Zgody formalne RODO i wysyłka */}
        <div className="pt-2 border-t border-[#17211C]/10 space-y-3">
          <label className="flex items-start gap-2 text-xs text-[#17211C]/80 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consentDataProcessing}
              onChange={(e) => setFormData({ ...formData, consentDataProcessing: e.target.checked })}
              className="mt-0.5 rounded text-[#0E4637] focus:ring-[#0E4637]"
            />
            <span>
              Wyrażam zgodę na przetwarzanie podanych danych osobowych przez Delitech Smart Spaces w celu opracowania i przedstawienia oferty techniczno-handlowej oraz kontaktu w sprawie projektu.{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-[#0E4637] font-semibold underline underline-offset-2 hover:text-[#17211C]"
              >
                Polityka prywatności i RODO
              </button>
              .
            </span>
          </label>
          {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-[11px] text-[#17211C]/60 text-left">
              <ShieldCheck className="w-4 h-4 text-[#0E4637] shrink-0" />
              <span>Gwarancja poufności rzutów i dokumentacji projektowej</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 bg-[#0E4637] hover:bg-[#17211C] text-[#E6F15A] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Przesyłanie danych...' : 'Prześlij rzuty do analizy'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
