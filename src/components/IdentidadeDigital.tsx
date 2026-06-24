import React from 'react';
import { INITIAL_AGENTS } from '../data';
import { Agent } from '../types';
import { ShieldCheck, Fingerprint, Eye, Sparkles, RefreshCw, UserCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function IdentidadeDigital() {
  const [selectedAgent, setSelectedAgent] = React.useState<Agent>(INITIAL_AGENTS[0]);
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanComplete, setScanComplete] = React.useState(true);

  const startScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  const handleAgentChange = (agentId: string) => {
    const ag = INITIAL_AGENTS.find(a => a.id === agentId);
    if (ag) {
      setSelectedAgent(ag);
      setScanComplete(false);
    }
  };

  return (
    <section id="identidade-digital" className="py-20 bg-neutral-950 text-white relative">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-red-600/5 blur-3xl -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 4 — Identidade Digital</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Identidade Operacional Digital</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA consolida a identidade de cada membro das forças de segurança sob três eixos de segurança complementares, permitindo validações instantâneas de integridade jurídica e funcional.
          </p>
        </motion.div>

        {/* Content Box with Interactive Biometric Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conceptual Eights list */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h4 className="font-display text-2xl font-bold text-white">Os Três Eixos da Identidade</h4>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Nenhum agente opera sob anonimato ou sem competência jurídica ativa. O SIRA cruza estas três camadas dinamicamente:
            </p>

            <div className="space-y-4">
              
              <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <Fingerprint className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">1. Identidade Biométrica</h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Mapeamento avançado de impressão dactiloscópica nacional e pontos biométricos de reconhecimento facial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">2. Identidade Institucional</h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Número único nacional indexado, patente militar/categoria de polícia, unidade atribuída e histórico de conduta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">3. Identidade Operacional</h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Estado de serviço atual, missão eletrónica associada em curso e coordenada geográfica autorizada para patrulhamento.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Live Biometric Scanning Simulator Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-800 pb-4 mb-6">
              <div className="text-left">
                <h4 className="font-display text-md font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Terminal de Verificação Biométrica
                </h4>
                <p className="text-[10px] text-neutral-500 font-mono">DISPOSITIVO VIRTUAL DE CAMPO SIRA-V1</p>
              </div>

              {/* Agent selector */}
              <div className="w-full sm:w-auto">
                <select
                  value={selectedAgent.id}
                  onChange={(e) => handleAgentChange(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-2 py-1 text-xs text-amber-400 font-mono focus:border-amber-500 focus:outline-none"
                >
                  {INITIAL_AGENTS.map(agent => (
                    <option key={agent.id} value={agent.id}>{agent.name} ({agent.rank})</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Scanning display panel */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              
              {/* Photo representation and scanning animation */}
              <div className="sm:col-span-5 relative flex flex-col items-center justify-center bg-neutral-950 border border-neutral-800 rounded-lg p-4 overflow-hidden min-h-[220px]">
                
                <img 
                  src={selectedAgent.biometrics.photoUrl} 
                  alt={selectedAgent.name} 
                  className={`w-32 h-32 rounded-full object-cover border-2 ${isScanning ? 'border-amber-500 animate-pulse' : 'border-neutral-800'}`}
                />

                {/* Scanning laser line overlay */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-amber-500 shadow-[0_0_12px_#f59e0b] animate-bounce" style={{ top: '30%', animationDuration: '1.2s' }} />
                )}

                <div className="mt-4 text-center">
                  <p className="text-xs font-bold text-white">{selectedAgent.name}</p>
                  <p className="text-[10px] font-mono text-amber-500">{selectedAgent.nationalId}</p>
                </div>

                {isScanning && (
                  <div className="absolute inset-0 bg-amber-500/5 flex items-center justify-center">
                    <span className="font-mono text-[10px] font-bold text-amber-500 bg-neutral-950 border border-amber-500/30 px-2 py-1 rounded animate-pulse">LENDO BIOMETRIA...</span>
                  </div>
                )}
              </div>

              {/* Results list checklist */}
              <div className="sm:col-span-7 flex flex-col justify-between text-left">
                
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Checklist de Legitimidade Operacional</span>
                  
                  <div className="space-y-2 font-mono text-[11px]">
                    
                    <div className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400">1. Agente Cadastrado</span>
                      {scanComplete ? (
                        <span className="text-green-500 font-bold flex items-center gap-1">✔ SIM</span>
                      ) : (
                        <span className="text-neutral-600">--</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400">2. Em Serviço Ativo</span>
                      {scanComplete ? (
                        selectedAgent.serviceStatus === 'Em Serviço' ? (
                          <span className="text-green-500 font-bold flex items-center gap-1">✔ SIM</span>
                        ) : (
                          <span className="text-red-500 font-bold flex items-center gap-1">❌ NÃO ({selectedAgent.serviceStatus})</span>
                        )
                      ) : (
                        <span className="text-neutral-600">--</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400">3. Missão Oficial Válida</span>
                      {scanComplete ? (
                        selectedAgent.activeMission ? (
                          <span className="text-green-500 font-bold flex items-center gap-1">✔ VÁLIDA</span>
                        ) : (
                          <span className="text-amber-500 font-bold flex items-center gap-1">⚠ SEM MISSÃO</span>
                        )
                      ) : (
                        <span className="text-neutral-600">--</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400">4. Arma Autorizada</span>
                      {scanComplete ? (
                        selectedAgent.serviceStatus === 'Em Serviço' ? (
                          <span className="text-green-500 font-bold flex items-center gap-1">✔ OK</span>
                        ) : (
                          <span className="text-red-500 font-bold flex items-center gap-1">❌ RETIDA</span>
                        )
                      ) : (
                        <span className="text-neutral-600">--</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400">5. Localização Compatível</span>
                      {scanComplete ? (
                        selectedAgent.serviceStatus === 'Em Serviço' ? (
                          <span className="text-green-500 font-bold flex items-center gap-1">✔ COMPATÍVEL</span>
                        ) : (
                          <span className="text-red-500 font-bold flex items-center gap-1">❌ FORA DA ÁREA</span>
                        )
                      ) : (
                        <span className="text-neutral-600">--</span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Scan action trigger */}
                <div className="pt-4 sm:pt-0">
                  {scanComplete ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={startScan}
                        className="flex-1 py-2.5 rounded bg-amber-500 hover:bg-amber-400 font-bold text-xs text-neutral-950 transition-colors uppercase tracking-wider flex items-center justify-center gap-1"
                      >
                        <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" />
                        Re-verificar Agente
                      </button>
                      
                      <div className="px-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 font-mono text-[10px] text-neutral-400">
                        {selectedAgent.serviceStatus === 'Em Serviço' ? (
                          <span className="text-green-500 font-bold uppercase">✔ LEGÍTIMO</span>
                        ) : (
                          <span className="text-red-500 font-bold uppercase">❌ REJEITADO</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 rounded bg-neutral-800 font-bold text-xs text-neutral-500 cursor-not-allowed uppercase tracking-wider"
                    >
                      Processando Dados...
                    </button>
                  )}
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
