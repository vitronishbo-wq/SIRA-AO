export interface Agent {
  id: string;
  nationalId: string;
  name: string;
  rank: string; // Categoria (e.g., Inspector-Chefe, Cabo, Sub-Chefe, Comandante)
  unit: string; // Unidade (e.g., URP - Unidade de Reação Patrulha, DIIP, Comando Provincial de Luanda)
  serviceStatus: 'Em Serviço' | 'Fora de Serviço' | 'Retido' | 'Férias';
  activeMission: string | null;
  authorizedZone: string;
  biometrics: {
    fingerprintRegistered: boolean;
    facialRegistered: boolean;
    photoUrl: string;
  };
}

export type WeaponStatus = 
  | 'Arsenal' 
  | 'Em Operação' 
  | 'Em Manutenção' 
  | 'Em Transferência' 
  | 'Retida' 
  | 'Extraviada';

export interface Weapon {
  id: string;
  serialNumber: string;
  model: string; // e.g., Makarov 9mm, AK-103, Galil
  type: 'Pistola' | 'Fuzil de Assalto' | 'Submetralhadora';
  status: WeaponStatus;
  currentHandlerId: string | null; // Agent ID
  custodyHistory: {
    timestamp: string;
    agentName: string;
    action: string;
    location: string;
  }[];
  operationalCondition: 'Excelente' | 'Necessita Revisão' | 'Inoperacional';
}

export interface ShiftHandover {
  id: string;
  outgoingAgentId: string;
  incomingAgentId: string;
  weaponId: string;
  timestamp: string;
  location: string;
  status: 'Pendente' | 'Validado' | 'Rejeitado';
  biometricVerification: {
    outgoingVerified: boolean;
    incomingVerified: boolean;
  };
}

export interface OperationalAlert {
  id: string;
  timestamp: string;
  type: 'Crítico' | 'Aviso' | 'Informativo';
  message: string;
  location: string;
  resolved: boolean;
}

export interface PilotRequest {
  id: string;
  requesterName: string;
  requesterEmail: string;
  institution: 'Ministério da Defesa' | 'Ministério do Interior' | 'Outra Força';
  rankPosition: string;
  province: string;
  notes: string;
  submittedAt: string;
}
