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
  { word: 'computer architecture and design', tip: 'What happens between transistors and code. Most people skip this part.' },
  { word: 'programming', tip: 'Turning vague ideas into precise bugs.' },
  { word: 'music', tip: 'Mostly film scores and things my Spotify Wrapped is embarrassed by.' },
  { word: 'reading', tip: 'Mostly non-fiction. Occasionally fiction. Rarely on schedule.' },
  { word: 'chess', tip: 'Elo rating: enough to be humbled regularly.' },
  { word: 'poker', tip: "Game theory, psychology, and convincing yourself it's a skill game." },
  { word: 'movies', tip: 'Will watch anything with a good score and decent cinematography.' },
  { word: 'video games', tip: "Currently: whatever I can finish before feeling guilty about it." },
  { word: 'tennis', tip: 'Self-taught. Shoulder injuries pending.' },
  {
    word: 'astronomy',
    tip: "The universe is 13.8 billion years old and I still can't reply to texts on time.",
    img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Cosmos_-_A_Personal_Voyage_%28title_card%29.jpg',
  },
  { word: 'motorsports', tip: 'F1, MotoGP. Strategy, chaos, and very loud.' },
  {
    word: 'walking',
    tip: 'Underrated. Solves most problems.<br>But only if you have them sketched well in your head. My girlfriend and mom were right.',
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
        I'm interested in{' '}
        <PeakTrigger text={INTERESTS[0].tip} style={underlined}>
          {INTERESTS[0].word}
        </PeakTrigger>
        . I also love{' '}
        {INTERESTS.slice(1).map(({ word, tip, img }, i) => {
          const rest = INTERESTS.slice(1)
          const isLast = i === rest.length - 1
          const isSecondLast = i === rest.length - 2
          return (
            <span key={word}>
              <PeakTrigger text={tip} img={img} style={underlined}>{word}</PeakTrigger>
              {isLast ? '.' : isSecondLast ? ' and ' : ', '}
            </span>
          )
        })}
      </p>

      <p style={{ marginTop: 14 }}>Hopefully, there will be time for everything.</p>
    </>
  )
}
