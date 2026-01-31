import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Card {
  id: number;
  label: string;
  image?: string;
  aspectRatio: "square" | "landscape" | "portrait" | "wide";
  rotation: number;
}

const cards: Card[] = [
  { id: 1, label: "henesys", aspectRatio: "landscape", rotation: -3 },
  { id: 2, label: "#isc.", aspectRatio: "square", rotation: 5 },
  { id: 3, label: "arith.js", aspectRatio: "portrait", rotation: -8 },
  { id: 4, label: "gtar", aspectRatio: "square", rotation: 12 },
  { id: 5, label: "pidgin", aspectRatio: "wide", rotation: -5 },
  { id: 6, label: "comp. design", aspectRatio: "landscape", rotation: 7 },
  { id: 7, label: "pokeSearch", aspectRatio: "portrait", rotation: -10 },
  { id: 8, label: "dzе:na", aspectRatio: "square", rotation: 4 },
  { id: 9, label: "ZINEDEF", aspectRatio: "landscape", rotation: -6 },
];

const aspectRatioClasses = {
  square: "w-48 h-48",
  landscape: "w-64 h-48",
  portrait: "w-48 h-64",
  wide: "w-80 h-52",
};

export default function ScatteredCards() {
  const [topZIndex, setTopZIndex] = useState(cards.length);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getRandomPosition = () => ({
    x: Math.random() * 120 - 60, // -60% to 60% for wider spread
    y: Math.random() * 60 - 30,
  });

  const handleDragStart = (cardId: number) => {
    setTopZIndex((prev) => prev + 1);
  };

  return (
    <div className="relative flex h-full min-h-[400px] w-full items-center justify-center overflow-hidden">
      {cards.map((card, index) => {
        const position = getRandomPosition();
        return (
          <motion.div
            key={card.id}
            drag
            dragElastic={0.05}
            dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
            dragTransition={{
              bounceStiffness: 300,
              bounceDamping: 20,
              power: 0.2,
            }}
            initial={{
              opacity: 0,
              scale: 1.8,
              x: `${position.x}%`,
              y: `${position.y}%`,
              z: 200,
              rotate: card.rotation,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              z: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1 }}
            onDragStart={() => handleDragStart(card.id)}
            className={cn(
              "absolute",
              activeCard === card.id ? "cursor-grabbing" : "cursor-grab",
              aspectRatioClasses[card.aspectRatio],
            )}
            style={{
              zIndex: index,
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.zIndex = String(topZIndex);
              setActiveCard(card.id);
            }}
            onMouseUp={() => setActiveCard(null)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className={cn(
                "relative h-full w-full overflow-hidden rounded-2xl border-4 border-black/10 bg-white transition-shadow duration-200",
                activeCard === card.id
                  ? "shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                  : "shadow-2xl",
              )}
            >
              {/* Label */}
              <div className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm">
                {card.label}
              </div>

              {/* Placeholder Image */}
              <div className="from-secondary via-secondary/80 to-secondary/60 flex h-full w-full items-center justify-center bg-gradient-to-br">
                <div className="text-muted-foreground/50 text-4xl font-light opacity-50">
                  {card.label}
                </div>
              </div>

              {/* Subtle year badge (optional detail) */}
              <div className="text-muted-foreground/60 absolute right-3 bottom-3 font-mono text-xs">
                202{Math.floor(Math.random() * 5)}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
