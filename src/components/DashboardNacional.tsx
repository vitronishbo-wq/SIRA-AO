import React from 'react';
import { DASHBOARD_IMAGES, INITIAL_ALERTS, PROVINCE_CODES } from '../data';
import { OperationalAlert } from '../types';
import { ShieldCheck, Layers, AlertCircle, RefreshCw, MapPin, Radio, Activity, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';
import AngolaMap from './AngolaMap';

export default function DashboardNacional() {
  const [selectedProvince, setSelectedProvince] = React.useState<string>('Luanda');
  const [alerts, setAlerts] = React.useState<OperationalAlert[]>(INITIAL_ALERTS);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  // Simulated metrics
  const [metrics, setMetrics] = React.useState({
    agentesAtivos: 18452,
    agentesPatrulha: 12401,
    agentesMissao: 6051,
    armasCirculacao: 15420,
    armasArsenal: 42801,
    armasManutencao: 894,
    incidentesTotais: 142
  });

  const provinces = [
    { name: 'Cabinda', x: 22, y: 12, status: 'Alerta', activeWeapons: 1500, activeAgents: 1800 },
    { name: 'Zaire', x: 32, y: 22, status: 'Regular', activeWeapons: 980, activeAgents: 1100 },
    { name: 'Uíge', x: 45, y: 24, status: 'Regular', activeWeapons: 1200, activeAgents: 1400 },
    { name: 'Bengo', x: 31, y: 33, status: 'Regular', activeWeapons: 850, activeAgents: 950 },
    { name: 'Icolo e Bengo', x: 34, y: 38, status: 'Regular', activeWeapons: 650, activeAgents: 750 },
    { name: 'Luanda', x: 23, y: 34, status: 'Regular', activeWeapons: 5400, activeAgents: 6200 },
    { name: 'Cuanza-Norte', x: 41, y: 36, status: 'Regular', activeWeapons: 1100, activeAgents: 1250 },
    { name: 'Cuanza-Sul', x: 36, y: 48, status: 'Regular', activeWeapons: 1750, activeAgents: 1900 },
    { name: 'Malanje', x: 52, y: 35, status: 'Regular', activeWeapons: 1400, activeAgents: 1600 },
    { name: 'Lunda-Norte', x: 68, y: 26, status: 'Aviso', activeWeapons: 1300, activeAgents: 1500 },
    { name: 'Lunda-Sul', x: 74, y: 40, status: 'Regular', activeWeapons: 1150, activeAgents: 1350 },
    { name: 'Benguela', x: 24, y: 56, status: 'Regular', activeWeapons: 2800, activeAgents: 3100 },
    { name: 'Huambo', x: 38, y: 58, status: 'Regular', activeWeapons: 2100, activeAgents: 2300 },
    { name: 'Bié', x: 50, y: 54, status: 'Regular', activeWeapons: 1650, activeAgents: 1850 },
    { name: 'Moxico', x: 65, y: 55, status: 'Aviso', activeWeapons: 950, activeAgents: 1200 },
    { name: 'Moxico Leste', x: 82, y: 58, status: 'Regular', activeWeapons: 500, activeAgents: 650 },
    { name: 'Huíla', x: 30, y: 72, status: 'Regular', activeWeapons: 1800, activeAgents: 2000 },
    { name: 'Namibe', x: 20, y: 76, status: 'Regular', activeWeapons: 800, activeAgents: 950 },
    { name: 'Cunene', x: 34, y: 86, status: 'Regular', activeWeapons: 1250, activeAgents: 1400 },
    { name: 'Cubango', x: 48, y: 78, status: 'Regular', activeWeapons: 700, activeAgents: 850 },
    { name: 'Cuando', x: 68, y: 80, status: 'Regular', activeWeapons: 600, activeAgents: 750 }
  ];

  const handleResolveAlert = (id: string) => {
    setAlerts(prev => prev.map(al => al.id === id ? { ...al, resolved: true } : al));
    setMetrics(prev => ({
      ...prev,
      incidentesTotais: Math.max(0, prev.incidentesTotais - 1)
    }));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      // Simulate slight drift in numbers to show live telemetry
      setMetrics(prev => ({
        ...prev,
        agentesAtivos: prev.agentesAtivos + Math.floor(Math.random() * 11) - 5,
        armasCirculacao: prev.armasCirculacao + Math.floor(Math.random() * 5) - 2
      }));
    }, 1000);
  };

  return (
    <section id="dashboard" className="py-20 bg-neutral-950 text-white relative">
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 8 — Comando Estratégico</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Centro de Supervisão SIRA Nacional</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            Uma visão global e instantânea dos recursos de defesa e segurança de Angola. Consolidado para decisão imediata e auditoria permanente.
          </p>
        </motion.div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column Left: Angola SVG Map Simulator (Clickable Provinces) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div className="space-y-1">
              <h4 className="font-display text-md font-bold text-white flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-500" />
                Mapa de Rastreamento de Província
              </h4>
              <p className="text-[11px] text-neutral-400">Selecione uma província piloto para inspecionar métricas ativas:</p>
            </div>

            {/* Interactive SVG Map of Angola's 21 Provinces */}
            <div className="my-4">
              <AngolaMap 
                provinces={provinces}
                selectedProvince={selectedProvince}
                onSelectProvince={setSelectedProvince}
              />
            </div>

            {/* Dynamic Local Province Stats Display */}
            {(() => {
              const activeProvData = provinces.find(p => p.name === selectedProvince) || provinces[0];
              return (
                <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-2">
                  <h5 className="text-xs font-mono font-bold text-amber-500 uppercase flex justify-between">
                    <span>Foco: {activeProvData.name} ({PROVINCE_CODES[activeProvData.name] || ''})</span>
                    <span className={`px-1.5 py-0.5 text-[8px] rounded border ${
                      activeProvData.status === 'Alerta' ? 'border-red-500/30 text-red-400 bg-red-500/5' : 'border-green-500/30 text-green-400 bg-green-500/5'
                    }`}>
                      {activeProvData.status}
                    </span>
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded">
                      <span className="text-neutral-500 text-[10px] block">ARMAS EM CAMPO</span>
                      <strong className="text-neutral-200">{activeProvData.activeWeapons.toLocaleString()}</strong>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded">
                      <span className="text-neutral-500 text-[10px] block">AGENTES ACTIVOS</span>
                      <strong className="text-neutral-200">{activeProvData.activeAgents.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>
              );
            })()}

          </motion.div>

          {/* Column Middle: Metrics numbers grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            
            {/* Header section with live stats trigger */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-left space-y-4 flex-1">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-amber-500" />
                  Métricas em Tempo Real
                </span>
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="p-1 rounded bg-neutral-950 border border-neutral-800 text-amber-500 hover:text-amber-400 transition-all"
                  title="Atualizar painel"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Core metrics breakdown groups */}
              <div className="space-y-4">
                
                {/* 1. Operacionais */}
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-2 text-left">A. Métricas Operacionais</h5>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Ativos Totais</span>
                      <strong className="text-lg font-mono text-white block mt-0.5">{metrics.agentesAtivos.toLocaleString()}</strong>
                    </div>
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Em Patrulha</span>
                      <strong className="text-lg font-mono text-blue-400 block mt-0.5">{metrics.agentesPatrulha.toLocaleString()}</strong>
                    </div>
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Em Missão</span>
                      <strong className="text-lg font-mono text-green-400 block mt-0.5">{metrics.agentesMissao.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                {/* 2. Armamento */}
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-2 text-left">B. Distribuição de Armas</h5>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Em Circulação</span>
                      <strong className="text-lg font-mono text-white block mt-0.5">{metrics.armasCirculacao.toLocaleString()}</strong>
                    </div>
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Em Arsenal</span>
                      <strong className="text-lg font-mono text-green-400 block mt-0.5">{metrics.armasArsenal.toLocaleString()}</strong>
                    </div>
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800/60">
                      <span className="text-[9px] font-mono text-neutral-400 block">Em Revisão</span>
                      <strong className="text-lg font-mono text-amber-500 block mt-0.5">{metrics.armasManutencao.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive illustration picture with overlay */}
            <div className="relative aspect-video max-h-48 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img 
                src={DASHBOARD_IMAGES[1]} 
                alt="Operações de Defesa e Segurança" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute bottom-3 left-3 text-left">
                <span className="px-2 py-0.5 rounded bg-neutral-950/80 text-[10px] border border-neutral-800 font-mono text-amber-500 uppercase">Fronteiras Monitorizadas</span>
                <p className="text-xs text-neutral-200 mt-1 font-semibold">Replicação SIRA Centralizada de Alta Disponibilidade</p>
              </div>
            </div>

          </motion.div>

          {/* Column Right: Live Audit & Incidents Feed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div className="space-y-1">
              <h4 className="font-display text-md font-bold text-white flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4 text-red-500 animate-pulse" />
                Alertas de Auditoria Ativos
              </h4>
              <p className="text-[11px] text-neutral-400">Notificações operacionais instantâneas:</p>
            </div>

            {/* List of alerts */}
            <div className="space-y-3 my-4 overflow-y-auto max-h-[300px] custom-scrollbar flex-1 pr-1">
              {alerts.map((al) => (
                <div 
                  key={al.id} 
                  className={`p-3 rounded-lg border text-xs flex flex-col justify-between gap-2.5 transition-all ${
                    al.resolved 
                      ? 'bg-neutral-950/40 border-neutral-800 opacity-60' 
                      : al.type === 'Crítico' 
                        ? 'bg-red-500/5 border-red-500/30' 
                        : 'bg-amber-500/5 border-amber-500/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex justify-between items-center font-mono text-[9px] font-bold">
                      <span className={al.resolved ? 'text-neutral-500' : al.type === 'Crítico' ? 'text-red-500' : 'text-amber-500'}>
                        {al.type.toUpperCase()}
                      </span>
                      <span className="text-neutral-500">{al.timestamp} WAT</span>
                    </div>
                    <p className="text-neutral-200 text-[11px] leading-snug">{al.message}</p>
                    <p className="text-neutral-500 text-[10px] font-mono">Local: {al.location}</p>
                  </div>

                  {!al.resolved ? (
                    <button
                      onClick={() => handleResolveAlert(al.id)}
                      className="w-full py-1 rounded bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-[10px] font-mono text-neutral-300 font-bold uppercase transition-colors"
                    >
                      Resolver Alerta ✓
                    </button>
                  ) : (
                    <span className="text-[10px] font-mono text-green-500 text-center font-bold">ALERTA RESOLVIDO</span>
                  )}
                </div>
              ))}
            </div>

            {/* Footer warning line */}
            <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80 text-[10px] text-neutral-500 leading-relaxed font-mono">
              Para testar, selecione as províncias ativas no mapa piloto à esquerda ou clique em &quot;Resolver Alerta&quot;.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
