import './ProjectArt.css'

/*
  Drawn covers for projects without public screenshots. Each one shows the
  mechanism of the project (what it does), not a fake screen. They share one
  line weight and the site palette; Oasis uses the client's own palette.
*/

const LABELS = {
  es: { pothole: 'hueco', crack: 'grieta' },
  en: { pothole: 'pothole', crack: 'crack' },
}

function Oasis() {
  const products = [
    { x: 196, y: 92, body: '#eca7b7', cap: '#4a1a2c' },
    { x: 258, y: 92, body: '#e48fa3', cap: '#d6247a' },
    { x: 196, y: 172, body: '#f6dce3', cap: '#4a1a2c' },
    { x: 258, y: 172, body: '#eca7b7', cap: '#1f1418' },
  ]
  return (
    <>
      <rect width="480" height="300" fill="#fbeff2" />
      <circle cx="420" cy="40" r="90" fill="#f6dce3" />
      <circle cx="60" cy="280" r="70" fill="#f4e7ea" />
      {/* Phone */}
      <rect x="178" y="30" width="148" height="300" rx="22" fill="#fff" stroke="#eed3da" strokeWidth="2" />
      <rect x="236" y="40" width="32" height="6" rx="3" fill="#eed3da" />
      <rect x="192" y="58" width="44" height="8" rx="4" fill="#4a1a2c" />
      <circle cx="306" cy="62" r="6" fill="none" stroke="#6b4f57" strokeWidth="2" />
      {products.map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <rect x={p.x} y={p.y} width="54" height="62" rx="8" fill="#fbeff2" />
          <rect x={p.x + 19} y={p.y + 18} width="16" height="34" rx="5" fill={p.body} />
          <rect x={p.x + 22} y={p.y + 11} width="10" height="8" rx="2" fill={p.cap} />
          <rect x={p.x} y={p.y + 68} width="40" height="5" rx="2.5" fill="#eed3da" />
        </g>
      ))}
      {/* WhatsApp button */}
      <rect x="192" y="262" width="120" height="30" rx="15" fill="#1daa61" />
      <path d="M212 284l2-6a9 9 0 1 1 4 4z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <rect x="230" y="274" width="66" height="6" rx="3" fill="#edf8f1" />
      {/* Payment and inventory chips */}
      <g fontFamily="inherit" fontSize="13" fontWeight="700">
        <rect x="346" y="96" width="76" height="30" rx="15" fill="#fff" stroke="#eed3da" />
        <text x="384" y="116" textAnchor="middle" fill="#4a1a2c">PSE</text>
        <rect x="358" y="138" width="88" height="30" rx="15" fill="#fff" stroke="#eed3da" />
        <text x="402" y="158" textAnchor="middle" fill="#4a1a2c">Nequi</text>
        <rect x="64" y="120" width="94" height="30" rx="15" fill="#4a1a2c" />
        <path d="M80 135a7 7 0 0 1 12-5m2 5a7 7 0 0 1-12 5" fill="none" stroke="#f6dce3" strokeWidth="2" strokeLinecap="round" />
        <text x="126" y="140" textAnchor="middle" fill="#fbeff2">Siigo</text>
      </g>
      <rect x="346" y="184" width="70" height="48" rx="8" fill="#fff" stroke="#eed3da" />
      <rect x="356" y="196" width="26" height="16" rx="3" fill="#eca7b7" />
      <rect x="356" y="218" width="44" height="5" rx="2.5" fill="#eed3da" />
    </>
  )
}

function Skillion() {
  const nodes = [
    { x: 240, y: 236, state: 'on' },
    { x: 170, y: 176, state: 'on' },
    { x: 310, y: 176, state: 'on' },
    { x: 120, y: 112, state: 'on' },
    { x: 220, y: 112, state: 'current' },
    { x: 310, y: 112, state: 'off' },
    { x: 380, y: 112, state: 'off' },
    { x: 170, y: 56, state: 'off' },
    { x: 270, y: 56, state: 'off' },
  ]
  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [4, 7], [4, 8],
  ]
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <g className="art-dots">
        {Array.from({ length: 12 }, (_, col) =>
          Array.from({ length: 8 }, (_, row) => <rect key={`${col}-${row}`} x={20 + col * 40} y={18 + row * 38} width="2" height="2" />),
        )}
      </g>
      {edges.map(([a, b]) => (
        <path
          key={`${a}-${b}`}
          d={`M${nodes[a].x} ${nodes[a].y}V${(nodes[a].y + nodes[b].y) / 2}H${nodes[b].x}V${nodes[b].y}`}
          className={nodes[b].state === 'off' ? 'art-line art-line--faint' : 'art-line art-line--accent'}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={index} transform={`translate(${node.x - 17} ${node.y - 17})`}>
          <rect width="34" height="34" rx="4" className={`art-node art-node--${node.state}`} />
          {node.state !== 'off' && <rect x="12" y="12" width="10" height="10" className="art-node__core" />}
        </g>
      ))}
      <g transform="translate(28 266)">
        <text className="art-label" x="0" y="12">Lv. 7</text>
        <rect x="46" y="2" width="96" height="12" rx="2" className="art-bar" />
        <rect x="48" y="4" width="58" height="8" rx="1" className="art-bar__fill" />
      </g>
    </>
  )
}

function Road({ lang }) {
  const labels = LABELS[lang] ?? LABELS.es
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <path d="M0 96H480" className="art-line art-line--faint" />
      <path d="M210 96L30 300H450L270 96Z" className="art-road" />
      <path d="M240 104V128M240 150V184M240 210V256M240 280V300" className="art-dash" />
      <ellipse cx="178" cy="236" rx="34" ry="12" className="art-hole" />
      <path d="M300 168l10 6-6 8 12 5-4 9 10 4" className="art-crack" />
      <g>
        <rect x="134" y="210" width="88" height="50" className="art-box" />
        <rect x="134" y="192" width="88" height="18" className="art-box__tag" />
        <text x="140" y="205" className="art-box__text">{labels.pothole} 0.91</text>
      </g>
      <g>
        <rect x="288" y="158" width="44" height="48" className="art-box art-box--warm" />
        <rect x="288" y="140" width="76" height="18" className="art-box__tag art-box__tag--warm" />
        <text x="294" y="153" className="art-box__text art-box__text--dark">{labels.crack} 0.84</text>
      </g>
      <g transform="translate(392 24)">
        <rect width="64" height="56" rx="8" className="art-card" />
        <path d="M32 16a10 10 0 0 1 10 10c0 8-10 18-10 18S22 34 22 26a10 10 0 0 1 10-10z" className="art-pin" />
        <circle cx="32" cy="26" r="3.5" className="art-ground" />
      </g>
    </>
  )
}

function Iidta() {
  const columns = [
    { x: 76, glyphs: ['b', 'd', 'p'] },
    { x: 198, glyphs: ['3', '+', '7'] },
    { x: 320, glyphs: ['target', 'target', 'target'] },
  ]
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      {columns.map((column, ci) => (
        <g key={column.x}>
          {column.glyphs.map((glyph, gi) => {
            const y = 40 + gi * 80
            const active = (ci + gi) % 3 === 1
            return (
              <g key={gi} transform={`translate(${column.x} ${y})`}>
                <rect width="84" height="64" rx="12" className={active ? 'art-tile art-tile--active' : 'art-tile'} />
                {glyph === 'target' ? (
                  <g transform="translate(42 32)">
                    <circle r="18" className="art-line" fill="none" />
                    <circle r="10" className="art-line" fill="none" />
                    <circle r="3" className="art-pin" />
                  </g>
                ) : (
                  <text x="42" y="44" textAnchor="middle" className="art-glyph">
                    {glyph}
                  </text>
                )}
              </g>
            )
          })}
        </g>
      ))}
      <path d="M176 72h14M298 152h14M176 232h14" className="art-line art-line--faint" />
    </>
  )
}

function Sigma() {
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <g className="art-contours">
        <path d="M-10 70C80 40 140 110 240 80S400 30 490 70" />
        <path d="M-10 130C70 100 160 170 250 140S410 90 490 130" />
        <path d="M-10 190C90 160 150 230 260 200S400 150 490 190" />
        <path d="M-10 250C80 220 170 290 270 260S410 210 490 250" />
      </g>
      <path d="M44 236L104 196L150 214L206 150L252 168L300 104" className="art-route" />
      <circle cx="44" cy="236" r="5" className="art-pin" />
      <g transform="translate(300 104)">
        <circle r="16" className="art-pulse" />
        <circle r="7" className="art-pin" />
      </g>
      <g transform="translate(332 168)">
        <rect width="124" height="104" rx="10" className="art-card" />
        <rect x="16" y="16" width="56" height="6" rx="3" className="art-muted" />
        {[34, 52, 24, 46].map((h, i) => (
          <rect key={i} x={18 + i * 24} y={86 - h} width="14" height={h} rx="2" className={i === 1 ? 'art-bar__fill' : 'art-bar__soft'} />
        ))}
      </g>
    </>
  )
}

function Residence() {
  const windows = []
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      windows.push({ x: 88 + col * 40, y: 72 + row * 40, lit: (row * 3 + col) % 4 === 1 })
    }
  }
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <path d="M40 252H440" className="art-line art-line--faint" />
      <rect x="70" y="50" width="136" height="202" rx="6" className="art-card" />
      {windows.map((w) => (
        <rect key={`${w.x}-${w.y}`} x={w.x} y={w.y} width="20" height="22" rx="2" className={w.lit ? 'art-window art-window--lit' : 'art-window'} />
      ))}
      <rect x="124" y="222" width="28" height="30" rx="2" className="art-muted" />
      <g transform="translate(250 56)">
        <rect width="170" height="182" rx="14" className="art-card" />
        <rect x="18" y="18" width="70" height="8" rx="4" className="art-muted" />
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => {
            const picked = row === 2 && col === 3
            return (
              <rect
                key={`${row}-${col}`}
                x={18 + col * 28}
                y={44 + row * 28}
                width="20"
                height="20"
                rx="4"
                className={picked ? 'art-bar__fill' : 'art-cell'}
              />
            )
          }),
        )}
        <rect x="18" y="160" width="134" height="6" rx="3" className="art-muted" />
      </g>
      <g transform="translate(408 52)">
        <circle r="18" className="art-badge" />
        <path d="M-7 0l5 5 9-10" className="art-check" />
      </g>
    </>
  )
}

function Cacao() {
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <path d="M48 40V244H440" className="art-line art-line--faint" />
      {[84, 128, 172, 216].map((y) => (
        <path key={y} d={`M48 ${y}H440`} className="art-grid" />
      ))}
      <path d="M48 200C80 196 100 170 132 176S180 140 212 150 252 118 276 124" className="art-series" />
      <path d="M276 124C310 112 340 76 380 86S420 60 440 64L440 132C412 136 392 152 370 148S310 160 276 124Z" className="art-band" />
      <path d="M276 124C306 118 340 98 378 106S418 92 440 96" className="art-forecast" />
      <circle cx="276" cy="124" r="5" className="art-pin" />
      <g transform="translate(96 54) rotate(-18)">
        <ellipse rx="22" ry="38" className="art-pod" />
        <path d="M0 -36V36M-12 -30C-16 -10 -16 10 -12 30M12 -30C16 -10 16 10 12 30" className="art-pod__ridge" />
      </g>
      <g className="art-axis">
        <text x="48" y="266">2025</text>
        <text x="236" y="266">2026</text>
        <text x="408" y="266">2027</text>
      </g>
    </>
  )
}

function FitNow() {
  return (
    <>
      <rect width="480" height="300" className="art-ground" />
      <g transform="translate(84 44)">
        <rect width="200" height="212" rx="14" className="art-card" />
        <rect x="20" y="20" width="92" height="9" rx="4.5" className="art-muted" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(20 ${52 + i * 30})`}>
            <rect width="16" height="16" rx="4" className={i < 3 ? 'art-bar__fill' : 'art-cell'} />
            {i < 3 && <path d="M4 8l3 3 5-6" className="art-check art-check--dark" />}
            <rect x="28" y="5" width={i % 2 ? 92 : 124} height="6" rx="3" className="art-muted" />
          </g>
        ))}
      </g>
      <g transform="translate(318 104) rotate(-20)">
        <rect x="-62" y="-6" width="124" height="12" rx="6" className="art-metal" />
        <rect x="-54" y="-26" width="18" height="52" rx="5" className="art-plate" />
        <rect x="36" y="-26" width="18" height="52" rx="5" className="art-plate" />
        <rect x="-70" y="-16" width="12" height="32" rx="4" className="art-plate" />
        <rect x="58" y="-16" width="12" height="32" rx="4" className="art-plate" />
      </g>
      <path d="M392 196l6 16 16 6-16 6-6 16-6-16-16-6 16-6z" className="art-spark" />
      <path d="M346 222l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" className="art-spark art-spark--soft" />
    </>
  )
}

const ART = {
  oasis: Oasis,
  skillion: Skillion,
  road: Road,
  iidta: Iidta,
  sigma: Sigma,
  residence: Residence,
  cacao: Cacao,
  fitnow: FitNow,
}

export function ProjectArt({ art, lang, label, className = '' }) {
  const Art = ART[art]
  if (!Art) return null
  return (
    <svg
      className={`project-art project-art--${art} ${className}`}
      viewBox="0 0 480 300"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      <Art lang={lang} />
    </svg>
  )
}
