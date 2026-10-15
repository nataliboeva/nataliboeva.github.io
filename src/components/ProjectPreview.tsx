import type { Preview } from '../data'
import { CodeWindow, Cm, Kw, Str, Ty } from './CodeWindow'

export function ProjectPreview({ preview }: { preview: Preview }) {
  if (preview.type === 'image') {
    const motion = 'transition duration-500 group-hover:scale-[1.02]'

    if (preview.fit === 'contain') {
      return (
        <div className="grid size-full place-items-center p-4 sm:p-8">
          <img
            src={preview.src}
            alt={preview.alt}
            loading="lazy"
            className={`max-h-full w-full rounded-lg border border-border object-contain shadow-lg ${motion}`}
          />
        </div>
      )
    }

    const cover = `size-full object-cover object-top ${motion}`
    return preview.srcDark ? (
      <>
        <img src={preview.src} alt={preview.alt} loading="lazy" className={`${cover} dark:hidden`} />
        <img src={preview.srcDark} alt={preview.alt} loading="lazy" className={`${cover} hidden dark:block`} />
      </>
    ) : (
      <img src={preview.src} alt={preview.alt} loading="lazy" className={cover} />
    )
  }

  switch (preview.id) {
    case 'bg-identifiers':
      return <BgIdentifiersIllustration />
    case 'ethicaflow':
      return <EthicaFlowIllustration />
  }
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
