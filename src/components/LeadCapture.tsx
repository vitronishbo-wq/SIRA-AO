import React from 'react';
import { PilotRequest } from '../types';
import { ANGOLAN_PROVINCES } from '../data';
import { ShieldCheck, FileText, Send, CheckCircle2, Trash2, Printer, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadCaptureProps {
  onPrint?: () => void;
}

export default function LeadCapture({ onPrint }: LeadCaptureProps) {
  const [requests, setRequests] = React.useState<PilotRequest[]>([]);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    requesterName: '',
    requesterEmail: '',
    institution: 'Ministério do Interior' as 'Ministério da Defesa' | 'Ministério do Interior' | 'Outra Força',
    rankPosition: '',
    province: 'Luanda',
    notes: ''
  });

  React.useEffect(() => {
    const saved = localStorage.getItem('sira_pilot_requests');
    if (saved) {
      try {
        setRequests(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved pilot requests', e);
      }
    }
  }, []);

  const saveRequests = (updated: PilotRequest[]) => {
    setRequests(updated);
    localStorage.setItem('sira_pilot_requests', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReq: PilotRequest = {
      id: `req-${Date.now()}`,
      requesterName: formData.requesterName,
      requesterEmail: formData.requesterEmail,
      institution: formData.institution,
      rankPosition: formData.rankPosition,
      province: formData.province,
      notes: formData.notes,
      submittedAt: new Date().toLocaleDateString('pt-PT') + ' ' + new Date().toLocaleTimeString('pt-PT', { hour12: false })
    };

    const updated = [newReq, ...requests];
    saveRequests(updated);
    setShowSuccess(true);
    setFormData({
      requesterName: '',
      requesterEmail: '',
      institution: 'Ministério do Interior',
      rankPosition: '',
      province: 'Luanda',
      notes: ''
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleDelete = (id: string) => {
    const updated = requests.filter(r => r.id !== id);
    saveRequests(updated);
  };

  const handlePrintProposal = (req: PilotRequest) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>SIRA - Proposta Executiva de Piloto</title>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
              .header { text-align: center; border-bottom: 2px solid #eab308; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { margin: 0; font-size: 28px; color: #0f172a; }
              .header h2 { margin: 5px 0 0 0; font-size: 14px; font-weight: normal; color: #64748b; text-transform: uppercase; letter-spacing: 2px; }
              .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
              .details-table th, .details-table td { padding: 12px; border: 1px solid #e2e8f0; text-align: left; }
              .details-table th { background: #f8fafc; font-weight: bold; width: 30%; }
              .notes-box { background: #f8fafc; border-left: 4px solid #eab308; padding: 15px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 50px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>SIRA</h1>
              <h2>Sistema Integrado de Responsabilização e Administração de Armamento</h2>
              <p>Proposta Estratégica Nacional de Transformação Digital das Forças de Segurança</p>
            </div>
            
            <h3>Pedido Oficial de Implementação Piloto</h3>
            <table class="details-table">
              <tr><th>Identificador do Pedido</th><td>${req.id}</td></tr>
              <tr><th>Data de Submissão</th><td>${req.submittedAt}</td></tr>
              <tr><th>Instituição Solicitante</th><td>${req.institution}</td></tr>
              <tr><th>Representante</th><td>${req.requesterName}</td></tr>
              <tr><th>Contacto Eletrónico</th><td>${req.requesterEmail}</td></tr>
              <tr><th>Cargo / Patente</th><td>${req.rankPosition}</td></tr>
              <tr><th>Província de Alocação</th><td>Província de ${req.province}</td></tr>
            </table>

            <div class="notes-box">
              <strong>Observações Adicionais de Planeamento:</strong>
              <p>${req.notes || 'Nenhuma nota adicional fornecida.'}</p>
            </div>

            <p style="margin-top: 40px; font-size: 12px;"><strong>Segurança de Dados:</strong> Este documento contém informações institucionais preliminares destinadas ao planeamento do Ministério da Defesa e Ministério do Interior. Criptografia AES-256 habilitada de ponta-a-ponta.</p>

            <div class="footer">
              República de Angola &bull; Angola Digital Security Initiative &bull; SIRA &copy; 2026
            </div>
            <script>window.print();</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="solicitar-piloto" className="py-20 bg-neutral-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Submissão Oficial</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Formulário de Pedido de Piloto</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            Gere uma proposta de implantação oficial do SIRA para a sua província ou comando policial. As submissões são salvas localmente e podem ser impressas para auditoria ministerial.
          </p>
        </motion.div>

        {/* Content Box Split: Form on Left, Saved Requests on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Proposal Lead form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left relative"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500 rounded-t-2xl" />
            
            <div className="mb-6">
              <h4 className="font-display text-lg font-bold text-white flex items-center gap-1.5">
                <Send className="h-4 w-4 text-amber-500" />
                Registrar Nova Proposta Piloto
              </h4>
              <p className="text-xs text-neutral-400">Insira as credenciais do seu departamento de segurança:</p>
            </div>

            {showSuccess && (
              <div className="p-4 mb-6 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                <span>Pedido cadastrado com sucesso! Veja a proposta de planeamento tático gerada na lista à direita.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-neutral-300 font-mono">Nome Completo do Oficial</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Insp. Manuel Diogo"
                    value={formData.requesterName}
                    onChange={(e) => setFormData({ ...formData, requesterName: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-300 font-mono">Endereço Eletrónico Oficial</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: m.diogo@minint.gov.ao"
                    value={formData.requesterEmail}
                    onChange={(e) => setFormData({ ...formData, requesterEmail: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-neutral-300 font-mono">Instituição</label>
                  <select
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value as any })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-amber-500 focus:border-amber-500 focus:outline-none font-semibold"
                  >
                    <option value="Ministério do Interior">Ministério do Interior (MININT)</option>
                    <option value="Ministério da Defesa">Ministério da Defesa Nacional (MINDEN)</option>
                    <option value="Outra Força">Polícia Nacional / Outra Força</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-300 font-mono">Cargo / Patente Militar</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Tenente-Coronel / Comandante Esquadra"
                    value={formData.rankPosition}
                    onChange={(e) => setFormData({ ...formData, rankPosition: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-mono">Província para Ativação do Piloto</label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:border-amber-500 focus:outline-none"
                >
                  {ANGOLAN_PROVINCES.map((prov, i) => (
                    <option key={i} value={prov}>Província de {prov}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-mono">Notas e Particularidades Territoriais (Opcional)</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Descreva necessidades de integração com infraestruturas de rádio digital locais..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold rounded-lg text-sm transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShieldCheck className="h-5 w-5" />
                Registrar Solicitação
              </button>

            </form>

          </motion.div>

          {/* Right: Submitted lead list with review tracker */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            <div className="space-y-2">
              <h4 className="font-display text-lg font-bold text-white flex items-center gap-1.5">
                <ClipboardCheck className="h-4 w-4 text-amber-500" />
                Pedidos Salvos no Terminal (Local)
              </h4>
              <p className="text-xs text-neutral-400">Propostas registadas prontas para visualização e acompanhamento no terminal:</p>
            </div>

            {requests.length === 0 ? (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center text-neutral-500 font-light flex flex-col items-center justify-center space-y-3">
                <FileText className="h-10 w-10 text-neutral-600" />
                <p>Nenhuma solicitação guardada neste terminal.</p>
                <p className="text-[10px]">Use o formulário à esquerda para criar a sua primeira proposta estratégica.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[460px] overflow-y-auto custom-scrollbar pr-1">
                {requests.map((req) => (
                  <div key={req.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-4">
                    
                    <div className="flex justify-between items-start gap-2 border-b border-neutral-800 pb-2">
                      <div>
                        <span className="font-mono text-[9px] text-amber-500 uppercase font-bold">{req.institution}</span>
                        <h5 className="font-display font-bold text-sm text-neutral-100">{req.requesterName}</h5>
                        <p className="text-[10px] text-neutral-400 font-mono">{req.rankPosition} &bull; Prov. {req.province}</p>
                      </div>

                      <div className="text-right">
                        <span className="inline-block px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded font-mono text-[9px] text-amber-400 font-bold uppercase">PENDENTE REVISÃO</span>
                        <p className="text-[9px] text-neutral-500 font-mono mt-1">{req.submittedAt}</p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 italic line-clamp-2">
                      {req.notes || "Sem notas adicionais."}
                    </p>

                    <div className="flex justify-between items-center text-xs pt-2">
                      <button
                        onClick={() => handlePrintProposal(req)}
                        className="px-3 py-1.5 rounded bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white flex items-center gap-1.5 transition-colors font-mono text-[10px] font-bold"
                      >
                        <Printer className="h-3.5 w-3.5 text-amber-500" />
                        Girar Documento
                      </button>

                      <button
                        onClick={() => handleDelete(req.id)}
                        className="p-1.5 rounded bg-red-600/10 border border-red-600/20 hover:bg-red-600/20 text-red-400 hover:text-red-300 transition-colors"
                        title="Eliminar solicitação"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Step-by-step progress tracker model */}
            <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 text-xs">
              <span className="font-mono text-[10px] text-neutral-500 uppercase font-bold block mb-3">Ciclo de Avaliação Governamental</span>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="text-amber-500 font-bold">1. Submissão ✓</span>
                <span className="text-neutral-600">&gt;&gt;</span>
                <span>2. Parecer Técnico (MININT)</span>
                <span className="text-neutral-600">&gt;&gt;</span>
                <span>3. Cabimento (Defesa)</span>
                <span className="text-neutral-600">&gt;&gt;</span>
                <span>4. Portaria de Piloto</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
