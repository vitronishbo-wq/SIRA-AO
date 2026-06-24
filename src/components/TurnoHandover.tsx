import React from 'react';
import { RefreshCw, ArrowRight, UserCheck, ShieldAlert, Fingerprint, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TurnoHandover() {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [animating, setAnimating] = React.useState(false);

  const steps = [
    {
      title: 'Agente A (Entrega)',
      subtitle: 'Início do Handover',
      desc: 'O agente cessante (Ex: Insp. Silva) inicia o processo no terminal tático ou smartphone, identificando a arma SIRA-AK103.',
      guarantee: 'Garantia: Identificação do ativo e verificação de integridade física inicial.'
    },
    {
      title: 'Validação da Entrega',
      subtitle: 'Biometria Dactiloscópica',
      desc: 'Agente A coloca o polegar no leitor biométrico para assinar eletronicamente a entrega do armamento ao arsenal ou parceiro.',
      guarantee: 'Garantia: Confirmação biométrica da custódia final.'
    },
    {
      title: 'Validação do SIRA',
      subtitle: 'Check de Integridade Central',
      desc: 'O sistema valida instantaneamente que a arma não possui alertas de disparo indevido e está com manutenção operacional em dia.',
      guarantee: 'Garantia: Registo temporal e geográfico central automatizado.'
    },
    {
      title: 'Receção (Agente B)',
      subtitle: 'Biometria Facial de Entrada',
      desc: 'O agente entrante (Ex: Cabo Neto) realiza reconhecimento facial no scanner tático para assumir a custódia legal do ativo.',
      guarantee: 'Garantia: Vinculação biométrica imediata ao novo responsável.'
    },
    {
      title: 'Cadeia Concluída',
      subtitle: 'Assinatura Criptográfica',
      desc: 'O SIRA emite um recibo criptografado assinado com chave pública estatal. O turno é formalmente trocado.',
      guarantee: 'Garantia: Imutabilidade jurídica do processo.'
    }
  ];

  const triggerNextStep = () => {
    if (currentStep < steps.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setAnimating(false);
      }, 800);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <section id="troca-turnos" className="py-20 bg-neutral-950 text-white relative border-b border-neutral-800">
      
      {/* Ambient Red glow representing strict security */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 6 — Procedimento de Troca</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Troca Inteligente de Turnos</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            Nenhum armamento militar ou policial pode ser repassado sem a assinatura conjunta do agente cessante e do agente entrante, sob duplo aval biométrico e geográfico.
          </p>
        </motion.div>

        {/* Visual interactive stepper diagram representing: Agente A -> Entrega -> Validação -> Receção -> Agente B */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto shadow-2xl"
        >
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-neutral-800/80 mb-8">
            <div className="text-left">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase">Simulador de Passagem de Turno</span>
              <h4 className="font-display text-md font-bold text-white mt-0.5">Módulo de Integridade Conjunta</h4>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded bg-neutral-950 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 transition-all flex items-center gap-1"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reiniciar Fluxo
              </button>
              
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={animating}
                  className="px-3 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-semibold hover:bg-neutral-800 hover:text-white transition-all cursor-pointer"
                >
                  Retroceder
                </button>
              )}
              
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={triggerNextStep}
                  disabled={animating}
                  className="px-4 py-1.5 rounded bg-amber-500 text-neutral-950 text-xs font-bold hover:bg-amber-400 transition-all flex items-center gap-1 cursor-pointer"
                >
                  {animating ? 'A Validar...' : 'Avançar Etapa'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <div className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold rounded flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Troca Efetuada ✓
                </div>
              )}
            </div>
          </div>

          {/* Stepper horizontal line indicators */}
          <div className="grid grid-cols-5 gap-2 mb-10">
            {steps.map((st, idx) => (
              <div key={idx} className="space-y-2">
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx <= currentStep ? 'bg-amber-500' : 'bg-neutral-800'
                }`} />
                <span className={`hidden sm:block text-[10px] font-mono tracking-wide ${
                  idx === currentStep ? 'text-amber-500 font-bold' : 'text-neutral-500'
                }`}>
                  0{idx + 1}. {st.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Step Detail Content Panel (Animated presentation) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left explanation text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-bold">ETAPA {currentStep + 1} DE 5</span>
              <div className="space-y-1">
                <h5 className="font-display text-2xl font-extrabold text-white">
                  {steps[currentStep].title}
                </h5>
                <p className="text-xs text-amber-500/80 font-mono font-semibold">{steps[currentStep].subtitle}</p>
              </div>
              
              <p className="text-sm text-neutral-300 leading-relaxed">
                {steps[currentStep].desc}
              </p>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                <strong>Garantia Legal SIRA:</strong> {steps[currentStep].guarantee}
              </div>
            </div>

            {/* Right visual indicator */}
            <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 relative min-h-[180px] flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-12 -right-12 h-24 w-24 bg-amber-500/5 rounded-full blur-xl" />
              
              <div className="flex justify-between items-center text-neutral-500">
                <span className="font-mono text-[9px] tracking-widest uppercase">Mapeamento Táctico</span>
                <span className="text-[10px] text-green-500 font-mono flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping" />
                  Sincronizado
                </span>
              </div>

              {/* Central high tech symbol change based on current step */}
              <div className="my-4 flex items-center justify-center">
                {currentStep === 0 && (
                  <div className="h-16 w-16 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-amber-500 animate-pulse text-xl">👤</div>
                )}
                {currentStep === 1 && (
                  <div className="h-16 w-16 rounded-full border border-amber-500/30 bg-amber-500/5 flex items-center justify-center text-amber-500 text-2xl">
                    <Fingerprint className="h-8 w-8 animate-pulse" />
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="h-16 w-16 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-amber-500 text-2xl">
                    <RefreshCw className="h-8 w-8 animate-spin-slow" />
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="h-16 w-16 rounded-full border border-amber-500/30 bg-amber-500/5 flex items-center justify-center text-amber-500 text-2xl">
                    <UserCheck className="h-8 w-8" />
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="h-16 w-16 rounded-full border border-green-500/30 bg-green-500/5 flex items-center justify-center text-green-400 text-2xl">
                    <Lock className="h-8 w-8" />
                  </div>
                )}
              </div>

              <div className="text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest pt-2">
                Coordenadas SIRA: Luanda 08°50&apos;S 13°15&apos;E
              </div>
            </div>

          </div>

          {/* Core Guarantees Block */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 bg-neutral-950/40 rounded border border-neutral-800/60">
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Registo Geográfico</span>
              <p className="text-xs text-neutral-300 font-semibold mt-1">Cerca Virtual Obrigatória</p>
            </div>
            <div className="p-3 bg-neutral-950/40 rounded border border-neutral-800/60">
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Registo Temporal</span>
              <p className="text-xs text-neutral-300 font-semibold mt-1">Carimbo de Data UTC</p>
            </div>
            <div className="p-3 bg-neutral-950/40 rounded border border-neutral-800/60">
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Biometria Dupla</span>
              <p className="text-xs text-neutral-300 font-semibold mt-1">Sem Brecha de Custódia</p>
            </div>
            <div className="p-3 bg-neutral-950/40 rounded border border-neutral-800/60">
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Identificação Unívoca</span>
              <p className="text-xs text-neutral-300 font-semibold mt-1">Patente &amp; ID Cadastrado</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
