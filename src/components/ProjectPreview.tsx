import type { Preview } from '../data'
import { CodeWindow, Cm, Kw, Str, Ty } from './CodeWindow'

export function ProjectPreview({ preview }: { preview: Preview }) {
  if (preview.type === 'image') {
    return (
      <img
        src={preview.src}
        alt={preview.alt}
        loading="lazy"
        className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
    )
  }

  switch (preview.id) {
    case 'splitly':
      return <SplitlyIllustration />
    case 'matchday':
      return <MatchDayIllustration />
    case 'bg-identifiers':
      return <BgIdentifiersIllustration />
    case 'ethicaflow':
      return <EthicaFlowIllustration />
  }
}

const balances = [
  { name: 'Maria', amount: 64.5 },
  { name: 'Ivan', amount: -42.5 },
  { name: 'Elena', amount: 18 },
  { name: 'Georgi', amount: -40 },
]

// The fewest transfers that settle the balances above.
const transfers: [string, string, number][] = [
  ['Ivan', 'Maria', 42.5],
  ['Georgi', 'Maria', 22],
  ['Georgi', 'Elena', 18],
]

function SplitlyIllustration() {
  const max = Math.max(...balances.map((b) => Math.abs(b.amount)))
  return (
    <div className="grid size-full place-items-center p-6 sm:p-10" aria-hidden="true">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-5 shadow-lg">
        <div className="flex items-baseline justify-between">
          <p className="font-semibold">Weekend in Rila</p>
          <p className="font-mono text-xs text-muted">4 members · EUR</p>
        </div>
        <ul className="mt-4 space-y-2.5">
          {balances.map((b) => (
            <li key={b.name} className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3 text-sm">
              <span className="text-muted">{b.name}</span>
              <span className="h-2 overflow-hidden rounded-full bg-surface-2">
                <span
                  className={`block h-full rounded-full ${b.amount > 0 ? 'bg-positive' : 'bg-negative'}`}
                  style={{ width: `${(Math.abs(b.amount) / max) * 100}%` }}
                />
              </span>
              <span className={`text-right font-mono text-xs ${b.amount > 0 ? 'text-positive' : 'text-negative'}`}>
                {b.amount > 0 ? '+' : '−'}€{Math.abs(b.amount).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-lg bg-accent-soft p-3">
          <p className="font-mono text-[11px] tracking-wider text-accent uppercase">
            Settle up · {transfers.length} transfers
          </p>
          <ul className="mt-1.5 space-y-0.5 text-sm">
            {transfers.map(([from, to, amount]) => (
              <li key={`${from}-${to}`} className="flex justify-between">
                <span>
                  {from} → {to}
                </span>
                <span className="font-mono text-xs">€{amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Node({ label, sub, accent = false }: { label: string; sub: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-center shadow-sm ${accent ? 'border-accent/50 bg-accent-soft' : 'border-border bg-surface'}`}
    >
      <p className="text-xs font-semibold">{label}</p>
      <p className="font-mono text-[10px] text-muted">{sub}</p>
    </div>
  )
}

function MatchDayIllustration() {
  return (
    <div className="grid size-full place-items-center p-6 sm:p-10" aria-hidden="true">
      <div className="w-full max-w-md rounded-xl border border-dashed border-accent/40 p-4">
        <p className="mb-3 font-mono text-[10px] tracking-wider text-accent uppercase">Aspire AppHost</p>
        <div className="grid grid-cols-3 gap-2">
          <Node label="Catalog API" sub="matches, prices" />
          <Node label="Booking API" sub="holds, bookings" accent />
          <Node label="Notifications" sub="worker" />
        </div>
        <div className="my-2 flex justify-around font-mono text-xs text-muted">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Node label="PostgreSQL" sub="catalog, bookings" />
          <Node label="Redis" sub="seat holds · TTL" />
          <Node label="RabbitMQ" sub="BookingConfirmed" />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-md bg-surface-2 px-3 py-2 font-mono text-[10px] text-muted">
          <span className="size-1.5 rounded-full bg-positive" />
          <span className="truncate">trace 4bf92f · POST /bookings → e-ticket sent</span>
          <span className="ml-auto shrink-0">182 ms</span>
        </div>
      </div>
    </div>
  )
}

function BgIdentifiersIllustration() {
  return (
    <div className="grid size-full place-items-center p-6 sm:p-10" aria-hidden="true">
      <CodeWindow title="Example.cs" className="w-full max-w-md text-left">
        <Kw>var</Kw> egn = <Ty>Egn</Ty>.<Ty>Generate</Ty>({'\n'}
        {'    '}
        <Kw>new</Kw> <Ty>DateOnly</Ty>(2003, 8, 21), <Ty>Gender</Ty>.Female);{'\n\n'}
        <Kw>if</Kw> (<Ty>Egn</Ty>.<Ty>TryParse</Ty>(egn, <Kw>out var</Kw> info)){'\n'}
        {'{\n'}
        {'    '}info.BirthDate; <Cm>// 2003-08-21</Cm>{'\n'}
        {'    '}info.Gender;    <Cm>// Female</Cm>{'\n'}
        {'}\n\n'}
        <Ty>BgIban</Ty>.<Ty>IsValid</Ty>(<Str>"BG80BNBG96611020345678"</Str>); <Cm>// true</Cm>
      </CodeWindow>
    </div>
  )
}

const stages = ['Draft', 'Submitted', 'In review', 'Approved']

function EthicaFlowIllustration() {
  return (
    <div className="grid size-full place-items-center p-6" aria-hidden="true">
      <div className="flex w-full max-w-sm flex-col gap-3">
        <div className="flex items-center justify-between gap-1">
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-1">
              <span
                className={`rounded-full px-2.5 py-1 font-mono text-[10px] ${i < 3 ? 'bg-accent text-white dark:text-bg' : 'border border-border bg-surface text-muted'}`}
              >
                {stage}
              </span>
              {i < stages.length - 1 && <span className="text-xs text-muted">→</span>}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 shadow-sm">
          <p className="text-xs font-semibold">Reviewer feedback</p>
          <p className="mt-1 text-xs text-muted">Please clarify how participant data will be anonymised.</p>
          <div className="mt-2 flex gap-2">
            <span className="rounded bg-positive/15 px-2 py-0.5 font-mono text-[10px] text-positive">Approve</span>
            <span className="rounded bg-negative/15 px-2 py-0.5 font-mono text-[10px] text-negative">Request revisions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
