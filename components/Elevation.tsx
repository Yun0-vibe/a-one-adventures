export default function Elevation({ data }: { data: { p: string; m: number }[] }) {
  const W = 640;
  const H = 210;
  const PAD = 34;
  const ms = data.map((d) => d.m);
  const min = Math.min(...ms);
  const max = Math.max(...ms);
  const span = Math.max(max - min, 100);
  const x = (i: number) => PAD + (i * (W - PAD * 2)) / Math.max(data.length - 1, 1);
  const y = (m: number) => H - PAD - ((m - min) / span) * (H - PAD * 2 - 20);
  const line = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(d.m).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1).toFixed(1)},${(H - PAD).toFixed(1)} L${x(0).toFixed(1)},${(H - PAD).toFixed(1)} Z`;
  const peak = data.reduce((a, b) => (b.m > a.m ? b : a));

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-[22px]">Altitude profile</h3>
        <span className="text-sm font-bold text-brand2">
          Highest point: {peak.p} ({peak.m.toLocaleString()}m)
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-label={`Altitude profile peaking at ${peak.p}`}>
        <path d={area} fill="rgba(20,83,45,0.10)" />
        <path d={line} fill="none" stroke="#14532D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => (
          <g key={d.p}>
            <circle cx={x(i)} cy={y(d.m)} r={d.p === peak.p ? 6 : 3.5} fill={d.p === peak.p ? '#D97706' : '#14532D'} />
            {(i === 0 || i === data.length - 1 || d.p === peak.p) && (
              <text x={x(i)} y={H - 10} textAnchor="middle" fontSize="12" fontWeight="700" fill="#5C6B62">
                {d.p}
              </text>
            )}
            {d.p === peak.p && (
              <text x={x(i)} y={y(d.m) - 12} textAnchor="middle" fontSize="12" fontWeight="800" fill="#D97706">
                {d.m.toLocaleString()}m
              </text>
            )}
          </g>
        ))}
      </svg>
      <p className="m-0 mt-2 text-[13px] text-moss">
        Heights help you plan warm layers and pacing. Mustang climbs over 2,800m from Pokhara.
      </p>
    </div>
  );
}
