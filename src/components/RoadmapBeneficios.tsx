import React from 'react';
import { Target, Shield, Lock, Award, HeartHandshake, Milestone, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function RoadmapBeneficios() {
  const [pilotAgents, setPilotAgents] = React.useState<number>(500);
  const [pilotMonths, setPilotMonths] = React.useState<number>(3);

  // Estimating infrastructure resources dynamically
  const estimatedTerminals = Math.round(pilotAgents * 1.1); // +10% spares
  const estimatedProvincialCenters = pilotAgents <= 500 ? 1 : pilotAgents <= 5000 ? 5 : 18;
  const estimatedDailyTransactions = pilotAgents * 4; // 4 checkins/checkouts average per agent per day

  return (
    <section id="roadmap-beneficios" className="py-20 bg-neutral-900 border-t border-neutral-800 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Beneficios) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 9 — Impacto do Programa</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Benefícios Estratégicos para Angola</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O investimento na plataforma SIRA dota o Estado de competências inéditas de soberania digital, impactando positivamente a segurança das populações angolanas.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24 text-left"
        >
          
          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-100">Segurança</h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Redução drástica do risco de utilização indevida, desvio ou perda de armamento militar e policial em território nacional.
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-100">Transparência</h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Atribuição de responsabilidade individual permanente de cada peça de equipamento a um portador com biometria facial e dactiloscópica ativa.
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-100">Eficiência</h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Automação completa de processos administrativos e substituição de livros de carga manuais por bases de dados centralizadas redundantes.
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-100">Fiscalização</h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Verificação imediata em campo da legitimidade operacional e jurídica de qualquer patrulha por oficiais autorizados do Comando Geral.
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-neutral-100">Modernização</h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Inclusão das forças de defesa e segurança de Angola na vanguarda tecnológica da transformação digital militar africana.
            </p>
          </div>

        </motion.div>

        {/* Section Header (Roadmap) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 10 — Cronograma de Ativação</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Roadmap de Implementação Nacional</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O faseamento do projeto foi estruturado de forma prudente para mitigar riscos operacionais e garantir o treino progressivo dos efetivos de campo.
          </p>
        </motion.div>

        {/* Roadmap Phase Timeline Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 text-left"
        >
          
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-amber-500 uppercase">Fase 1</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[10px] font-mono text-amber-400 border border-amber-500/20 font-bold uppercase">Piloto Inicial</span>
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-white">Consolidação e Piloto</h4>
                <p className="text-xs text-neutral-400">Ambiente controlado para ajuste da doutrina.</p>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-1.5">✓ 1 Província Piloto (Luanda)</li>
                <li className="flex items-center gap-1.5">✓ 500 Agentes Ativos</li>
                <li className="flex items-center gap-1.5">✓ 3 Meses de Monitorização</li>
                <li className="flex items-center gap-1.5">✓ Ajustes de Terminais de Campo</li>
              </ul>
            </div>

            <div className="border-t border-neutral-800/80 pt-4 font-mono text-[11px] text-neutral-500 flex justify-between">
              <span>Prazo de Execução</span>
              <strong className="text-amber-500">90 Dias</strong>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-amber-500 uppercase">Fase 2</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[10px] font-mono text-amber-400 border border-amber-500/20 font-bold uppercase">Expansão Regional</span>
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-white">Integração Interprovincial</h4>
                <p className="text-xs text-neutral-400">Escala de segurança alargada a polos estratégicos.</p>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-1.5">✓ 5 Províncias Chave de Angola</li>
                <li className="flex items-center gap-1.5">✓ 5.000 Agentes em Custódia</li>
                <li className="flex items-center gap-1.5">✓ 6 Meses de Testes Robustos</li>
                <li className="flex items-center gap-1.5">✓ Formação de Oficiais Supervisores</li>
              </ul>
            </div>

            <div className="border-t border-neutral-800/80 pt-4 font-mono text-[11px] text-neutral-500 flex justify-between">
              <span>Prazo de Execução</span>
              <strong className="text-amber-500">180 Dias</strong>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-red-500 uppercase">Fase 3</span>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-[10px] font-mono text-red-400 border border-red-500/20 font-bold uppercase">Total Nacional</span>
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-white">Cobertura Total Angola</h4>
                <p className="text-xs text-neutral-400">Consolidação máxima das Forças Armadas e de Polícia.</p>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-1.5">✓ Cobertura nas 18 Províncias</li>
                <li className="flex items-center gap-1.5">✓ Integração Defesa + Interior</li>
                <li className="flex items-center gap-1.5">✓ Servidores Centrais em Nuvem Militar</li>
                <li className="flex items-center gap-1.5">✓ Auditoria Direta do Executivo</li>
              </ul>
            </div>

            <div className="border-t border-neutral-800/80 pt-4 font-mono text-[11px] text-neutral-500 flex justify-between">
              <span>Prazo de Execução</span>
              <strong className="text-red-500">12 Meses</strong>
            </div>
          </div>

        </motion.div>

        {/* Interactive Pilot Scope Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl text-left"
        >
          <div className="border-b border-neutral-800 pb-4 mb-6">
            <h4 className="font-display text-lg font-bold text-white flex items-center gap-1.5">
              <Milestone className="h-5 w-5 text-amber-500" />
              Calculador Dinâmico de Escopo do Piloto SIRA
            </h4>
            <p className="text-xs text-neutral-400">Ajuste os parâmetros para prever os recursos mínimos de hardware e logística necessários:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Input sliders */}
            <div className="space-y-6">
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-neutral-300 font-semibold font-mono">Quantidade de Agentes Cadastrados</label>
                  <span className="text-amber-500 font-bold font-mono">{pilotAgents.toLocaleString()} Efetivos</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={pilotAgents}
                  onChange={(e) => setPilotAgents(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>100</span>
                  <span>5.000</span>
                  <span>10.000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-neutral-300 font-semibold font-mono">Duração de Testes do Piloto</label>
                  <span className="text-amber-500 font-bold font-mono">{pilotMonths} Meses</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="24" 
                  value={pilotMonths}
                  onChange={(e) => setPilotMonths(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>1 Mês</span>
                  <span>12 Meses</span>
                  <span>24 Meses</span>
                </div>
              </div>

            </div>

            {/* Results output metrics */}
            <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 grid grid-cols-2 gap-4 text-left">
              
              <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Terminais de Campo</span>
                <p className="text-xl font-bold font-mono text-white mt-1">{estimatedTerminals.toLocaleString()} U</p>
                <span className="text-[9px] text-neutral-500 font-mono mt-0.5 block">Dispositivos Robustos</span>
              </div>

              <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Centros de Controle</span>
                <p className="text-xl font-bold font-mono text-white mt-1">{estimatedProvincialCenters} Província(s)</p>
                <span className="text-[9px] text-neutral-500 font-mono mt-0.5 block">Nível Regional</span>
              </div>

              <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Transações Diárias</span>
                <p className="text-xl font-bold font-mono text-white mt-1">{estimatedDailyTransactions.toLocaleString()}</p>
                <span className="text-[9px] text-neutral-500 font-mono mt-0.5 block">Validações Biométricas</span>
              </div>

              <div className="p-3 bg-neutral-950 rounded border border-amber-500/20 bg-amber-500/5">
                <span className="text-[10px] font-mono text-amber-500 uppercase font-semibold">Uptime Exigido</span>
                <p className="text-xl font-bold font-mono text-amber-400 mt-1">99.999%</p>
                <span className="text-[9px] text-amber-500/70 font-mono mt-0.5 block">Padrão Militar Militarizado</span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
