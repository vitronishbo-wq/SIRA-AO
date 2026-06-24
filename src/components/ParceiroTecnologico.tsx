import React from 'react';
import { 
  Building2, 
  Award, 
  MapPin, 
  UserCheck, 
  Cpu, 
  Network, 
  Globe, 
  Mail, 
  PhoneCall, 
  ShieldCheck, 
  FileCheck2, 
  Briefcase 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ParceiroTecnologico() {
  const [activeTab, setActiveTab] = React.useState<'perfil' | 'engenharia' | 'credenciais'>('perfil');

  const companyInfo = {
    name: 'VITRONIS – ROBÓTICA E CONTROLE - SERVIÇOS, LDA',
    nif: '5002571293',
    matricula: '23075-25/250701',
    sede: 'Rua Avenida da República, casa n.º 5, Bairro Cidade Alta, Comuna de Huambo, Município de Huambo, Angola',
    objetoSocial: 'Engenharia, Ciência Aplicada, Robótica e Sistemas de Automação Tecnológica',
    gerente: 'Isabel Truman Morgado Sapalo',
    website: 'www.vitronis.co.ao',
    email: 'inf@vitronis.co.ao',
    telefones: ['+244 948 323 383', '+244 941 807 171', '+244 921 092 324']
  };

  return (
    <section id="parceiro-tecnologico" className="py-20 bg-neutral-900 border-t border-neutral-800 text-white relative">
      {/* Decorative cybernetic glow */}
      <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold">Consórcio de Desenvolvimento</span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Engenharia &amp; Integração de Soberania</h3>
          <p className="text-neutral-400 text-sm sm:text-base">
            O SIRA é concebido e integrado localmente em Angola pela liderança nacional em sistemas automatizados e robótica militarizada, garantindo autossuficiência científica.
          </p>
        </motion.div>

        {/* Corporate Profile Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Tabbed Company Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-4">
              <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded font-mono text-[10px] text-amber-400 font-bold uppercase">
                Provedor de Tecnologia Homologado
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                VITRONIS – Robótica e Controle
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Com sede oficial na histórica província do Huambo, a VITRONIS lidera a inovação industrial e de defesa nacional angolana. A empresa é responsável por todo o ecossistema de hardware integrado, segurança criptográfica e desenvolvimento de software do programa SIRA.
              </p>
            </div>

            {/* Selection Tabs */}
            <div className="flex border-b border-neutral-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab('perfil')}
                className={`py-2.5 px-4 font-bold tracking-wider uppercase border-b-2 transition-all ${
                  activeTab === 'perfil' 
                    ? 'border-amber-500 text-amber-400 bg-neutral-950/20' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Perfil Corporativo
              </button>
              <button
                onClick={() => setActiveTab('engenharia')}
                className={`py-2.5 px-4 font-bold tracking-wider uppercase border-b-2 transition-all ${
                  activeTab === 'engenharia' 
                    ? 'border-amber-500 text-amber-400 bg-neutral-950/20' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Contribuição SIRA
              </button>
              <button
                onClick={() => setActiveTab('credenciais')}
                className={`py-2.5 px-4 font-bold tracking-wider uppercase border-b-2 transition-all ${
                  activeTab === 'credenciais' 
                    ? 'border-amber-500 text-amber-400 bg-neutral-950/20' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Certidões Legais
              </button>
            </div>

            {/* Tab content wrapper */}
            <div className="bg-neutral-950/50 p-6 rounded-2xl border border-neutral-800/80 min-h-[220px] flex flex-col justify-between">
              
              {activeTab === 'perfil' && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-neutral-200">Objeto Social da Firma</h5>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {companyInfo.objetoSocial}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UserCheck className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-neutral-200">Gerência &amp; Responsabilidade</h5>
                      <p className="text-xs text-neutral-400 mt-1">
                        Sob direção executiva da <strong className="text-neutral-200">{companyInfo.gerente}</strong>, orientando metodologias estritas de governança corporativa e integridade militar.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'engenharia' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                      <Cpu className="h-4 w-4" />
                      <span>Robótica e Terminais</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">
                      Sistemas embarcados de inspeção dactiloscópica tática adaptados para as condições de campo mais severas das FAAs.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                      <Network className="h-4 w-4" />
                      <span>Automação Digital</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">
                      Protocolos de sincronização de rádio UHF de alta confiabilidade, garantindo funcionamento offline mesmo em fronteiras remotas.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'credenciais' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                    <span className="text-neutral-500">NÚMERO DE CONTRIBUINTE (NIF):</span>
                    <span className="text-neutral-200 font-bold">{companyInfo.nif}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                    <span className="text-neutral-500">Nº DE MATRÍCULA COMERCIAL:</span>
                    <span className="text-neutral-200 font-bold">{companyInfo.matricula}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1 text-[11px] text-neutral-400">
                    <ShieldCheck className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Empresa constituída de pleno direito sob as leis da República de Angola com chancela tecnológica para atuar em segurança estratégica.</span>
                  </div>
                </div>
              )}

              {/* Company address visual indicator */}
              <div className="mt-4 pt-4 border-t border-neutral-800/60 flex items-start gap-2 text-xs">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  <strong className="text-neutral-200">Sede Oficial:</strong> {companyInfo.sede}
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Holographic Certificate & Contact Interface */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-amber-500/5 blur-2xl" />
            
            {/* Holographic header */}
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="h-5 w-5 text-amber-500" />
                  <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Identidade Corporativa</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Miniature certificate graphic representation */}
              <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800/80 text-left font-mono text-[10px] space-y-2 text-neutral-300 relative">
                <div className="absolute top-3 right-3 text-neutral-600 text-[8px] border border-neutral-800 rounded px-1.5 py-0.5 uppercase">
                  Nível Estatal
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[9px] font-bold">Denominação Comercial:</span>
                  <strong className="text-white text-[11px]">{companyInfo.name}</strong>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-neutral-500 block uppercase text-[9px]">Contribuinte NIF:</span>
                    <strong className="text-neutral-200">{companyInfo.nif}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block uppercase text-[9px]">Sede de Operações:</span>
                    <strong className="text-neutral-200">Huambo, AO</strong>
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-800/60 flex items-center gap-1 text-[9px] text-neutral-400">
                  <Award className="h-3 w-3 text-amber-500" />
                  <span>Em conformidade com a Doutrina de Soberania de Angola</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons Grid */}
            <div className="space-y-3 mt-6">
              <h5 className="font-mono text-[10px] text-neutral-400 uppercase font-bold tracking-wider text-left pl-1">
                Canais de Atendimento e Consulta
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                {/* Website direct button */}
                <a 
                  href={`http://${companyInfo.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-all group"
                >
                  <Globe className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left font-mono">
                    <span className="text-[8px] text-neutral-500 block">WEBSITE OFICIAL</span>
                    <span className="font-bold">{companyInfo.website}</span>
                  </div>
                </a>

                {/* Email direct button */}
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 text-xs text-neutral-300 hover:text-white flex items-center gap-2 transition-all group"
                >
                  <Mail className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <div className="text-left font-mono">
                    <span className="text-[8px] text-neutral-500 block">CORREIO ELETRÓNICO</span>
                    <span className="font-bold">{companyInfo.email}</span>
                  </div>
                </a>

              </div>

              {/* Direct WhatsApp Call buttons */}
              <div className="space-y-2 mt-4 pt-4 border-t border-neutral-800">
                <span className="text-[9px] text-neutral-500 font-mono text-left pl-1 uppercase font-bold block mb-1">
                  Canais de Atendimento Direto
                </span>
                {[
                  { label: 'Contacto Principal / WhatsApp', num: '+244 948 323 383', link: 'https://wa.me/244948323383' },
                  { label: 'Linha de Apoio / Atendimento', num: '+244 941 807 171', link: 'https://wa.me/244941807171' },
                  { label: 'Linha de Apoio / Técnica', num: '+244 921 092 324', link: 'https://wa.me/244921092324' }
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-white flex items-center gap-3 transition-all group hover:bg-neutral-900/80"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
                    <div className="text-left font-mono">
                      <span className="text-[8px] text-neutral-500 block leading-none uppercase">{item.label}</span>
                      <span className="font-extrabold text-neutral-200 block text-xs mt-0.5">{item.num}</span>
                    </div>
                  </a>
                ))}
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
