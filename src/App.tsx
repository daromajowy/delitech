/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { OfficesPage } from './pages/OfficesPage.tsx';
import { HomesPage } from './pages/HomesPage.tsx';
import { SolutionsPage } from './pages/SolutionsPage.tsx';
import { ArchitectsPage } from './pages/ArchitectsPage.tsx';
import { KNXPage } from './pages/KNXPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { KnowledgePage } from './pages/KnowledgePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentHash, setCurrentHash] = useState<string | undefined>(undefined);

  // Modals state
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyTab, setPrivacyTab] = useState<'privacy' | 'cookies' | 'rodo'>('privacy');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('Konsultacja projektu automatyki KNX');

  // Page titles and meta descriptions map for SEO compliance
  const pageMetadata: Record<PageId, { title: string; desc: string }> = {
    home: {
      title: 'Delitech Smart Spaces – Automatyka budynku KNX | Warszawa & Polska',
      desc: 'Projektowanie, wykonawstwo i programowanie automatyki budynkowej KNX w Warszawie i całej Polsce dla biur komercyjnych, domów oraz apartamentów premium.',
    },
    offices: {
      title: 'Automatyka dla biur i fit-out KNX | Delitech Smart Spaces Warszawa',
      desc: 'Inteligentne biura, sale konferencyjne, open space i gabinety zarządu. Sterowanie DALI-2, żaluzjami i HVAC redukujące koszty energii.',
    },
    homes: {
      title: 'Automatyka dla domów i apartamentów premium KNX | Delitech Smart Spaces',
      desc: 'Dedykowana automatyka budynkowa dla willi, rezydencji i luksusowych apartamentów. Sceny nastrojowe, wyciszone rolety i osprzęt JUNG.',
    },
    solutions: {
      title: 'Rozwiązania KNX, DALI-2, HVAC i Sceny | Delitech Smart Spaces',
      desc: 'Kompletne spektrum automatyki: DALI Tunable White, żaluzje fasadowe z sun-trackingiem, bezkolizyjny HVAC i pomiary energii.',
    },
    architects: {
      title: 'Strefa architekta i projektanta instalacji | Delitech Smart Spaces',
      desc: 'Wsparcie koncepcyjne, wytyczne tras kablowych, modele BIM oraz wzorniki architektonicznego osprzętu JUNG LS 990 i LS ZERO dla pracowni.',
    },
    knx: {
      title: 'Standard KNX – Dlaczego otwarty protokół? | Delitech Smart Spaces',
      desc: 'Poznaj zalety otwartego standardu KNX ISO/IEC 14543: brak uzależnienia od jednego producenta, magistrala przewodowa i 30+ lat trwałości.',
    },
    projects: {
      title: 'Przykładowe zakresy realizacji KNX | Delitech Smart Spaces',
      desc: 'Wzorcowe opracowania instalacji dla powierzchni biurowych fit-out, rezydencji podmiejskich i apartamentów penthouse.',
    },
    knowledge: {
      title: 'Baza wiedzy KNX, poradniki i FAQ | Delitech Smart Spaces',
      desc: 'Praktyczne poradniki inżynierskie dla inwestorów i architektów oraz odpowiedzi na najczęściej zadawane pytania o automatykę KNX i DALI.',
    },
    about: {
      title: 'O Delitech Smart Spaces – Integrator KNX Warszawa',
      desc: 'Poznaj zespół i standardy inżynierskie certyfikowanego integratora KNX Partner. Automatyka budynku, która pracuje dla ludzi i przestrzeni.',
    },
    contact: {
      title: 'Prześlij rzuty i skontaktuj się | Delitech Smart Spaces Warszawa',
      desc: 'Prześlij rzuty do analizy inżynierskiej. Biuro przy ul. Prostej 68 w Warszawie. Realizacje na terenie całej Polski.',
    },
  };

  // Sync title and meta description dynamically
  useEffect(() => {
    const meta = pageMetadata[currentPage];
    if (meta) {
      document.title = meta.title;
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', meta.desc);
      }
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', meta.title);
      }
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', meta.desc);
      }
    }
  }, [currentPage]);

  // Read hash on mount
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash) {
        const [pagePart, subPart] = rawHash.split('/');
        const validPages: PageId[] = [
          'home',
          'offices',
          'homes',
          'solutions',
          'architects',
          'knx',
          'projects',
          'knowledge',
          'about',
          'contact',
        ];
        if (validPages.includes(pagePart as PageId)) {
          setCurrentPage(pagePart as PageId);
          setCurrentHash(subPart);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, subHash?: string) => {
    setCurrentPage(page);
    setCurrentHash(subHash);
    window.location.hash = subHash ? `${page}/${subHash}` : page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrivacy = (tab: 'privacy' | 'cookies' | 'rodo' = 'privacy') => {
    setPrivacyTab(tab);
    setPrivacyModalOpen(true);
  };

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setConsultationTopic(topic);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#17211C]">
      {/* Sticky Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenPrivacy={() => handleOpenPrivacy('privacy')}
          />
        )}

        {currentPage === 'offices' && (
          <OfficesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Konsultacja projektu biura / fit-out')}
            onOpenPrivacy={() => handleOpenPrivacy('privacy')}
            initialHash={currentHash}
          />
        )}

        {currentPage === 'homes' && (
          <HomesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Konsultacja rezydencji / apartamentu')}
            onOpenPrivacy={() => handleOpenPrivacy('privacy')}
            initialHash={currentHash}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Konsultacja techniczna modułów KNX/DALI')}
            initialHash={currentHash}
          />
        )}

        {currentPage === 'architects' && (
          <ArchitectsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Konsultacja projektu z pracownią architektoniczną')}
            onOpenPrivacy={() => handleOpenPrivacy('privacy')}
          />
        )}

        {currentPage === 'knx' && (
          <KNXPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Audyt lub serwis instalacji KNX')}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Konsultacja zakresu referencyjnego')}
          />
        )}

        {currentPage === 'knowledge' && (
          <KnowledgePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Pytanie techniczne do inżyniera KNX')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Spotkanie w biurze Warszawa')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenPrivacy={handleOpenPrivacy}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={handleOpenPrivacy}
      />

      {/* Legal Privacy & Cookies Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        defaultTab={privacyTab}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTopic={consultationTopic}
        onOpenPrivacy={() => handleOpenPrivacy('privacy')}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={handleOpenPrivacy} />
    </div>
  );
}
