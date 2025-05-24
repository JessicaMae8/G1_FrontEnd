'use client';

import { useState } from 'react';

const sampleData = [
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 55 },
  { label: 'Mar', value: 75 },
  { label: 'Apr', value: 60 },
  { label: 'May', value: 80 },
  { label: 'Jun', value: 70 },
];

export default function Page() {
  const [data, setData] = useState(sampleData);

  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 200;

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Chart</h1>
      <svg
        width="100%"
        height={chartHeight + 40}
        viewBox={`0 0 ${data.length * 60} ${chartHeight + 40}`}
        className="overflow-visible"
      >
        {/* Y axis lines and labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = chartHeight - t * chartHeight;
          const value = Math.round(t * maxValue);
          return (
            <g key={t}>
              <line x1="0" y1={y} x2={data.length * 60} y2={y} stroke="#444" strokeDasharray="4 2" />
              <text x="-10" y={y + 5} fill="#888" fontSize="12" textAnchor="end">{value}</text>
            </g>
          );
        })}
        {/* Bars */}
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * chartHeight;
          return (
            <g key={d.label} transform={`translate(${i * 60 + 30}, ${chartHeight - barHeight})`}>
              <rect width="40" height={barHeight} fill="#ef4444" rx="4" />
              <text y={barHeight + 15} fill="#ccc" fontSize="14" textAnchor="middle">{d.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
