import React from 'react';
import { INITIAL_WEAPONS, WEAPON_IMAGES } from '../data';
import { Weapon, WeaponStatus } from '../types';
import { Shield, Search, PlusCircle, Bookmark, History, Calendar, HardDrive, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function GestaoArmamento() {
  const [weapons, setWeapons] = React.useState<Weapon[]>(INITIAL_WEAPONS);
  const [selectedWeapon, setSelectedWeapon] = React.useState<Weapon>(INITIAL_WEAPONS[0]);
  const [filterStatus, setFilterStatus] = React.useState<string>('TUDO');
  const [searchTerm, setSearchTerm] = React.useState('');

  // New Weapon form state
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [newWeapon, setNewWeapon] = React.useState({
    serialNumber: 'SIRA-AK103-5542Z',
    model: 'Kalashnikov AK-103 7.62mm',
    type: 'Fuzil de Assalto' as 'Fuzil de Assalto',
    status: 'Arsenal' as WeaponStatus,
    operationalCondition: 'Excelente' as 'Excelente' | 'Necessita Revisão' | 'Inoperacional'
  });

  const statuses: { label: string; color: string; count: number }[] = [
    { label: 'TUDO', color: 'bg-neutral-800 text-neutral-300', count: weapons.length },
    { label: 'Arsenal', color: 'bg-green-600/15 text-green-400 border-green-600/30', count: weapons.filter(w => w.status === 'Arsenal').length },
    { label: 'Em Operação', color: 'bg-blue-600/15 text-blue-400 border-blue-600/30', count: weapons.filter(w => w.status === 'Em Operação').length },
    { label: 'Em Manutenção', color: 'bg-yellow-600/15 text-yellow-400 border-yellow-600/30', count: weapons.filter(w => w.status === 'Em Manutenção').length },
    { label: 'Em Transferência', color: 'bg-indigo-600/15 text-indigo-400 border-indigo-600/30', count: weapons.filter(w => w.status === 'Em Transferência').length },
    { label: 'Retida', color: 'bg-purple-600/15 text-purple-400 border-purple-600/30', count: weapons.filter(w => w.status === 'Retida').length },
    { label: 'Extraviada', color: 'bg-red-600/15 text-red-400 border-red-600/30', count: weapons.filter(w => w.status === 'Extraviada').length }
  ];

  const handleRegisterWeapon = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Weapon = {
      id: `wp-${weapons.length + 1}`,
      serialNumber: newWeapon.serialNumber,
      model: newWeapon.model,
      type: newWeapon.type,
      status: newWeapon.status,
      currentHandlerId: null,
      operationalCondition: newWeapon.operationalCondition,
      custodyHistory: [
        {
          timestamp: '2026-06-24 06:54',
          agentName: 'Operador Central SIRA',
          action: 'Matrícula e Cadastro Inicial do Ativo',
          location: 'Arsenal Geral das Forças Armadas'
        }
      ]
    };

    setWeapons([created, ...weapons]);
    setSelectedWeapon(created);
    setShowAddForm(false);
    // Randomize serial for next registration
    setNewWeapon(prev => ({
      ...prev,
      serialNumber: `SIRA-AK103-${Math.floor(1000 + Math.random() * 9000)}Y`
    }));
  };

  const filteredWeapons = weapons.filter(w => {
    const matchesSearch = w.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          w.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'TUDO' || w.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status: WeaponStatus) => {
    switch (status) {
      case 'Arsenal': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Em Operação': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Em Manutenção': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Em Transferência': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Retida': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Extraviada': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-neutral-500/10 text-neutral-400';
    }
  };

  return (
    <section id="gestao-armamento" className="py-20 bg-neutral-900 border-y border-neutral-800 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Secção 5 — Gestão de Ativos</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Gestão Inteligente de Armamento</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA providencia uma ficha individualizada para cada unidade de armamento, permitindo o controlo absoluto de custódia e monitorização do seu estado de conservação.
          </p>
        </motion.div>

        {/* Status Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {statuses.map((stat, idx) => (
            <button
              key={idx}
              onClick={() => setFilterStatus(stat.label)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wide uppercase transition-all ${
                (filterStatus === stat.label) 
                  ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-md' 
                  : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {stat.label} ({stat.count})
            </button>
          ))}
        </div>

        {/* Main Grid: Weapons list on left, detailed view on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Weapons Registry and Search list */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Pesquisar por número de série ou modelo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-xs text-neutral-200 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-3 py-2 bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-colors rounded-lg text-xs font-bold flex items-center gap-1 shrink-0"
              >
                <PlusCircle className="h-4 w-4" />
                Cadastrar Arma
              </button>
            </div>

            {/* Quick Registration Form popup wrapper inside the column */}
            {showAddForm && (
              <form onSubmit={handleRegisterWeapon} className="bg-neutral-950 border border-amber-500/30 p-4 rounded-xl text-left space-y-4 animate-fade-in">
                <h5 className="text-xs font-bold font-mono text-amber-500 uppercase">Registo de Novo Equipamento</h5>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1 col-span-2">
                    <label className="text-neutral-400 font-mono">Número de Série (SIRA standard)</label>
                    <input
                      type="text"
                      required
                      value={newWeapon.serialNumber}
                      onChange={(e) => setNewWeapon({ ...newWeapon, serialNumber: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 text-white font-mono"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">Modelo</label>
                    <select
                      value={newWeapon.model}
                      onChange={(e) => setNewWeapon({ ...newWeapon, model: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 text-white"
                    >
                      <option value="Kalashnikov AK-103 7.62mm">AK-103 7.62mm</option>
                      <option value="Pistola Makarov 9mm">Makarov 9mm</option>
                      <option value="IWI Galil 5.56mm">IWI Galil 5.56mm</option>
                      <option value="Glock 17 Gen 5 9mm">Glock 17 9mm</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">Categoria</label>
                    <select
                      value={newWeapon.type}
                      onChange={(e) => setNewWeapon({ ...newWeapon, type: e.target.value as any })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 text-white"
                    >
                      <option value="Fuzil de Assalto">Fuzil de Assalto</option>
                      <option value="Pistola">Pistola</option>
                      <option value="Submetralhadora">Submetralhadora</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">Estado Inicial</label>
                    <select
                      value={newWeapon.status}
                      onChange={(e) => setNewWeapon({ ...newWeapon, status: e.target.value as any })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 text-white"
                    >
                      <option value="Arsenal">Arsenal</option>
                      <option value="Em Operação">Em Operação</option>
                      <option value="Em Manutenção">Em Manutenção</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">Condição Técnica</label>
                    <select
                      value={newWeapon.operationalCondition}
                      onChange={(e) => setNewWeapon({ ...newWeapon, operationalCondition: e.target.value as any })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 text-white"
                    >
                      <option value="Excelente">Excelente</option>
                      <option value="Necessita Revisão">Necessita Revisão</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 text-xs">
                  <button
                    type="submit"
                    className="flex-1 py-1.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded"
                  >
                    Confirmar Registo
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 bg-neutral-800 text-neutral-400 hover:text-white rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {/* List box */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-h-[420px] overflow-y-auto custom-scrollbar text-left">
              {filteredWeapons.length === 0 ? (
                <div className="p-8 text-center text-neutral-500 font-light">
                  Nenhum armamento coincide com os filtros selecionados.
                </div>
              ) : (
                filteredWeapons.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => setSelectedWeapon(wp)}
                    className={`w-full p-4 border-b border-neutral-800/60 flex justify-between items-center transition-all text-left ${
                      selectedWeapon.id === wp.id 
                        ? 'bg-neutral-900 border-l-2 border-l-amber-500' 
                        : 'hover:bg-neutral-900/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="font-mono text-xs font-bold text-white">{wp.serialNumber}</p>
                      <p className="text-[11px] text-neutral-400">{wp.model}</p>
                      <p className="text-[10px] text-neutral-500">{wp.type} • Condição: {wp.operationalCondition}</p>
                    </div>

                    <div className="text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono border font-medium ${getStatusStyle(wp.status)}`}>
                        {wp.status}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>

          {/* Right Column: Detailed custody viewer & state descriptions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-left space-y-6"
          >
            
            <div className="flex justify-between items-start gap-4 border-b border-neutral-800 pb-4">
              <div>
                <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-bold">Ficha e Histórico do Ativo</span>
                <h4 className="font-display text-lg font-bold text-white mt-1">
                  {selectedWeapon.serialNumber}
                </h4>
                <p className="text-xs text-neutral-400">{selectedWeapon.model} ({selectedWeapon.type})</p>
              </div>

              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded text-xs font-mono font-bold border ${getStatusStyle(selectedWeapon.status)}`}>
                  {selectedWeapon.status.toUpperCase()}
                </span>
                <p className="text-[10px] text-neutral-500 font-mono mt-1">Estado de Serviço</p>
              </div>
            </div>

            {/* Condition check widget */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs">
                <span className="text-neutral-500 font-mono block">Responsável Atual:</span>
                <span className="font-bold text-neutral-200 mt-1 block">
                  {selectedWeapon.currentHandlerId ? 'Militar / Agente Designado' : 'Arsenal Geral / Sem Portador'}
                </span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs">
                <span className="text-neutral-500 font-mono block">Estado de Conservação:</span>
                <span className={`font-bold mt-1 block ${
                  selectedWeapon.operationalCondition === 'Excelente' ? 'text-green-400' : 'text-amber-400'
                }`}>
                  {selectedWeapon.operationalCondition}
                </span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs col-span-2 sm:col-span-1">
                <span className="text-neutral-500 font-mono block">Monitorização Geográfica:</span>
                <span className="font-bold text-neutral-200 mt-1 block">Ativa via Satélite</span>
              </div>
            </div>

            {/* Image mock for weapons */}
            <div className="relative aspect-video max-h-52 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img 
                src={WEAPON_IMAGES[weapons.indexOf(selectedWeapon) % WEAPON_IMAGES.length] || WEAPON_IMAGES[0]} 
                alt="Arma Ilustração" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-neutral-950/80 text-[10px] border border-neutral-800 font-mono text-neutral-400 uppercase">Ficha Ativa</span>
                <span className="px-2 py-0.5 rounded bg-neutral-950/80 text-[10px] border border-neutral-800 font-mono text-neutral-400 uppercase">AES-256</span>
              </div>
            </div>

            {/* Custody Chain History logs */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase flex items-center gap-1.5">
                <History className="h-3.5 w-3.5 text-amber-500" />
                Cadeia de Custódia e Movimentos Registados
              </h5>

              <div className="relative border-l border-neutral-800 pl-4 space-y-4">
                {selectedWeapon.custodyHistory.map((hist, i) => (
                  <div key={i} className="relative text-xs">
                    {/* Bullet marker */}
                    <div className="absolute -left-[21px] mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-500" />
                    
                    <div className="space-y-0.5">
                      <div className="flex justify-between items-center">
                        <strong className="text-neutral-200 font-semibold">{hist.action}</strong>
                        <span className="text-[10px] text-neutral-500 font-mono">{hist.timestamp}</span>
                      </div>
                      <p className="text-neutral-400 text-[11px]">Agente Responsável: <span className="text-neutral-200">{hist.agentName}</span></p>
                      <p className="text-neutral-500 text-[10px]">Local: {hist.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
