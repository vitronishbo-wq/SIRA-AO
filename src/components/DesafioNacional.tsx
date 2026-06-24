import React from 'react';
import { AlertTriangle, ShieldCheck, UserX, UserCheck, Key, FileText, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

export default function DesafioNacional() {
  // Local simulated stats that the user can manipulate/animate with actions
  const [stats, setStats] = React.useState({
    registeredWeapons: 12450,
    operationalWeapons: 8920,
    activeAgents: 8920,
    offDutyAgents: 3530,
    activeAlerts: 3
  });

  const [activeTab, setActiveTab] = React.useState<'armamento' | 'agentes' | 'operacoes'>('armamento');

  const handleSimulateAlert = () => {
    setStats(prev => ({
      ...prev,
      activeAlerts: prev.activeAlerts + 1,
      operationalWeapons: prev.operationalWeapons - 1
    }));
  };

  const handleSimulateReset = () => {
    setStats({
      registeredWeapons: 12450,
      operationalWeapons: 8920,
      activeAgents: 8920,
      offDutyAgents: 3530,
      activeAlerts: 3
    });
  };

  return (
    <section id="desafio-nacional" className="relative py-20 bg-neutral-900 border-y border-neutral-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 1 — Diagnóstico Operacional</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">O Desafio Nacional de Segurança</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O cenário atual das forças de segurança e defesa enfrenta limitações decorrentes de processos analógicos dispersos, comprometendo a integridade e a capacidade de auditoria institucional em tempo real.
          </p>
        </motion.div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Problem Cards Selector & Detailed Descriptions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex border-b border-neutral-800 bg-neutral-950/40 rounded-t-lg p-1">
              <button
                onClick={() => setActiveTab('armamento')}
                className={`flex-1 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all rounded ${
                  activeTab === 'armamento' 
                    ? 'bg-amber-500 text-neutral-950 font-bold' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                1. Armamento
              </button>
              <button
                onClick={() => setActiveTab('agentes')}
                className={`flex-1 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all rounded ${
                  activeTab === 'agentes' 
                    ? 'bg-amber-500 text-neutral-950 font-bold' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                2. Agentes
              </button>
              <button
                onClick={() => setActiveTab('operacoes')}
                className={`flex-1 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all rounded ${
                  activeTab === 'operacoes' 
                    ? 'bg-amber-500 text-neutral-950 font-bold' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                3. Operações
              </button>
            </div>

            {/* Content box based on active tab */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-b-lg space-y-6">
              {activeTab === 'armamento' && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-amber-500 font-display text-lg font-bold">Vulnerabilidades de Controlo de Armamento</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Registos dispersos:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Livros de carga de papel e planilhas eletrónicas sem ligação unificada nacional ou interprovincial.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Dificuldade de auditoria:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Semana inteira para compilar o paradeiro ou histórico de custódia de um armamento militar em manutenção.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Processos manuais:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Lançamentos de entrega de armas baseados em assinaturas manuscritas de difícil leitura ou falsificáveis.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Risco de desvios:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Armas retidas em campo ou em substituição que acabam sem correspondente registo individual de responsabilidade.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'agentes' && (
                <div className="space-y-4">
                  <h4 className="text-amber-500 font-display text-lg font-bold">Desafios na Legitimidade de Agentes</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Verificação limitada de legitimidade operacional:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Impossibilidade de validar na hora se o agente possui autorização médica e técnica vigente para portar aquela arma específica.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Dificuldade de validação em campo:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Agentes de fiscalização externa ou comandantes dependem de comunicações rádio de voz congestionadas para validar identidades.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Falta de rastreabilidade histórica:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Não há associação sistemática entre o registo de incidentes de disparo e a folha biométrica do agente responsável.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'operacoes' && (
                <div className="space-y-4">
                  <h4 className="text-amber-500 font-display text-lg font-bold">Fragilidades de Coordenação Operacional</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Informações descentralizadas:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Dados criminais, escalas de patrulha e registos de armas operam em ilhas tecnológicas sem comunicação recíproca.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Baixa integração institucional:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Ministério do Interior e Ministério da Defesa sem base de dados integrável para verificação mútua em postos de fronteira.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 font-bold text-xs">!</div>
                      <div>
                        <strong className="text-neutral-200 text-sm">Supervisão limitada em tempo real:</strong>
                        <p className="text-xs text-neutral-400 mt-0.5">Decisores políticos e de comando provincial apenas acedem a relatórios pós-incidente, perdendo o momento crítico da intervenção.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Simulated Live Control Panel Metrics (Animated Indicators) */}
          <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-xl p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h4 className="font-display text-md font-bold text-white flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Indicadores de Diagnóstico Ativo
                </h4>
                <p className="text-[11px] text-neutral-500 font-mono">SIMULADOR DE SUPERVISÃO NACIONAL</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleSimulateAlert}
                  className="px-2.5 py-1 text-[10px] font-bold tracking-wider font-mono rounded bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/40 transition-all uppercase"
                >
                  Simular Alerta
                </button>
                <button 
                  onClick={handleSimulateReset}
                  className="p-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="Reiniciar simulador"
                >
                  <RefreshCw className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/80 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 h-12 w-12 bg-amber-500/5 rounded-bl-full flex items-center justify-center text-amber-500/10 font-bold text-3xl group-hover:scale-110 transition-transform">#</div>
                <p className="text-xs text-neutral-500 font-mono uppercase">Armas Registadas</p>
                <p className="text-2xl font-bold font-mono text-white mt-1">
                  <AnimatedCounter value={stats.registeredWeapons} />
                </p>
                <span className="text-[10px] text-amber-500/80 mt-1 block">Registo Geral</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/80 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 h-12 w-12 bg-green-500/5 rounded-bl-full flex items-center justify-center text-green-500/10 font-bold text-3xl group-hover:scale-110 transition-transform">✓</div>
                <p className="text-xs text-neutral-500 font-mono uppercase">Em Operação</p>
                <p className="text-2xl font-bold font-mono text-green-400 mt-1">
                  <AnimatedCounter value={stats.operationalWeapons} />
                </p>
                <span className="text-[10px] text-green-500/80 mt-1 block">Rastreadas</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/80 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 h-12 w-12 bg-blue-500/5 rounded-bl-full flex items-center justify-center text-blue-500/10 font-bold text-3xl group-hover:scale-110 transition-transform">👤</div>
                <p className="text-xs text-neutral-500 font-mono uppercase">Agentes Ativos</p>
                <p className="text-2xl font-bold font-mono text-blue-400 mt-1">
                  <AnimatedCounter value={stats.activeAgents} />
                </p>
                <span className="text-[10px] text-blue-500/80 mt-1 block">Escalados</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-neutral-900/60 p-4 rounded-lg border border-neutral-800/80 text-left relative overflow-hidden group col-span-1"
              >
                <p className="text-xs text-neutral-500 font-mono uppercase font-bold">Fora de Serviço</p>
                <p className="text-2xl font-bold font-mono text-neutral-400 mt-1">
                  {stats.offDutyAgents.toLocaleString()}
                </p>
                <span className="text-[10px] text-neutral-500 mt-1 block">Reservas</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-neutral-900/60 p-4 rounded-lg border border-red-500/30 text-left relative overflow-hidden group col-span-1 md:col-span-2"
              >
                <div className="absolute top-2 right-2 animate-ping h-2 w-2 rounded-full bg-red-500" />
                <p className="text-xs text-red-400 font-mono uppercase font-bold">Alertas Operacionais</p>
                <p className="text-2xl font-bold font-mono text-red-500 mt-1 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 animate-bounce" />
                  {stats.activeAlerts}
                </p>
                <span className="text-[10px] text-red-400/80 mt-1 block">Exige Resposta Imediata</span>
              </motion.div>

            </div>

            {/* Live Audit Log Stream */}
            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 space-y-3">
              <h5 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase flex items-center justify-between">
                <span>Rastreamento em Tempo Real (Simulado)</span>
                <span className="px-1.5 py-0.5 bg-neutral-800 text-[9px] rounded font-mono text-amber-500 animate-pulse">Streaming</span>
              </h5>
              <div className="space-y-2 text-left font-mono text-[10px] max-h-32 overflow-y-auto custom-scrollbar">
                <div className="p-2 bg-neutral-950 rounded border-l-2 border-green-500 flex justify-between items-center">
                  <span>[06:54:11] Arma SIRA-AK103 verificada com sucesso em Luanda</span>
                  <span className="text-green-500">Regular</span>
                </div>
                {stats.activeAlerts > 3 && (
                  <div className="p-2 bg-neutral-950 rounded border-l-2 border-red-500 flex justify-between items-center animate-shake">
                    <span className="text-red-400 font-bold">[06:54:15] ALERTA CRÍTICO: Discrepância em Cabo de Armamento</span>
                    <span className="text-red-500 font-bold">CRÍTICO</span>
                  </div>
                )}
                <div className="p-2 bg-neutral-950 rounded border-l-2 border-amber-500 flex justify-between items-center">
                  <span>[06:48:32] Biometria validada: Inspector Mateus Silva no Cazenga</span>
                  <span className="text-amber-500">Regular</span>
                </div>
                <div className="p-2 bg-neutral-950 rounded border-l-2 border-neutral-700 flex justify-between items-center text-neutral-500">
                  <span>[06:30:10] Rotina: Fecho de lote no comando provincial do Moxico</span>
                  <span>Log</span>
                </div>
              </div>
            </div>

            {/* Quick Warning Footer */}
            <div className="rounded border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-neutral-400 leading-relaxed text-left">
              <strong className="text-amber-500">Nota Estratégica:</strong> A ausência de um sistema integrado de responsabilidade enfraquece a soberania estatal. O SIRA resolve esta falha de forma duradoura e soberana.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
