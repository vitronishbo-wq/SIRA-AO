import { Agent, Weapon, OperationalAlert } from './types';

export const HERO_IMAGES = [
  "https://images.openai.com/static-rsc-4/RPuOVvJ88zghHMoUrTeQ9wKCRqEEbY_hPIgOwVmJTrPk9s0331kj-pi2U25tP82zU62FVRaUNWU5cY3NDrxmcqIJOwIq8382B8wWtgXbBnoLBMfYcg-EIB1ADv7-RbzYK1ZKh0NIi1RAnhy4DFNMimCD1a7NK_cLDU9hzkn0diY9vqcAKsk0O7_PkVdgMN0g?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/VqXMDjy5iWWPGMpGO_daJuS8nT84G06gv5JWcsKR4_mLAfKNTc5oTM4lt205XRGQyYxcX9MPO7nKBpXwnA7XAtKEV_v0ipvg388BRIKMA7r2YVWcaRbTb9CrY8wf2BfYRxTu4DSVCm3IPuZefT6tqF-s3EIJbTSwqFSMC5PAx3tm4iWFuuM-RcTaXtf7o2oR?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/XwiR-BTiuDfQG4uboHDGS9u5tbl5uUmo0jTB9W9ImrmklbgGbJMZIZiQJKW17JMUabktW-I5SjZw7k-B-qpHN0vkExypB28pjMaLjfHGXa0M2uhgL8NJv2NrnqQHwP4eDOMn2yBKAoHdhLo7o7wlHiIKRtpypbZhTghm0LaUUr9ERTJFZkhr1sMoadOJDcZ3?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/564_dNX6LbdX6WsS5nQxAhxOXgj5zwWrJagxEHPXwkxtTIFmGTxvLNlWJwblOt6vFIv_P48SwiqSQrwdbHod0EBwq_hwZNkl7-4qiEJftVq3z58-8ObPe52rB9VWMzULgAKXwJBxnUn9eTtZkXjXPNUoW-Hck0rp8SweF6KOIuGH_p8OGB9WciaLx5DDH0RT?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/NvSK55BelHUTHZVaYmSvg1LkcgQMHjP4WhwsS2YncyMjNtgKkzSEBT6atPkkOrqszRnyqgKVgmx_eR_1lIYslfaJVWf_4_8by61-fLcGWUpopbiUcUZY89DZaimrJrep0gS_72rwDfuU7nZoiES7tLsxtfM5PknQ6NPI4-yrI2Nyupjj1SJITT0n8tDRMks7?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/wzVYrcIzmZiGavaHGIhR2pRQNcTi094418-kq_l8-wWXgFN7qzERK1Zwz7KpVlzzAbPJeSwp9Mr9NG6jb7bwaq0lMR1qPOmBgy0SbHKveKj2zNLzFLZYviuc4MK6WpzU8gANVjKSdeypmyA2bIBP9tH8nb1-5Nm5PRkwKr1Avag-Qc0bmuC-te7Y0MnPkPTw?purpose=fullsize"
];

export const SOLUTION_IMAGES = [
  "https://images.openai.com/static-rsc-4/hIzOpag4P4dnh6W5LjtIeUr2h2b3zHrViahPyQ_5AtyTiDzhmasF_NkzToelrk5x7tH_RbDugt1C7_VinJrRKxZqKAeF4fprDqt4Aeid7o6sbi2wy7VzZBbsOb9ea1xhCIBrfbBL5r87s667MyUP6ZRAb0H1WIhpkE-EPAXlU4XjOoHU_j-fsYZ7hhjusN5p?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/mZJ2-0AhHCkujhRp5Yzrvr-ZEJkAIt75wuw1PEvhIufp1MIEnz2t29FWtQEjpgEgDIH-PPJTGr46eZeZkfe83MRSIv7TZ3dWL1XBqpcrGlp57lk-Cg6QdeV_rmDyKVECbgiQmUPx9S6s1EXYnhJyItgffvy_8cGFAso7ZiElZGYA_r4IqyXT8-m6kZv9ENIC?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/XpmCBtOhJ-DQRPNTj1pM69RxkdCRn5-8mDHu5a1r2lQfPhndCMma7Amtra9NbFO4gHmJUmmkEj3aNjcxD1bjDn0168xh3rRF_DBLxcVGok4v2goDyPZpBgkSXCABgEYgEqD0_3tyjwkkwlSpQDbQSxOnYX9ndCqvpXZvzwFTJOLnK5lUUwz9dv57xiNXMXE-?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/LZD2rPHEZzUvHIHNH_qaQi0vZYAc4BeyEWjarto4_zN2roP91CPwYf25BX8utpwUPaQJ6WYuiG4h7Fb-zsaR34Ag8xiWzozeCs2z6enzgh6Ugr3GuTB0X9aioqfy42hqevOHAp0Ha2sTcP9FjCj9O2NMw1qSktxfhB-M7plv1FnH1btCCUc7h0-YTjCPh79A?purpose=fullsize"
];

export const ARCHITECTURE_IMAGES = [
  "https://images.openai.com/static-rsc-4/8grDGaHJTQEsm0nb5x9XeCvoNmrZjuvX0xjh1Fwkr32l9Edf__ugMrSlqeali2EfLByddcR2bjtS5LE26n3MVeneGeBATNCABUvpzoFIcr-ipqSeac6CSPpTdIwVOTzJnymDjXAeOCOvVH_JdULBvU-C-Usx_zwzM3F1Gr44BmCmUVoePmzKKmLGj8t6PDYZ?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/VpBkTkkiCedNZD70jux26ML5pfoarOtNxFBQB6G5McpDHvrPiuyrPn3m_gGyfTlsrKsZjmLT-12OmiXsLaeVj2AdTPfx7qTkJBrCie5xkVJva9dzs1XoBuXLORDSe8QdCmFu9SU4C66yqKjg414-NhBjcqR1V_9eb_WQexJyP9SvFLDxgvgdNGZOb9TyP6sq?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/jeHEKxm19N4g_5aVDiqVkhUz6Y-CYfZfomjC2EWsf3he7oV9CbE9pnKK99etDraXnPG2_JFaCT75B_oEYP8QxrkNJ89y2yI3VSZ4jka6MQmZhGEPypoUHqKLkwqkIf9O4cuqzuSeRxYFLL-wV7jmh2Gut5wyW-qHalConFomLbS8d1Ipb2i6tiN9Cl2Cw30w?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/eobW0vpgl1gX5mVAk5vQJiovhN6Hb9Dq_LPSM7uzUROMUVWuaWprwjpOsE3aXVStw4I48smPRMPc8fSa2zY0kZS6iZsmF7LTjyDcmjnaM_SgUHQqRzQbd62PY0sP13JzEt4tH5To5dKF1gvKcoC6j0cv0Q8yVYToFyeP6_8KNu5DWttCDfvJqd6BmeCYDIEJ?purpose=fullsize"
];

export const WEAPON_IMAGES = [
  "https://images.openai.com/static-rsc-4/WsjouDpWkR6hHxUeWhQ3gIFBPOGtP1cLqP8NLuzkLKZVl0SSEwESwubFiWR7ypV9yPlQFXUicTAGr_6KH06UzlogrUc89ecW2X9EMgFHI9PcUb7faRNoa5UZ7hz6ItGW9Mz6JBemRXvqcjXRvElFg-H2nC7dL8zKSwBEyFuOOIG6adJAhpjLPym-6KdcCQAy?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/QnAlePWIaGQ_GCfTCmkJ8xdZLdRpqibzCMkRSnbVE66v6W-tjdIVsYpNfd88q0A-xlhmTSoyKePyk02TuYDfNvuwy06OiHkRJlIGoBU2gvIO4lNcmmp3cmcq7Tp3ViYhZVsODn_iDqaVRR_VYAlB0JOtbD0T6NQVmk4qrj0l2e-1xRWux4YqG-7Uk5IJ-ySw?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/kF5-jEhKkO2XcXEzMYTZ3_o7vw7G2pFRjXBg4VUQ284FPVrSKY-hV85-czAafOsw-syTrP9T-OBHmPgl4FEbhXtef2FhyKfaJB6WEdomO05uzJQeFRMUfTW7Bcv3C7w0n57EEaJdHmzkJ46KrWzo2SX-lb2eD4dVYKit4NnwgNd_oSkiz2hLcYtMHGf3qET-?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/uCyBnUT-CNZxZ8GUw_Y8EFXmUBg2YPt6yWzpGMQI2r192o300isTj2Jjo1WTe6KSb9yfES_yFnCbNUa3iEDGh2su42-G9ui5jytIzTIDtfh-PEmoP1UC4h-F61s2pWrSJBnovcK6TyDEQDaFafc2GT_8imJjZp4LfA4UqYQnkhNjH8OLbIVMntcdrQov3e7f?purpose=fullsize"
];

export const FIELD_IMAGES = [
  "https://images.openai.com/static-rsc-4/7Hgtj78XJY9y9pnf-WUJyUD07yColawIfrVrlPC4KMP40ChKqnW76XlBZ7O7izfxai1QpsKKZB4bP8b6dAjqlO1mIwSOMQw8UWKG4e_6vBsadYPobSBNiVYMWB9nqnsr-lhLwcX7nuCbjQweXulrhVytVj0ts9JO04_o2hqZJJoMoivoVQFC7CrpDqKCF5bG?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/Cc2FiTjYGqsPO6JW5_hIpiJ-u1Y6sA5tQsrNI5K8ET8dPZhG93YZkuDwlE8k2CAGPBpYJ9rtDKTMjniLa5ePNs9zLIFVq2N_PREy68EAuavbV5MrUVkJbZl6iBhi43KkaJ1rzeeQ-tMSEE4cGMUfnvMCjwayUmtFzz7aUz28umnxykL7FX-dx6pYfbo-mi4l?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/p5Rwoib8ec7LunhL-QkNtocOchd_gTpjaYL6OWuz1MeWynsay0A5yS5CWVk9zt_eLWibi17gBZkeEo8eSMEhIxc09KGMV52pPeZTuVvkZDvJkYmlu5KBPVZOXdTbbQXz9gPNEsQxaFItK0EgcOj6WuyJ5LaO83K8N4XD1zDgC7HqXb1EAAnC-HhSfqNxoKAT?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/tiPfvxyukqwrJ72EicbmXc5H8YhJ2tc9SryxkqfWocrsK0XrHqh6JiKldyST4LITsMxQyFrJY12hWstBVgbYKAlTWzDoqZTmzWPO0JtN0ynnf8o8YbTQyexV2Mbm5OkTalcgIj7DK0vb8ajnBcZiHa_tFEy6RpC-hs0PwoiMTlMnoQhS98yeCCRjjanI58M5?purpose=fullsize"
];

export const DASHBOARD_IMAGES = [
  "https://images.openai.com/static-rsc-4/1g9nOZcw5ETL-tMu8SQaWUP_sIeTRyW5QVMaJi9YKwgEmEsmrGIh9awyVbfisZfTzFCI74mPAVKIKQDjp0F8tAgRlwnLIUihzPe--vcZasX66KJNoJpPP1yWzXvjexMzCfu8uoPjgAmUvw--YPDdkpAjB6ophPeAYPfWa-g0wssJQJ_Uqn66-6ZX3HG5aCZi?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/HQPNjk0CkD2oK7qdGgQJjacYzccUhRUhVg4UpnP27VhY5Lqfwgo6EjSuf1q77e5obHbe5I6nqFznPELTRlwQWWUynoElHgHMKn_q6sZVALfIguYIvNVYRDgt-fsk-7jmZfdJo6RsG3xBxIHf3jJBxsQtff5loQhM0OBdbCqNCm27RMiyzd3WTuu2pUu8X-zN?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/l2HhDtvhrz_TfALWiFKQpNJXzzQRo1M6nKGoV0Bup0D4SEcNZTMOnIenMfL2lAkMkoJ504sFlsUR-kmHMRUuZLs5ibkPeUp6xYmC3I7gnTrLbV2R27hgx7fGMe4_dVfU0hjUqBopI3HZuRA2yh_RlUvbhXb9U1mMfMXlMsyWxXO5WGlXx_-t024bSqrOWnzo?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/IqrzbdPllfes4b1E4Nyuio0fL6jLarYaB02z54vQTiUp4gan85s0DRAb39dYmdK-wxnF2VZdMsTme8poRt2qygehirgrtuJI33dGN1AJSDl2jk7dmkG3Gk9YCB9s_bhRw8ThJID1Hxc73baAfa2FSxhQw4m2EW9fBC7RkhQ2oQpbrXJIjax-xTPeAryIf7i-?purpose=fullsize"
];

export const INITIAL_AGENTS: Agent[] = [
  {
    id: 'ag-01',
    nationalId: 'AO-MININT-98327-S',
    name: 'Inspector Mateus Silva',
    rank: 'Inspector-Chefe',
    unit: 'DIIP - Direcção de Investigação de Ilícitos Penais (Luanda)',
    serviceStatus: 'Em Serviço',
    activeMission: 'Patrulhamento Táctico e Fiscalização Sector A-12',
    authorizedZone: 'Luanda - Cazenga / Sambizanga',
    biometrics: {
      fingerprintRegistered: true,
      facialRegistered: true,
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    }
  },
  {
    id: 'ag-02',
    nationalId: 'AO-MININT-43921-S',
    name: 'Cabo Laurinda Neto',
    rank: 'Cabo',
    unit: 'URP - Unidade de Reação Patrulha (Benguela)',
    serviceStatus: 'Em Serviço',
    activeMission: 'Segurança Institucional e Escolta Governamental',
    authorizedZone: 'Benguela - Centro Cívico',
    biometrics: {
      fingerprintRegistered: true,
      facialRegistered: true,
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop'
    }
  },
  {
    id: 'ag-03',
    nationalId: 'AO-MINDEF-10924-M',
    name: 'Sub-Chefe João Kiala',
    rank: 'Sub-Chefe',
    unit: 'FAA - Forças Armadas Angolanas (Cabinda)',
    serviceStatus: 'Em Serviço',
    activeMission: 'Vigilância de Posto de Fronteira Norte',
    authorizedZone: 'Cabinda - Fronteira Massabi',
    biometrics: {
      fingerprintRegistered: true,
      facialRegistered: true,
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    }
  },
  {
    id: 'ag-04',
    nationalId: 'AO-MININT-88342-S',
    name: 'Agente Principal Daniel Kassoma',
    rank: 'Agente Principal',
    unit: 'Comando Provincial de Huambo',
    serviceStatus: 'Fora de Serviço',
    activeMission: null,
    authorizedZone: 'Huambo - Central',
    biometrics: {
      fingerprintRegistered: true,
      facialRegistered: false,
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    }
  },
  {
    id: 'ag-05',
    nationalId: 'AO-MININT-33012-S',
    name: 'Sub-Inspector Maria Mutola',
    rank: 'Sub-Inspector',
    unit: 'Polícia de Intervenção Rápida (PIR) Luanda',
    serviceStatus: 'Retido',
    activeMission: null,
    authorizedZone: 'PIR Base Luanda',
    biometrics: {
      fingerprintRegistered: true,
      facialRegistered: true,
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop'
    }
  }
];

export const INITIAL_WEAPONS: Weapon[] = [
  {
    id: 'wp-01',
    serialNumber: 'SIRA-AK103-9938A',
    model: 'Kalashnikov AK-103 7.62mm',
    type: 'Fuzil de Assalto',
    status: 'Em Operação',
    currentHandlerId: 'ag-01',
    operationalCondition: 'Excelente',
    custodyHistory: [
      { timestamp: '2026-06-24 06:00', agentName: 'Mateus Silva', action: 'Levantamento no Arsenal', location: 'Arsenal Central Luanda' }
    ]
  },
  {
    id: 'wp-02',
    serialNumber: 'SIRA-MAK9-8832B',
    model: 'Pistola Makarov 9mm',
    type: 'Pistola',
    status: 'Em Operação',
    currentHandlerId: 'ag-02',
    operationalCondition: 'Excelente',
    custodyHistory: [
      { timestamp: '2026-06-24 07:15', agentName: 'Laurinda Neto', action: 'Troca de Turno (Receção)', location: 'Comando Provincial Benguela' }
    ]
  },
  {
    id: 'wp-03',
    serialNumber: 'SIRA-GAL556-1049C',
    model: 'IWI Galil 5.56mm',
    type: 'Fuzil de Assalto',
    status: 'Arsenal',
    currentHandlerId: null,
    operationalCondition: 'Excelente',
    custodyHistory: [
      { timestamp: '2026-06-23 18:00', agentName: 'Sargento Cruz', action: 'Devolução ao Arsenal', location: 'Regimento Cabinda' }
    ]
  },
  {
    id: 'wp-04',
    serialNumber: 'SIRA-MP5-2281D',
    model: 'HK MP5 9mm',
    type: 'Submetralhadora',
    status: 'Em Manutenção',
    currentHandlerId: null,
    operationalCondition: 'Necessita Revisão',
    custodyHistory: [
      { timestamp: '2026-06-24 05:30', agentName: 'Técnico Lourenço', action: 'Envio para Manutenção', location: 'Oficinas Gerais de Armas' }
    ]
  },
  {
    id: 'wp-05',
    serialNumber: 'SIRA-G17-5561E',
    model: 'Glock 17 Gen 5 9mm',
    type: 'Pistola',
    status: 'Retida',
    currentHandlerId: null,
    operationalCondition: 'Inoperacional',
    custodyHistory: [
      { timestamp: '2026-06-22 14:20', agentName: 'Insp. Maria Mutola', action: 'Retenção para Perícia', location: 'Gabinete de Auditoria SIRA' }
    ]
  },
  {
    id: 'wp-06',
    serialNumber: 'SIRA-AK103-1248X',
    model: 'Kalashnikov AK-103 7.62mm',
    type: 'Fuzil de Assalto',
    status: 'Extraviada',
    currentHandlerId: null,
    operationalCondition: 'Excelente',
    custodyHistory: [
      { timestamp: '2026-06-21 02:00', agentName: 'Desconhecido', action: 'Desvio de Custódia Registado', location: 'Sector de Fronteira Norte' }
    ]
  }
];

export const INITIAL_ALERTS: OperationalAlert[] = [
  {
    id: 'alt-01',
    timestamp: '06:42:15',
    type: 'Crítico',
    message: 'Arma SIRA-AK103-1248X detetada fora da zona operacional autorizada',
    location: 'Cabinda Norte - Estrada Nacional 100',
    resolved: false
  },
  {
    id: 'alt-02',
    timestamp: '06:15:00',
    type: 'Aviso',
    message: 'Agente Daniel Kassoma com tentativa de validação biométrica com credencial expirada',
    location: 'Huambo - Posto Central 2',
    resolved: false
  },
  {
    id: 'alt-03',
    timestamp: '05:45:10',
    type: 'Informativo',
    message: 'Entrega de armamento em lote validada no Arsenal de Benguela',
    location: 'Comando Provincial Benguela',
    resolved: true
  }
];

export const PROVINCE_CODES: Record<string, string> = {
  "Cabinda": "CAB",
  "Zaire": "ZAI",
  "Uíge": "UIG",
  "Bengo": "BGO",
  "Icolo e Bengo": "ICB",
  "Luanda": "LUA",
  "Cuanza-Norte": "CNO",
  "Cuanza-Sul": "CSU",
  "Malanje": "MAL",
  "Lunda-Norte": "LNO",
  "Lunda-Sul": "LSU",
  "Benguela": "BGU",
  "Huambo": "HUA",
  "Bié": "BIE",
  "Moxico": "MOX",
  "Moxico Leste": "MXL",
  "Huíla": "HUI",
  "Namibe": "NAM",
  "Cunene": "CNN",
  "Cubango": "CCU",
  "Cuando": "CND"
};

export const ANGOLAN_PROVINCES = Object.keys(PROVINCE_CODES);

