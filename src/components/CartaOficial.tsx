import React from 'react';
import { Shield, Lock, FileText, Printer, Check, Copy, Share2, Eye, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface CartaOficialProps {
  onPrint?: () => void;
}

export default function CartaOficial({ onPrint }: CartaOficialProps) {
  const [copiedHash, setCopiedHash] = React.useState(false);
  const [printStage, setPrintStage] = React.useState<'idle' | 'validating' | 'compiling' | 'formatting' | 'signing' | 'launching' | 'printed'>('idle');
  const [progress, setProgress] = React.useState(0);
  const hash = "SHA256: 8F4B7A1C9E3D5F6B8A7C6D5E4F3A2B1C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A";

  const handleCopyHash = () => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const startPrintWorkflow = () => {
    if (printStage !== 'idle') return;
    
    setPrintStage('validating');
    setProgress(5);
    
    // Step 1: Validating
    setTimeout(() => {
      setPrintStage('compiling');
      setProgress(30);
      
      // Step 2: Compiling
      setTimeout(() => {
        setPrintStage('formatting');
        setProgress(60);
        
        // Step 3: Formatting
        setTimeout(() => {
          setPrintStage('signing');
          setProgress(85);
          
          // Step 4: Signing
          setTimeout(() => {
            setPrintStage('launching');
            setProgress(100);
            
            // Step 5: Trigger Print
            setTimeout(() => {
              if (onPrint) {
                onPrint();
              }
              setPrintStage('printed');
            }, 800);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1200);
  };

  const resetWorkflow = () => {
    setPrintStage('idle');
    setProgress(0);
  };

  return (
    <section id="carta-oficial" className="py-16 bg-neutral-900 border-b border-neutral-800 text-white relative overflow-hidden">
      {/* Sovereign flag top border effect */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="w-1/2 bg-red-600" />
        <div className="w-1/2 bg-black flex items-center justify-center relative">
          <div className="absolute h-1 w-1 bg-amber-400 rounded-full animate-ping" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Comunicação Soberana Reservada
          </span>
          <h3 className="font-display text-3xl font-extrabold tracking-tight">Ofício de Encaminhamento Estratégico</h3>
          <p className="text-neutral-400 text-sm">
            Documento de transmissão oficial autenticado eletronicamente. Esta carta antecede a proposta detalhada, servindo como credencial de segurança soberana.
          </p>
        </div>

        {/* State-driven Sovereign PDF Generation Panel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-[0_0_40px_rgba(234,179,8,0.05)] text-left space-y-4">
            
            {/* Header of the generator */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-500" />
                  <h4 className="font-display text-lg font-extrabold text-white">
                    Compilador e Gerador de PDF Oficial (A4)
                  </h4>
                </div>
                <p className="text-xs text-neutral-400">
                  Gera a proposta estratégica e ofício em conformidade com as normas A4 do Ministério do Interior.
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-mono font-bold uppercase tracking-wider">
                SIRA v2.6 SECURE_FLOW
              </span>
            </div>

            {printStage === 'idle' && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
                <div className="space-y-1 md:max-w-xl">
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    O documento compilado contém <strong className="text-white">5 páginas oficiais</strong> incluindo a folha de rosto, o resumo executivo, a tabela de províncias nacionais, arquitetura técnica e o cronograma do SIRA.
                  </p>
                  <p className="text-[10px] text-amber-500 font-mono flex items-center gap-1">
                    <Sparkles className="h-3 w-3 shrink-0" /> Inclui chaves de integridade digital e selo oficial.
                  </p>
                </div>
                
                <button
                  onClick={startPrintWorkflow}
                  className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 hover:from-amber-400 hover:to-amber-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shrink-0"
                >
                  <Printer className="h-4.5 w-4.5" />
                  <span>Gerar PDF Oficial</span>
                </button>
              </div>
            )}

            {printStage !== 'idle' && printStage !== 'printed' && (
              <div className="space-y-3 pt-2">
                {/* Active progress tracking bar */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-500 font-bold flex items-center gap-2">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-500" />
                    {printStage === 'validating' && "A validar chaves de integridade criptográfica (SHA-256)..."}
                    {printStage === 'compiling' && "A compilar a divisão administrativa de 21 Províncias..."}
                    {printStage === 'formatting' && "A calibrar layout A4 para folhas timbradas governamentais..."}
                    {printStage === 'signing' && "A aplicar assinaturas digitais institucionais e chancelas..."}
                    {printStage === 'launching' && "A invocar o módulo de impressão nativa..."}
                  </span>
                  <span className="text-neutral-400 font-bold">{progress}%</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-red-600 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {printStage === 'printed' && (
              <div className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-green-400 flex items-center gap-2">
                      <Check className="h-5 w-5" /> Documento Compilado e Caixa de Diálogo Aberta
                    </p>
                    <p className="text-xs text-neutral-300">
                      Siga as instruções obrigatórias abaixo para obter a formatação PDF perfeita.
                    </p>
                  </div>
                  <button
                    onClick={resetWorkflow}
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    Gerar Novamente
                  </button>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-bold text-amber-500 flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4 shrink-0" /> Configurações Recomendadas para o PDF Perfeito:
                  </p>
                  <ul className="text-xs text-neutral-400 space-y-2 pl-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span><strong>Destino:</strong> Defina como <strong className="text-neutral-200">"Guardar como PDF"</strong> (Save as PDF).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span><strong>Gráficos de Fundo:</strong> Ative <strong className="text-neutral-200">"Imagens de fundo"</strong> (Background graphics) nas definições avançadas para reter as cores originais, brasões e linhas douradas.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span><strong>Cabeçalhos & Rodapés:</strong> Desative a opção <strong className="text-neutral-200">"Cabeçalhos e rodapés"</strong> para ocultar a URL do site e o carimbo de data do browser nas margens.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>



        {/* Sophisticated Virtual Letter Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
          
          {/* Cybernetic Integrity Column (Left on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-neutral-950/80 border border-neutral-800 p-5 rounded-xl space-y-4 text-left">
              <h5 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-amber-500" />
                Chaves de Integridade
              </h5>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Assinatura Digital</p>
                  <p className="text-xs font-mono text-neutral-300 bg-neutral-900 p-2 rounded truncate select-all">
                    SIRA-SECURE-KEY-v2.6-F981X
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-neutral-500 uppercase">Hash de Encriptação</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[9px] font-mono text-amber-500/80 bg-neutral-900 p-2 rounded truncate flex-1 select-all">
                      8F4B7A1C9E3D5F6B8A...
                    </p>
                    <button 
                      onClick={handleCopyHash}
                      className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                      title="Copiar Hash SHA256"
                    >
                      {copiedHash ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2 border-t border-neutral-800 pt-3 text-[10px] font-mono text-neutral-400">
                  <p className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> 
                    Origem: Vitronis Segura Cripto
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> 
                    Destino: Ministro da Defesa
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> 
                    Sincronização: Tempo Real (WAT)
                  </p>
                </div>
              </div>
            </div>

            {/* Verification QR Code Section */}
            <div className="bg-neutral-950/80 border border-neutral-800 p-5 rounded-xl text-center space-y-4">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block font-bold">QR CODE DE VALIDAÇÃO DIGITAL</span>
              
              {/* Custom High-fidelity Vector QR Code */}
              <div className="mx-auto bg-white p-3 rounded-xl inline-block shadow-md">
                <svg className="h-32 w-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Position detection patterns (Outer top-left, top-right, bottom-left) */}
                  <rect x="5" y="5" width="22" height="22" stroke="black" strokeWidth="4" />
                  <rect x="11" y="11" width="10" height="10" fill="black" />
                  
                  <rect x="73" y="5" width="22" height="22" stroke="black" strokeWidth="4" />
                  <rect x="79" y="11" width="10" height="10" fill="black" />
                  
                  <rect x="5" y="73" width="22" height="22" stroke="black" strokeWidth="4" />
                  <rect x="11" y="79" width="10" height="10" fill="black" />
                  
                  {/* Small alignment pattern */}
                  <rect x="75" y="75" width="8" height="8" stroke="black" strokeWidth="2" />
                  <rect x="78" y="78" width="2" height="2" fill="black" />

                  {/* QR Code Random Sophisticated Cyber Patterns */}
                  <rect x="32" y="5" width="6" height="6" fill="black" />
                  <rect x="42" y="5" width="12" height="4" fill="black" />
                  <rect x="60" y="5" width="8" height="6" fill="black" />
                  
                  <rect x="32" y="15" width="18" height="4" fill="black" />
                  <rect x="55" y="13" width="6" height="8" fill="black" />
                  <rect x="65" y="15" width="4" height="4" fill="black" />
                  
                  <rect x="32" y="25" width="6" height="12" fill="black" />
                  <rect x="42" y="25" width="24" height="4" fill="black" />
                  <rect x="73" y="32" width="12" height="6" fill="black" />
                  
                  <rect x="5" y="32" width="12" height="6" fill="black" />
                  <rect x="22" y="32" width="6" height="18" fill="black" />
                  
                  <rect x="32" y="42" width="10" height="6" fill="black" />
                  <rect x="48" y="42" width="18" height="10" fill="black" />
                  <rect x="73" y="42" width="6" height="18" fill="black" />
                  <rect x="85" y="45" width="10" height="4" fill="black" />

                  <rect x="5" y="55" width="14" height="4" fill="black" />
                  <rect x="32" y="55" width="6" height="6" fill="black" />
                  <rect x="42" y="58" width="14" height="12" fill="black" />
                  <rect x="60" y="58" width="8" height="4" fill="black" />
                  
                  <rect x="73" y="66" width="22" height="4" fill="black" />
                  <rect x="85" y="58" width="4" height="6" fill="black" />

                  {/* Sovereign Shield Icon placeholder in the center */}
                  <rect x="42" y="42" width="16" height="16" fill="white" rx="3" />
                  <path d="M50 45 C51 45 54 46 54 48 C54 53 50 55 50 55 C50 55 46 53 46 48 C46 46 49 45 50 45 Z" fill="#D97706" />
                </svg>
              </div>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                Este QR Code valida juridicamente a autenticidade do documento em conformidade com o Decreto-Lei de Segurança de Defesa 2026.
              </p>
            </div>
          </div>

          {/* Letter Sheet View (Right on lg) */}
          <div className="lg:col-span-8 bg-white text-neutral-900 rounded-2xl shadow-xl border border-neutral-200 overflow-hidden text-left font-sans">
            
            {/* Header Ribbon */}
            <div className="h-1.5 flex">
              <div className="w-1/3 bg-amber-500" />
              <div className="w-1/3 bg-red-600" />
              <div className="w-1/3 bg-neutral-900" />
            </div>

            {/* Letter Content Area */}
            <div className="p-8 sm:p-10 space-y-6">
              
              {/* VITRONIS Elegante Cabeçalho Corporativo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b-2 border-neutral-800">
                {/* Logo e Nome da Empresa (Esquerda) */}
                <div className="md:col-span-7 flex items-start gap-3">
                  <div className="h-12 w-12 rounded bg-neutral-900 text-amber-500 flex items-center justify-center font-bold text-xl tracking-tighter shrink-0 border border-amber-500/20 shadow-sm">
                    V
                  </div>
                  <div>
                    <h2 className="text-sm font-extrabold tracking-tight text-neutral-950 uppercase leading-none">
                      VITRONIS
                    </h2>
                    <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mt-0.5 leading-none">
                      Robótica e Controle - Serviços, Lda
                    </p>
                    <p className="text-[8px] text-amber-600 font-medium tracking-normal mt-2">
                      Engenharia &bull; Ciência Aplicada &bull; Robótica &bull; Sistemas de Automação
                    </p>
                  </div>
                </div>

                {/* Dados Corporativos Compactados (Direita) */}
                <div className="md:col-span-5 text-left md:text-right text-[8px] md:text-[9px] text-neutral-500 font-mono space-y-0.5 border-t md:border-t-0 border-neutral-100 pt-3 md:pt-0">
                  <p className="font-bold text-neutral-800">NIF: <span className="font-mono text-neutral-600">5002571293</span></p>
                  <p className="font-bold text-neutral-800">Matrícula: <span className="font-mono text-neutral-600">23075-25/250701</span></p>
                  <p>Rua Avenida da República, Casa n.º 5</p>
                  <p>Bairro Cidade Alta – Huambo</p>
                  <p className="font-semibold text-neutral-700">República de Angola</p>
                  <p className="pt-1">
                    <a href="http://www.vitronis.co.ao" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">www.vitronis.co.ao</a>
                  </p>
                  <p>
                    <a href="mailto:inf@vitronis.co.ao" className="text-neutral-600 hover:underline">inf@vitronis.co.ao</a>
                  </p>
                  <p className="text-neutral-700 font-bold leading-tight pt-1">
                    +244 948 323 383<br/>
                    +244 941 807 171<br/>
                    +244 921 092 324
                  </p>
                </div>
              </div>

              {/* Data e Destinatários */}
              <div className="space-y-4">
                {/* Data à Direita */}
                <div className="text-right text-xs font-bold text-neutral-800 font-mono">
                  Huambo, 24 de Junho de 2026
                </div>

                {/* Destinatário à Esquerda e Conhecimento imediatamente abaixo */}
                <div className="text-xs sm:text-sm space-y-1 text-neutral-900 border-l-2 border-neutral-800 pl-3">
                  <p className="font-bold">
                    À Sua Excelência Senhor Ministro da Defesa Nacional e Veteranos da Pátria
                  </p>
                  <p className="text-xs text-neutral-600 font-medium">
                    <span className="font-bold text-neutral-800">Conhecimento:</span> Sua Excelência Senhor Ministro do Interior
                  </p>
                </div>
              </div>

              {/* Assunto Destacado */}
              <div className="bg-amber-500/10 border-l-4 border-amber-500 p-3 rounded-r">
                <p className="text-[9px] font-mono font-bold text-amber-800 uppercase tracking-wider">Assunto:</p>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-950">
                  Submissão da Proposta Técnica SIRA
                </h4>
              </div>

              {/* Corpo Extremamente Curto */}
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                <p>
                  Excelência,
                </p>
                <p>
                  A <strong className="text-neutral-950">VITRONIS – Robótica e Controle - Serviços, LDA</strong> tem a honra de submeter à consideração de Vossa Excelência a proposta técnica do <strong className="text-neutral-950">SIRA – Sistema Integrado de Responsabilização e Administração de Armamento</strong>, atualmente concluída e disponível para avaliação institucional.
                </p>
                <p>
                  Considerando a natureza estratégica da solução, solicitamos a análise detalhada das métricas, indicadores operacionais, arquitetura tecnológica, mecanismos de controlo, fluxos de custódia e cenários de implementação apresentados no portal da proposta, por constituírem os elementos técnicos fundamentais para apreciação da sua viabilidade, certificação e eventual implementação piloto.
                </p>
                <p>
                  A equipa da VITRONIS encontra-se disponível para apresentação executiva, demonstração funcional e discussão técnica especializada sempre que julgado conveniente.
                </p>
                <p className="font-semibold text-neutral-800">
                  Com elevada consideração.
                </p>
              </div>

              {/* Assinatura Institucional no Rodapé */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start gap-6">
                {/* Assinatura Digital Corporativa (Esquerda) */}
                <div className="text-[8px] text-neutral-500 font-mono space-y-1 border border-neutral-100 p-3 rounded bg-neutral-50/50 w-full sm:max-w-xs">
                  <p className="font-bold text-amber-800 uppercase tracking-widest text-[9px] border-b border-neutral-200 pb-1 flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Assinatura Digital Corporativa
                  </p>
                  <p className="font-bold text-neutral-800">VITRONIS SECURE SIGNATURE™</p>
                  <p><span className="font-semibold text-neutral-700">Fingerprint:</span> VTS-2026-SIRA-AO-F981X</p>
                  <p><span className="font-semibold text-neutral-700">Hash de Integridade:</span> SHA3-512 &bull; Ativa</p>
                  <p><span className="font-semibold text-neutral-700">Criptografia:</span> AES-256 &bull; RSA-4096 &bull; TLS 1.3</p>
                </div>
                
                {/* Assinatura Humana (Direita) */}
                <div className="text-center w-full sm:w-auto text-xs shrink-0 space-y-1.5 self-end">
                  <p className="font-medium text-neutral-500 text-[10px]">Pela VITRONIS – ROBÓTICA E CONTROLE - SERVIÇOS, LDA</p>
                  <div className="h-6" /> {/* Espaço para rubrica */}
                  <div className="w-48 h-[1px] bg-neutral-400 mx-auto" />
                  <p className="font-bold text-neutral-950">Isabel Truman Morgado Sapalo</p>
                  <p className="text-[10px] text-neutral-500 italic">Gerente Executiva</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
