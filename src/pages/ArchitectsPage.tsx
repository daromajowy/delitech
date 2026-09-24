import React from 'react';
import { PageId } from '../types.ts';
import { ContactForm } from '../components/ContactForm.tsx';
import {
  Compass,
  FileCode2,
  Sliders,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Download,
  ArrowRight,
  Layers,
} from 'lucide-react';

interface ArchitectsPageProps {
  onNavigate: (page: PageId, subHash?: string) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
}

export const ArchitectsPage: React.FC<ArchitectsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPrivacy,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#17211C] text-white py-16 lg:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F15A] font-semibold block">
              Strefa Współpracy Projektowej
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Wsparcie dla architektów wnętrz i projektantów instalacji
            </h1>
            <p className="text-base sm:text-lg text-[#EDE9DF]/80 leading-relaxed pt-2">
              Jesteśmy technicznym partnerem Twojej pracowni. Dbamy o to, aby instalacja automatyki i sterowania nie popsuła czystości Twojej architektury. Przejmujemy koordynację branżową i przygotowujemy precyzyjne wytyczne podtynkowe.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#E6F15A] hover:bg-white text-[#0E4637] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Umów konsultację projektu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('arch-kontakt');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-lg transition-colors border border-white/15"
              >
                Prześlij rzuty koncepcyjne
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Architect Support */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Bezpieczeństwo koncepcji
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Jak wspieramy pracownie na każdym etapie projektu
            </h2>
            <p className="text-sm text-[#17211C]/70 mt-2">
              Włączamy się w proces w momencie, kiedy decydują się kluczowe trasy i punkty na ścianach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Wsparcie projektowe */}
            <div className="p-8 rounded-2xl bg-[#F7F8F5] border border-[#17211C]/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#17211C]">
                01. Wsparcie koncepcyjne i scenariusze
              </h3>
              <p className="text-xs sm:text-sm text-[#17211C]/75 leading-relaxed">
                Wspólnie z architektem tworzymy logiczną matrycę działania przestrzeni. Zamiast pytać klienta o setki technicznych parametrów, proponujemy gotowe, sprawdzone w biurach i rezydencjach schematy sterowania oświetleniem, roletami i HVAC.
              </p>
              <ul className="text-xs text-[#17211C]/80 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Redukcja liczby manipulatorów ściennych do minimum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Konsultacje stacjonarne w Warszawie lub wideorozmowy</span>
                </li>
              </ul>
            </div>

            {/* 2. Wytyczne dla instalacji */}
            <div className="p-8 rounded-2xl bg-[#F7F8F5] border border-[#17211C]/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#17211C]">
                02. Wytyczne dla instalacji i koordynacja branżowa
              </h3>
              <p className="text-xs sm:text-sm text-[#17211C]/75 leading-relaxed">
                Przygotowujemy precyzyjną dokumentację wykonawczą dla elektryka i hydraulika: rzuty tras magistrali zielonej KNX, zasilania DALI, puszki montażowe, zasilacze w szafach zamiast za kartongipsem.
              </p>
              <ul className="text-xs text-[#17211C]/80 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Formaty DWG, DXF, PDF oraz modele BIM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Koordynacja z branżą HVAC — eliminacja sporów na budowie</span>
                </li>
              </ul>
            </div>

            {/* 3. Osprzęt premium JUNG */}
            <div className="p-8 rounded-2xl bg-[#F7F8F5] border border-[#17211C]/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#17211C]">
                03. Osprzęt premium JUNG i wzorniki materiałowe
              </h3>
              <p className="text-xs sm:text-sm text-[#17211C]/75 leading-relaxed">
                Dostarczamy pełne próbniki i wzorniki niemieckiego osprzętu architektonicznego JUNG (serie LS 990, LS ZERO, LS 1912, A 550) w autentycznych metalach: aluminium, stal szlachetna, mosiądz antyczny, ciemny brąz oraz kolorystyce Les Couleurs® Le Corbusier.
              </p>
              <ul className="text-xs text-[#17211C]/80 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Wypożyczenie walizki ze wzornikami na spotkanie z inwestorem</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Zlicowany montaż LS ZERO bez wystających ramek</span>
                </li>
              </ul>
            </div>

            {/* 4. Konsultacja techniczna */}
            <div className="p-8 rounded-2xl bg-[#F7F8F5] border border-[#17211C]/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0E4637] text-[#E6F15A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#17211C]">
                04. Nadzór inżynierski i asysta na budowie
              </h3>
              <p className="text-xs sm:text-sm text-[#17211C]/75 leading-relaxed">
                Nie zostawiamy architekta samego z ekipami budowlanymi. Uczestniczymy w kluczowych naradach koordynacyjnych, odbieramy ułożenie okablowania przed zamknięciem ścian i sufitów podwieszanych.
              </p>
              <ul className="text-xs text-[#17211C]/80 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Odbiór magistrali pomiarami certyfikacyjnymi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4637]" />
                  <span>Programowanie scen oświetleniowych w obecności architekta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JUNG Visual Spotlight */}
      <section className="py-16 sm:py-20 bg-[#F7F8F5] border-b border-[#17211C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#17211C]/15 shadow-xl aspect-square bg-[#17211C]">
                <img
                  src="/src/assets/images/knx_switch_hardware_1790288148780.jpg"
                  alt="Architektoniczny osprzęt KNX JUNG LS 990"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0E4637] font-semibold">
                Detal Architektoniczny
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#17211C]">
                Ikona designu JUNG LS 990 i montaż bezramkowy LS ZERO
              </h2>
              <p className="text-sm sm:text-base text-[#17211C]/80 leading-relaxed">
                Klasyczny kwadratowy kształt z wąską ramką stworzony ponad 50 lat temu w Niemczech. W połączeniu z modułami przyciskowymi KNX jeden element zastępuje skomplikowane baterie włączników, oferując precyzyjny skok klawisza, dyskretne diody orientacyjne RGB i indywidualny grawer laserowy.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#17211C]/10 space-y-2 text-xs">
                <span className="font-bold text-[#17211C] block">Dostępne materiały i kolekcje:</span>
                <p className="text-[#17211C]/70">
                  Stal szlachetna, Aluminium naturalne, Mosiądz Classic / Antyczny, Ciemny grafit matowy, Barwy Les Couleurs® Le Corbusier (63 odcienie stworzone dla architektury).
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#0E4637] text-[#E6F15A] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#17211C] transition-colors"
                >
                  Zamów wzorniki do pracowni
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architect Contact Form Anchor */}
      <section id="arch-kontakt" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4637] font-semibold block mb-2">
              Konsultacja Projektu
            </span>
            <h2 className="text-3xl font-bold font-display text-[#17211C]">
              Prześlij rzuty koncepcyjne do konsultacji
            </h2>
            <p className="text-sm text-[#17211C]/70 mt-2">
              Przeanalizujemy rzuty, wskażemy optymalne lokalizacje czujników i manipulatorów, przygotujemy wykaz urządzeń.
            </p>
          </div>

          <ContactForm
            onOpenPrivacy={onOpenPrivacy}
            defaultType="biuro"
            sourceContext="Strefa Architekta i Projektanta"
          />
        </div>
      </section>
    </div>
  );
};
