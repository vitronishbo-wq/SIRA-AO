import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer, ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CartaOficial from './components/CartaOficial';
import DesafioNacional from './components/DesafioNacional';
import SolucaoSIRA from './components/SolucaoSIRA';
import ArquiteturaSIRA from './components/ArquiteturaSIRA';
import IdentidadeDigital from './components/IdentidadeDigital';
import GestaoArmamento from './components/GestaoArmamento';
import TurnoHandover from './components/TurnoHandover';
import FiscalizacaoCampo from './components/FiscalizacaoCampo';
import DashboardNacional from './components/DashboardNacional';
import RoadmapBeneficios from './components/RoadmapBeneficios';
import ParceiroTecnologico from './components/ParceiroTecnologico';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import PrintableProposal from './components/PrintableProposal';

export default function App() {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Framer Motion viewport scroll depth tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "SIRA_Proposta_Estrategica_Nacional_2026",
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950 scroll-smooth">
      {/* Viewport Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-red-600 z-[100] origin-left print:hidden"
        style={{ scaleX }}
      />

      {/* Official Government Header Banner */}
      <Header onPrint={handlePrint} />

      {/* Main Container */}
      <main className="relative">
        
        {/* Section: Hero Presentation */}
        <Hero onPrint={handlePrint} />

        {/* Section: Carta Oficial de Transmissão Criptografada */}
        <CartaOficial onPrint={handlePrint} />

        {/* Section 1: O Desafio Nacional */}
        <DesafioNacional />

        {/* Section 2: A Solução */}
        <SolucaoSIRA />

        {/* Section 3: Arquitetura Nacional */}
        <ArquiteturaSIRA />

        {/* Section 4: Identidade Operacional Digital */}
        <IdentidadeDigital />

        {/* Section 5: Gestão Inteligente de Armamento */}
        <GestaoArmamento />

        {/* Section 6: Troca Inteligente de Turnos */}
        <TurnoHandover />

        {/* Section 7: Fiscalização em Campo */}
        <FiscalizacaoCampo />

        {/* Section 8: Dashboard Nacional */}
        <DashboardNacional />

        {/* Section 9 & 10: Benefícios Estratégicos & Roadmap de Implementação */}
        <RoadmapBeneficios />

        {/* Section: Parceiro Tecnológico e de Desenvolvimento */}
        <ParceiroTecnologico />

        {/* Lead Capture: Solicitar Implementação Piloto & Saved Proposals */}
        <LeadCapture onPrint={handlePrint} />

      </main>



      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50 print:hidden">
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-amber-500 p-3.5 sm:px-4 sm:py-3 text-xs font-bold text-neutral-200 hover:text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title="Voltar para o Topo"
          >
            <ArrowUp className="h-5 w-5 text-amber-500 animate-bounce" />
            <span className="hidden sm:inline font-mono tracking-wider">VOLTAR AO TOPO</span>
          </button>
        </div>
      )}

      {/* Hidden strategic proposal printed container - invisible on screen, rendered on paper */}
      <div className="hidden print:block">
        <div ref={contentRef} className="print-a4-container bg-white text-neutral-900">
          <PrintableProposal />
        </div>
      </div>

      {/* Final Section & Sovereign Vision */}
      <Footer />
    </div>
  );
}

