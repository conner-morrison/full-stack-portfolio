"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "a", cx: 14, cy: 22, r: 1.1, dx: 1.2, dy: -0.8, duration: 8.5, delay: 0 },
  { id: "b", cx: 28, cy: 36, r: 1.3, dx: -1, dy: 1.1, duration: 10, delay: 0.6 },
  { id: "c", cx: 42, cy: 20, r: 1, dx: 1.4, dy: 0.8, duration: 9.2, delay: 1.1 },
  { id: "d", cx: 58, cy: 34, r: 1.2, dx: -1.3, dy: -1, duration: 10.8, delay: 0.4 },
  { id: "e", cx: 72, cy: 24, r: 1.05, dx: 1.1, dy: 1, duration: 9.8, delay: 1.4 },
  { id: "f", cx: 84, cy: 40, r: 1.25, dx: -0.9, dy: -1.2, duration: 8.8, delay: 0.8 },
  { id: "g", cx: 24, cy: 68, r: 1.15, dx: 1.3, dy: -0.7, duration: 11.2, delay: 0.2 },
  { id: "h", cx: 46, cy: 62, r: 1.35, dx: -1.1, dy: 1, duration: 9.5, delay: 1.2 },
  { id: "i", cx: 66, cy: 76, r: 1.05, dx: 0.9, dy: -1.1, duration: 10.3, delay: 0.5 },
];

const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
  ["b", "g"],
  ["c", "h"],
  ["d", "h"],
  ["h", "i"],
  ["g", "h"],
];

const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

const clusters = [
  {
    id: "primary",
    className:
      "absolute right-[4%] top-[14%] h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem]",
    svgOpacity: [0.6, 0.72, 0.6],
    lineOpacity: [0.18, 0.24, 0.18],
    lineColor: "text-slate-700/38 dark:text-slate-100/40",
    nodeColor: "fill-slate-700/55 dark:fill-slate-50/52",
    haloColor: "fill-sky-500/8 dark:fill-sky-300/9",
    duration: 18,
    lineDuration: 16,
    floatX: [0, -14, 0, 10, 0],
    floatY: [0, 10, 18, 8, 0],
    floatScale: [1, 1.02, 1, 0.99, 1],
  },
  {
    id: "secondary",
    className:
      "absolute left-[6%] top-[30%] h-[12rem] w-[12rem] sm:h-[14rem] sm:w-[14rem] md:h-[15rem] md:w-[15rem]",
    svgOpacity: [0.52, 0.64, 0.52],
    lineOpacity: [0.14, 0.2, 0.14],
    lineColor: "text-slate-700/32 dark:text-slate-100/34",
    nodeColor: "fill-slate-700/48 dark:fill-slate-50/45",
    haloColor: "fill-cyan-500/6 dark:fill-cyan-300/7",
    duration: 20,
    lineDuration: 18,
    floatX: [0, 12, 0, -8, 0],
    floatY: [0, -8, -16, -6, 0],
    floatScale: [1, 0.99, 1.02, 1, 1],
  },
  {
    id: "tertiary",
    className:
      "absolute right-[18%] bottom-[8%] h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[13rem] md:w-[13rem]",
    svgOpacity: [0.5, 0.62, 0.5],
    lineOpacity: [0.12, 0.18, 0.12],
    lineColor: "text-slate-700/28 dark:text-slate-100/32",
    nodeColor: "fill-slate-700/42 dark:fill-slate-50/40",
    haloColor: "fill-indigo-500/5 dark:fill-indigo-300/6",
    duration: 22,
    lineDuration: 20,
    floatX: [0, -10, 0, 8, 0],
    floatY: [0, 8, 14, 5, 0],
    floatScale: [1, 1.01, 0.99, 1, 1],
  },
] as const;

type ClusterConfig = (typeof clusters)[number];

function NetworkCluster({
  id,
  className,
  svgOpacity,
  lineOpacity,
  lineColor,
  nodeColor,
  haloColor,
  duration,
  lineDuration,
  floatX,
  floatY,
  floatScale,
}: ClusterConfig) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      animate={{
        opacity: svgOpacity,
        x: floatX,
        y: floatY,
        scale: floatScale,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      }}
    >
      <defs>
        <filter id={`node-blur-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.g
        animate={{ opacity: lineOpacity }}
        transition={{
          duration: lineDuration,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        {edges.map(([from, to]) => {
          const start = nodeMap[from];
          const end = nodeMap[to];

          return (
            <line
              key={`${from}-${to}`}
              x1={start.cx}
              y1={start.cy}
              x2={end.cx}
              y2={end.cy}
              stroke="currentColor"
              strokeWidth="0.3"
              className={lineColor}
            />
          );
        })}
      </motion.g>

      <g filter={`url(#node-blur-${id})`}>
        {nodes.map((node) => (
        <g key={node.id}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 2}
            className={haloColor}
            animate={{
              cx: [node.cx, node.cx + node.dx, node.cx],
              cy: [node.cy, node.cy + node.dy, node.cy],
              opacity: [0.12, 0.28, 0.12],
              scale: [1, 1.14, 1],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            className={nodeColor}
            animate={{
              cx: [node.cx, node.cx + node.dx, node.cx],
              cy: [node.cy, node.cy + node.dy, node.cy],
              opacity: [0.48, 0.7, 0.48],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        </g>
      ))}
      </g>
    </motion.svg>
  );
}

export function ParticleNetwork() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      {clusters.map((cluster) => (
        <NetworkCluster key={cluster.id} {...cluster} />
      ))}
    </div>
  );
}
