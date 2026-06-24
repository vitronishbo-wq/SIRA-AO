export function downloadProposalHTML() {
  const currentDate = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const provinces = [
    { name: 'Cabinda', code: 'CAB', status: 'Alerta', activeWeapons: 1500, activeAgents: 1800, capital: 'Cabinda' },
    { name: 'Zaire', code: 'ZAI', status: 'Regular', activeWeapons: 980, activeAgents: 1100, capital: "M'banza Kongo" },
    { name: 'Uíge', code: 'UIG', status: 'Regular', activeWeapons: 1200, activeAgents: 1400, capital: 'Uíge' },
    { name: 'Bengo', code: 'BGO', status: 'Regular', activeWeapons: 850, activeAgents: 950, capital: 'Caxito' },
    { name: 'Icolo e Bengo', code: 'ICB', status: 'Regular', activeWeapons: 650, activeAgents: 750, capital: 'Catete' },
    { name: 'Luanda', code: 'LUA', status: 'Regular', activeWeapons: 5400, activeAgents: 6200, capital: 'Luanda' },
    { name: 'Cuanza-Norte', code: 'CNO', status: 'Regular', activeWeapons: 1100, activeAgents: 1250, capital: "N'dalatando" },
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

  const htmlContent = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SIRA - Proposta Estratégica Nacional (Completa)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0c0a09;
      color: #171717;
      margin: 0;
      padding: 40px 15px;
    }

    /* Screen view style: renders each page like a high-fidelity A4 sheet in a PDF viewer */
    .page-container {
      background: white !important;
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto 30px auto !important;
      padding: 20mm !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
      border: 1px solid #262626 !important;
      border-radius: 12px !important;
      position: relative;
      box-sizing: border-box !important;
    }

    @page {
      size: A4 portrait;
      margin: 15mm 15mm 15mm 15mm !important;
    }

    @media print {
      body {
        background-color: #ffffff !important;
        color: #000000 !important;
        padding: 0 !important;
        margin: 0 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .no-print {
        display: none !important;
      }
      
      /* Print view overrides: Strips out screen container decorations to guarantee flawless A4 fit */
      .page-container {
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important; /* Let @page margins handle the whitespace */
        width: 100% !important;
        max-width: none !important;
        min-height: auto !important;
        background: transparent !important;
        border-radius: 0 !important;
        page-break-after: always !important;
        break-after: page !important;
        box-sizing: border-box !important;
      }
      .page-container:last-child {
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
    }
  </style>
</head>
<body class="bg-stone-950">

  <!-- Interactive Reader Top Bar -->
  <div class="no-print max-w-[210mm] mx-auto mb-6 p-5 bg-neutral-950 border border-amber-500/30 rounded-2xl text-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
    <div class="space-y-1 text-left">
      <div class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
        <h5 class="text-sm font-extrabold text-white font-mono uppercase tracking-wider">Leitor Oficial SIRA v2.5</h5>
      </div>
      <p class="text-neutral-400 text-xs">Este documento autónomo contém a proposta técnica de segurança e o ofício formal. Guarde em formato PDF selecionando a opção correspondente nas definições.</p>
    </div>
    <button onclick="window.print()" class="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 text-xs tracking-widest uppercase transition-all shrink-0 cursor-pointer flex items-center gap-2">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      Imprimir / Guardar PDF
    </button>
  </div>

  <div class="space-y-8">

    <!-- 1. COVER PAGE -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <!-- Flag Ribbons of Angola - Minimalist Sovereign Accents -->
      <div class="absolute top-0 left-0 right-0 h-2 flex">
        <div class="w-1/2 bg-red-600"></div>
        <div class="w-1/2 bg-black flex items-center justify-center relative">
          <div class="absolute h-1.5 w-1.5 bg-amber-400 rounded-full"></div>
        </div>
      </div>

      <!-- Cover Header -->
      <div class="text-center space-y-3 mt-12">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-500 bg-neutral-50 shadow-md">
          <svg class="h-9 w-9 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <p class="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600">
          República de Angola
        </p>
        <div class="w-16 h-[1px] bg-amber-500 mx-auto"></div>
        <p class="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
          Ministério do Interior &bull; Ministério da Defesa Nacional
        </p>
      </div>

      <!-- Cover Main Title -->
      <div class="text-center my-auto space-y-6 px-4">
        <span class="inline-block px-3 py-1 bg-neutral-100 border border-neutral-300 rounded font-mono text-[10px] font-bold text-neutral-700 uppercase tracking-widest">
          DOCUMENTO OFICIAL DE ESTRATÉGIA
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
          SIRA
        </h1>
        <p class="text-lg font-bold text-neutral-700 tracking-wide uppercase border-y border-neutral-200 py-3">
          Sistema Integrado de Rastreio e Administração de Armamento
        </p>
        <p class="text-sm text-neutral-600 leading-relaxed max-w-lg mx-auto">
          Plano Estratégico de Operacionalização e Integração Tecnológica sob a Nova Organização Geoadministrativa das 21 Províncias (Legislação de 2024)
        </p>
      </div>

      <!-- Cover Metadata & Metadata Footer -->
      <div class="border-t border-neutral-300 pt-8 mt-12">
        <div class="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-600 text-left">
          <div>
            <p><span class="font-bold">DESTINATÁRIO:</span> Conselho de Ministros</p>
            <p><span class="font-bold">PARCEIRO TECNOLÓGICO:</span> VITRONIS, LDA</p>
            <p><span class="font-bold">PROVÍNCIA PILOTO:</span> Luanda (Centro de Comando)</p>
          </div>
          <div class="text-right">
            <p><span class="font-bold">ID DOCUMENTO:</span> SIRA-PE-2026-v2.5</p>
            <p><span class="font-bold">GRAU SEGURANÇA:</span> CONFIDENCIAL / RESERVADO</p>
            <p><span class="font-bold">DATA DE EMISSÃO:</span> ${currentDate}</p>
          </div>
        </div>
        <p class="text-center text-[9px] text-neutral-400 font-mono mt-8">
          Este relatório contém informações estratégicas de defesa e segurança soberana. Criptografia AES-256 habilitada.
        </p>
      </div>
    </div>


    <!-- 2. OFFICIAL TRANSMISSION LETTER -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <!-- National Ribbon -->
      <div class="absolute top-0 left-0 right-0 h-1.5 flex">
        <div class="w-1/3 bg-amber-500"></div>
        <div class="w-1/3 bg-red-600"></div>
        <div class="w-1/3 bg-neutral-900"></div>
      </div>

      <!-- VITRONIS Cabeçalho Corporativo -->
      <div class="grid grid-cols-12 gap-4 pb-4 border-b-2 border-neutral-800 mt-4">
        <div class="col-span-7 flex items-start gap-3 text-left">
          <div class="h-10 w-10 rounded bg-neutral-900 text-amber-500 flex items-center justify-center font-bold text-lg tracking-tighter shrink-0 border border-neutral-800">
            V
          </div>
          <div>
            <h2 class="text-xs font-extrabold tracking-tight text-neutral-950 uppercase leading-none">
              VITRONIS
            </h2>
            <p class="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mt-0.5 leading-none">
              Robótica e Controle - Serviços, Lda
            </p>
            <p class="text-[7px] text-amber-600 font-semibold tracking-normal mt-1">
              Engenharia &bull; Ciência Aplicada &bull; Robótica &bull; Automação
            </p>
          </div>
        </div>

        <div class="col-span-5 text-right text-[8px] text-neutral-500 font-mono space-y-0.5">
          <p class="font-bold text-neutral-800">NIF: <span class="font-mono text-neutral-600">5002571293</span></p>
          <p class="font-bold text-neutral-800">Matrícula: <span class="font-mono text-neutral-600">23075-25/250701</span></p>
          <p>Rua Avenida da República, Casa n.º 5 - Huambo</p>
          <p class="font-semibold text-neutral-700">República de Angola</p>
          <p class="text-[7px]">www.vitronis.co.ao &bull; inf@vitronis.co.ao</p>
          <p class="text-neutral-700 font-bold leading-tight mt-0.5">
            +244 948 323 383<br/>
            +244 941 807 171<br/>
            +244 921 092 324
          </p>
        </div>
      </div>

      <!-- Data e Destinatários -->
      <div class="space-y-3 mt-4 text-left">
        <div class="text-right text-[10px] font-bold text-neutral-800 font-mono">
          Huambo, 24 de Junho de 2026
        </div>

        <div class="text-[11px] space-y-0.5 text-neutral-900 border-l-2 border-neutral-800 pl-3">
          <p class="font-extrabold text-neutral-950">
            À Sua Excelência Senhor Ministro da Defesa Nacional e Veteranos da Pátria
          </p>
          <p class="text-[10px] text-neutral-600 font-medium">
            <span class="font-bold text-neutral-800">Conhecimento:</span> Sua Excelência Senhor Ministro do Interior
          </p>
        </div>
      </div>

      <!-- Assunto Destacado -->
      <div class="bg-neutral-50 border-l-4 border-amber-500 p-2.5 rounded-r mt-4 text-left">
        <p class="text-[8px] font-mono font-bold text-amber-800 uppercase tracking-wider">Assunto:</p>
        <h4 class="text-[11px] font-bold text-neutral-950">
          Submissão da Proposta Técnica SIRA
        </h4>
      </div>

      <!-- Corpo -->
      <div class="space-y-3 text-[11px] text-neutral-700 leading-relaxed text-justify mt-4">
        <p>Excelência,</p>
        <p>
          A <strong>VITRONIS – Robótica e Controle - Serviços, LDA</strong> tem a honra de submeter à consideração de Vossa Excelência a proposta técnica do <strong>SIRA – Sistema Integrado de Responsabilização e Administração de Armamento</strong>, atualmente concluída e disponível para avaliação institucional.
        </p>
        <p>
          Considerando a natureza estratégica da solução, solicitamos a análise detalhada das métricas, indicadores operacionais, arquitetura tecnológica, mechanisms de controlo, fluxos de custódia e cenários de implementação apresentados no portal da proposta, por constituírem os elementos técnicos fundamentais para apreciação da sua viabilidade, certificação e eventual implementação piloto.
        </p>
        <p>
          A equipa da VITRONIS encontra-se disponível para apresentação executiva, demonstração funcional e discussão técnica especializada sempre que julgado conveniente.
        </p>
        <p class="font-bold text-neutral-800">Com elevada consideração.</p>
      </div>

      <!-- QR Code and Security Footnote -->
      <div class="grid grid-cols-12 gap-4 items-center border-t border-neutral-200 pt-3 mt-6">
        <div class="col-span-3 flex justify-center">
          <div class="bg-white border border-neutral-300 p-1 rounded">
            <svg class="h-11 w-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="22" height="22" stroke="black" stroke-width="4" />
              <rect x="11" y="11" width="10" height="10" fill="black" />
              <rect x="73" y="5" width="22" height="22" stroke="black" stroke-width="4" />
              <rect x="79" y="11" width="10" height="10" fill="black" />
              <rect x="5" y="73" width="22" height="22" stroke="black" stroke-width="4" />
              <rect x="11" y="79" width="10" height="10" fill="black" />
              <rect x="75" y="75" width="8" height="8" stroke="black" stroke-width="2" />
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
              <rect x="42" y="42" width="16" height="16" fill="white" rx="3" />
              <path d="M50 45 C51 45 54 46 54 48 C54 53 50 55 50 55 C50 55 46 53 46 48 C46 46 49 45 50 45 Z" fill="#D97706" />
            </svg>
          </div>
        </div>
        <div class="col-span-9 text-[8px] text-neutral-400 font-mono leading-relaxed text-left">
          <span class="font-bold text-neutral-600 block">CHANCELA DE INTEGRIDADE SOBERANA SIRA</span>
          Hash SHA-256: 8F4B7A1C9E3D5F6B8A7C6D5E4F3A2B1C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A. Autenticidade eletrónica corporativa auditada.
        </div>
      </div>

      <!-- Signatures -->
      <div class="pt-4 border-t border-neutral-200 mt-6 pb-4">
        <div class="grid grid-cols-2 gap-8 text-center text-[9px]">
          <div class="space-y-1">
            <p class="text-neutral-500 text-[8px]">Pela VITRONIS – ROBÓTICA E CONTROLE - SERVIÇOS, LDA</p>
            <div class="h-4"></div>
            <div class="w-36 h-[1px] bg-neutral-400 mx-auto"></div>
            <p class="font-bold text-neutral-800">Isabel Truman Morgado Sapalo</p>
            <p class="text-neutral-500 text-[8px]">Gerente Executiva</p>
          </div>
          <div class="space-y-1">
            <p class="text-neutral-500 text-[8px]">Assinatura Criptográfica Corporativa</p>
            <div class="h-4"></div>
            <div class="w-36 h-[1px] bg-neutral-400 mx-auto"></div>
            <p class="font-bold text-neutral-800">VITRONIS SECURE SIGNATURE™</p>
            <p class="text-neutral-500 text-[8px]">Fingerprint: VTS-2026-SIRA-AO-F981X</p>
          </div>
        </div>
      </div>
    </div>


    <!-- 3. EXECUTIVE SUMMARY -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <div class="space-y-6">
        <div class="flex items-center gap-2 border-b-2 border-neutral-900 pb-2 text-left">
          <svg class="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-1 5h-3m3 5h4l-1 5H9"></path>
          </svg>
          <h2 class="text-lg font-bold uppercase tracking-wider text-neutral-900">
            1. Enquadramento e Resumo Executivo
          </h2>
        </div>

        <div class="space-y-4 text-sm leading-relaxed text-neutral-700 text-justify">
          <p class="font-semibold text-neutral-900">
            O Sistema de Informação e Rastreio de Armamento (SIRA) estabelece o novo padrão soberano de controlo de material bélico e gestão de forças policiais da República de Angola.
          </p>
          <p>
            O crescimento geográfico e a necessidade imperativa de mitigar o desvio de armamento leve para fins ilícitos exigem um sistema tecnológico moderno, auditável e centralizado de ponta-a-ponta. Com a recente re-organização geo-administrativa aprovada, que divide o território nacional em <strong>21 províncias soberanas</strong>, a coordenação de recursos de segurança torna-se um desafio estratégico de primeira escala.
          </p>
          <p>
            O SIRA responde a esta realidade através da integração de rastreamento físico ativo (módulos IoT, RFID e biometria) com uma base de dados criptografada de alta disponibilidade. O sistema garante o monitoramento integral desde o arsenal central até a entrega individual no início do turno operacional do agente de campo, gerando uma cadeia de custódia 100% à prova de falsificações.
          </p>
        </div>

        <div class="bg-neutral-50 p-4 border-l-4 border-amber-500 rounded space-y-2 my-4 text-left">
          <h4 class="text-xs font-mono font-bold uppercase text-neutral-800">Objetivos Estratégicos Imediatos:</h4>
          <ul class="text-xs space-y-1.5 list-disc pl-5 text-neutral-600">
            <li><strong>Mitigação de Perdas:</strong> Reduzir a zero os índices de desvios e perdas acidentais de armamento corporativo.</li>
            <li><strong>Soberania Geoadministrativa:</strong> Mapear em tempo real a alocação de material bélico nas 21 províncias oficiais.</li>
            <li><strong>Cadeia de Custódia Digital:</strong> Registrar com assinatura criptográfica cada levantamento, devolução ou transferência de armamento de serviço.</li>
            <li><strong>Transparência Ministerial:</strong> Oferecer painéis de monitorização e auditoria em tempo real para os Comandos Gerais da Polícia Nacional e Forças Armadas Angolanas.</li>
          </ul>
        </div>

        <div class="space-y-3 pt-4 text-left">
          <h3 className="text-sm font-bold text-neutral-900 uppercase">Benefícios para a Governação Pública:</h3>
          <div class="grid grid-cols-2 gap-4 text-xs text-neutral-600">
            <div class="border border-neutral-200 p-3 rounded">
              <p class="font-bold text-neutral-800 mb-1">✓ Otimização de Recursos</p>
              <p>Redução nos custos logísticos de auditoria manual e redistribuição eficiente de armas baseada em relatórios de atividade real.</p>
            </div>
            <div class="border border-neutral-200 p-3 rounded">
              <p class="font-bold text-neutral-800 mb-1">✓ Segurança Pública Reforçada</p>
              <p>Rastreamento imediato de armas perdidas ou apreendidas e responsabilização transparente dos agentes responsáveis pela custódia.</p>
            </div>
          </div>
        </div>
      </div>
      
      <p class="text-center text-[8px] text-neutral-400 font-mono mt-8">SIRA &bull; Proposta Técnica &bull; Página 3 de 6</p>
    </div>


    <!-- 4. GEOGRAPHIC STATISTICS TABLE (21 PROVINCES) -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <div class="space-y-6">
        <div class="flex items-center gap-2 border-b-2 border-neutral-900 pb-2 text-left">
          <svg class="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <h2 class="text-lg font-bold uppercase tracking-wider text-neutral-900">
            2. Divisão Geoadministrativa e Estatística (21 Províncias 2024)
          </h2>
        </div>

        <p class="text-xs text-neutral-700 leading-relaxed text-justify">
          Tabela descritiva contendo a codificação oficial SIRA para as 21 províncias operacionais de Angola a partir de 2024. O sistema inclui as novas unidades administrativas criadas pelo Executivo (como <strong>Moxico Leste</strong>, <strong>Icolo e Bengo</strong>, <strong>Cuando</strong> e <strong>Cubango</strong>).
        </p>

        <table class="w-full text-left border-collapse border border-neutral-300 text-[10px] my-2">
          <thead>
            <tr class="bg-neutral-100 font-mono text-neutral-700 border-b border-neutral-300">
              <th class="p-1 border-r border-neutral-300">Nº</th>
              <th class="p-1 border-r border-neutral-300">Província</th>
              <th class="p-1 border-r border-neutral-300 text-center">Sigla</th>
              <th class="p-1 border-r border-neutral-300">Capital SIRA</th>
              <th class="p-1 border-r border-neutral-300 text-right">Armas</th>
              <th class="p-1 border-r border-neutral-300 text-right">Agentes</th>
              <th class="p-1 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            ${provinces.map((prov, i) => `
              <tr class="border-b border-neutral-200 hover:bg-neutral-50 font-sans">
                <td class="p-1 border-r border-neutral-200 font-mono text-[9px] text-neutral-500">${i + 1}</td>
                <td class="p-1 border-r border-neutral-200 font-bold text-neutral-800">${prov.name}</td>
                <td class="p-1 border-r border-neutral-200 text-center font-mono font-bold text-amber-600">${prov.code}</td>
                <td class="p-1 border-r border-neutral-200 text-neutral-600">${prov.capital}</td>
                <td class="p-1 border-r border-neutral-200 text-right font-mono">${prov.activeWeapons.toLocaleString()}</td>
                <td class="p-1 border-r border-neutral-200 text-right font-mono">${prov.activeAgents.toLocaleString()}</td>
                <td class="p-1 text-center font-mono text-[8px]">
                  <span class="px-1 py-0.5 rounded font-semibold border ${
                    prov.status === 'Alerta' 
                      ? 'border-red-300 bg-red-50 text-red-700' 
                      : prov.status === 'Aviso' 
                      ? 'border-amber-300 bg-amber-50 text-amber-700' 
                      : 'border-green-300 bg-green-50 text-green-700'
                  }">
                    ${prov.status}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="text-[9px] font-mono text-neutral-500 space-y-0.5 text-left">
          <p>* Dados simulados para planeamento tático integrados em conformidade com as diretivas ministeriais de 2026.</p>
          <p>* Totais consolidados SIRA Proposta Nacional: <strong>33.360 armas ativas</strong> monitoradas e <strong>37.800 agentes policiais escalados</strong> sob o ecossistema nacional.</p>
        </div>
      </div>

      <p class="text-center text-[8px] text-neutral-400 font-mono mt-8">SIRA &bull; Proposta Técnica &bull; Página 4 de 6</p>
    </div>


    <!-- 5. ARCHITECTURE & SECURITY -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <div class="space-y-6">
        <div class="flex items-center gap-2 border-b-2 border-neutral-900 pb-2 text-left">
          <svg class="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <h2 class="text-lg font-bold uppercase tracking-wider text-neutral-900">
            3. Arquitetura Operacional e de Hardware Seguro
          </h2>
        </div>

        <p class="text-xs text-neutral-700 text-left">
          A infraestrutura técnica do SIRA foi desenhada pela VITRONIS para assegurar total independência, redundância física de dados e operacionalidade offline em cenários críticos.
        </p>

        <div class="grid grid-cols-2 gap-4 my-2 text-left">
          <div class="border border-neutral-200 p-3 rounded space-y-1.5">
            <h3 class="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1">
              <span>●</span> Módulos IoT no Armamento
            </h3>
            <p class="text-[10px] text-neutral-600 leading-relaxed">
              Cada arma de fogo listada no SIRA possui uma etiqueta passiva RFID UHF de alta resistência militar, fundida ao corpo do armamento, impossibilitando remoção mecânica sem inutilizar o equipamento.
            </p>
          </div>

          <div class="border border-neutral-200 p-3 rounded space-y-1.5">
            <h3 class="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1">
              <span>●</span> Identidade Biométrica
            </h3>
            <p class="text-[10px] text-neutral-600 leading-relaxed">
              O início do turno operacional do policial depende de autenticação biométrica em terminais robustos instalados nas esquadras ou verificação criptográfica NFC. A custódia do armamento é pessoal.
            </p>
          </div>

          <div class="border border-neutral-200 p-3 rounded space-y-1.5">
            <h3 class="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1">
              <span>●</span> Criptografia AES-256
            </h3>
            <p class="text-[10px] text-neutral-600 leading-relaxed">
              Todas as comunicações de dados são encriptadas via AES-256 sob túneis de rede fechados do Ministério do Interior, protegidos contra interceptações. Os servidores principais encontram-se em Luanda.
            </p>
          </div>

          <div class="border border-neutral-200 p-3 rounded space-y-1.5">
            <h3 class="text-xs font-mono font-bold text-neutral-800 uppercase border-b border-neutral-100 pb-1 flex items-center gap-1">
              <span>●</span> Modos Operacionais Offline
            </h3>
            <p class="text-[10px] text-neutral-600 leading-relaxed">
              As esquadras remotas e patrulhas de fronteira operam via rede local offline em caso de indisponibilidade de comunicações por satélite. Sincronizações ocorrem assim que o canal de dados é reativado.
            </p>
          </div>
        </div>

        <div class="bg-neutral-50 p-3 rounded border border-neutral-200 space-y-2 text-left">
          <h4 class="text-xs font-bold text-neutral-800 uppercase">Visão Esquemática de Fluxo de Armas SIRA:</h4>
          <div class="flex justify-between items-center text-center font-mono text-[9px] text-neutral-600">
            <div class="bg-white border border-neutral-300 p-1.5 rounded w-1/4">
              <span class="font-bold text-neutral-900 block">1. ARSENAL</span>
              Etiquetas RFID
            </div>
            <span class="text-amber-500 font-bold">&rarr;</span>
            <div class="bg-white border border-neutral-300 p-1.5 rounded w-1/4">
              <span class="font-bold text-neutral-900 block">2. AGENTE</span>
              Biometria &amp; NFC
            </div>
            <span class="text-amber-500 font-bold">&rarr;</span>
            <div class="bg-white border border-neutral-300 p-1.5 rounded w-1/4">
              <span class="font-bold text-neutral-900 block">3. CAMPO</span>
              Uso Rastreado
            </div>
            <span class="text-amber-500 font-bold">&rarr;</span>
            <div class="bg-white border border-neutral-300 p-1.5 rounded w-1/4">
              <span class="font-bold text-neutral-900 block">4. RETORNO</span>
              Baixa Automática
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-[8px] text-neutral-400 font-mono mt-8">SIRA &bull; Proposta Técnica &bull; Página 5 de 6</p>
    </div>


    <!-- 6. ROADMAP & SIGNATURES -->
    <div class="page-container max-w-[210mm] min-h-[297mm] mx-auto bg-white p-12 sm:p-16 border border-neutral-300 shadow-2xl relative flex flex-col justify-between rounded-xl">
      <div class="space-y-6">
        <div class="flex items-center gap-2 border-b-2 border-neutral-900 pb-2 text-left">
          <svg class="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <h2 class="text-lg font-bold uppercase tracking-wider text-neutral-900">
            4. Cronograma de Implementação e Conclusões
          </h2>
        </div>

        <p class="text-xs text-neutral-700 text-left">
          O cronograma de implementação do SIRA foi projetado para assegurar transições suaves e sem riscos para as operações diárias das forças de ordem.
        </p>

        <div class="space-y-3.5 my-2 text-left">
          <div class="flex gap-4 border-l-2 border-amber-500 pl-4 py-0.5">
            <div class="font-mono text-xs font-bold text-neutral-800 uppercase shrink-0 min-w-[120px]">
              Fase 1 (Meses 1-4):
            </div>
            <div class="text-[10px] text-neutral-600 leading-relaxed">
              <strong class="text-neutral-900">Implementação Piloto em Luanda &amp; Cabinda.</strong> Instalação dos portais IoT RFID nos principais comandos provinciais de Luanda e na esquadra central de Cabinda. Cadastro biométrico de 8.000 agentes piloto.
            </div>
          </div>

          <div class="flex gap-4 border-l-2 border-neutral-300 pl-4 py-0.5">
            <div class="font-mono text-xs font-bold text-neutral-400 uppercase shrink-0 min-w-[120px]">
              Fase 2 (Meses 5-8):
            </div>
            <div class="text-[10px] text-neutral-600 leading-relaxed">
              <strong class="text-neutral-900">Expansão Regional do Interior.</strong> Implantação e ativação do sistema nas capitais regionais chave: Benguela, Huambo, Zaire e Huíla. Criação das subredes de backup do Huambo.
            </div>
          </div>

          <div class="flex gap-4 border-l-2 border-neutral-300 pl-4 py-0.5">
            <div class="font-mono text-xs font-bold text-neutral-400 uppercase shrink-0 min-w-[120px]">
              Fase 3 (Meses 9-12):
            </div>
            <div class="text-[10px] text-neutral-600 leading-relaxed">
              <strong class="text-neutral-900">Nacionalização Completa (21 Províncias).</strong> Implantação total em todas as esquadras territoriais, comandos de fronteira e bases das Forças Armadas de Angola. Ativação oficial nacional.
            </div>
          </div>
        </div>

        <div class="border border-neutral-200 rounded p-3 text-[10px] text-neutral-600 space-y-2 mt-4 bg-neutral-50/50 text-left">
          <h3 class="font-bold text-neutral-900 uppercase">Cláusula de Soberania e Desenvolvimento Nacional:</h3>
          <p class="leading-relaxed">
            Como parceira nacional comprometida com o engrandecimento tecnológico da Pátria, a <strong>VITRONIS, LDA</strong> desenvolve todo o software SIRA em território angolano, garantindo que o código-fonte, dados institucionais, relatórios e chaves de segurança permaneçam sob controle absoluto e exclusivo do Estado Angolano.
          </p>
        </div>

        <!-- Signature Blocks for Formal Presentability -->
        <div class="pt-8 border-t border-neutral-200">
          <p class="text-center text-[10px] font-mono text-neutral-500 mb-6">
            Em conformidade com as diretivas e em fé da segurança das forças públicas:
          </p>
          <div class="grid grid-cols-2 gap-8 text-center text-xs font-sans">
            <div class="space-y-1">
              <div class="w-40 h-[1px] bg-neutral-400 mx-auto"></div>
              <p class="font-bold text-neutral-800">Ministério do Interior</p>
              <p class="text-neutral-500 text-[8px]">Gabinete do Secretário de Estado para o Asseguramento Técnico</p>
            </div>
            <div class="space-y-1">
              <div class="w-40 h-[1px] bg-neutral-400 mx-auto"></div>
              <p class="font-bold text-neutral-800">Vitronis, Lda</p>
              <p class="text-neutral-500 text-[8px]">Direção Geral de Engenharia de Sistemas de Defesa</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-[8px] text-neutral-400 font-mono mt-8">SIRA &bull; Proposta Técnica &bull; Página 6 of 6</p>
    </div>

  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 600);
    };
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'SIRA_Proposta_Estrategica_Nacional_2026.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
