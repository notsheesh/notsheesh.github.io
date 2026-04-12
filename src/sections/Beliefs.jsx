const BELIEFS = [
  'Every cycle counts and very little matters.',
  'Tools are meant to be mastered, not worshipped.',
  'Learning comes from doing, not just reading or thinking.',
  'Simple rules result in complex, intelligent behavior and complex rules result in simple, stupid behavior.',
  'In the end, people are everything.',
]

export default function Beliefs() {
  return (
    <section id="beliefs">
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 16, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationThickness: '1px' }}>
        I believe
      </h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {BELIEFS.map(b => (
          <li key={b} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5em', color: 'var(--text)' }}>
            <span style={{ color: 'var(--muted)', fontWeight: 700 }}>✳</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
