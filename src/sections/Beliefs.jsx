const BELIEFS = [
  'Every cycle counts and very little matters.',
  'Tools are meant to be mastered, not worshipped.',
  'One must do things well, even if that means choosing less.',
  'Learning comes from doing, not reading, watching, listening or thinking.',
  'There are no bad students, only impatient teachers.',
  'Slow is smooth, smooth is fast.',
  <>Simple rules result in complex, intelligent behavior<br />And complex rules result in simple, stupid behavior.</>,
  'You can do more than you think. The laws of physics are the only limit.',
  'Courage is shorter in supply than genius.',
  "There is no secret ingredient. It's just you.",
  'In the end, people are everything.',
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
            <span style={{ color: 'var(--muted)', fontWeight: 700 }}>{'✳\uFE0E'}</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
