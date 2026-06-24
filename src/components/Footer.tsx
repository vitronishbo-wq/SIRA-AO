import React from 'react';
import { Shield, Cpu, RefreshCw, Layers, Database, Lock, Server } from 'lucide-react';

export default function Footer() {
  const techStack = [
    { name: 'React / Next.js', desc: 'Interface unificada para comandante e agente.', icon: Cpu },
    { name: 'TypeScript', desc: 'Tipagem robusta militar para segurança estrita de dados.', icon: Layers },
    { name: 'Tailwind CSS', desc: 'Styling ágil, fluidos e adaptados a ecrãs táteis em campo.', icon: RefreshCw },
    { name: 'PostgreSQL & Supabase', desc: 'Relacional para histórico completo de custódia inquebrável.', icon: Database },
    { name: 'PWA & Offline First', desc: 'Funcionamento total mesmo em locais sem rede de dados móveis.', icon: Server },
    { name: 'Biometria Integrada', desc: 'Impressão digital + facial nativas contra usurpação.', icon: Shield },
    { name: 'AES-256 / Chaves Estatais', desc: 'Criptografia simétrica com assinatura ICP-Angola.', icon: Lock }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-white pt-20 pb-12 text-left relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Core Vision Banner */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <Shield className="h-6 w-6" />
            </div>

            <p className="font-mono text-xs tracking-widest text-amber-500 uppercase font-bold">Angola Digital Security Initiative</p>
            
            <h4 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              SIRA - Visão Nacional de Soberania
            </h4>

            <p className="font-display text-lg sm:text-xl font-medium tracking-wide text-neutral-200 italic leading-relaxed">
              &quot;Garantir que cada arma, cada agente e cada missão estejam permanentemente associados a uma identidade legítima, verificável e auditável.&quot;
            </p>
          </div>
        </div>

        {/* Proposed Architecture Tech Stack (Grid) */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="text-center">
            <h5 className="font-mono text-xs tracking-widest text-neutral-400 uppercase font-bold">Arquitetura de Implementação Proposta</h5>
            <p className="text-xs text-neutral-500 mt-1">Concebido para ser escalável, seguro e totalmente auditável:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-500/30 p-4 rounded-xl transition-all space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h6 className="font-bold text-xs text-neutral-200">{tech.name}</h6>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-normal">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Standard Sovereign Disclaimer Credits */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-amber-500" />
              <div>
                <p className="font-bold text-neutral-300">SIRA &copy; 2026</p>
                <p className="text-[10px]">Angola Digital Security Initiative. Todos os direitos de soberania reservados.</p>
              </div>
            </div>

            <div className="sm:border-l sm:border-neutral-800 sm:pl-4 text-left space-y-1">
              <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Integração de Sistemas</p>
              <p className="font-bold text-amber-500 text-xs hover:underline">
                <a href="http://www.vitronis.co.ao" target="_blank" rel="noreferrer">VITRONIS – ROBÓTICA, LDA</a>
              </p>
              <p className="text-[9px] text-neutral-400">NIF 5002571293 &bull; Huambo</p>
              <div className="pt-1.5 text-[10px] text-neutral-400 font-mono space-y-0.5 border-t border-neutral-900 mt-1">
                <p className="text-[8px] text-neutral-600 uppercase font-bold tracking-wider leading-none mb-1">Contactos:</p>
                <p className="hover:text-amber-500 transition-colors"><a href="tel:+244948323383">+244 948 323 383</a></p>
                <p className="hover:text-amber-500 transition-colors"><a href="tel:+244941807171">+244 941 807 171</a></p>
                <p className="hover:text-amber-500 transition-colors"><a href="tel:+244921092324">+244 921 092 324</a></p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px]">
            <a href="#desafio-nacional" className="hover:text-amber-500 transition-colors">Diagnóstico</a>
            <a href="#solucao-sira" className="hover:text-amber-500 transition-colors">Doutrina SIRA</a>
            <a href="#arquitetura" className="hover:text-amber-500 transition-colors">Comando Nacional</a>
            <a href="#dashboard" className="hover:text-amber-500 transition-colors">Painel de Supervisão</a>
            <a href="#parceiro-tecnologico" className="hover:text-amber-500 transition-colors">Tecnologia</a>
            <a href="#solicitar-piloto" className="hover:text-amber-500 transition-colors">Registo de Proposta</a>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-mono text-green-500/80">VERSÃO DO SISTEMA: V4.1-ESTÁVEL</p>
            <p className="text-[9px] text-neutral-600 font-mono">RE replication latency: ~2.1s</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
