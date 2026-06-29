import { PeakTrigger } from '../components/Peak'

const GOVIND_TIP = 'Govind'
const PHIL_DUNPHY_TIP = 'Phil Dunphy'
const SUKEERTHI_TIP = 'Sukeerthi'

const BELIEFS = [
  'Everything is made up and there are no prerequisites.',
  'Tools are meant to be mastered, not worshipped.',
  <>
    Learning comes from doing, not reading, watching, listening or thinking.
    <PeakTrigger text={GOVIND_TIP} className="annotation-star">
      {'\u2733\uFE0E'}
    </PeakTrigger>
  </>,
  <>
    Slow is smooth, smooth is fast.
    <PeakTrigger text={PHIL_DUNPHY_TIP} className="annotation-star">
      {'\u2733\uFE0E'}
    </PeakTrigger>
  </>,
  'You can do more than you think. The laws of physics are the only limit.',
  <>
    {'In the ' + 'end, people are everything.'}
    <PeakTrigger text={SUKEERTHI_TIP} className="annotation-star">
      {'\u2733\uFE0E'}
    </PeakTrigger>
  </>,
]

export default function Beliefs() {
  return (
    <section id="beliefs">
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 16, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationThickness: '1px' }}>
        Some things I believe in
      </h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {BELIEFS.map((b, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5em', color: 'var(--text)' }}>
            <span style={{ color: 'var(--muted)', fontWeight: 700 }}>{'\u2733\uFE0E'}</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
