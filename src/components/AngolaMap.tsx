import React from 'react';
import { PROVINCE_CODES } from '../data';
import { motion } from 'motion/react';

interface ProvinceData {
  name: string;
  status: string;
  activeWeapons: number;
  activeAgents: number;
}

interface AngolaMapProps {
  provinces: ProvinceData[];
  selectedProvince: string;
  onSelectProvince: (name: string) => void;
}

// Highly stylized geometric map layout for Angola's 21 provinces
// Designed to look like a high-tech tactical low-poly vector control system
const MAP_POLYGONS: Record<string, { points: string; textX: number; textY: number }> = {
  "Cabinda": {
    points: "80,20 130,20 130,60 80,60",
    textX: 105,
    textY: 45
  },
  "Zaire": {
    points: "130,100 190,100 190,150 130,150",
    textX: 160,
    textY: 130
  },
  "Uíge": {
    points: "190,100 290,100 290,160 190,160",
    textX: 240,
    textY: 135
  },
  "Bengo": {
    points: "130,150 190,150 190,210 165,210 165,180 130,180",
    textX: 178,
    textY: 195
  },
  "Luanda": {
    points: "115,180 145,180 145,200 115,200",
    textX: 130,
    textY: 193
  },
  "Icolo e Bengo": {
    points: "145,180 165,180 165,210 145,210",
    textX: 155,
    textY: 198
  },
  "Cuanza-Norte": {
    points: "190,160 240,160 240,210 190,210",
    textX: 215,
    textY: 190
  },
  "Malanje": {
    points: "240,160 340,160 340,240 240,240",
    textX: 290,
    textY: 205
  },
  "Lunda-Norte": {
    points: "340,120 460,120 460,200 340,200",
    textX: 400,
    textY: 165
  },
  "Lunda-Sul": {
    points: "340,200 460,200 460,270 340,270",
    textX: 400,
    textY: 240
  },
  "Cuanza-Sul": {
    points: "160,210 240,210 240,290 160,290",
    textX: 200,
    textY: 255
  },
  "Benguela": {
    points: "140,290 210,290 210,360 140,360",
    textX: 175,
    textY: 330
  },
  "Huambo": {
    points: "210,290 280,290 280,360 210,360",
    textX: 245,
    textY: 330
  },
  "Bié": {
    points: "280,240 360,240 360,360 280,360",
    textX: 320,
    textY: 305
  },
  "Moxico": {
    points: "360,270 450,270 450,380 360,380",
    textX: 405,
    textY: 330
  },
  "Moxico Leste": {
    points: "450,270 520,270 520,380 450,380",
    textX: 485,
    textY: 330
  },
  "Namibe": {
    points: "110,360 180,360 180,460 110,460",
    textX: 145,
    textY: 415
  },
  "Huíla": {
    points: "180,360 270,360 270,450 180,450",
    textX: 225,
    textY: 410
  },
  "Cunene": {
    points: "180,450 270,450 270,510 180,510",
    textX: 225,
    textY: 485
  },
  "Cubango": {
    points: "270,360 380,360 380,510 270,510",
    textX: 325,
    textY: 440
  },
  "Cuando": {
    points: "380,380 500,380 500,510 380,510",
    textX: 440,
    textY: 450
  }
};

export default function AngolaMap({ provinces, selectedProvince, onSelectProvince }: AngolaMapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [hoveredProvince, setHoveredProvince] = React.useState<ProvinceData | null>(null);
  const [mousePosition, setMousePosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-square bg-neutral-950 rounded-xl border border-neutral-800/80 p-4 overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic scanline backdrop effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Compass / Tactical orientation indicator */}
      <div className="absolute top-4 right-4 flex flex-col items-center pointer-events-none opacity-40 font-mono text-[9px] text-neutral-500">
        <span className="text-amber-500 font-bold">N ▴</span>
        <span>SIRA MAP v2.4</span>
      </div>

      {/* Main Interactive SVG */}
      <svg 
        viewBox="50 0 500 530" 
        className="w-full h-full select-none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cabinda Exclave connection line */}
        <line 
          x1="105" y1="60" 
          x2="160" y2="100" 
          stroke="#737373" 
          strokeWidth="1" 
          strokeDasharray="3,3" 
          className="opacity-40"
        />

        {/* Map Elements Group */}
        <g>
          {provinces.map((prov) => {
            const isSelected = selectedProvince === prov.name;
            const config = MAP_POLYGONS[prov.name];
            const code = PROVINCE_CODES[prov.name] || '???';
            
            if (!config) return null;

            // Status color matching
            let statusColor = "stroke-emerald-500/30 fill-emerald-500/5 hover:fill-emerald-500/15";
            let activeColor = "stroke-amber-500 fill-amber-500/10";

            if (prov.status === 'Alerta') {
              statusColor = "stroke-red-500/30 fill-red-500/5 hover:fill-red-500/15";
              activeColor = "stroke-red-500 fill-red-500/10";
            } else if (prov.status === 'Aviso') {
              statusColor = "stroke-amber-500/30 fill-amber-500/5 hover:fill-amber-500/15";
              activeColor = "stroke-amber-400 fill-amber-400/10";
            }

            return (
              <g 
                key={prov.name} 
                className="cursor-pointer group"
                onClick={() => onSelectProvince(prov.name)}
                onMouseEnter={() => setHoveredProvince(prov)}
                onMouseLeave={() => setHoveredProvince(null)}
              >
                {/* SVG Polygon representing the province shape */}
                <polygon
                  points={config.points}
                  className={`transition-all duration-300 stroke-[1.5] ${
                    isSelected ? activeColor : statusColor
                  }`}
                />

                {/* Glow/Pulse effect overlay for alerts or selection */}
                {isSelected && (
                  <polygon
                    points={config.points}
                    className="animate-pulse stroke-amber-500/40 fill-none stroke-[2.5]"
                  />
                )}

                {/* Small indicator dot inside the polygon */}
                <circle 
                  cx={config.textX} 
                  cy={config.textY - 8} 
                  r="2.5" 
                  className={`${isSelected ? 'fill-amber-400' : 'fill-neutral-600 group-hover:fill-neutral-400'} transition-colors`}
                />

                {/* Code text */}
                <text
                  x={config.textX}
                  y={config.textY + 6}
                  textAnchor="middle"
                  className={`font-mono text-[9px] font-bold pointer-events-none select-none transition-colors duration-200 ${
                    isSelected 
                      ? 'fill-amber-400' 
                      : 'fill-neutral-400 group-hover:fill-neutral-200'
                  }`}
                >
                  {code}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Floating Tactical Hover Tooltip */}
      {hoveredProvince && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: mousePosition.x + 16,
            top: mousePosition.y + 16,
            transform: "translate3d(0, 0, 0)",
            pointerEvents: "none",
            zIndex: 100,
          }}
          className="bg-neutral-950/95 border border-neutral-800 p-3 rounded-lg shadow-xl backdrop-blur-md min-w-[160px] text-left pointer-events-none"
        >
          <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5 mb-1.5">
            <span className="font-bold font-sans text-xs text-white">
              {hoveredProvince.name}
            </span>
            <span className="font-mono text-[10px] text-amber-500 bg-amber-500/10 px-1 py-0.2 rounded font-semibold">
              {PROVINCE_CODES[hoveredProvince.name] || '???'}
            </span>
          </div>

          <div className="space-y-1 text-[10px] font-mono">
            <div className="flex justify-between gap-4">
              <span className="text-neutral-500">SIRA Status:</span>
              <span className={`font-semibold ${
                hoveredProvince.status === 'Alerta' 
                  ? 'text-red-400' 
                  : hoveredProvince.status === 'Aviso' 
                  ? 'text-amber-400' 
                  : 'text-emerald-400'
              }`}>
                ● {hoveredProvince.status}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-neutral-500">Agentes:</span>
              <span className="text-neutral-200 font-semibold">
                {hoveredProvince.activeAgents.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-neutral-500">Armas:</span>
              <span className="text-neutral-200 font-semibold">
                {hoveredProvince.activeWeapons.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Inline Legend for map interpretation */}
      <div className="flex justify-between items-center border-t border-neutral-900 pt-3 mt-2 font-mono text-[9px] text-neutral-500">
        <div className="flex gap-3">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Regular
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Aviso
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Alerta
          </span>
        </div>
        <span className="text-right text-neutral-600">Angola Geo v2024</span>
      </div>
    </div>
  );
}
