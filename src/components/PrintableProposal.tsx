import React from 'react';
import { PROVINCE_CODES } from '../data';
import { Shield, Award, Calendar, CheckSquare, Layers, MapPin, HardDrive, FileText } from 'lucide-react';

export function AngolaCoatOfArms({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer subtle decorative ring */}
      <circle cx="100" cy="100" r="95" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3,3" />
      
      {/* Sun rays background */}
      <path d="M 45 140 C 45 75, 155 75, 155 140 Z" fill="#f59e0b" fillOpacity="0.08" />
      <g stroke="#f59e0b" strokeWidth="1.25" strokeLinecap="round" opacity="0.45">
        <line x1="100" y1="135" x2="100" y2="50" />
        <line x1="100" y1="135" x2="40" y2="80" />
        <line x1="100" y1="135" x2="160" y2="80" />
        <line x1="100" y1="135" x2="55" y2="60" />
        <line x1="100" y1="135" x2="145" y2="60" />
        <line x1="100" y1="135" x2="75" y2="50" />
        <line x1="100" y1="135" x2="125" y2="50" />
      </g>

      {/* Crossed Machete & Hoe */}
      {/* Hoe (Enxada) - symbol of agriculture/peasantry */}
      <g stroke="#262626" strokeWidth="5" strokeLinecap="round">
        <line x1="70" y1="138" x2="130" y2="78" />
      </g>
      <path d="M 122 68 L 140 76 L 132 88 L 114 80 Z" fill="#1c1917" stroke="#d97706" strokeWidth="1" />
      <line x1="122" y1="74" x2="130" y2="82" stroke="#d97706" strokeWidth="1" />

      {/* Machete (Catana) - symbol of work/struggle */}
      <g stroke="#262626" strokeWidth="5" strokeLinecap="round">
        <line x1="130" y1="138" x2="70" y2="78" />
      </g>
      <path d="M 70 78 C 58 66, 48 78, 58 90 L 70 78" fill="#1c1917" stroke="#d97706" strokeWidth="1" />
      
      {/* Wooden handles */}
      <rect x="125" y="132" width="5" height="9" rx="1" fill="#7f1d1d" stroke="#d97706" strokeWidth="0.5" transform="rotate(45 125 135)" />
      <rect x="67" y="132" width="5" height="9" rx="1" fill="#7f1d1d" stroke="#d97706" strokeWidth="0.5" transform="rotate(-45 70 135)" />

      {/* Five-pointed Golden Star - symbol of internationalism & progress */}
      <g transform="translate(100, 42)">
        <polygon points="0,-16 4,-4 16,-4 6,4 10,16 0,8 -10,16 -6,4 -16,-4 -4,-4" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
      </g>

      {/* Cogwheel segment on the left (half gear) */}
      <path d="M 45 100 A 55 55 0 0 0 100 155" stroke="#d97706" strokeWidth="8" fill="none" />
      <g stroke="#b45309" strokeWidth="2.5" strokeLinecap="round">
        <line x1="41" y1="100" x2="48" y2="100" />
        <line x1="43" y1="113" x2="49" y2="110" />
        <line x1="48" y1="125" x2="54" y2="120" />
        <line x1="57" y1="137" x2="62" y2="131" />
        <line x1="69" y1="146" x2="73" y2="139" />
        <line x1="83" y1="152" x2="85" y2="145" />
        <line x1="98" y1="154" x2="98" y2="147" />
      </g>

      {/* Agricultural Branches on the right */}
      <path d="M 155 100 A 55 55 0 0 1 100 155" stroke="#047857" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Cotton balls / Maize heads */}
      <circle cx="155" cy="100" r="5" fill="#f9fafb" stroke="#047857" strokeWidth="1.5" />
      <path d="M 150 96 C 151 92, 159 92, 160 96 Z" fill="#10b981" />
      
      <circle cx="150" cy="118" r="5" fill="#f9fafb" stroke="#047857" strokeWidth="1.5" />
      <path d="M 145 114 C 146 110, 154 110, 155 114 Z" fill="#10b981" />

      <circle cx="140" cy="133" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="125" cy="145" r="4.5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="110" cy="151" r="4" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

      {/* Red Scroll Ribbon with "REPÚBLICA DE ANGOLA" */}
      <path d="M 40 162 Q 100 186 160 162 L 155 178 Q 100 200 45 178 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
      <path d="M 44 170 Q 100 192 156 170" stroke="#fbbf24" strokeWidth="0.75" fill="none" />
      <text x="100" y="176" fill="#ffffff" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.4">REPÚBLICA DE ANGOLA</text>
    </svg>
  );
}

export default function PrintableProposal() {
  const currentDate = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const provinces = [
    { name: 'Cabinda', code: 'CAB', status: 'Alerta', activeWeapons: 1500, activeAgents: 1800, capital: 'Cabinda' },
    { name: 'Zaire', code: 'ZAI', status: 'Regular', activeWeapons: 980, activeAgents: 1100, capital: 'M\'banza Kongo' },
    { name: 'Uíge', code: 'UIG', status: 'Regular', activeWeapons: 1200, activeAgents: 1400, capital: 'Uíge' },
    { name: 'Bengo', code: 'BGO', status: 'Regular', activeWeapons: 850, activeAgents: 950, capital: 'Caxito' },
    { name: 'Icolo e Bengo', code: 'ICB', status: 'Regular', activeWeapons: 650, activeAgents: 750, capital: 'Catete' },
    { name: 'Luanda', code: 'LUA', status: 'Regular', activeWeapons: 5400, activeAgents: 6200, capital: 'Luanda' },
    { name: 'Cuanza-Norte', code: 'CNO', status: 'Regular', activeWeapons: 1100, activeAgents: 1250, capital: 'N\'dalatando' },
    { name: 'Cuanza-Sul', code: 'CSU', status: 'Regular', activeWeapons: 1750, activeAgents: 1900, capital: 'Sumbe' },
    { name: 'Malanje', code: 'MAL', status: 'Regular', activeWeapons: 1400, activeAgents: 1600, capital: 'Malanje' },
    { name: 'Lunda-Norte', code: 'LNO', status: 'Aviso', activeWeapons: 1300, activeAgents: 1500, capital: 'Dundo' },
    { name: 'Lunda-Sul', code: 'LSU', status: 'Regular', activeWeapons: 1150, activeAgents: 1350, capital: 'Saurimo' },
    { name: 'Benguela', code: 'BGU', status: 'Regular', activeWeapons: 2800, activeAgents: 3100, capital: 'Benguela' },
    { name: 'Huambo', code: 'HUA', status: 'Regular', activeWeapons: 2100, activeAgents: 2300, capital: 'Huambo' },
    { name: 'Bié', code: 'BIE', status: 'Regular', activeWeapons: 1650, activeAgents: 1850, capital: 'Cuíto' },
    { name: 'Moxico', code: 'MOX', status: 'Aviso', activeWeapons: 950, activeAgents: 1200, capital: 'Luena' },
    { name: 'Moxico Leste', code: 'MXL', status: 'Regular', activeWeapons: 500, activeAgents: 650, capital: 'Cazombo' },
    { name: 'Huíla', code: 'HUI', status: 'Regular', activeWeapons: 1800, activeAgents: 2000, capital: 'Lubango' },
    { name: 'Namibe', code: 'NAM', status: 'Regular', activeWeapons: 800, activeAgents: 950, capital: 'Moçâmedes' },
    { name: 'Cunene', code: 'CNN', status: 'Regular', activeWeapons: 1250, activeAgents: 1400, capital: 'Ondjiva' },
    { name: 'Cubango', code: 'CCU', status: 'Regular', activeWeapons: 700, activeAgents: 850, capital: 'Menongue' },
    { name: 'Cuando', code: 'CND', status: 'Regular', activeWeapons: 600, activeAgents: 750, capital: 'Mavinga' }
  ];

  return (
    <div className="bg-white text-neutral-900 w-full max-w-[210mm] mx-auto font-sans shadow-none">
      
      {/* 1. COVER PAGE / PÁGINA DE ROSTO */}
      <div className="sira-page flex flex-col justify-between min-h-[297mm] border-4 border-double border-neutral-900 p-8 relative page-break-after">
        
        {/* Flag Ribbons of Angola - Minimalist Sovereign Accents */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="w-1/2 bg-red-600" />
          <div className="w-1/2 bg-black flex items-center justify-center relative">
            <div className="absolute h-1.5 w-1.5 bg-amber-400 rounded-full" />
          </div>
        </div>

        {/* Cover Header */}
        <div className="text-center space-y-4 mt-8">
          <div className="mx-auto flex items-center justify-center">
            <AngolaCoatOfArms className="h-24 w-24 filter drop-shadow-sm opacity-80" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-gov-serif font-bold uppercase tracking-widest text-neutral-800 gov-heading">
              PROPOSTA TECNOLÓGICA INSTITUCIONAL
            </p>
            <p className="text-xs font-gov-sans font-semibold uppercase tracking-wider text-neutral-500">
              SIRA &bull; SISTEMA INTEGRADO DE RASTREIO E ADMINISTRAÇÃO DE ARMAAMENTO
            </p>
          </div>
          <div className="w-16 h-[1.5px] bg-amber-500 mx-auto" />
          <p className="text-[10px] font-gov-sans font-bold uppercase tracking-widest text-neutral-600 leading-normal">
            Apresentada por: VITRONIS – Robótica e Controle - Serviços, LDA<br />
            Ao Ministério da Defesa Nacional e Veteranos da Pátria<br />
            Com conhecimento do Ministério do Interior
          </p>
        </div>

        {/* Cover Main Title */}
        <div className="text-center my-auto space-y-6 px-4">
          <span className="inline-block px-3 py-1 bg-neutral-50 border border-neutral-200 rounded font-mono text-[9px] font-bold text-amber-700 uppercase tracking-widest">
            PROPOSTA TÉCNICA E COMERCIAL DE REFERÊNCIA
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-950 font-gov-serif gov-heading uppercase">
            SIRA
          </h1>
          <p className="text-xl font-bold text-neutral-850 tracking-wide uppercase border-y border-neutral-200 py-4 font-gov-serif gov-heading leading-relaxed">
            Plataforma de Gestão, Monitorização e Rastreabilidade Operacional
          </p>
          <p className="text-xs text-neutral-600 leading-relaxed max-w-lg mx-auto font-gov-sans gov-body">
            Solução estratégica integrada para a administração de armamento e efetivos policiais das 21 províncias nacionais da República de Angola, sob os critérios da modernização geoadministrativa de 2024.
          </p>
        </div>

        {/* Cover Metadata & Metadata Footer */}
        <div className="border-t border-neutral-300 pt-6 mt-8">
          <div className="grid grid-cols-2 gap-8 text-[11px] font-gov-sans text-neutral-800">
            <div className="space-y-1 text-left">
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Destinatário Principal:</span> Ministério da Defesa Nacional e Veteranos da Pátria</p>
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Com Conhecimento a:</span> Ministério do Interior</p>
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Entidade Proponente:</span> VITRONIS – Robótica e Controle - Serviços, LDA</p>
            </div>
            <div className="text-right space-y-1 border-l border-neutral-200 pl-6">
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Referência do Documento:</span> VIT-SIRA-PROP-2026-v2.6</p>
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Status do Projeto:</span> Concluído, disponível para certificação e piloto</p>
              <p><span className="font-bold text-neutral-900 uppercase tracking-wider text-[8px] block text-neutral-500">Data de Submissão:</span> Huambo, {currentDate}</p>
            </div>
          </div>
          <div className="text-center text-[8px] text-neutral-400 font-mono mt-8 border-t border-neutral-100 pt-4 flex items-center justify-between">
            <span className="font-bold text-amber-600">VITRONIS DOCUMENTO COMERCIAL</span>
            <span>PROPOSTA DE DESENVOLVIMENTO &bull; DISPONÍVEL PARA DEMONSTRAÇÃO E PILOTO</span>
            <span className="font-bold text-amber-600">SIRA TECNOLOGIA NACIONAL</span>
          </div>
        </div>

      </div>

      {/* 1.5. CARTA OFICIAL DE TRANSMISSÃO EM MENOS DE 1 PÁGINA */}
      <div className="sira-page flex flex-col justify-between min-h-[297mm] py-8 px-8 page-break-after border-b border-neutral-300 relative text-neutral-900 bg-white">
        {/* National Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="w-1/3 bg-amber-500" />
          <div className="w-1/3 bg-red-600" />
          <div className="w-1/3 bg-neutral-900" />
        </div>

        {/* VITRONIS Elegante Cabeçalho Corporativo */}
        <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 border-neutral-800 mt-4">
          {/* Logo e Nome da Empresa (Esquerda) */}
          <div className="col-span-7 flex items-start gap-3">
            <div className="h-10 w-10 rounded bg-neutral-900 text-amber-500 flex items-center justify-center font-bold text-lg tracking-tighter shrink-0 border border-neutral-800">
              V
            </div>
            <div>
              <h2 className="text-xs font-extrabold tracking-tight text-neutral-950 uppercase leading-none">
                VITRONIS
              </h2>
              <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mt-0.5 leading-none">
                Robótica e Controle - Serviços, Lda
              </p>
              <p className="text-[7px] text-amber-600 font-semibold tracking-normal mt-1">
                Engenharia &bull; Ciência Aplicada &bull; Robótica &bull; Automação
              </p>
            </div>
          </div>

          {/* Dados Corporativos Compactados (Direita) */}
          <div className="col-span-5 text-right text-[8px] text-neutral-500 font-mono space-y-0.5">
            <p className="font-bold text-neutral-800">NIF: <span className="font-mono text-neutral-600">5002571293</span></p>
            <p className="font-bold text-neutral-800">Matrícula: <span className="font-mono text-neutral-600">23075-25/250701</span></p>
            <p>Rua Avenida da República, Casa n.º 5 - Huambo</p>
            <p className="font-semibold text-neutral-700">República de Angola</p>
            <p className="text-[7px]">www.vitronis.co.ao &bull; inf@vitronis.co.ao</p>
            <p className="text-neutral-700 font-bold leading-tight mt-0.5">
              +244 948 323 383<br/>
              +244 941 807 171<br/>
              +244 921 092 324
            </p>
          </div>
        </div>

        {/* Data e Destinatários */}
        <div className="space-y-3 mt-2">
          {/* Data à Direita */}
          <div className="text-right text-[10px] font-bold text-neutral-800 font-mono">
            Huambo, 24 de Junho de 2026
          </div>

          {/* Destinatário à Esquerda e Conhecimento imediatamente abaixo */}
          <div className="text-[11px] space-y-0.5 text-neutral-900 border-l-2 border-neutral-800 pl-3 font-gov-serif">
            <p className="font-extrabold text-neutral-950 text-xs tracking-tight gov-heading">
              À Sua Excelência Senhor Ministro da Defesa Nacional e Veteranos da Pátria
            </p>
            <p className="text-[10px] text-neutral-600 font-medium">
              <span className="font-bold text-neutral-800 font-gov-serif">Conhecimento:</span> Sua Excelência Senhor Ministro do Interior
            </p>
          </div>
        </div>

        {/* Assunto Destacado */}
        <div className="bg-neutral-50 border-l-4 border-amber-500 p-2.5 rounded-r mt-2">
          <p className="text-[8px] font-mono font-bold text-amber-800 uppercase tracking-wider">Assunto:</p>
          <h4 className="text-[11px] font-bold text-neutral-950 font-gov-serif gov-heading">
            Submissão da Proposta Técnica SIRA
          </h4>
        </div>

        {/* Corpo Extremamente Curto */}
        <div className="space-y-2.5 text-[11px] text-neutral-700 leading-relaxed text-justify mt-2 font-gov-sans gov-body">
          <p className="font-gov-serif font-bold text-neutral-900">
            Excelência,
          </p>
          <p>
            A <strong>VITRONIS – Robótica e Controle - Serviços, LDA</strong> tem a honra de submeter à consideração de Vossa Excelência a proposta técnica do <strong>SIRA – Sistema Integrado de Responsabilização e Administração de Armamento</strong>, atualmente concluída e disponível para avaliação institucional.
          </p>
          <p>
            Considerando a natureza estratégica da solução, solicitamos a análise detalhada das métricas, indicadores operacionais, arquitetura tecnológica, mecanismos de controlo, fluxos de custódia e cenários de implementação apresentados no portal da proposta, por constituírem os elementos técnicos fundamentais para apreciação da sua viabilidade, certificação e eventual implementação piloto.
          </p>
          <p>
            A equipa da VITRONIS encontra-se disponível para apresentação executiva, demonstração funcional e discussão técnica especializada sempre que julgado conveniente.
          </p>
          <p className="font-bold text-neutral-800 font-gov-serif">
            Com elevada consideração.
          </p>
        </div>

        {/* QR Code and Security Footnote */}
        <div className="grid grid-cols-12 gap-4 items-center border-t border-neutral-200 pt-3 mt-4">
          <div className="col-span-3 flex justify-center">
            {/* Custom high fidelity QR vector */}
            <div className="bg-white border border-neutral-300 p-1 rounded">
              <svg className="h-11 w-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="22" height="22" stroke="black" strokeWidth="4" />
                <rect x="11" y="11" width="10" height="10" fill="black" />
                <rect x="73" y="5" width="22" height="22" stroke="black" strokeWidth="4" />
                <rect x="79" y="11" width="10" height="10" fill="black" />
                <rect x="5" y="73" width="22" height="22" stroke="black" strokeWidth="4" />
                <rect x="11" y="79" width="10" height="10" fill="black" />
                <rect x="75" y="75" width="8" height="8" stroke="black" strokeWidth="2" />
                <rect x="32" y="5" width="6" height="6" fill="black" />
                <rect x="42" y="5" width="12" height="4" fill="black" />
                <rect x="32" y="15" width="18" height="4" fill="black" />
                <rect x="32" y="25" width="6" height="12" fill="black" />
                <rect x="42" y="25" width="24" height="4" fill="black" />
                <rect x="5" y="32" width="12" height="6" fill="black" />
                <rect x="32" y="42" width="10" height="6" fill="black" />
                <rect x="48" y="42" width="18" height="10" fill="black" />
                <rect x="5" y="55" width="14" height="4" fill="black" />
                <rect x="32" y="55" width="6" height="6" fill="black" />
                <rect x="42" y="58" width="14" height="12" fill="black" />
                <rect x="73" y="66" width="22" height="4" fill="black" />
                <rect x="42" y="42" width="16" height="16" fill="white" rx="3" />
                <path d="M50 45 C51 45 54 46 54 48 C54 53 50 55 50 55 C50 55 46 53 46 48 C46 46 49 45 50 45 Z" fill="#D97706" />
              </svg>
            </div>
          </div>
          <div className="col-span-9 text-[8px] text-neutral-400 font-mono leading-relaxed">
            <span className="font-bold text-neutral-600 block">CHANCELA DE INTEGRIDADE SOBERANA SIRA</span>
            Hash SHA-256: 8F4B7A1C9E3D5F6B8A7C6D5E4F3A2B1C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A. Autenticidade eletrónica corporativa auditada.
          </div>
        </div>

        {/* Signatures */}
        <div className="pt-4 border-t border-neutral-200 mt-2 pb-4">
          <div className="grid grid-cols-2 gap-8 text-center text-[9px]">
            <div className="space-y-1">
              <p className="text-neutral-500 text-[8px]">Pela VITRONIS – ROBÓTICA E CONTROLE - SERVIÇOS, LDA</p>
              <div className="h-4" />
              <div className="w-36 h-[1px] bg-neutral-400 mx-auto" />
              <p className="font-bold text-neutral-800">Isabel Truman Morgado Sapalo</p>
              <p className="text-neutral-500 text-[8px]">Gerente Executiva</p>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-500 text-[8px]">Assinatura Criptográfica Corporativa</p>
              <div className="h-4" />
              <div className="w-36 h-[1px] bg-neutral-400 mx-auto" />
              <p className="font-bold text-neutral-800">VITRONIS SECURE SIGNATURE™</p>
              <p className="text-neutral-500 text-[8px]">Fingerprint: VTS-2026-SIRA-AO-F981X</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE SUMMARY & CONTEXT / RESUMO EXECUTIVO */}
      <div className="sira-page min-h-[297mm] py-8 px-8 space-y-6 page-break-after border-b border-neutral-200 bg-white">
        
        {/* Running Proposal Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-6 text-[8px] font-gov-serif text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <AngolaCoatOfArms className="h-5 w-5 opacity-60" />
            <span className="font-bold text-neutral-700">PROPOSTA TECNOLÓGICA SIRA &bull; VITRONIS, LDA</span>
          </div>
          <div>Destinatários: MINISTÉRIO DA DEFESA &amp; MINISTÉRIO DO INTERIOR</div>
        </div>
        
        <div className="flex items-center gap-2 border-b-2 border-neutral-900 pb-2">
          <Award className="h-5 w-5 text-amber-600" />
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 font-gov-serif gov-heading">
            1. Enquadramento e Resumo Executivo
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
          <p className="font-semibold text-neutral-900">
            O Sistema de Informação e Rastreio de Armamento (SIRA) apresenta uma solução integrada de alto nível e neutralidade técnica para o controlo de material bélico e gestão operacional de forças policiais e de segurança.
          </p>
          <p>
            O crescimento territorial e a necessidade imperativa de prevenir o desvio de armamento leve exigem um sistema tecnológico moderno, perfeitamente auditável e centralizado de ponta a ponta. Com a reorganização geoadministrativa nacional, que estabelece as <strong>21 províncias</strong> nacionais, a coordenação de efetivos e inventários torna-se um pilar estratégico prioritário.
          </p>
          <p>
            A proposta SIRA responde a esta realidade através de uma arquitetura baseada em cadeia de custódia digital, autenticação biométrica e validação operacional em tempo real. O sistema assegura o registo minucioso desde a armaria central até à entrega individual no início do turno operacional do agente, gerando um histórico seguro e auditável sem necessidade de instalar chips físicos invasivos ou modificações estruturais nas armas.
          </p>
        </div>

        <div className="bg-neutral-50 p-4 border-l-4 border-amber-500 rounded space-y-2 my-4">
          <h4 className="text-xs font-mono font-bold uppercase text-neutral-800">Objetivos Estratégicos Recomendados:</h4>
          <ul className="text-xs space-y-1.5 list-disc pl-5 text-neutral-600">
            <li><strong>Mitigação de Desvios:</strong> Reduzir riscos de perdas e desvios de material bélico através de controlo rigoroso e rastreabilidade digital.</li>
            <li><strong>Cobertura Geoadministrativa:</strong> Mapear as dotações de armamento em conformidade com as 21 províncias nacionais do novo mapa operacional de Angola.</li>
            <li><strong>Cadeia de Custódia Digital:</strong> Registar com assinatura criptográfica corporativa cada atribuição, recolha ou transferência de armamento de serviço.</li>
            <li><strong>Transparência Operacional:</strong> Disponibilizar painéis executivos de monitorização e auditoria técnica para os comandos competentes.</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4">
          <h3 className="text-sm font-bold text-neutral-900 uppercase">Benefícios para a Governação Pública:</h3>
          <div className="grid grid-cols-2 gap-4 text-xs text-neutral-600">
            <div className="border border-neutral-200 p-3 rounded">
              <p className="font-bold text-neutral-800 mb-1">✓ Otimização de Recursos</p>
              <p>Redução nos custos logísticos de auditoria manual e redistribuição eficiente de armas baseada em relatórios de atividade real.</p>
            </div>
            <div className="border border-neutral-200 p-3 rounded">
              <p className="font-bold text-neutral-800 mb-1">✓ Segurança Pública Reforçada</p>
              <p>Rastreamento imediato de armas perdidas ou apreendidas e responsabilização transparente dos agentes responsáveis pela custódia.</p>
            </div>
          </div>
        </div>

      </div>

      {/* 3. PROVINCE CODES & 2024 DIVISION TABLE */}
      <div className="sira-page min-h-[297mm] py-8 px-8 space-y-6 page-break-after border-b border-neutral-200 bg-white">
        
        {/* Running Proposal Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-6 text-[8px] font-gov-serif text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <AngolaCoatOfArms className="h-5 w-5 opacity-60" />
            <span className="font-bold text-neutral-700">PROPOSTA TECNOLÓGICA SIRA &bull; VITRONIS, LDA</span>
          </div>
          <div>Destinatários: MINISTÉRIO DA DEFESA &amp; MINISTÉRIO DO INTERIOR</div>
        </div>
        
        <div className="flex items-center gap-2 border-b-2 border-neutral-900 pb-2">
          <MapPin className="h-5 w-5 text-amber-600" />
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 font-gov-serif gov-heading">
            2. Cenário de Simulação Operacional SIRA (21 Províncias)
          </h2>
        </div>

        <p className="text-sm text-neutral-700 leading-relaxed">
          Tabela demonstrativa contendo a codificação proposta para as 21 províncias nacionais sob a reorganização geoadministrativa de 2024 (incluindo Moxico Leste, Icolo e Bengo, Cuando e Cubango). Os valores refletem simulações de dimensionamento de dotações operacionais.
        </p>

        <table className="w-full text-left border-collapse border border-neutral-300 text-xs my-4">
          <thead>
            <tr className="bg-neutral-100 font-mono text-neutral-700 border-b border-neutral-300">
              <th className="p-2 border-r border-neutral-300">Nº</th>
              <th className="p-2 border-r border-neutral-300">Província</th>
              <th className="p-2 border-r border-neutral-300 text-center">Sigla</th>
              <th className="p-2 border-r border-neutral-300">Capital SIRA</th>
              <th className="p-2 border-r border-neutral-300 text-right">Armas Operacionais</th>
              <th className="p-2 border-r border-neutral-300 text-right">Agentes Ativos</th>
              <th className="p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((prov, i) => (
              <tr key={prov.name} className="border-b border-neutral-200 hover:bg-neutral-50 font-sans">
                <td className="p-2 border-r border-neutral-200 font-mono text-[10px] text-neutral-500">{i + 1}</td>
                <td className="p-2 border-r border-neutral-200 font-bold text-neutral-800">{prov.name}</td>
                <td className="p-2 border-r border-neutral-200 text-center font-mono font-bold text-amber-600">{prov.code}</td>
                <td className="p-2 border-r border-neutral-200 text-neutral-600">{prov.capital}</td>
                <td className="p-2 border-r border-neutral-200 text-right font-mono">{prov.activeWeapons.toLocaleString()}</td>
                <td className="p-2 border-r border-neutral-200 text-right font-mono">{prov.activeAgents.toLocaleString()}</td>
                <td className="p-2 text-center font-mono text-[9px]">
                  <span className={`px-1.5 py-0.5 rounded font-semibold border ${
                    prov.status === 'Alerta' 
                      ? 'border-red-300 bg-red-50 text-red-700' 
                      : prov.status === 'Aviso' 
                      ? 'border-amber-300 bg-amber-50 text-amber-700' 
                      : 'border-green-300 bg-green-50 text-green-700'
                  }`}>
                    {prov.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-neutral-50 p-4 border border-neutral-200 rounded text-[10px] font-sans text-neutral-500 space-y-1.5">
          <p className="font-bold text-amber-800 uppercase tracking-wider text-[9px]">Aviso Institucional de Simulação:</p>
          <p className="leading-relaxed">
            Todos os indicadores, efetivos, inventários e distribuições apresentados neste portal possuem natureza exclusivamente demonstrativa e destinam-se apenas à ilustração da capacidade funcional da plataforma.
          </p>
          <p className="text-[9px] font-mono leading-relaxed">
            * Totais consolidados para fins de simulação de cobertura nacional: <strong>33.360 armas simuladas</strong> e <strong>37.800 efetivos hipotéticos</strong>.
          </p>
        </div>

      </div>

      {/* 4. TECHNICAL ARCHITECTURE & SOLUTIONS */}
      <div className="sira-page min-h-[297mm] py-8 px-8 space-y-6 page-break-after border-b border-neutral-200 bg-white">
        
        {/* Running Proposal Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-6 text-[8px] font-gov-serif text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <AngolaCoatOfArms className="h-5 w-5 opacity-60" />
            <span className="font-bold text-neutral-700">PROPOSTA TECNOLÓGICA SIRA &bull; VITRONIS, LDA</span>
          </div>
          <div>Destinatários: MINISTÉRIO DA DEFESA &amp; MINISTÉRIO DO INTERIOR</div>
        </div>
        
        <div className="flex items-center gap-2 border-b-2 border-neutral-900 pb-2">
          <HardDrive className="h-5 w-5 text-amber-600" />
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 font-gov-serif gov-heading">
            3. Arquitetura Operacional de Cadeia de Custódia Digital
          </h2>
        </div>

        <p className="text-sm text-neutral-700">
          A arquitetura operacional da proposta SIRA foi concebida pela VITRONIS para assegurar total conformidade institucional, rastreabilidade robusta, facilidade de implementação piloto e eficiência económica, sem necessidade de modificar mecanicamente o armamento.
        </p>

        <div className="grid grid-cols-2 gap-6 my-4">
          <div className="border border-neutral-200 p-4 rounded space-y-2">
            <h3 className="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1.5">
              <span>●</span> Registo e Portal de Armaria
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              O armamento é identificado eletronicamente no portal através de códigos unívocos e QR Codes de alta durabilidade. A entrada e saída são registadas no balcão digital de armaria pelos responsáveis do setor, eliminando a dependência de processos manuais ou instalação de chips invasivos na arma.
            </p>
          </div>

          <div className="border border-neutral-200 p-4 rounded space-y-2">
            <h3 className="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1.5">
              <span>●</span> Identidade Biométrica e Validação
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              A entrega do armamento de serviço está rigidamente vinculada à autenticação biométrica facial ou digital do agente de serviço. O terminal de armaria valida instantaneamente a escala operacional e associa temporariamente a custódia da arma à ficha do agente de forma unívoca.
            </p>
          </div>

          <div className="border border-neutral-200 p-4 rounded space-y-2">
            <h3 className="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1.5">
              <span>●</span> Redes Seguras e Criptografia de Dados
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Todas as transmissões de dados são protegidas com criptografia AES-256 e protocolos TLS 1.3 de última geração. O sistema está preparado para operar sob as redes de telecomunicações do Estado, com os servidores primários em Luanda e redundância geográfica local.
            </p>
          </div>

          <div className="border border-neutral-200 p-4 rounded space-y-2">
            <h3 className="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1.5">
              <span>●</span> Resiliência e Operabilidade Offline
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              As armarias provinciais e esquadras remotas dispõem de base de dados local offline. Na eventualidade de quebras de ligação de rede externa, o sistema prossegue os registos biométricos normalmente e sincroniza os dados assim que o canal de comunicação for reaberto.
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 p-4 rounded border border-neutral-200 space-y-3">
          <h4 className="text-xs font-bold text-neutral-800 uppercase">Visão Esquemática de Fluxo de Custódia Digital SIRA:</h4>
          <div className="flex justify-between items-center text-center font-mono text-[9px] text-neutral-600">
            <div className="bg-white border border-neutral-300 p-2 rounded w-1/4">
              <span className="font-bold text-neutral-900 block">1. ARSENAL</span>
              Registo no Portal SIRA
            </div>
            <span className="text-amber-500 font-bold">➜</span>
            <div className="bg-white border border-neutral-300 p-2 rounded w-1/4">
              <span className="font-bold text-neutral-900 block">2. AGENTE</span>
              Associação Biométrica
            </div>
            <span className="text-amber-500 font-bold">➜</span>
            <div className="bg-white border border-neutral-300 p-2 rounded w-1/4">
              <span className="font-bold text-neutral-900 block">3. CAMPO</span>
              Custódia Atribuída
            </div>
            <span className="text-amber-500 font-bold">➜</span>
            <div className="bg-white border border-neutral-300 p-2 rounded w-1/4">
              <span className="font-bold text-neutral-900 block">4. DEVOLUÇÃO</span>
              Check-in com Biometria
            </div>
          </div>
        </div>

      </div>

      {/* 5. IMPLEMENTATION ROADMAP & GOVERNMENT AGREEMENT */}
      <div className="sira-page min-h-[297mm] py-8 px-8 space-y-6 bg-white">
        
        {/* Running Proposal Header */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-6 text-[8px] font-gov-serif text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <AngolaCoatOfArms className="h-5 w-5 opacity-60" />
            <span className="font-bold text-neutral-700">PROPOSTA TECNOLÓGICA SIRA &bull; VITRONIS, LDA</span>
          </div>
          <div>Destinatários: MINISTÉRIO DA DEFESA &amp; MINISTÉRIO DO INTERIOR</div>
        </div>
        
        <div className="flex items-center gap-2 border-b-2 border-neutral-900 pb-2">
          <Calendar className="h-5 w-5 text-amber-600" />
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 font-gov-serif gov-heading">
            4. Plano de Implementação e Conclusão
          </h2>
        </div>

        <p className="text-sm text-neutral-700">
          O cronograma de implementação piloto proposto pela VITRONIS visa assegurar uma transição digital fluida, segura e perfeitamente auditada pelas entidades competentes do Estado.
        </p>

        <div className="space-y-4 my-4">
          <div className="flex gap-4 border-l-2 border-amber-500 pl-4 py-1">
            <div className="font-mono text-xs font-bold text-neutral-800 uppercase shrink-0 min-w-[120px]">
              Fase 1 (Meses 1-4):
            </div>
            <div className="text-xs text-neutral-600">
              <strong className="text-neutral-900">Implementação Piloto (Luanda &amp; Cabinda).</strong> Instalação de terminais biométricos e postos de controle digital de armaria nos principais comandos de Luanda e na esquadra central de Cabinda. Cadastramento digital e biométrico dos primeiros agentes piloto.
            </div>
          </div>

          <div className="flex gap-4 border-l-2 border-neutral-300 pl-4 py-1">
            <div className="font-mono text-xs font-bold text-neutral-400 uppercase shrink-0 min-w-[120px]">
              Fase 2 (Meses 5-8):
            </div>
            <div className="text-xs text-neutral-600">
              <strong className="text-neutral-900">Expansão Regional.</strong> Implantação e ativação da solução SIRA nas esquadras das capitais regionais: Benguela, Huambo, Zaire e Huíla. Configuração dos servidores locais de contingência.
            </div>
          </div>

          <div className="flex gap-4 border-l-2 border-neutral-300 pl-4 py-1">
            <div className="font-mono text-xs font-bold text-neutral-400 uppercase shrink-0 min-w-[120px]">
              Fase 3 (Meses 9-12):
            </div>
            <div className="text-xs text-neutral-600">
              <strong className="text-neutral-900">Cobertura Nacional Completa (21 Províncias).</strong> Alargamento da solução SIRA a todo o território nacional, integrando as esquadras provinciais e unidades de fronteira para controlo unificado e auditoria em tempo real.
            </div>
          </div>
        </div>

        <div className="border border-neutral-200 rounded p-4 text-xs text-neutral-600 space-y-4 mt-8 bg-neutral-50/50">
          <h3 className="font-bold text-neutral-900 uppercase">Comprometimento e Desenvolvimento Tecnológico Nacional:</h3>
          <p className="leading-relaxed">
            Como empresa de direito angolano comprometida com o engrandecimento do país, a <strong>VITRONIS – Robótica e Controle - Serviços, LDA</strong> desenvolve integralmente a plataforma SIRA em território nacional. Garantimos total transparência, com disponibilização do código-fonte, dados e chaves de integridade para auditoria governamental soberana, sem dependência de entidades estrangeiras.
          </p>
        </div>

        {/* Signature Blocks for Formal Presentability */}
        <div className="pt-16 mt-16 border-t border-neutral-200">
          <p className="text-center text-xs font-mono text-neutral-500 mb-8">
            Projeto concluído, disponível para avaliação técnica, demonstração funcional, certificação e eventual implementação piloto.
          </p>
          <div className="grid grid-cols-2 gap-12 text-center text-xs font-sans">
            <div className="space-y-1">
              <div className="w-48 h-[1px] bg-neutral-400 mx-auto" />
              <p className="font-bold text-neutral-800">Para Registo e Avaliação Ministerial</p>
              <p className="text-neutral-500 text-[10px]">Ministério da Defesa / Ministério do Interior</p>
            </div>
            <div className="space-y-1">
              <div className="w-48 h-[1px] bg-neutral-400 mx-auto" />
              <p className="font-bold text-neutral-800">Proponente: VITRONIS, LDA</p>
              <p className="text-neutral-500 text-[10px]">Direção de Engenharia e Sistemas de Defesa</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
