'use client'

import Link from 'next/link'
import {
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'

// ─── Animated counter ───
type AnimProps = {
  value: number
  prefix?: string
  suffix?: string
}

function Anim({ value, prefix = '', suffix = '' }: AnimProps): ReactNode {
  const [d, setD] = useState(0)
  const ref = useRef(0)
  useEffect(() => {
    const s = d
    const diff = value - s
    if (!diff) return
    const t0 = performance.now()
    const tick = (now: number): void => {
      const p = Math.min((now - t0) / 600, 1)
      setD(Math.round(s + diff * (1 - Math.pow(1 - p, 3))))
      if (p < 1) ref.current = requestAnimationFrame(tick)
    }
    ref.current = requestAnimationFrame(tick)
    return (): void => cancelAnimationFrame(ref.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps -- animate on `value` only; baseline `d` is read from closure (mirrors standalone widget)
  }, [value])
  return (
    <>
      {prefix}
      {d.toLocaleString()}
      {suffix}
    </>
  )
}

// ─── Vault green palette only (matches tailwind `vault-green`) ───
const VG = {
  50: '#e8f5ee',
  100: '#d1ebdd',
  200: '#a3d7bb',
  300: '#75c399',
  400: '#47af77',
  500: '#117A4B',
  600: '#0e623c',
  700: '#0b4a2d',
  800: '#07311e',
  900: '#04190f',
} as const

const C = {
  bg: 'transparent',
  /** Theme-aware surfaces (light: white / tinted; dark: elevated card tones) */
  s1: 'hsl(var(--card))',
  s2: 'hsl(var(--muted))',
  surfaceDeep: 'hsl(var(--muted))',
  bdr: 'hsl(var(--border))',
  brand: VG[500],
  brandLt: VG[400],
  brandDim: 'rgba(17, 122, 75, 0.14)',
  brandGlow: 'rgba(71, 175, 119, 0.35)',
  /** Headlines & high-signal stats */
  emphasis: VG[400],
  emphasisBg: 'rgba(71, 175, 119, 0.1)',
  emphasisGlow: 'rgba(117, 195, 153, 0.28)',
  /** Partner / second layer (e.g. stack) */
  partner: VG[300],
  partnerBg: 'rgba(117, 195, 153, 0.1)',
  partnerGlow: 'rgba(117, 195, 153, 0.22)',
  /** Methodology callouts */
  highlight: VG[200],
  pillAccent: VG[400],
  /** Charts: “cost / without” series */
  chartCost: VG[700],
  w: 'hsl(var(--foreground))',
  g1: 'hsl(var(--muted-foreground))',
  g2: 'hsl(var(--muted-foreground))',
}

const hd = 'var(--font-space-grotesk), system-ui, sans-serif'
const bd = 'var(--font-inter), system-ui, sans-serif'
const mn = 'var(--font-inter), ui-monospace, monospace'

const MODEL = {
  docMin: 20,
  docLabel: 'Advisor Documentation',
  docSource: 'Kitces Research 2024 — advisor time allocation studies',
  reviewMin: 12,
  reviewLabel: 'CCO Review',
  reviewSource: 'Rule 206(4)-7 supervisory review obligation — avg from CCO practitioner surveys',
  gapRate: 0.4,
  gapLabel: 'Chasing Incomplete Records',
  gapSource:
    'SEC OCIE Risk Alert — compliance program deficiencies are #1 exam finding; 40% est. from practitioner interviews',
  chaseMin: 10,
  chaseSource: 'CCO workflow analysis — email follow-ups, re-documentation requests',
  hourly: 95,
  hourlySource: 'BLS May 2024 — Compliance Officers median $37.98/hr + advisor opportunity cost blended',
  reduction: 0.75,
}

type DonutSegment = { label: string; value: number; color: string }

// ─── Donut Chart ───
function DonutChart({ segments, size = 220 }: { segments: DonutSegment[]; size?: number }): ReactElement {
  const total = segments.reduce((a, s) => a + s.value, 0)
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const stroke = size * 0.12
  let cumAngle = -90

  const paths = segments.map((seg, i) => {
    const pct = total > 0 ? seg.value / total : 0
    const angle = pct * 360
    const startRad = (cumAngle * Math.PI) / 180
    const endRad = ((cumAngle + angle) * Math.PI) / 180
    const x1 = cx + r * Math.cos(startRad)
    const y1 = cy + r * Math.sin(startRad)
    const x2 = cx + r * Math.cos(endRad)
    const y2 = cy + r * Math.sin(endRad)
    const largeArc = angle > 180 ? 1 : 0
    cumAngle += angle
    return (
      <path
        key={i}
        d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
        fill="none"
        stroke={seg.color}
        strokeWidth={stroke}
        strokeLinecap="round"
        style={{ transition: 'all 0.5s ease' }}
      />
    )
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.bdr} strokeWidth={stroke} />
        {paths}
        <text x={cx} y={cy - 8} textAnchor="middle" fill={C.w} fontFamily={hd} fontWeight="800" fontSize="28">
          {total.toFixed(0)}h
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill={C.g2} fontFamily={bd} fontWeight="500" fontSize="11">
          per week
        </text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {segments.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: s.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, color: C.w, fontFamily: bd, fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: C.g2, fontFamily: mn }}>
                {s.value.toFixed(0)}h/wk · {total > 0 ? ((s.value / total) * 100).toFixed(0) : 0}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

type BarDatum = { label: string; value: number; color: string }

// ─── Bar Chart ───
function BarChart({ data, height = 200 }: { data: BarDatum[]; height?: number }): ReactElement {
  const maxVal = Math.max(...data.map((d) => d.value), 1)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height, padding: '0 4px' }}>
      {data.map((d, i) => {
        const h = (d.value / maxVal) * (height - 30)
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 10, color: C.g1, fontFamily: mn, fontWeight: 700 }}>{d.value.toFixed(0)}h</span>
            <div
              style={{
                width: '100%',
                maxWidth: 44,
                height: h,
                borderRadius: '6px 6px 2px 2px',
                background: `linear-gradient(180deg, ${d.color}, ${d.color}88)`,
                boxShadow: `0 0 12px ${d.color}33`,
                transition: 'height 0.5s ease',
              }}
            />
            <span style={{ fontSize: 9, color: C.g2, fontFamily: bd, textAlign: 'center', lineHeight: 1.2 }}>
              {d.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Cumulative Area Chart ───
function AreaChart({
  weeklyHrs,
  yearlyCost: _unusedYearlyCost,
  height = 180,
}: {
  weeklyHrs: number
  yearlyCost: number
  height?: number
}): ReactElement {
  const weeks = 50
  const points: { week: number; cost: number; saved: number }[] = []
  for (let i = 0; i <= weeks; i++) {
    points.push({
      week: i,
      cost: weeklyHrs * i * MODEL.hourly,
      saved: weeklyHrs * i * MODEL.hourly * MODEL.reduction,
    })
  }
  const maxCost = points[points.length - 1]?.cost || 1
  const w = 600
  const h = height
  const padL = 50
  const padR = 16
  const padT = 10
  const padB = 30
  const chartW = w - padL - padR
  const chartH = h - padT - padB

  const toX = (wk: number): number => padL + (wk / weeks) * chartW
  const toY = (val: number): number => padT + chartH - (val / maxCost) * chartH

  const costPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.week)} ${toY(p.cost)}`).join(' ')
  const costArea = `${costPath} L ${toX(weeks)} ${toY(0)} L ${toX(0)} ${toY(0)} Z`
  const savedPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.week)} ${toY(p.saved)}`).join(' ')
  const savedArea = `${savedPath} L ${toX(weeks)} ${toY(0)} L ${toX(0)} ${toY(0)} Z`

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((p) => Math.round(maxCost * p))

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.chartCost} stopOpacity="0.25" />
          <stop offset="100%" stopColor={C.chartCost} stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="savedGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.brandLt} stopOpacity="0.2" />
          <stop offset="100%" stopColor={C.brandLt} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {yTicks.map((v, i) => (
        <g key={i}>
          <line x1={padL} y1={toY(v)} x2={w - padR} y2={toY(v)} stroke={C.bdr} strokeWidth="1" />
          <text x={padL - 8} y={toY(v) + 4} textAnchor="end" fill={C.g2} fontFamily={mn} fontSize="9">
            ${(v / 1000).toFixed(0)}k
          </text>
        </g>
      ))}
      {[0, 10, 20, 30, 40, 50].map((wk) => (
        <text key={wk} x={toX(wk)} y={h - 4} textAnchor="middle" fill={C.g2} fontFamily={mn} fontSize="9">
          W{wk}
        </text>
      ))}
      <path d={costArea} fill="url(#costGrad)" />
      <path d={savedArea} fill="url(#savedGrad)" />
      <path d={costPath} fill="none" stroke={C.chartCost} strokeWidth="2.5" />
      <path d={savedPath} fill="none" stroke={C.brandLt} strokeWidth="2.5" strokeDasharray="6,4" />
      <circle cx={padL + 10} cy={padT + 2} r="4" fill={C.chartCost} />
      <text x={padL + 20} y={padT + 6} fill={C.g1} fontFamily={bd} fontSize="10">
        Without ComplyVault
      </text>
      <circle cx={padL + 160} cy={padT + 2} r="4" fill={C.brandLt} />
      <text x={padL + 170} y={padT + 6} fill={C.g1} fontFamily={bd} fontSize="10">
        With ComplyVault (75% saved)
      </text>
    </svg>
  )
}

// ─── Shared components ───
type NumberInputProps = {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
}

function NumberInput({ label, value, onChange, min, max, step = 1 }: NumberInputProps): ReactElement {
  return (
    <div style={{ flex: 1, minWidth: 180 }}>
      <label
        style={{
          display: 'block',
          fontSize: 11,
          color: C.g2,
          fontFamily: bd,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          marginBottom: 10,
        }}
      >
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10)
            if (!isNaN(v) && v >= min && v <= max) onChange(v)
            else if (e.target.value === '') onChange(min)
          }}
          style={{
            width: '100%',
            fontSize: 42,
            fontWeight: 800,
            fontFamily: hd,
            color: C.w,
            background: C.s2,
            border: `2px solid ${C.bdr}`,
            borderRadius: 14,
            padding: '20px 24px',
            outline: 'none',
            letterSpacing: -2,
            transition: 'border-color 0.2s',
            textAlign: 'center',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = C.brand
          }}
          onBlur={(e) => {
            e.target.style.borderColor = C.bdr
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
          {[
            { label: '−', fn: () => onChange(Math.max(min, value - step)) },
            { label: '+', fn: () => onChange(Math.min(max, value + step)) },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={b.fn}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${C.bdr}`,
                background: C.s2,
                color: C.w,
                fontSize: 18,
                fontWeight: 700,
                fontFamily: hd,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

type StatBlockProps = {
  label: string
  value: number
  prefix?: string
  suffix?: string
  color: string
  glow: string
  big?: boolean
}

function StatBlock({ label, value, prefix, suffix, color, glow, big }: StatBlockProps): ReactElement {
  return (
    <div
      style={{
        flex: 1,
        minWidth: big ? 200 : 150,
        padding: big ? '30px 24px' : '20px 18px',
        background: C.s1,
        border: `1px solid ${C.bdr}`,
        borderRadius: 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -30,
          right: -30,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: glow,
          filter: 'blur(45px)',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: C.g2,
          fontFamily: bd,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: big ? 44 : 30,
          fontWeight: 800,
          fontFamily: hd,
          color,
          lineHeight: 1,
          letterSpacing: -2,
          textShadow: `0 0 30px ${glow}`,
        }}
      >
        <Anim value={value} prefix={prefix} suffix={suffix} />
      </div>
    </div>
  )
}

function Cite({ text }: { text: string }): ReactElement {
  return <span style={{ fontSize: 11, color: C.g2, fontFamily: bd, fontStyle: 'italic' }}>{text}</span>
}

function SectionLabel({ text, color }: { text: string; color: string }): ReactElement {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        color,
        fontFamily: bd,
        textTransform: 'uppercase',
        letterSpacing: 3,
        marginBottom: 16,
      }}
    >
      {text}
    </div>
  )
}

const demoHref = '/contact'

function DemoCtaButton(): ReactElement {
  const btnStyle: CSSProperties = {
    display: 'inline-block',
    padding: '14px 36px',
    borderRadius: 10,
    border: 'none',
    background: C.brand,
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    fontFamily: hd,
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 30px ${C.brandGlow}`,
    letterSpacing: -0.3,
    textDecoration: 'none',
  }
  return (
    <Link href={demoHref} style={btnStyle}>
      Book a Demo
    </Link>
  )
}

// ════════════════════════════════════════
// CALCULATOR
// ════════════════════════════════════════
function Calculator(): ReactElement {
  const [firms, setFirms] = useState(12)
  const [advPerFirm, setAdvPerFirm] = useState(3)
  const [meetsPerWeek, setMeetsPerWeek] = useState(8)

  const totalAdv = firms * advPerFirm
  const totalMeets = totalAdv * meetsPerWeek
  const docHrs = (totalMeets * MODEL.docMin) / 60
  const revHrs = (totalMeets * MODEL.reviewMin) / 60
  const gapMeets = Math.round(totalMeets * MODEL.gapRate)
  const chaseHrs = (gapMeets * MODEL.chaseMin) / 60
  const weeklyHrs = docHrs + revHrs + chaseHrs
  const yearlyHrs = Math.round(weeklyHrs * 50)
  const yearlyCost = yearlyHrs * MODEL.hourly
  const recovered = Math.round(yearlyHrs * MODEL.reduction)
  const savedCost = recovered * MODEL.hourly

  const donutSegments: DonutSegment[] = [
    { label: MODEL.docLabel, value: docHrs, color: VG[500] },
    { label: MODEL.reviewLabel, value: revHrs, color: VG[400] },
    { label: MODEL.gapLabel, value: chaseHrs, color: VG[300] },
  ]

  const barData = useMemo(() => {
    const perFirmAdv = advPerFirm
    const perFirmMeets = perFirmAdv * meetsPerWeek
    return Array.from({ length: Math.min(firms, 12) }, (_, i) => ({
      label: `Firm ${i + 1}`,
      value:
        (perFirmMeets * MODEL.docMin + perFirmMeets * MODEL.reviewMin + perFirmMeets * MODEL.gapRate * MODEL.chaseMin) /
        60,
      color: i % 2 === 0 ? VG[600] : VG[400],
    }))
  }, [firms, advPerFirm, meetsPerWeek])

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 44 }}>
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: '25%',
            width: 350,
            height: 250,
            background: C.emphasisGlow,
            filter: 'blur(120px)',
            opacity: 0.1,
            borderRadius: '50%',
          }}
        />
        <SectionLabel text="The documentation gap hiding in plain sight" color={C.emphasis} />
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: C.w,
            fontFamily: hd,
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: -1.2,
          }}
        >
          Your practice runs{' '}
          <span style={{ color: C.emphasis, textShadow: `0 0 40px ${C.emphasisGlow}` }}>{totalMeets.toLocaleString()}</span> client
          <br />
          meetings a week. <span style={{ color: C.emphasis }}>Where's the proof?</span>
        </h2>
        <p style={{ fontSize: 15, color: C.g1, fontFamily: bd, margin: '16px 0 0', lineHeight: 1.6, maxWidth: 600 }}>
          Enter your numbers below. We'll show you exactly how much time and money your team is losing to manual
          meeting documentation — and what it's costing you when the SEC comes knocking.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 20,
          marginBottom: 44,
          flexWrap: 'wrap',
          padding: '32px 28px',
          background: C.s1,
          borderRadius: 18,
          border: `1px solid ${C.bdr}`,
        }}
      >
        <NumberInput label="RIA firms you oversee" value={firms} onChange={setFirms} min={1} max={100} />
        <NumberInput label="Avg advisors per firm" value={advPerFirm} onChange={setAdvPerFirm} min={1} max={20} />
        <NumberInput label="Meetings / advisor / week" value={meetsPerWeek} onChange={setMeetsPerWeek} min={1} max={20} />
      </div>

      <SectionLabel text="Your practice at a glance" color={C.g1} />
      <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        {[
          { v: totalAdv, l: 'total advisors', c: C.w },
          { v: totalMeets.toLocaleString(), l: 'meetings / week', c: C.w },
          { v: gapMeets.toLocaleString(), l: 'with incomplete docs', c: C.emphasis },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: p.c === C.emphasis ? C.emphasisBg : C.s1,
              border: `1px solid ${p.c === C.emphasis ? `${C.emphasis}33` : C.bdr}`,
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 800, fontFamily: mn, color: p.c }}>{p.v}</span>
            <span style={{ fontSize: 12, color: C.g2, fontFamily: bd }}>{p.l}</span>
          </div>
        ))}
      </div>

      <SectionLabel text="The cost of doing nothing" color={C.emphasis} />
      <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
        <StatBlock label="Hours burned / week" value={Math.round(weeklyHrs)} suffix="h" color={C.emphasis} glow={C.emphasisGlow} big />
        <StatBlock label="Hours burned / year" value={yearlyHrs} suffix="h" color={C.emphasis} glow={C.emphasisGlow} big />
        <StatBlock label="Annual cost" value={Math.round(yearlyCost / 1000)} prefix="$" suffix="k" color={C.emphasis} glow={C.emphasisGlow} big />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        <div style={{ padding: '24px', background: C.s1, border: `1px solid ${C.bdr}`, borderRadius: 16 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: C.g2,
              fontFamily: bd,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              marginBottom: 18,
            }}
          >
            Where the time goes
          </div>
          <DonutChart segments={donutSegments} />
        </div>
        <div style={{ padding: '24px', background: C.s1, border: `1px solid ${C.bdr}`, borderRadius: 16 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: C.g2,
              fontFamily: bd,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              marginBottom: 18,
            }}
          >
            Hours lost per firm / week{' '}
            {firms > 12 && <span style={{ color: C.g2, fontWeight: 400 }}>(showing first 12)</span>}
          </div>
          <BarChart data={barData} />
        </div>
      </div>

      <div style={{ padding: '24px', background: C.s1, border: `1px solid ${C.bdr}`, borderRadius: 16, marginBottom: 32 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: C.g2,
            fontFamily: bd,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            marginBottom: 18,
          }}
        >
          Cumulative cost over 50 weeks — with vs without ComplyVault
        </div>
        <AreaChart weeklyHrs={weeklyHrs} yearlyCost={yearlyCost} />
      </div>

      <div style={{ padding: '28px', background: C.s1, border: `1px solid ${C.bdr}`, borderRadius: 16, marginBottom: 32 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: C.highlight,
            fontFamily: bd,
            textTransform: 'uppercase',
            letterSpacing: 2,
            marginBottom: 18,
          }}
        >
          Our methodology
        </div>
        <div style={{ fontFamily: mn, fontSize: 13, color: C.g1, lineHeight: 2.2 }}>
          <div>
            <span style={{ color: C.w }}>Total meetings/wk</span> = {firms} firms × {advPerFirm} advisors ×{' '}
            {meetsPerWeek} meetings = <span style={{ color: C.w, fontWeight: 700 }}>{totalMeets.toLocaleString()}</span>
          </div>
          <div style={{ marginTop: 6 }}>
            <span style={{ color: C.w }}>Advisor doc time</span> = {totalMeets.toLocaleString()} ×{' '}
            <span style={{ color: C.highlight }}>{MODEL.docMin} min</span> ={' '}
            <span style={{ color: C.w, fontWeight: 700 }}>{docHrs.toFixed(0)}h/wk</span>
          </div>
          <div>
            <Cite text={`↳ ${MODEL.docSource}`} />
          </div>
          <div style={{ marginTop: 6 }}>
            <span style={{ color: C.w }}>CCO review time</span> = {totalMeets.toLocaleString()} ×{' '}
            <span style={{ color: C.highlight }}>{MODEL.reviewMin} min</span> ={' '}
            <span style={{ color: C.w, fontWeight: 700 }}>{revHrs.toFixed(0)}h/wk</span>
          </div>
          <div>
            <Cite text={`↳ ${MODEL.reviewSource}`} />
          </div>
          <div style={{ marginTop: 6 }}>
            <span style={{ color: C.w }}>Gap chase time</span> = {totalMeets.toLocaleString()} ×{' '}
            <span style={{ color: C.emphasis }}>{(MODEL.gapRate * 100).toFixed(0)}%</span> incomplete ×{' '}
            <span style={{ color: C.highlight }}>{MODEL.chaseMin} min</span> ={' '}
            <span style={{ color: C.w, fontWeight: 700 }}>{chaseHrs.toFixed(0)}h/wk</span>
          </div>
          <div>
            <Cite text={`↳ ${MODEL.gapSource}`} />
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.bdr}` }}>
            <span style={{ color: C.emphasis, fontWeight: 700 }}>Total</span> = {docHrs.toFixed(0)} + {revHrs.toFixed(0)} +{' '}
            {chaseHrs.toFixed(0)} = <span style={{ color: C.emphasis, fontWeight: 700, fontSize: 15 }}>{Math.round(weeklyHrs)}h/wk</span>{' '}
            → <span style={{ color: C.emphasis, fontWeight: 700, fontSize: 15 }}>{yearlyHrs.toLocaleString()}h/yr</span> →{' '}
            <span style={{ color: C.emphasis, fontWeight: 700, fontSize: 15 }}>${(yearlyCost / 1000).toFixed(0)}k/yr</span>
          </div>
          <div style={{ marginTop: 4 }}>
            <Cite text={`↳ Blended rate $${MODEL.hourly}/hr — ${MODEL.hourlySource}`} />
          </div>
        </div>
      </div>

      <SectionLabel text="With ComplyVault — 75% recovered" color={C.brandLt} />
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        <StatBlock label="Hours recovered / year" value={recovered} suffix="h" color={C.brandLt} glow={C.brandGlow} big />
        <StatBlock label="Annual savings" value={Math.round(savedCost / 1000)} prefix="$" suffix="k" color={C.brandLt} glow={C.brandGlow} big />
        <StatBlock label="Hours back / week" value={Math.round(recovered / 50)} suffix="h" color={C.brandLt} glow={C.brandGlow} big />
      </div>

      <div
        style={{
          padding: '32px',
          borderRadius: 18,
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${C.brandDim}, ${C.s1})`,
          border: `1px solid ${C.brand}33`,
          textAlign: 'center',
          marginTop: 8,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -50,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 300,
            height: 200,
            background: C.brandGlow,
            filter: 'blur(100px)',
            opacity: 0.15,
            borderRadius: '50%',
          }}
        />
        <h2
          style={{
            fontSize: 26,
            fontWeight: 800,
            fontFamily: hd,
            color: C.w,
            margin: '0 0 10px',
            letterSpacing: -0.8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Stop bleeding <span style={{ color: C.emphasis }}>{Math.round(weeklyHrs)} hours</span> a week.
        </h2>
        <p
          style={{ fontSize: 15, color: C.g1, fontFamily: bd, margin: '0 0 24px', position: 'relative', zIndex: 1 }}
        >
          Meeting recording in. Audit pack out. Timestamped and supervisor-ready.
        </p>
        <DemoCtaButton />
      </div>
    </div>
  )
}

type StackLayer = {
  id: string
  label: string
  o: 'h' | 'cv'
  desc: string
  items: string
  problem?: string
}

// ════════════════════════════════════════
// STACK
// ════════════════════════════════════════
function Stack(): ReactElement {
  const [active, setActive] = useState<string | null>(null)

  const layers: StackLayer[] = [
    {
      id: 'ec',
      label: 'E-Comms Surveillance',
      o: 'h',
      desc: 'Scans email, Slack, SMS for non-compliant language. Real-time flagging and archiving.',
      items: 'Email monitoring · Slack scanning · SMS capture · Real-time alerts',
    },
    {
      id: 'mk',
      label: 'Marketing Review',
      o: 'h',
      desc: 'AI-powered review of ads, social posts, and performance claims against SEC Marketing Rule.',
      items: 'Ad approvals · Social media review · Performance claims · Disclosure checks',
    },
    {
      id: 'em',
      label: 'Employee Compliance',
      o: 'h',
      desc: 'Personal trade monitoring, attestations, certifications, code of ethics.',
      items: 'Trade pre-clearance · Holdings reports · Annual certs · Code of ethics',
    },
    {
      id: 'ov',
      label: 'Firm Oversight & Risk',
      o: 'h',
      desc: 'Compliance calendar, risk assessments, annual testing, audit trail for the overall program.',
      items: 'Compliance calendar · Risk matrix · 206(4)-7 testing · Incident tracking',
    },
    {
      id: 'cv',
      label: 'Client Meeting Documentation',
      o: 'cv',
      desc:
        'What actually happens between the advisor and the client — suitability discussions, recommendations, action items. Today, most firms reconstruct this from memory or don\'t capture it at all. ComplyVault closes the gap: meeting recording in, structured audit pack out — timestamped evidence, suitability trails, linked action items, supervisor-ready.',
      items: 'Auto transcription · Timestamped evidence · Suitability mapping · Action item tracking · CCO review dashboard',
      problem:
        "Without ComplyVault: advisors reconstruct notes from memory, CCOs chase incomplete records, and SEC examiners pull files at random to find gaps.",
    },
  ]

  const st = {
    h: { c: C.partner, g: C.partnerGlow, bg: C.partnerBg, tag: 'HADRIUS', icon: '◆' },
    cv: { c: C.brandLt, g: C.brandGlow, bg: C.brandDim, tag: 'COMPLYVAULT', icon: '✦' },
  } as const

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 40 }}>
        <div
          style={{
            position: 'absolute',
            top: -60,
            left: '20%',
            width: 300,
            height: 200,
            background: C.partnerGlow,
            filter: 'blur(100px)',
            opacity: 0.1,
            borderRadius: '50%',
          }}
        />
        <SectionLabel text="Compliance technology stack" color={C.partner} />
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: C.w,
            fontFamily: hd,
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: -1.2,
          }}
        >
          <span style={{ color: C.partner }}>Hadrius</span> covers the program.
          <br />
          <span style={{ color: C.brandLt }}>ComplyVault</span> covers the <span style={{ color: C.emphasis }}>meeting</span>.
        </h2>
        <p style={{ fontSize: 15, color: C.g1, fontFamily: bd, margin: '14px 0 0', lineHeight: 1.6, maxWidth: 560 }}>
          A complete compliance stack needs both layers. Hadrius handles program infrastructure. ComplyVault handles
          what happens in the room. Click each layer to explore.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
        {[
          { l: 'Hadrius', c: C.partner },
          { l: 'ComplyVault', c: C.brandLt },
        ].map((x) => (
          <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: x.c, boxShadow: `0 0 8px ${x.c}55` }} />
            <span style={{ fontSize: 12, color: C.g1, fontFamily: bd }}>{x.l}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {layers.map((l) => {
          const s = st[l.o]
          const isA = active === l.id
          const isCv = l.o === 'cv'
          return (
            <div
              key={l.id}
              role="button"
              tabIndex={0}
              onClick={() => setActive(isA ? null : l.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(isA ? null : l.id)
                }
              }}
              style={{
                background: isA ? s.bg : C.s1,
                border: `1px solid ${isA ? `${s.c}44` : C.bdr}`,
                borderRadius: 14,
                padding: isA ? '22px 24px' : '16px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: isA ? 5 : 3,
                  background: s.c,
                  boxShadow: isA ? `0 0 12px ${s.g}` : 'none',
                  transition: 'all 0.2s',
                }}
              />
              <div style={{ marginLeft: 14, position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: isA ? 12 : 0 }}>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: isA ? s.c : C.w,
                      fontFamily: hd,
                      transition: 'color 0.2s',
                    }}
                  >
                    {l.label}
                  </span>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: s.c,
                      background: s.bg,
                      padding: '3px 10px',
                      borderRadius: 20,
                      fontFamily: bd,
                      letterSpacing: 1,
                      border: `1px solid ${s.c}33`,
                    }}
                  >
                    {s.tag}
                  </span>
                  <span style={{ marginLeft: 'auto', fontSize: 14, color: s.c, opacity: isA ? 1 : 0.3 }}>{s.icon}</span>
                </div>
                {isA && (
                  <div>
                    {isCv && l.problem && (
                      <div
                        style={{
                          fontSize: 13,
                          color: C.emphasis,
                          fontFamily: bd,
                          lineHeight: 1.6,
                          marginBottom: 12,
                          padding: '12px 16px',
                          background: C.emphasisBg,
                          borderRadius: 8,
                          border: `1px solid ${C.emphasis}22`,
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: 10,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            display: 'block',
                            marginBottom: 6,
                          }}
                        >
                          The gap today
                        </span>
                        {l.problem}
                      </div>
                    )}
                    <div style={{ fontSize: 14, color: C.g1, fontFamily: bd, lineHeight: 1.6, marginBottom: 10 }}>
                      {l.desc}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: C.g2,
                        fontFamily: bd,
                        padding: '10px 14px',
                        background: C.surfaceDeep,
                        borderRadius: 8,
                        border: `1px solid ${C.bdr}`,
                      }}
                    >
                      {l.items}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: 28, padding: '24px 28px', background: C.s1, border: `1px solid ${C.bdr}`, borderRadius: 16 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: C.g2,
            fontFamily: bd,
            textTransform: 'uppercase',
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          The complete chain
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {(
            [
              { t: 'Advisor ↔ Client', c: C.w },
              { t: '→', c: C.g2 },
              { t: 'ComplyVault', c: C.brandLt, bold: true, bg: C.brandDim, bdr: `${C.brand}44` },
              { t: 'generates audit pack', c: C.g1 },
              { t: '→', c: C.g2 },
              { t: 'Hadrius', c: C.partner, bold: true, bg: C.partnerBg, bdr: `${C.partner}33` },
              { t: 'tracks in compliance program', c: C.g1 },
              { t: '→', c: C.g2 },
              { t: 'SEC Exam Ready ✓', c: C.brandLt, bold: true, bg: C.brandDim, bdr: `${C.brand}44` },
            ] satisfies Array<{
              t: string
              c: string
              bold?: boolean
              bg?: string
              bdr?: string
            }>
          ).map((x, i) => (
            <span
              key={i}
              style={{
                fontSize: 13,
                fontWeight: x.bold ? 700 : 400,
                color: x.c,
                fontFamily: x.bold ? hd : bd,
                background: x.bg || 'transparent',
                padding: x.bold ? '4px 12px' : '0',
                borderRadius: 6,
                border: x.bdr ? `1px solid ${x.bdr}` : 'none',
              }}
            >
              {x.t}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          padding: '32px',
          borderRadius: 18,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${C.brandDim}, ${C.s1})`,
          border: `1px solid ${C.brand}33`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -50,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 300,
            height: 200,
            background: C.brandGlow,
            filter: 'blur(100px)',
            opacity: 0.15,
            borderRadius: '50%',
          }}
        />
        <h2
          style={{
            fontSize: 24,
            fontWeight: 800,
            fontFamily: hd,
            color: C.w,
            margin: '0 0 10px',
            letterSpacing: -0.8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Complete your compliance stack.
        </h2>
        <p style={{ fontSize: 15, color: C.g1, fontFamily: bd, margin: '0 0 24px', position: 'relative', zIndex: 1 }}>
          Meeting recording in. Audit pack out. Works alongside the tools you already use.
        </p>
        <DemoCtaButton />
      </div>
    </div>
  )
}

// ════════════════════════════════════════
// MAIN
// ════════════════════════════════════════
export function RoiPageClient(): ReactElement {
  const [tab, setTab] = useState(0)
  const tabs = ['ROI Calculator', 'Compliance Stack']

  return (
    <section className="roi-page relative overflow-hidden noise-texture bg-background text-foreground pb-24 lg:pb-28">
      <style>{`
        .roi-page input[type="number"]::-webkit-inner-spin-button,
        .roi-page input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .roi-page input[type="number"] { -moz-appearance: textfield; }
        .roi-page ::selection { background: hsl(var(--primary) / 0.22); }
      `}</style>

      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-vault-green-500/10 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-gradient-radial from-vault-green-600/8 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-6">
        <div className="mb-10 text-center sm:text-left">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-vault-green-500 dark:text-vault-green-400 mb-3"
            style={{ fontFamily: bd }}
          >
            ComplyVault
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-foreground tracking-tight">
            ROI <span className="text-gradient">Calculator</span>
            <span className="text-muted-foreground font-normal"> & compliance stack</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl" style={{ fontFamily: bd }}>
            Built for the CCO, not the advisor. Adjust the inputs to estimate time at risk—then see how ComplyVault fits
            alongside your program tools.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', fontFamily: bd, color: C.w }}>
          <div
            style={{
              display: 'flex',
              gap: 0,
              marginBottom: 40,
              background: C.s1,
              borderRadius: 12,
              padding: 4,
              border: `1px solid ${C.bdr}`,
              boxShadow: '0 0 0 1px hsl(var(--primary) / 0.06)',
            }}
          >
            {tabs.map((t, i) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(i)}
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: 9,
                  background: tab === i ? C.brand : 'transparent',
                  color: tab === i ? '#fff' : C.g2,
                  fontFamily: hd,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: tab === i ? `0 0 20px ${C.brandGlow}` : 'none',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === 0 ? <Calculator /> : <Stack />}
        </div>
      </div>
    </section>
  )
}
