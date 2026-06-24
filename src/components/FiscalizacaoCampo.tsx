import React from 'react';
import { FIELD_IMAGES } from '../data';
import { ShieldAlert, Search, ShieldCheck, HelpCircle, AlertTriangle, ArrowRight, UserMinus, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function FiscalizacaoCampo() {
  const [activeCheck, setActiveCheck] = React.useState<'regular' | 'validar' | 'irregular'>('regular');
  const [isVerifying, setIsVerifying] = React.useState(false);

  const simulateCheck = (type: 'regular' | 'validar' | 'irregular') => {
    setIsVerifying(true);
    setTimeout(() => {
      setActiveCheck(type);
      setIsVerifying(false);
    }, 1200);
  };

  const currentDetails = {
    regular: {
      name: 'Sub-Chefe João Kiala',
      rank: 'Sub-Chefe (FAA)',
      unit: 'Forças Armadas Angolanas - Cabinda',
      mission: 'Vigilância de Fronteira Norte (Fronteira Massabi)',
      weapon: 'IWI Galil 5.56mm (SIRA-GAL556-1049C)',
      zone: 'Cabinda - Raio de 15km da Base de Apoio',
      status: '🟢 Regular',
      color: 'text-green-500 border-green-500/20 bg-green-500/5',
      indicator: 'bg-green-500',
      reason: 'Cadeia de custódia impecável, biometria facial correspondente de forma contínua, missão com despacho superior vigente.'
    },
    validar: {
      name: 'Agente Principal Daniel Kassoma',
      rank: 'Agente Principal',
      unit: 'Comando Provincial de Huambo',
      mission: 'Ronda Comercial Sector Centro',
      weapon: 'Pistola Makarov 9mm (SIRA-MAK9-8832B)',
      zone: 'Huambo - Central',
      status: '🟡 Necessita Validação',
      color: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
      indicator: 'bg-amber-500',
      reason: 'Agente tentou validação dactiloscópica com credencial de identificação pessoal prestes a expirar. Exige confirmação por rádio de voz.'
    },
    irregular: {
      name: 'Suspeito Registado / Desconhecido',
      rank: 'Ex-Militar / Identidade Inválida',
      unit: 'Desconhecida / Nenhuma',
      mission: 'Nenhuma Ordem de Serviço Ativa Registada',
      weapon: 'AK-103 7.62mm (SIRA-AK103-1248X)',
      zone: 'Zona Urbana Não Autorizada',
      status: '🔴 Irregular',
      color: 'text-red-500 border-red-500/20 bg-red-500/5 animate-pulse',
      indicator: 'bg-red-500',
      reason: 'Armamento com registo de extravio detetado em zona metropolitana. Agente não cadastrado no banco de biometria ativa. Perigo imediato.'
    }
  };

  const activeData = currentDetails[activeCheck];

  return (
    <section id="fiscalizacao" className="py-20 bg-neutral-900 border-y border-neutral-800 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 7 — Comando Móvel</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Fiscalização Operacional em Campo</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA mune os oficiais superiores de comandos móveis com ferramentas instantâneas para interrogar identidades e custódia de armas de forma offline e encriptada.
          </p>
        </motion.div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Handheld Terminal Simulator Mock */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-neutral-950 border-4 border-neutral-800 rounded-3xl p-4 flex flex-col justify-between max-w-sm mx-auto shadow-2xl relative"
          >
            
            {/* Top Speaker/Camera Notch Mock */}
            <div className="w-24 h-4 bg-neutral-800 rounded-full mx-auto mb-4 relative" />
            
            {/* Active app interface container */}
            <div className="bg-neutral-900 rounded-xl p-4 flex-1 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
              
              {/* Internal header */}
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-3">
                <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">FISCAL SIRA M-V4</span>
                <span className="px-1.5 py-0.5 bg-neutral-950 text-[8px] rounded font-mono text-amber-500">Offline L2</span>
              </div>

              {/* Status Banner */}
              <div className={`p-3 rounded-lg border text-left flex items-start gap-2 ${activeData.color}`}>
                <div className={`h-2.5 w-2.5 rounded-full ${activeData.indicator} shrink-0 mt-1 animate-pulse`} />
                <div className="space-y-0.5">
                  <h5 className="font-mono text-[11px] font-bold uppercase tracking-wider">Resultado da Consulta</h5>
                  <p className="text-xs font-bold">{activeData.status}</p>
                </div>
              </div>

              {/* Quick Field photo illustration of scanned site */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800 my-3">
                <img 
                  src={FIELD_IMAGES[activeCheck === 'regular' ? 0 : activeCheck === 'validar' ? 1 : 2]} 
                  alt="Field Scenery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-neutral-300">
                  Câmara de Inspeção Tática
                </div>
              </div>

              {/* Details table inside terminal */}
              <div className="space-y-2 text-left font-mono text-[10px] border-y border-neutral-800 py-3 my-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">AGENTE:</span>
                  <span className="text-neutral-200 font-bold truncate max-w-[150px]">{activeData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">CATEGORIA:</span>
                  <span className="text-neutral-200">{activeData.rank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">UNIDADE:</span>
                  <span className="text-neutral-200 truncate max-w-[150px]">{activeData.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">ARMAMENTO:</span>
                  <span className="text-amber-500 font-bold truncate max-w-[150px]">{activeData.weapon}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">ZONA AUT.:</span>
                  <span className="text-neutral-200 truncate max-w-[150px]">{activeData.zone}</span>
                </div>
              </div>

              {isVerifying ? (
                <div className="py-2.5 rounded bg-neutral-950 border border-neutral-800 font-mono text-[10px] text-amber-500 animate-pulse text-center uppercase tracking-widest font-bold">
                  Sincronizando via UHF...
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono font-bold pt-2">
                  <button 
                    onClick={() => simulateCheck('regular')}
                    className="p-2 rounded bg-green-950/40 border border-green-500/20 text-green-400 hover:bg-green-950 transition-colors uppercase"
                  >
                    MOCK 🟢
                  </button>
                  <button 
                    onClick={() => simulateCheck('validar')}
                    className="p-2 rounded bg-amber-950/40 border border-amber-500/20 text-amber-400 hover:bg-amber-950 transition-colors uppercase"
                  >
                    MOCK 🟡
                  </button>
                  <button 
                    onClick={() => simulateCheck('irregular')}
                    className="p-2 rounded bg-red-950/40 border border-red-500/20 text-red-400 hover:bg-red-950 transition-colors uppercase"
                  >
                    MOCK 🔴
                  </button>
                </div>
              )}

            </div>

            {/* Bottom Menu Buttons Mock */}
            <div className="flex justify-around items-center pt-3 text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-neutral-800" />
              <span className="h-6 w-6 rounded border-2 border-neutral-800 bg-neutral-900" />
              <span className="h-2 w-2 rounded-full bg-neutral-800" />
            </div>

          </motion.div>

          {/* Right Column: Detailed analysis of classifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between text-left space-y-6"
          >
            
            <div className="space-y-4">
              <h4 className="font-display text-2xl font-bold text-white">Classificação e Doutrina de Verificação</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                O SIRA adota um modelo de triagem tricolor de legitimidade para facilitar o processo decisório tático imediato por comandantes de campo e tropas de fronteira:
              </p>
            </div>

            {/* Detail explanation panels */}
            <div className="space-y-4">
              
              <div className={`p-4 rounded-xl border transition-all ${activeCheck === 'regular' ? 'border-green-500 bg-green-500/5' : 'border-neutral-800 bg-neutral-950/40 opacity-70'}`}>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">🟢</span>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">Estado Regular (Legitimo e Autorizado)</h5>
                    <p className="text-xs text-neutral-300 mt-1">
                      O agente, a arma, a missão e a geolocalização coincidem de forma íntegra. Nenhuma providência administrativa ou operacional é necessária.
                    </p>
                    {activeCheck === 'regular' && (
                      <p className="text-[11px] text-green-400/90 font-mono mt-2 bg-neutral-950/60 p-2.5 rounded border border-green-500/20">
                        <strong>Comentário de Auditoria:</strong> {activeData.reason}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeCheck === 'validar' ? 'border-amber-500 bg-amber-500/5' : 'border-neutral-800 bg-neutral-950/40 opacity-70'}`}>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">🟡</span>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">Necessita Validação (Inconsistência Leve)</h5>
                    <p className="text-xs text-neutral-300 mt-1">
                      Ocorrência de falha menor (documento prestes a caducar, mudança de escala não assinada pelo superior). O agente permanece autorizado, mas sob aviso prévio.
                    </p>
                    {activeCheck === 'validar' && (
                      <p className="text-[11px] text-amber-400/90 font-mono mt-2 bg-neutral-950/60 p-2.5 rounded border border-amber-500/20">
                        <strong>Comentário de Auditoria:</strong> {activeData.reason}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeCheck === 'irregular' ? 'border-red-500 bg-red-500/5' : 'border-neutral-800 bg-neutral-950/40 opacity-70'}`}>
                <div className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">🔴</span>
                  <div>
                    <h5 className="font-bold text-sm text-neutral-100">Estado Irregular (Bloqueio Imediato)</h5>
                    <p className="text-xs text-neutral-300 mt-1">
                      Desvio de custódia crítica, arma com matrícula extraviada, ou agente sem biometria válida cadastrada. Aciona imediatamente o protocolo policial de retenção.
                    </p>
                    {activeCheck === 'irregular' && (
                      <p className="text-[11px] text-red-400/95 font-mono mt-2 bg-neutral-950/60 p-2.5 rounded border border-red-500/20">
                        <strong>Comentário de Auditoria:</strong> {activeData.reason}
                      </p>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Tactical actions support */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <p className="text-xs text-neutral-400 text-center sm:text-left">
                Selecione os botões de simulação do terminal à esquerda para alternar as classificações doutrinárias e inspecionar os logs de campo de teste.
              </p>
              
              <button 
                onClick={() => simulateCheck('irregular')}
                className="w-full sm:w-auto px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-xs font-bold text-white shrink-0 flex items-center justify-center gap-1"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Acionar Alarme Nacional
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
