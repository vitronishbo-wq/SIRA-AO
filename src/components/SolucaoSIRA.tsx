import React from 'react';
import { SOLUTION_IMAGES } from '../data';
import { ShieldCheck, UserCheck, CalendarDays, Target, Crosshair, MapPin, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function SolucaoSIRA() {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const steps = [
    {
      title: 'Agente',
      icon: UserCheck,
      description: 'Identificação inequívoca através de biometria facial e dactiloscópica integrada na Base de Dados Nacional.',
      detail: 'Antes de tocar em qualquer armamento, a identidade do militar ou agente policial é comprovada e cruzada com os registos criminais e disciplinares do Comando Superior.',
      img: SOLUTION_IMAGES[0]
    },
    {
      title: 'Missão',
      icon: CalendarDays,
      description: 'Ordem de serviço ativa devidamente emitida pelo Comando Geral ou Provincial.',
      detail: 'O agente só pode requisitar ou portar armas se houver uma missão de patrulha, escolta ou guarda validada electronicamente no sistema central.',
      img: SOLUTION_IMAGES[1]
    },
    {
      title: 'Armamento',
      icon: Crosshair,
      description: 'Arma específica com número de série indexado ao perfil do agente em tempo real.',
      detail: 'Cada carregador, arma de assalto ou pistola possui uma chave eletrónica única. O sistema regista o acoplamento do armamento ao biótipo do agente.',
      img: SOLUTION_IMAGES[2]
    },
    {
      title: 'Localização',
      icon: MapPin,
      description: 'Cercas geográficas operacionais definidas para a missão em curso.',
      detail: 'Se a arma sair do quadrante territorial de patrulhamento autorizado, alertas automáticos são disparados para o Centro de Comando Provincial e Nacional.',
      img: SOLUTION_IMAGES[3]
    },
    {
      title: 'Responsabilidade',
      icon: Landmark,
      description: 'Cadeia contínua de custódia militar e policial incontornável.',
      detail: 'O agente torna-se o tutor legal e civil da arma e dos disparos efetuados. Nenhum turno é encerrado sem a validação biométrica dupla de devolução.',
      img: SOLUTION_IMAGES[0] // fallback if needed
    }
  ];

  return (
    <section id="solucao-sira" className="relative py-20 bg-neutral-950 text-white overflow-hidden">
      
      {/* Decorative gradient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 2 — Doutrina &amp; Resolução</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">A Solução SIRA</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA é a resposta definitiva de soberania nacional, desenhando um ecossistema digital inteligente que liga as forças policiais e militares do terreno ao topo do Comando Operacional.
          </p>
        </motion.div>

        {/* Doctrine Slogans Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 text-left relative">
            <div className="absolute -top-3 left-6 px-2 py-0.5 bg-neutral-950 border border-red-500/30 rounded text-[9px] font-mono text-red-500 uppercase tracking-widest font-bold">Doutrina Base 1</div>
            <p className="font-display text-lg font-bold text-neutral-100 italic leading-snug">
              &quot;Nenhuma arma existe operacionalmente sem um portador legítimo.&quot;
            </p>
          </div>
          <div className="p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 text-left relative">
            <div className="absolute -top-3 left-6 px-2 py-0.5 bg-neutral-950 border border-amber-500/30 rounded text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">Doutrina Base 2</div>
            <p className="font-display text-lg font-bold text-neutral-100 italic leading-snug">
              &quot;Nenhum portador existe operacionalmente sem missão legítima.&quot;
            </p>
          </div>
        </motion.div>

        {/* Interactive "Cadeia de Legitimidade" Flow */}
        <div className="space-y-12">
          
          <div className="text-center">
            <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Cadeia Digital de Legitimidade</h4>
            
            {/* Steps Navigation Bar */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 max-w-4xl mx-auto p-2 bg-neutral-900 border border-neutral-800 rounded-xl">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all ${
                      idx === activeStep 
                        ? 'bg-amber-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Panel Visual presentation */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left detail panel */}
              <div className="p-8 lg:col-span-7 flex flex-col justify-between text-left space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                    {React.createElement(steps[activeStep].icon, { className: 'h-6 w-6' })}
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-bold">ETAPA {activeStep + 1} DE 5 da cadeia</span>
                    <h5 className="font-display text-2xl font-extrabold text-white">
                      Legitimidade do {steps[activeStep].title}
                    </h5>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed font-semibold">
                    {steps[activeStep].description}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-neutral-800 pt-6">
                  <div className="flex gap-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(p => p - 1)}
                      className="px-3 py-1.5 rounded bg-neutral-950 border border-neutral-800 text-xs font-semibold text-neutral-300 disabled:opacity-40 hover:bg-neutral-800 transition-all"
                    >
                      Anterior
                    </button>
                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(p => p + 1)}
                      className="px-3 py-1.5 rounded bg-amber-500 text-neutral-950 text-xs font-bold hover:bg-amber-400 transition-all"
                    >
                      Seguinte
                    </button>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    CADEIA DIGITAL ATIVA ✓
                  </span>
                </div>
              </div>

              {/* Right image illustration */}
              <div className="relative lg:col-span-5 h-64 lg:h-auto min-h-[300px] overflow-hidden border-t lg:border-t-0 lg:border-l border-neutral-800 bg-neutral-950">
                <img 
                  src={steps[activeStep].img} 
                  alt={steps[activeStep].title} 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-neutral-950/80 rounded-md border border-neutral-800 p-2 text-[10px] font-mono text-neutral-400 max-w-xs text-right">
                  Ambiente de Simulação SIRA - Visual de Controlo Governamental
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
