import { useId } from 'react'
import './ProjectArt.css'

/*
  Covers for projects without public screenshots. They speak the language of
  the hero illustration: floating windows with traffic lights, cream cards,
  dark teal panels, solid colour and soft shadows. Each scene shows what the
  product does with its own objects, never a fake screenshot.
  Oasis keeps the client's own pink palette.
*/

const C = {
  ink: '#0b2327',
  ink2: '#12343a',
  ink3: '#1f4d53',
  edge: '#3a6e73',
  code: '#d5e4dc',
  paper: '#efe4da',
  paper2: '#dccfc3',
  mute: '#6d5f4d',
  sand: '#b9a27f',
  sage: '#a8ccb8',
  teal: '#2f9c86',
  tealDark: '#217565',
  orange: '#f4a63a',
  orangeDark: '#cf8422',
  blue: '#2f7df6',
  blueDark: '#1f5fc6',
  red: '#de4b43',
  redDark: '#b4352f',
  green: '#2fc657',
  yellow: '#f5b72e',
  sprout: '#8be3b0',
  maize: '#f2c45a',
}

const MONO = "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace"

const TEXT = {
  es: {
    pothole: 'hueco',
    crack: 'grieta',
    live: 'EN VIVO',
    prompt: '¿Cuál es la b?',
    level: 'Nivel 3',
    screening: 'Tamizaje',
    skills: ['Lectura', 'Cálculo', 'Atención'],
    inField: 'En campo',
    fuel: 'Combustible',
    hours: 'Horas',
    bookings: 'Reservas',
    month: 'Noviembre',
    hall: 'Salón social',
    slot: 'Sáb · 6:00 p. m.',
    book: 'Reservar',
    visitor: 'Visitante',
    unit: 'Torre B · 502',
    forecast: 'Pronóstico',
    day: 'Día 1 · Pierna',
    exercises: ['Sentadilla', 'Peso muerto', 'Zancadas', 'Prensa'],
    soldOut: 'Agotado',
    stock: 'Inventario',
  },
  en: {
    pothole: 'pothole',
    crack: 'crack',
    live: 'LIVE',
    prompt: 'Which one is b?',
    level: 'Level 3',
    screening: 'Screening',
    skills: ['Reading', 'Math', 'Attention'],
    inField: 'In the field',
    fuel: 'Fuel',
    hours: 'Hours',
    bookings: 'Bookings',
    month: 'November',
    hall: 'Social hall',
    slot: 'Sat · 6:00 PM',
    book: 'Book',
    visitor: 'Visitor',
    unit: 'Tower B · 502',
    forecast: 'Forecast',
    day: 'Day 1 · Legs',
    exercises: ['Squat', 'Deadlift', 'Lunges', 'Leg press'],
    soldOut: 'Sold out',
    stock: 'Inventory',
  },
}

/* Shared pieces */

function Defs({ id, shadow = '#00130f', strength = 1 }) {
  return (
    <defs>
      <radialGradient id={`${id}-glow`} cx="50%" cy="36%" r="72%">
        <stop offset="0" stopColor="#23766a" stopOpacity="0.55" />
        <stop offset="1" stopColor="#23766a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f7eee5" />
        <stop offset="1" stopColor="#e6d9cc" />
      </linearGradient>
      <linearGradient id={`${id}-ink`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#173c42" />
        <stop offset="1" stopColor="#0e2a2f" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor={shadow} floodOpacity={0.5 * strength} />
      </filter>
      <filter id={`${id}-shadow-sm`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor={shadow} floodOpacity={0.4 * strength} />
      </filter>
    </defs>
  )
}

function Backdrop({ id }) {
  return (
    <>
      <rect width="480" height="300" fill="#04352c" />
      <rect width="480" height="300" fill={`url(#${id}-glow)`} />
    </>
  )
}

/** A window with traffic lights, as in the hero art. Children use the window's own coordinates. */
function Win({ id, x, y, w, h, rotate = 0, tone = 'ink', children }) {
  const r = 9
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} ${w / 2} ${h / 2})`} filter={`url(#${id}-shadow)`}>
      <rect width={w} height={h} rx={r} fill={`url(#${id}-${tone})`} />
      <path d={`M0 ${r}a${r} ${r} 0 0 1 ${r}-${r}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v9h-${w}z`} fill={C.ink} />
      <circle cx="12" cy="9" r="3" fill={C.red} />
      <circle cx="22" cy="9" r="3" fill={C.yellow} />
      <circle cx="32" cy="9" r="3" fill={C.green} />
      {children}
    </g>
  )
}

/** A cream card. Children use the card's own coordinates. */
function Card({ id, x, y, w, h, rotate = 0, fill, small = false, children }) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate} ${w / 2} ${h / 2})`}
      filter={`url(#${id}-shadow${small ? '-sm' : ''})`}
    >
      <rect width={w} height={h} rx="11" fill={fill ?? `url(#${id}-paper)`} />
      {children}
    </g>
  )
}

/** A phone. Children are clipped to the screen and use the screen's coordinates. */
function Phone({ id, n = 1, x, y, w, h, rotate = 0, screen = '#f8f2ea', island = true, body = C.ink, edge = C.edge, children }) {
  const clip = `${id}-phone${n}`
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} ${w / 2} ${h / 2})`} filter={`url(#${id}-shadow)`}>
      <rect width={w} height={h} rx="20" fill={body} />
      <rect x="0.75" y="0.75" width={w - 1.5} height={h - 1.5} rx="19.25" fill="none" stroke={edge} strokeWidth="1.5" />
      <clipPath id={clip}>
        <rect x="6" y="6" width={w - 12} height={h - 12} rx="15" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect x="6" y="6" width={w - 12} height={h - 12} fill={screen} />
        <g transform="translate(6 6)">{children}</g>
      </g>
      {island && <rect x={w / 2 - 13} y="11" width="26" height="7" rx="3.5" fill={body} />}
    </g>
  )
}

function starPoints(outer, inner) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = (Math.PI / 5) * i - Math.PI / 2
    return `${(Math.cos(angle) * radius).toFixed(2)},${(Math.sin(angle) * radius).toFixed(2)}`
  }).join(' ')
}

function Pin({ x, y, fill }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0c-6-8-9.5-11.5-9.5-17a9.5 9.5 0 1 1 19 0c0 5.5-3.5 9-9.5 17z" fill={fill} />
      <circle cy="-17" r="3.4" fill="#fff" />
    </g>
  )
}

/* Scenes */

function Road({ id, t }) {
  const potholeTag = `${t.pothole} 0.91`
  const crackTag = `${t.crack} 0.84`
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f5269" />
          <stop offset="0.62" stopColor="#d98f62" />
          <stop offset="1" stopColor="#f6c178" />
        </linearGradient>
      </defs>
      <Backdrop id={id} />

      <Phone id={id} x={20} y={64} w={296} h={156} rotate={-4} island={false} screen="#2d5a46">
        <rect width="284" height="64" fill={`url(#${id}-sky)`} />
        <circle cx="208" cy="62" r="15" fill="#ffe3b3" />
        <path d="M0 64 36 47 80 60 130 41 178 58 228 45 284 58V72H0Z" fill="#17403f" />
        <rect y="64" width="284" height="80" fill="#2d5a46" />
        <path d="M0 96 60 64H0ZM284 100 222 64h62Z" fill="#264f3e" />
        {/* Road */}
        <path d="M122 64H162L276 144H8Z" fill="#363d43" />
        <path d="M125 64 22 144M159 64 262 144" fill="none" stroke="#ece6da" strokeWidth="2.2" />
        <path d="M142 67v4" stroke="#f5c84b" strokeWidth="1.5" />
        <path d="M142 78v7" stroke="#f5c84b" strokeWidth="2.2" />
        <path d="M142 94v12" stroke="#f5c84b" strokeWidth="3.2" />
        <path d="M142 118v20" stroke="#f5c84b" strokeWidth="4.4" />
        {/* Pothole and crack */}
        <ellipse cx="88" cy="120" rx="26" ry="10" fill="#4d565d" />
        <ellipse cx="88" cy="118.5" rx="23" ry="8" fill="#13171a" />
        <path d="M184 88 191 94 186 100 195 106 190 112 198 119" fill="none" stroke="#13171a" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
        {/* Detections */}
        <rect x="58" y="102" width="60" height="32" fill={C.sprout} fillOpacity="0.16" stroke={C.sprout} strokeWidth="2" />
        <rect x="57" y="88" width={potholeTag.length * 5.3 + 10} height="14" fill={C.sprout} />
        <text x="62" y="98.5" fontSize="9" fontWeight="800" fill={C.ink}>{potholeTag}</text>
        <rect x="177" y="82" width="28" height="43" fill={C.maize} fillOpacity="0.16" stroke={C.maize} strokeWidth="2" />
        <rect x="176" y="68" width={crackTag.length * 5.3 + 10} height="14" fill={C.maize} />
        <text x="181" y="78.5" fontSize="9" fontWeight="800" fill={C.ink}>{crackTag}</text>
        {/* Status */}
        <rect x="9" y="9" width={t.live.length * 5.4 + 22} height="16" rx="8" fill={C.ink} fillOpacity="0.78" />
        <circle cx="18.5" cy="17" r="3.2" fill={C.red} />
        <text x="26" y="20.2" fontSize="8" fontWeight="800" fill={C.paper} letterSpacing="0.3">{t.live}</text>
      </Phone>

      <Card id={id} x={304} y={90} w={152} h={158} rotate={7}>
        <clipPath id={`${id}-map`}>
          <rect x="9" y="9" width="134" height="98" rx="7" />
        </clipPath>
        <g clipPath={`url(#${id}-map)`}>
          <rect x="9" y="9" width="134" height="98" fill="#d3dfc4" />
          <path d="M9 84c30-10 50 16 86 4s40-12 48-6v25H9Z" fill="#9cc6dc" />
          <path d="M9 42H143M54 9V107M9 100 143 20" fill="none" stroke="#fbf6ee" strokeWidth="7" />
          <path d="M102 9V58H143" fill="none" stroke="#fbf6ee" strokeWidth="4" />
          <Pin x={54} y={44} fill={C.red} />
          <Pin x={98} y={66} fill={C.orange} />
          <Pin x={120} y={32} fill={C.red} />
        </g>
        <rect x="9" y="118" width="84" height="8" rx="4" fill={C.ink2} />
        <rect x="9" y="133" width="56" height="7" rx="3.5" fill={C.paper2} />
        <circle cx="128" cy="129" r="11" fill={C.red} />
        <text x="128" y="133" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">3</text>
      </Card>
    </>
  )
}

function Iidta({ id, t }) {
  const tiles = [
    { letter: 'd', top: C.blue, side: C.blueDark },
    { letter: 'b', top: C.orange, side: C.orangeDark },
    { letter: 'p', top: C.red, side: C.redDark },
    { letter: 'q', top: C.teal, side: C.tealDark },
  ]
  const fills = [
    { width: 92, color: C.blue },
    { width: 62, color: C.orange },
    { width: 78, color: C.teal },
  ]
  return (
    <>
      <Backdrop id={id} />

      <Win id={id} x={26} y={40} w={294} h={208}>
        <path d="M0 18H294V199a9 9 0 0 1-9 9H9a9 9 0 0 1-9-9Z" fill="#f6ecd9" />
        <text x="22" y="50" fontSize="15" fontWeight="800" fill={C.ink}>{t.prompt}</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <polygon key={i} transform={`translate(${212 + i * 15} 45)`} points={starPoints(6.5, 2.9)} fill={i < 3 ? C.orange : '#e3d5bb'} />
        ))}
        {tiles.map((tile, i) => {
          const x = 22 + i * 64
          return (
            <g key={tile.letter} transform={`translate(${x} 72)`}>
              <rect y="6" width="56" height="64" rx="12" fill={tile.side} />
              <rect width="56" height="64" rx="12" fill={tile.top} />
              <text x="28" y="45" textAnchor="middle" fontSize="38" fontWeight="800" fill="#fff">{tile.letter}</text>
            </g>
          )
        })}
        {/* The chosen tile */}
        <rect x="81" y="67" width="66" height="80" rx="16" fill="none" stroke={C.ink} strokeWidth="2.5" />
        <circle cx="145" cy="70" r="10.5" fill={C.green} stroke="#f6ecd9" strokeWidth="2.5" />
        <path d="M140 70.2l3.6 3.6 6.4-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="22" y="164" width="250" height="9" rx="4.5" fill="#e3d5bb" />
        <rect x="22" y="164" width="158" height="9" rx="4.5" fill={C.ink2} />
        <text x="22" y="191" fontSize="9.5" fontWeight="700" fill={C.mute}>{t.level}</text>
        <text x="272" y="191" textAnchor="end" fontSize="9.5" fontWeight="700" fill={C.mute}>8 / 10</text>
      </Win>

      <g transform="translate(352 78) rotate(14)" filter={`url(#${id}-shadow-sm)`}>
        <polygon points={starPoints(27, 12.5)} fill={C.orange} stroke={C.orange} strokeWidth="5" strokeLinejoin="round" />
        <path d="M-10 -4a12 12 0 0 1 8-9" fill="none" stroke="#ffd591" strokeWidth="3" strokeLinecap="round" />
      </g>

      <Card id={id} x={318} y={132} w={140} h={124} rotate={5}>
        <text x="13" y="24" fontSize="11" fontWeight="800" fill={C.ink}>{t.screening}</text>
        {fills.map((row, i) => (
          <g key={row.color} transform={`translate(13 ${42 + i * 27})`}>
            <text fontSize="8.5" fontWeight="600" fill={C.mute}>{t.skills[i]}</text>
            <rect y="6" width="114" height="7" rx="3.5" fill={C.paper2} />
            <rect y="6" width={row.width} height="7" rx="3.5" fill={row.color} />
          </g>
        ))}
      </Card>
    </>
  )
}

function Tractor() {
  return (
    <g>
      <rect x="-4" y="79" width="140" height="3" rx="1.5" fill={C.paper2} />
      {/* Cab */}
      <rect x="20" y="0" width="44" height="6" rx="3" fill={C.redDark} />
      <path d="M25 6H57L66 32H25Z" fill={C.ink2} />
      <path d="M30 11H53.5L59.5 28H30Z" fill="#a9d6ea" />
      <path d="M41 11v17" stroke={C.ink2} strokeWidth="2" />
      {/* Hood and chassis */}
      <path d="M48 30H110a9 9 0 0 1 9 9V54H48Z" fill={C.red} />
      <rect x="48" y="50" width="68" height="9" rx="2" fill={C.ink2} />
      <path d="M112 37v10M107 37v10" stroke={C.redDark} strokeWidth="2" strokeLinecap="round" />
      <rect x="93" y="10" width="6" height="21" rx="2" fill={C.ink2} />
      <rect x="91" y="8" width="10" height="4" rx="2" fill={C.ink} />
      {/* Rear wheel and fender */}
      <path d="M4 58a30 30 0 0 1 60 0h-8a22 22 0 0 0-44 0Z" fill={C.redDark} />
      <circle cx="34" cy="56" r="24" fill={C.ink} />
      <circle cx="34" cy="56" r="24" fill="none" stroke={C.ink3} strokeWidth="3" strokeDasharray="5 4.42" />
      <circle cx="34" cy="56" r="11.5" fill={C.sand} />
      <circle cx="34" cy="56" r="4" fill={C.ink} />
      {/* Front wheel */}
      <circle cx="105" cy="65" r="15" fill={C.ink} />
      <circle cx="105" cy="65" r="15" fill="none" stroke={C.ink3} strokeWidth="2.5" strokeDasharray="4 3.85" />
      <circle cx="105" cy="65" r="6.5" fill={C.sand} />
      <circle cx="105" cy="65" r="2.4" fill={C.ink} />
    </g>
  )
}

function Sigma({ id, t }) {
  return (
    <>
      <Backdrop id={id} />

      <Win id={id} x={22} y={34} w={270} h={200}>
        <g style={{ fontFamily: MONO }} fontSize="9.5">
          <text x="14" y="42">
            <tspan fill={C.sage} fontWeight="700">GET</tspan>
            <tspan fill={C.code}> /api/machines/14/telemetry</tspan>
          </text>
          <text x="14" y="58" fill={C.sprout}>200 OK</text>
          <text x="14" y="78" fill="#7fa39c">{'{'}</text>
          <text x="26" y="93">
            <tspan fill={C.orange}>{'"fuel"'}</tspan>
            <tspan fill={C.code}>: 62,</tspan>
          </text>
          <text x="26" y="108">
            <tspan fill={C.orange}>{'"engine_hours"'}</tspan>
            <tspan fill={C.code}>: 1284,</tspan>
          </text>
          <text x="26" y="123">
            <tspan fill={C.orange}>{'"status"'}</tspan>
            <tspan fill={C.code}>: </tspan>
            <tspan fill={C.sage}>{'"working"'}</tspan>
          </text>
          <text x="14" y="138" fill="#7fa39c">{'}'}</text>
          <text x="14" y="162">
            <tspan fill={C.maize} fontWeight="700">POST</tspan>
            <tspan fill={C.code}> /api/maintenance</tspan>
          </text>
          <text x="14" y="178" fill={C.sprout}>201 Created</text>
        </g>
      </Win>

      <Card id={id} x={266} y={92} w={188} h={176} rotate={-4}>
        <text x="14" y="26" fontSize="12" fontWeight="800" fill={C.ink}>TR-14</text>
        <rect x={174 - (t.inField.length * 4.7 + 14)} y="13" width={t.inField.length * 4.7 + 14} height="17" rx="8.5" fill={C.sage} />
        <text x={174 - (t.inField.length * 4.7 + 14) / 2} y="24.7" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={C.ink}>{t.inField}</text>
        {/* Signal */}
        <g fill="none" stroke={C.blue} strokeWidth="2.2" strokeLinecap="round">
          <path d="M150 52a9 9 0 0 1 9 9" />
          <path d="M150 45a16 16 0 0 1 16 16" />
        </g>
        <circle cx="150" cy="61" r="2.6" fill={C.blue} />
        <g transform="translate(22 38)">
          <Tractor />
        </g>
        <text x="14" y="140" fontSize="8.5" fontWeight="600" fill={C.mute}>{t.fuel}</text>
        <rect x="14" y="146" width="96" height="7" rx="3.5" fill={C.paper2} />
        <rect x="14" y="146" width="60" height="7" rx="3.5" fill={C.orange} />
        <text x="174" y="140" textAnchor="end" fontSize="8.5" fontWeight="600" fill={C.mute}>{t.hours}</text>
        <text x="174" y="154" textAnchor="end" fontSize="11" fontWeight="800" fill={C.ink}>1.284 h</text>
      </Card>
    </>
  )
}

function Residence({ id, t }) {
  // 4 columns by 7 rows; 1 = lit warm, 2 = lit cool, 0 = dark.
  const windows = [
    [1, 0, 0, 2],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [2, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 2],
    [0, 0, 1, 0],
  ]
  const lit = ['#17454b', C.maize, '#bfe3ea']
  // Day dots of the month: 0 = empty, 1 = day, 2 = booked, 3 = chosen.
  const days = [
    [0, 0, 1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 3, 1],
    [1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
  ]
  const dayFill = [null, '#e8ddd0', C.orange, C.blue]
  const qr = [
    [1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 0, 1],
  ]
  return (
    <>
      <Backdrop id={id} />

      {/* Tower */}
      <g filter={`url(#${id}-shadow)`}>
        <rect x="96" y="22" width="4" height="26" fill={C.ink3} />
        <rect x="132" y="34" width="26" height="16" rx="2" fill={C.ink} />
        <rect x="34" y="48" width="156" height="262" fill={`url(#${id}-ink)`} />
        <rect x="28" y="44" width="168" height="10" rx="2" fill={C.ink} />
        {windows.map((row, r) =>
          row.map((state, c) => (
            <g key={`${r}-${c}`} transform={`translate(${48 + c * 34} ${68 + r * 36})`}>
              <rect width="24" height="24" rx="2.5" fill={lit[state]} />
              <rect y="24" width="24" height="3" fill={C.ink} />
              {state === 0 && <path d="M12 0V24" stroke="#0e2a2f" strokeWidth="1.5" />}
            </g>
          )),
        )}
        {/* A plant on a sill */}
        <path d="M90 121c-5-2-7-7-5-12 4 1 6 5 5 12ZM98 121c5-2 7-7 5-12-4 1-6 5-5 12ZM94 121c-3-5-2-11 0-14 2 3 3 9 0 14Z" fill={C.tealDark} />
        <path d="M88.5 120h11l-1.8 8h-7.4Z" fill={C.redDark} />
      </g>

      <Phone id={id} x={214} y={22} w={132} h={262} rotate={4}>
        <text x="13" y="38" fontSize="13" fontWeight="800" fill={C.ink}>{t.bookings}</text>
        <text x="13" y="52" fontSize="9" fontWeight="600" fill={C.mute}>{t.month}</text>
        {days.map((week, r) =>
          week.map((state, c) =>
            state ? <circle key={`${r}-${c}`} cx={18 + c * 14.2} cy={70 + r * 14.2} r="5" fill={dayFill[state]} /> : null,
          ),
        )}
        <rect x="11" y="142" width="98" height="46" rx="9" fill="#fff" stroke="#e8ddd0" />
        <rect x="19" y="151" width="5" height="28" rx="2.5" fill={C.blue} />
        <text x="31" y="162" fontSize="9.5" fontWeight="800" fill={C.ink}>{t.hall}</text>
        <text x="31" y="176" fontSize="8.5" fontWeight="600" fill={C.mute}>{t.slot}</text>
        <rect x="11" y="198" width="98" height="24" rx="12" fill={C.ink2} />
        <text x="60" y="213.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={C.paper}>{t.book}</text>
      </Phone>

      <Card id={id} x={356} y={150} w={104} h={124} rotate={-6}>
        <text x="12" y="23" fontSize="10.5" fontWeight="800" fill={C.ink}>{t.visitor}</text>
        <rect x="12" y="32" width="56" height="56" rx="5" fill="#fff" />
        {qr.map((row, r) =>
          row.map((on, c) => (on ? <rect key={`${r}-${c}`} x={16 + c * 6.9} y={36 + r * 6.9} width="6.9" height="6.9" fill={C.ink} /> : null)),
        )}
        <circle cx="84" cy="44" r="8" fill={C.sage} />
        <path d="M80 44.2l3 3 5-5.5" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="12" y="106" fontSize="8.5" fontWeight="700" fill={C.mute}>{t.unit}</text>
      </Card>
    </>
  )
}

function Pod({ body, ridge, light }) {
  return (
    <g>
      <rect x="-3.5" y="-86" width="7" height="14" rx="3" fill="#6b4a2c" />
      <path d="M0-76C15-63 35-31 33 10 31 45 15 67 0 78-15 67-31 45-33 10-35-31-15-63 0-76Z" fill={body} />
      <path d="M0-76C8-40 9 34 0 78M0-76C25-44 27 30 0 78M0-76C-25-44-27 30 0 78" fill="none" stroke={ridge} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M-18-30C-24-8-24 14-18 34" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </g>
  )
}

function Cacao({ id, t }) {
  return (
    <>
      <Backdrop id={id} />

      {/* Leaf, pods and beans */}
      <g filter={`url(#${id}-shadow)`}>
        <path d="M300 78C338 30 404 24 446 46 420 92 362 112 300 78Z" fill="#4f9b6e" />
        <path d="M300 78C350 60 400 48 446 46" fill="none" stroke="#3b7d57" strokeWidth="2.5" strokeLinecap="round" />
        <g transform="translate(396 178) rotate(22) scale(0.86)">
          <Pod body="#b8492f" ridge="#8f3222" light="#d97a5c" />
        </g>
        <g transform="translate(308 166) rotate(-20) scale(1.1)">
          <Pod body="#f0a93a" ridge="#c9782a" light="#ffd182" />
        </g>
      </g>
      <g filter={`url(#${id}-shadow-sm)`} fill="#6b3f26">
        <ellipse cx="250" cy="262" rx="11" ry="7" transform="rotate(-24 250 262)" />
        <ellipse cx="438" cy="256" rx="11" ry="7" transform="rotate(30 438 256)" />
        <ellipse cx="268" cy="278" rx="10" ry="6.5" transform="rotate(12 268 278)" fill="#7d4a2c" />
      </g>

      <Phone id={id} x={56} y={20} w={136} h={266} rotate={-5}>
        <text x="13" y="38" fontSize="13" fontWeight="800" fill={C.ink}>Cacao</text>
        <rect x="12" y="48" width="100" height="19" rx="9.5" fill="#e8ddd0" />
        <rect x="12" y="48" width="50" height="19" rx="9.5" fill={C.ink2} />
        <text x="37" y="61" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={C.paper}>USD/t</text>
        <text x="87" y="61" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={C.mute}>COP/kg</text>
        <path d="M12 96H112M12 120H112M12 144H112M12 168H112" stroke="#e8ddd0" strokeWidth="1" />
        <path d="M70 80V172" stroke={C.sand} strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M70 116 84 101 98 92 112 82V110L98 111 84 113Z" fill={C.teal} fillOpacity="0.22" />
        <path d="M70 116 84 107 98 102 112 95" fill="none" stroke={C.teal} strokeWidth="2.6" strokeDasharray="5 3.5" strokeLinecap="round" />
        <path d="M12 156 24 147 35 151 47 132 58 136 70 116" fill="none" stroke={C.orange} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="70" cy="116" r="4.2" fill={C.orange} stroke="#f8f2ea" strokeWidth="2" />
        <text x="112" y="80" textAnchor="end" fontSize="8" fontWeight="700" fill={C.tealDark}>{t.forecast}</text>
        <rect x="12" y="184" width="47" height="42" rx="8" fill="#fff" stroke="#e8ddd0" />
        <path d="M20 205l6-8 6 8Z" fill={C.teal} />
        <rect x="20" y="212" width="30" height="6" rx="3" fill={C.ink2} />
        <rect x="65" y="184" width="47" height="42" rx="8" fill="#fff" stroke="#e8ddd0" />
        <circle cx="76" cy="200" r="5" fill={C.maize} />
        <path d="M84 203a5 5 0 0 1 9-2 4 4 0 0 1 3 7H86a3 3 0 0 1-2-5Z" fill="#b9d3df" />
        <rect x="73" y="212" width="26" height="6" rx="3" fill={C.paper2} />
      </Phone>
    </>
  )
}

function Dumbbell() {
  return (
    <g>
      <rect x="-50" y="-5" width="100" height="10" rx="3" fill={C.sand} />
      <rect x="-50" y="-5" width="100" height="4" rx="2" fill="#d4c1a2" />
      {[-1, 1].map((side) => (
        <g key={side} transform={`scale(${side} 1)`}>
          <rect x="40" y="-27" width="15" height="54" rx="5" fill={C.red} />
          <rect x="40" y="-27" width="15" height="14" rx="5" fill="#ea6a62" />
          <rect x="55" y="-19" width="11" height="38" rx="4" fill={C.redDark} />
          <rect x="66" y="-7" width="7" height="14" rx="2.5" fill={C.sand} />
        </g>
      ))}
    </g>
  )
}

function FitNow({ id, t }) {
  const marks = [C.blue, C.orange, C.red, C.teal]
  const sets = ['4 × 10', '4 × 8', '3 × 12', '3 × 15']
  return (
    <>
      <Backdrop id={id} />

      <Win id={id} x={22} y={32} w={250} h={176}>
        <g style={{ fontFamily: MONO }} fontSize="9.5">
          <text x="14" y="42">
            <tspan fill={C.maize} fontWeight="700">POST</tspan>
            <tspan fill={C.code}> /api/routines</tspan>
          </text>
          <text x="14" y="62" fill="#7fa39c">{'{'}</text>
          <text x="26" y="77">
            <tspan fill={C.orange}>{'"goal"'}</tspan>
            <tspan fill={C.code}>: </tspan>
            <tspan fill={C.sage}>{'"strength"'}</tspan>
            <tspan fill={C.code}>,</tspan>
          </text>
          <text x="26" y="92">
            <tspan fill={C.orange}>{'"days_per_week"'}</tspan>
            <tspan fill={C.code}>: 4,</tspan>
          </text>
          <text x="26" y="107">
            <tspan fill={C.orange}>{'"level"'}</tspan>
            <tspan fill={C.code}>: </tspan>
            <tspan fill={C.sage}>{'"beginner"'}</tspan>
          </text>
          <text x="14" y="122" fill="#7fa39c">{'}'}</text>
          <text x="14" y="146" fill={C.sprout}>201 Created</text>
        </g>
      </Win>

      <Card id={id} x={252} y={62} w={200} h={196} rotate={4}>
        <text x="16" y="28" fontSize="13" fontWeight="800" fill={C.ink}>{t.day}</text>
        <text x="184" y="28" textAnchor="end" fontSize="9" fontWeight="700" fill={C.mute}>45 min</text>
        <path d="M16 40H184" stroke={C.paper2} strokeWidth="1.5" />
        {t.exercises.map((name, i) => (
          <g key={name} transform={`translate(16 ${52 + i * 34})`}>
            <rect width="24" height="24" rx="7" fill={marks[i]} />
            <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">{i + 1}</text>
            <text x="34" y="16" fontSize="10.5" fontWeight="700" fill={C.ink}>{name}</text>
            <text x="168" y="16" textAnchor="end" fontSize="9.5" fontWeight="700" fill={C.mute}>{sets[i]}</text>
          </g>
        ))}
      </Card>

      <g transform="translate(118 236) rotate(-16)" filter={`url(#${id}-shadow)`}>
        <Dumbbell />
      </g>
    </>
  )
}

function Oasis({ id, t }) {
  const wine = '#4a1a2c'
  const rose = '#eca7b7'
  const blush = '#f6dce3'
  const pink = '#d6247a'
  return (
    <>
      <rect width="480" height="300" fill="#fbeff2" />
      <circle cx="430" cy="30" r="96" fill={blush} />
      <circle cx="40" cy="290" r="78" fill="#f7e3e9" />

      {/* Inventory, synced */}
      <Card id={id} x={26} y={150} w={118} h={92} rotate={-4} fill="#fff" small>
        <text x="12" y="22" fontSize="10" fontWeight="800" fill={wine}>{t.stock}</text>
        <rect x="12" y="32" width="18" height="18" rx="5" fill={blush} />
        <rect x="36" y="38" width="40" height="6" rx="3" fill="#ead3d9" />
        <text x="106" y="45" textAnchor="end" fontSize="10" fontWeight="800" fill={wine}>12</text>
        <rect x="12" y="58" width="18" height="18" rx="5" fill={blush} />
        <rect x="36" y="64" width="26" height="6" rx="3" fill="#ead3d9" />
        <rect x={106 - (t.soldOut.length * 4.5 + 10)} y="59" width={t.soldOut.length * 4.5 + 10} height="16" rx="8" fill={pink} />
        <text x={106 - (t.soldOut.length * 4.5 + 10) / 2} y="70" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{t.soldOut}</text>
      </Card>
      <g transform="translate(40 96) rotate(-4)" filter={`url(#${id}-shadow-sm)`}>
        <rect width="92" height="34" rx="17" fill={wine} />
        <path d="M17 17a8 8 0 0 1 13.5-5.8M33 17a8 8 0 0 1-13.5 5.8" fill="none" stroke={blush} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M31.5 7.5v4.5h-4.5M18.5 26.5v-4.5h4.5" fill="none" stroke={blush} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="62" y="21.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fbeff2">Siigo</text>
      </g>

      {/* Store on a phone */}
      <Phone id={id} x={166} y={22} w={152} h={300} body="#fff" edge="#eed3da" screen="#fff" island={false}>
        <rect x="57" y="6" width="26" height="6" rx="3" fill="#eed3da" />
        <text x="12" y="36" fontSize="14" fontWeight="800" fill={wine} letterSpacing="-0.2">Oasis</text>
        <circle cx="122" cy="31" r="9" fill="#fbeff2" />
        <path d="M118 28h8l-1 6h-6Z" fill="none" stroke={wine} strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="12" y="46" width="116" height="17" rx="8.5" fill="#fbeff2" />
        <circle cx="22" cy="54.5" r="3.2" fill="none" stroke="#c9a3ae" strokeWidth="1.5" />
        {/* Serum */}
        <g transform="translate(12 72)">
          <rect width="55" height="76" rx="9" fill="#fbeff2" />
          <rect x="19" y="26" width="17" height="30" rx="5" fill={rose} />
          <rect x="23.5" y="19" width="8" height="8" fill="#f3c5d0" />
          <rect x="22" y="9" width="11" height="11" rx="5.5" fill={wine} />
          <rect x="22" y="36" width="11" height="9" rx="1.5" fill="#fbeff2" />
          <rect x="8" y="63" width="26" height="5" rx="2.5" fill="#e6c7cf" />
        </g>
        {/* Cream jar */}
        <g transform="translate(73 72)">
          <rect width="55" height="76" rx="9" fill="#fbeff2" />
          <rect x="12" y="32" width="31" height="23" rx="6" fill="#fff" stroke="#eed3da" strokeWidth="1.5" />
          <rect x="10" y="24" width="35" height="10" rx="3.5" fill={pink} />
          <rect x="8" y="63" width="32" height="5" rx="2.5" fill="#e6c7cf" />
        </g>
        {/* Lipstick */}
        <g transform="translate(12 156)">
          <rect width="55" height="76" rx="9" fill="#fbeff2" />
          <path d="M22.5 26V15l10-5V26Z" fill={pink} />
          <rect x="21" y="26" width="13" height="7" fill="#d9b26a" />
          <rect x="19.5" y="33" width="16" height="23" rx="2.5" fill={wine} />
          <rect x="8" y="63" width="22" height="5" rx="2.5" fill="#e6c7cf" />
        </g>
        {/* Tube */}
        <g transform="translate(73 156)">
          <rect width="55" height="76" rx="9" fill="#fbeff2" />
          <path d="M17 12H38L35 46H20Z" fill="#e48fa3" />
          <rect x="15.5" y="10" width="24" height="4" rx="2" fill="#d77a90" />
          <rect x="21" y="46" width="13" height="10" rx="2.5" fill={wine} />
          <rect x="8" y="63" width="29" height="5" rx="2.5" fill="#e6c7cf" />
        </g>
        <rect x="12" y="242" width="116" height="26" rx="13" fill="#1daa61" />
        <path d="M27 260.5l1.6-5a7.5 7.5 0 1 1 3.2 3.2Z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
        <text x="80" y="259" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">WhatsApp</text>
      </Phone>

      {/* Payment methods */}
      <Card id={id} x={338} y={70} w={112} h={70} rotate={-6} fill="#fff" small>
        <rect x="12" y="12" width="20" height="14" rx="3" fill="#d9b26a" />
        <text x="12" y="54" fontSize="15" fontWeight="800" fill={wine}>PSE</text>
        <rect x="64" y="46" width="36" height="6" rx="3" fill="#ead3d9" />
      </Card>
      <Card id={id} x={350} y={136} w={112} h={70} rotate={5} fill={wine} small>
        <circle cx="94" cy="20" r="8" fill={pink} />
        <text x="12" y="54" fontSize="15" fontWeight="800" fill="#fbeff2">Nequi</text>
        <rect x="12" y="14" width="34" height="6" rx="3" fill="#6d3348" />
      </Card>
    </>
  )
}

const ART = {
  oasis: Oasis,
  road: Road,
  iidta: Iidta,
  sigma: Sigma,
  residence: Residence,
  cacao: Cacao,
  fitnow: FitNow,
}

export function ProjectArt({ art, lang, label, className = '' }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
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
      {art === 'oasis' ? <Defs id={id} shadow="#4a1a2c" strength={0.5} /> : <Defs id={id} />}
      <Art id={id} t={TEXT[lang] ?? TEXT.es} />
    </svg>
  )
}
