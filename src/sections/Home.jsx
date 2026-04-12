import { PeakTrigger } from '../components/Peak'

const NAME = [
  {
    word: 'Shreesh',
    tip: 'Shreesh (श्रीश) comes from Sanskrit — Shri (श्री) meaning prosperity, grace, and auspiciousness, and Ish (ईश) meaning lord or master. Together: Lord of Prosperity — an epithet for Vishnu, consort of Lakshmi.',
  },
  {
    word: 'Tripathi',
    tip: "Tripathi (त्रिपाठी) — Tri (त्रि) meaning three, Pathi (पाठी) meaning one who recites. Together: one who has mastered the recitation of three Vedas — of which I've mastered approximately zero. The name stays though.",
  },
]

const INTERESTS = [
  'computer architecture and design',
  'programming',
  'music',
  'reading',
  'chess',
  'poker',
  { word: 'movies', img: 'https://m.media-amazon.com/images/M/MV5BMTk5MzU4NzkxNF5BMl5BanBnXkFtZTgwMTk4ODE0MzE@._V1_FMjpg_UX2048_.jpg' },
  { word: 'video games', img: 'https://upload.wikimedia.org/wikipedia/en/4/46/Tux_Racer_cover.png' },
  'tennis',
  { word: 'astronomy', img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Cosmos_-_A_Personal_Voyage_%28title_card%29.jpg' },
  { word: 'cars and planes', tip: 'Anything that goes fast and is loud tbh.', img: 'https://media1.tenor.com/m/uL1odm9xadoAAAAd/looney-tunes-road-runner.gif' },
  {
    word: 'walking',
    tip: 'Underrated. Solves most problems. But only if you have them sketched well in your head. My girlfriend and mom were right — though I forget this every fortnight and rediscover it from first principles.',
    img: 'https://c.tenor.com/N4CS9Sjw_1IAAAAd/tenor.gif',
  },
  { word: 'sleeping', tip: "8 hours minimum or I'm not responsible for my code. ¯\\_(ツ)_/¯" },
]

const underlined = {
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
}

export default function Home() {
  return (
    <>
      <h1 style={{
        fontSize: '1.55rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        color: 'var(--text)',
        lineHeight: 1,
        marginBottom: '36px',
      }}>
        {NAME.map(({ word, tip }, i) => (
          <span key={word}>
            <PeakTrigger text={tip} style={{ borderBottom: '1px solid var(--muted)', cursor: 'pointer' }}>
              {word}
            </PeakTrigger>
            {i < NAME.length - 1 && ' '}
          </span>
        ))}
      </h1>

      <img
        src="/assets/shreesh_picture_square.jpg"
        alt="Shreesh Tripathi"
        style={{
          display: 'block',
          width: 280,
          height: 'auto',
          marginBottom: 24,
          transition: 'transform 150ms ease, box-shadow 150ms ease',
        }}
        onMouseEnter={e => Object.assign(e.target.style, { transform: 'translate(-5px,-5px)', boxShadow: '8px 8px 0 #111' })}
        onMouseLeave={e => Object.assign(e.target.style, { transform: '', boxShadow: '' })}
      />

      <p>Hi, I'm Shreesh and I love computers.</p>

      <p style={{ marginTop: 14 }}>
        I'm interested in computer architecture and design. I also love{' '}
        {INTERESTS.slice(1).map((item, i) => {
          const rest = INTERESTS.slice(1)
          const isLast = i === rest.length - 1
          const isSecondLast = i === rest.length - 2
          const word = typeof item === 'string' ? item : item.word
          const suffix = isLast ? '.' : isSecondLast ? ' and ' : ', '

          if (typeof item === 'object' && (item.tip || item.img)) {
            return (
              <span key={word}>
                <PeakTrigger text={item.tip || ''} img={item.img} style={underlined}>{word}</PeakTrigger>
                {suffix}
              </span>
            )
          }
          return <span key={word}>{word}{suffix}</span>
        })}
      </p>

      <p style={{ marginTop: 14 }}>Hopefully, there will be time for everything.</p>
    </>
  )
}
