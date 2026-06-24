import React from 'react';
import { HERO_IMAGES } from '../data';
import { Shield, ChevronRight, ChevronLeft, Target, Eye, Users, FileText } from 'lucide-react';

interface HeroProps {
  onPrint?: () => void;
}

export default function Hero({ onPrint }: HeroProps) {
  const [currentIdx, setCurrentIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-950 text-white py-16 md:py-24">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: idx === currentIdx ? 0.35 : 0,
            }}
          />
        ))}
        {/* Vignette & Gradients Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-400">
              <Shield className="h-3.5 w-3.5" />
              <span>MINISTÉRIO DA DEFESA E MINISTÉRIO DO INTERIOR</span>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-sm tracking-widest text-amber-500 font-bold uppercase">PROPOSTA DE INOVAÇÃO DE SEGURANÇA NACIONAL</span>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                SIRA
              </h2>
              <p className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-neutral-200">
                Sistema Integrado de Responsabilização e Administração de Armamento
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
              Uma infraestrutura tecnológica nacional de última geração concebida para garantir que <span className="text-white font-medium">cada agente</span>, <span className="text-white font-medium">cada arma</span> e <span className="text-white font-medium">cada missão</span> possuam uma cadeia contínua de legitimidade, responsabilidade e supervisão em tempo real.
            </p>

            {/* Strategic Pillars Badges */}
            <div className="grid grid-cols-3 gap-4 border-y border-neutral-800/80 py-4 max-w-xl">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">Rastreamento Militar</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">Biometria em Campo</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">Cadeia de Custódia</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="#solicitar-piloto"
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 transition-all hover:bg-amber-400 hover:scale-102 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                Solicitar Implementação Piloto
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </a>
              <a
                href="#desafio-nacional"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/60 backdrop-blur px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-200 transition-all hover:bg-neutral-800 hover:text-white"
              >
                Análise de Diagnóstico
              </a>
            </div>
          </div>

          {/* Hero Visual Widget Carousel Control */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5 shadow-2xl backdrop-blur-md">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              
              {/* Image Preview Container with state flags */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                <img 
                  src={HERO_IMAGES[currentIdx]} 
                  alt="SIRA Context" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 rounded bg-neutral-950/80 px-2 py-0.5 text-[9px] font-mono text-amber-400 uppercase tracking-widest border border-amber-500/20">
                  Infraestrutura SIRA {currentIdx + 1}/6
                </div>
              </div>

              {/* Quick Simulator Stats Info */}
              <div className="mt-5 space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500 font-mono">ESTADO DA REDE</span>
                  <span className="text-green-500 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
OPERACIONAL
                  </span>
                </div>
                <p className="text-xs text-neutral-400 italic">
                  &quot;Cada arma, cada munição e cada missão digitalmente associadas a agentes de legitimidade comprovada.&quot;
                </p>

                {/* Carousel Controls */}
                <div className="flex justify-between items-center pt-2">
                  <button 
                    onClick={() => setCurrentIdx((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                    className="p-1 rounded bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-amber-500 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex gap-1.5">
                    {HERO_IMAGES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIdx(i)}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-amber-500 w-3' : 'bg-neutral-700'}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length)}
                    className="p-1 rounded bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-amber-500 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
