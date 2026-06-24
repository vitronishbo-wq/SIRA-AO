import React from 'react';
import { ARCHITECTURE_IMAGES } from '../data';
import { Network, Database, Landmark, Home, Map, Smartphone, ShieldAlert, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function ArquiteturaSIRA() {
  const [activeLevel, setActiveLevel] = React.useState<number>(0);

  const levels = [
    {
      title: 'Nível Nacional',
      subtitle: 'Centro Nacional de Supervisão (Luanda)',
      description: 'Órgão soberano central sob tutela direta dos Ministros do Interior e da Defesa Nacional. Providencia replicação em tempo real, bases de dados unificadas e inteligência estratégica nacional.',
      scope: 'Consolidação de auditorias, inteligência preditiva de segurança, relatórios executivos para a Presidência.',
      img: ARCHITECTURE_IMAGES[0]
    },
    {
      title: 'Nível Provincial',
      subtitle: 'Centros Provinciais de Comando',
      description: 'Instalados em cada uma das 18 capitais de província de Angola. Monitorizam as ocorrências e fluxos territoriais de patrulha e trânsito de armamentos das respetivas esquadras.',
      scope: 'Despacho de incidentes imediatos, validação de exceções e coordenação de emergências regionais.',
      img: ARCHITECTURE_IMAGES[1]
    },
    {
      title: 'Nível Municipal',
      subtitle: 'Comandos Operacionais & Esquadras',
      description: 'Centrais de proximidade que gerem as ordens de patrulha diária, arsenais físicos municipais, retenções imediatas e substituições de equipamento inoperacional.',
      scope: 'Controlo biométrico de entradas e saídas de turnos, vistoria física de armamento de serviço.',
      img: ARCHITECTURE_IMAGES[2]
    },
    {
      title: 'Nível Individual',
      subtitle: 'Aplicação Oficial do Agente',
      description: 'Terminal tático encriptado (instalado em smartphones robustecidos e integrável a coldres inteligentes). Providencia verificação biométrica em campo e cercas virtuais offline.',
      scope: 'Validação mútua em campo, assinatura eletrónica de troca de turnos e registo instantâneo de falhas.',
      img: ARCHITECTURE_IMAGES[3]
    }
  ];

  const workflowSteps = [
    { label: 'Agente', icon: '👤', desc: 'Apresentação do agente para o serviço militar/policial.' },
    { label: 'Validação Biométrica', icon: '🖐️', desc: 'Confirmação inequívoca via impressão digital ou facial.' },
    { label: 'Validação de Serviço', icon: '📋', desc: 'Verificação automática da ordem de missão oficial ativa.' },
    { label: 'Validação de Armamento', icon: '🔫', desc: 'Cruzamento com número de série e estado do arsenal.' },
    { label: 'Autorização Operacional', icon: '🟢', desc: 'Emissão da licença temporária assinada criptograficamente.' },
    { label: 'Monitorização', icon: '📡', desc: 'Acompanhamento por cercas geográficas e rádio digital.' },
    { label: 'Auditoria', icon: '⚖️', desc: 'Gravação permanente em base de dados descentralizada para fiscalização.' }
  ];

  return (
    <section id="arquitetura" className="relative py-20 bg-neutral-900 border-t border-neutral-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 3 — Estrutura e Fluxo</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Arquitetura de Comando Nacional</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA opera numa topologia escalável e redundante em quatro níveis orgânicos de controle, complementados por um fluxo rigoroso de autorizações táticas.
          </p>
        </motion.div>

        {/* Main Grid: Level selector on left, Interactive WorkFlow on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Organizational Levels Selector */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h4 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Network className="h-5 w-5 text-amber-500" />
                Matriz de Governação Hierárquica
              </h4>
              <p className="text-sm text-neutral-400">
                Selecione um nível para inspecionar as atribuições operacionais e infraestrutura tecnológica associada:
              </p>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-2 gap-3">
              {levels.map((lvl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLevel(idx)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    idx === activeLevel 
                      ? 'bg-neutral-950 border-amber-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.15)]' 
                      : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-[10px] text-amber-500 font-bold block mb-1">NÍVEL 0{idx + 1}</span>
                  <span className="font-display font-bold text-sm block">{lvl.title}</span>
                  <span className="text-[11px] text-neutral-500 block truncate mt-0.5">{lvl.subtitle}</span>
                </button>
              ))}
            </div>

            {/* Active Level Detail Display Card */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-12">
                
                {/* Text attributes */}
                <div className="p-6 sm:col-span-7 space-y-4 text-left">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest">Atribuição do Escalão</p>
                    <h5 className="font-display font-bold text-lg text-white">{levels[activeLevel].subtitle}</h5>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {levels[activeLevel].description}
                  </p>
                  <div className="bg-neutral-900 border-l-2 border-amber-500 p-3 rounded">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase font-bold mb-1">Escopo de Atividade</span>
                    <p className="text-[11px] text-neutral-200">{levels[activeLevel].scope}</p>
                  </div>
                </div>

                {/* Level Image */}
                <div className="relative h-48 sm:h-auto sm:col-span-5 overflow-hidden">
                  <img 
                    src={levels[activeLevel].img} 
                    alt={levels[activeLevel].title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Workflow Steps vertical block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-2 text-left mb-6">
              <h4 className="font-display text-md font-bold text-white flex items-center gap-1.5">
                <Database className="h-4 w-4 text-amber-500" />
                Cadeia de Autorização Operacional
              </h4>
              <p className="text-xs text-neutral-400">
                Fluxo digital obrigatório para legitimação de agentes e levantamento de armas:
              </p>
            </div>

            {/* Workflow List layout with lines linking them */}
            <div className="relative pl-6 space-y-4 text-left">
              <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber-500 via-amber-500/50 to-neutral-800" />
              
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-4 group">
                  
                  {/* Step Marker */}
                  <div className="absolute -left-5.5 mt-0.5 h-6 w-6 rounded-full bg-neutral-900 border-2 border-amber-500 text-white flex items-center justify-center font-bold text-[10px] shadow-md group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                    {idx + 1}
                  </div>

                  <div className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/80 rounded-lg p-2.5 flex-1 transition-all">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">{step.icon}</span>
                      <span className="text-xs font-bold text-white font-mono">{step.label}</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{step.desc}</p>
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded bg-red-950/20 border border-red-500/20 text-[11px] text-neutral-400 flex items-center gap-2.5 text-left">
              <ShieldAlert className="h-4 w-4 text-red-500 shrink-0" />
              <span>Qualquer violação neste fluxo resulta no travamento do armamento e notificação em 2 segundos aos centros superiores.</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
