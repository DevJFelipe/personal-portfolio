import { useId } from 'react'

/*
  Small objects drawn for each service, in the language of the hero art:
  dark teal panels, cream cards, solid colour. They replace generic line icons.
*/

const C = {
  ink: '#0b2327',
  ink2: '#12343a',
  edge: '#3a6e73',
  paper: '#efe4da',
  paper2: '#dccfc3',
  sand: '#b9a27f',
  sage: '#a8ccb8',
  sageDark: '#7fae98',
  teal: '#2f9c86',
  orange: '#f4a63a',
  blue: '#2f7df6',
  red: '#de4b43',
  redDark: '#b4352f',
  green: '#2fc657',
  yellow: '#f5b72e',
}

function Mobile() {
  return (
    <>
      <g transform="rotate(-8 32 32)">
        <rect x="16" y="4" width="32" height="56" rx="8" fill={C.ink} />
        <rect x="16.75" y="4.75" width="30.5" height="54.5" rx="7.25" fill="none" stroke={C.edge} strokeWidth="1.5" />
        <rect x="19.5" y="7.5" width="25" height="49" rx="5" fill={C.paper} />
        <rect x="23" y="13" width="18" height="13" rx="3" fill={C.blue} />
        <circle cx="35.5" cy="17.5" r="2" fill="#fff" />
        <path d="M23 26l5.5-6 4 4 3-2.5 5.5 4.5Z" fill="#cfe1ff" />
        <rect x="23" y="29.5" width="8" height="8" rx="2.5" fill={C.orange} />
        <rect x="33" y="29.5" width="8" height="8" rx="2.5" fill={C.teal} />
        <rect x="23" y="41.5" width="18" height="3.5" rx="1.75" fill={C.ink2} />
        <rect x="23" y="47.5" width="11" height="3.5" rx="1.75" fill={C.paper2} />
      </g>
      <circle cx="48" cy="12" r="7.5" fill={C.red} />
      <circle cx="48" cy="12" r="2.6" fill="#fff" />
    </>
  )
}

function Storefront() {
  return (
    <>
      <rect x="9" y="26" width="46" height="30" rx="3" fill={C.paper} />
      <rect x="13" y="33" width="20" height="15" rx="2.5" fill="#a9d6ea" />
      <path d="M15 48 25 33h5L20 48Z" fill="#d3ecf6" />
      <rect x="38" y="33" width="12" height="23" rx="2.5" fill={C.ink2} />
      <circle cx="47" cy="45" r="1.4" fill={C.sand} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${7 + i * 10} 12h10v12a5 5 0 0 1-10 0Z`} fill={i % 2 === 0 ? C.red : '#fff6ec'} />
      ))}
      <rect x="5.5" y="8.5" width="53" height="5.5" rx="2.75" fill={C.redDark} />
      <rect x="4" y="55" width="56" height="4" rx="2" fill={C.sand} />
    </>
  )
}

function Backend() {
  return (
    <>
      {[40, 26, 12].map((y, i) => (
        <g key={y}>
          <path d={`M8 ${y}v10a18 6 0 0 0 36 0v-10Z`} fill={C.sageDark} />
          <ellipse cx="26" cy={y} rx="18" ry="6" fill={C.sage} />
          <rect x="14" y={y + 8.5} width="9" height="3" rx="1.5" fill={C.ink2} transform={`rotate(8 18.5 ${y + 10})`} />
          <circle cx="37" cy={y + 9.5} r="1.9" fill={i === 2 ? C.orange : C.ink2} />
        </g>
      ))}
      <rect x="31" y="33" width="29" height="25" rx="5" fill={C.ink} />
      <rect x="31.75" y="33.75" width="27.5" height="23.5" rx="4.25" fill="none" stroke={C.edge} strokeWidth="1.5" />
      <circle cx="36.5" cy="38.5" r="1.4" fill={C.red} />
      <circle cx="40.7" cy="38.5" r="1.4" fill={C.yellow} />
      <circle cx="44.9" cy="38.5" r="1.4" fill={C.green} />
      <path d="M40.5 44.5l-4 4 4 4M50.5 44.5l4 4-4 4M47 43.5l-3 10" fill="none" stroke={C.orange} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

function Quality() {
  return (
    <>
      <rect x="5" y="8" width="46" height="42" rx="7" fill={C.paper} />
      <rect x="11" y="14" width="15" height="3.5" rx="1.75" fill={C.ink2} />
      <rect x="11" y="33" width="7.5" height="11" rx="2" fill={C.teal} />
      <rect x="21.5" y="27" width="7.5" height="17" rx="2" fill={C.orange} />
      <rect x="32" y="20" width="7.5" height="24" rx="2" fill={C.blue} />
      <circle cx="46.5" cy="45.5" r="12.5" fill={C.green} />
      <path d="M40.5 45.8l4.2 4.2 7.8-8.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

const ICONS = { mobile: Mobile, store: Storefront, server: Backend, chart: Quality }

export function ServiceIcon({ name }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const Icon = ICONS[name]
  if (!Icon) return null
  return (
    <svg className="service-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <filter id={id} x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#00130f" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter={`url(#${id})`}>
        <Icon />
      </g>
    </svg>
  )
}
