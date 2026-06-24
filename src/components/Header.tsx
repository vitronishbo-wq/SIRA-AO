import React from 'react';
import { Shield, Radio, Lock, Clock, Printer, Menu, X, Landmark, FileText } from 'lucide-react';

interface HeaderProps {
  onPrint?: () => void;
}

export default function Header({ onPrint }: HeaderProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-PT', { hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const navLinks = [
    { name: "Ofício Ministros", href: "#carta-oficial" },
    { name: "Diagnóstico", href: "#desafio-nacional" },
    { name: "A Solução", href: "#solucao-sira" },
    { name: "Inventário SIRA", href: "#gestao-armamento" },
    { name: "Métricas 21 Províncias", href: "#dashboard-nacional" },
    { name: "Aderir ao Piloto", href: "#solicitar-piloto" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md">
      {/* Main Header Row */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* National Crest & Branding */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-amber-500/30 bg-neutral-900 shadow-inner">
            <Shield className="h-6 w-6 text-amber-500" />
            <div className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border border-neutral-950 bg-red-600 animate-pulse" />
          </div>
          
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">República de Angola</span>
              <div className="flex h-1.5 w-6 overflow-hidden rounded-sm">
                <div className="w-1/2 bg-red-600" />
                <div className="w-1/2 bg-black flex items-center justify-center">
                  <div className="h-1 w-1 bg-amber-400 rounded-full" />
                </div>
              </div>
            </div>
            
            <h1 className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1">
              SIRA <span className="text-xs font-normal text-amber-500 px-1.5 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">PROPOSTA NACIONAL</span>
            </h1>
          </div>
        </div>

        {/* Ministries & Status Info */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="border-l border-neutral-800 pl-4 text-left">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Supervisão Conjunta</p>
            <p className="text-xs font-semibold text-neutral-300">Ministério da Defesa Nacional</p>
            <p className="text-[10px] text-neutral-400">&amp; Ministério do Interior</p>
          </div>

          <div className="border-l border-neutral-800 pl-4 text-left">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Engenharia &amp; Integração</p>
            <p className="text-xs font-semibold text-amber-500 hover:underline">
              <a href="http://www.vitronis.co.ao" target="_blank" rel="noreferrer">VITRONIS, LDA</a>
            </p>
            <p className="text-[10px] text-neutral-400">Huambo &bull; Robótica</p>
          </div>

          <div className="border-l border-neutral-800 pl-4 text-left">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Criptografia / Status</p>
            <div className="flex items-center gap-1.5 text-xs text-green-500 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AES-256 HABILITADO
            </div>
          </div>
        </div>

        {/* System Time and Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 rounded-md bg-neutral-900 border border-neutral-800 px-3 py-1.5 text-xs font-mono text-neutral-300">
            <Clock className="h-3.5 w-3.5 text-amber-500" />
            <span>{formatDate(currentTime)}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-amber-500 font-bold">{formatTime(currentTime)}</span>
            <span className="text-xs text-neutral-500">WAT</span>
          </div>



          <a 
            href="#solicitar-piloto" 
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 transition-all hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] font-bold"
          >
            Aderir ao Piloto
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg lg:hidden"
            title="Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Sub-Header Navigation: Sticky Quick Jump Links (Exquisite Desktop Navigation Bar) */}
      <div className="hidden lg:block border-t border-neutral-900 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-8 py-2.5 flex items-center justify-between">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-neutral-400 hover:text-amber-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 p-4 space-y-3 animate-fade-in text-left">
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest pb-2 border-b border-neutral-900 flex items-center gap-1">
            <Landmark className="h-3.5 w-3.5 text-amber-500" />
            Navegação SIRA
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}
