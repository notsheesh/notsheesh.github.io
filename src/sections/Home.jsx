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
  'computer architecture and programming',
  {
    word: 'music',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/The_Beatles_Abbey_Road_album_cover.jpg',
    imgAlt: 'The Beatles Abbey Road album cover',
  },
  {
    word: 'reading',
    img: 'https://m.media-amazon.com/images/I/719g0hOCp8L._SL1500_.jpg',
    imgAlt: 'I Wonder Why Stars Twinkle and Other Questions About Space book cover',
  },
  {
    word: 'movies',
    img: 'https://m.media-amazon.com/images/M/MV5BYTg0OTcwYzItOTdhYi00MDA2LTk0NmUtMzA5M2E5NmU5ODM4XkEyXkFqcGc@._V1_.jpg',
    imgAlt: 'A collage of science fiction space scenes from Interstellar',
  },
  {
    word: 'video games',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/46/Tux_Racer_cover.png',
    imgAlt: 'Tux Racer video game cover',
  },
  {
    word: 'tennis',
    img: 'https://i1.sndcdn.com/artworks-hHQ3FmyEB9bIO2qJ-MataYA-t500x500.jpg',
    imgAlt: 'Wii Sports tennis match on a grass court',
  },
  {
    word: 'astronomy',
    img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Cosmos_-_A_Personal_Voyage_%28title_card%29.jpg',
    imgAlt: 'Cosmos: A Personal Voyage title card',
  },
  {
    word: 'cars',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Porsche_911E_ca_1969.jpg',
    imgAlt: 'Silver 1969 Porsche 911E parked outdoors',
  },
  {
    word: 'planes',
    img: 'https://wallpapercave.com/wp/fPkmoiS.jpg',
    imgAlt: 'A B-2 Spirit stealth bomber flying with two F-22 fighter jets',
  },
  {
    word: 'walking',
    tip: 'Underrated. Solves most problems. But only if you have them sketched well in your head. My girlfriend and mom were right — though I forget this every fortnight and rediscover it from first principles.',
    img: 'https://c.tenor.com/N4CS9Sjw_1IAAAAd/tenor.gif',
    imgAlt: 'A looping animation of someone walking with determined energy',
  },
  {
    word: 'sleeping',
    tip: "8 hours minimum or I'm not responsible for my code. ¯\\_(ツ)_/¯",
    img: 'https://imgs.xkcd.com/comics/cant_sleep.png',
    imgAlt: 'xkcd comic Cant Sleep about late-night thoughts',
  },
]

const underlined = {
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
}

const HL = {
  manipal: { color: '#8B1A1A' },
  rit:     { color: '#F76902' },
  cmu:     { color: '#c41230' },
  nvidia:  { color: '#76b900' },
}

const hl = (place) => ({
  fontWeight: 700,
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
  ...HL[place],
})

export default function Home() {
  return (
    <section id="about">
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p>Hi, I'm Shreesh.</p>

        <p>
          I love computer architecture and programming. I work on end to end fullchip vmod verif for Rubin and Feynman with a focus on memory systems at{' '}
          <span style={hl('nvidia')}>NVIDIA</span>.
        </p>

        <p>
          I started formally training in computers at{' '}
          <span style={hl('manipal')}>Manipal Institute of Technology</span>,
          in Manipal — a small beach town on India's west coast.
        </p>

        <p>
          After graduating with a B.Tech. in Electronics and Communication Engineering,
          I moved to Bangalore and spent about a year shuffling between engineering, product and research — still not sure what I was doing, but it was fun.
          And then I went on to spend a semester taking graduate classes in theoretical computer science at{' '}
          <span style={hl('rit')}>Rochester Institute of Technology</span>.
        </p>

        <p>
          Rochester was cold so I transferred out to{' '}
          <span style={hl('cmu')}>Carnegie Mellon University</span>{' '}
          to pursue an M.S. in Electrical and Computer Engineering.
          At CMU, I worked with Professor John Paul Shen and his PhD student Prabhu Vellaisamy
          at the{' '}
          <PeakTrigger
            text="Profiling gemm kernels because there's no free launch*"
            iframe="https://arxiv.org/html/2603.12465v1"
            style={underlined}
          >
            NeuroAI Computer Architecture Lab
          </PeakTrigger>
          {' '}
          <a href="https://arxiv.org/abs/2603.12465" target="_blank" rel="noreferrer" style={{ fontSize: '0.75em', verticalAlign: 'super', color: 'var(--muted)' }}>[arxiv]</a>
          {' '}while TAing his flagship course —{' '}
          <PeakTrigger
            text=""
            img="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347382081i/2913411.jpg"
            imgAlt="Computer Architecture: A Quantitative Approach book cover"
            style={underlined}
          >
            18740 Modern Computer Architecture
          </PeakTrigger>.
        </p>

        <p>
          Pittsburgh wasn't any better, and worse yet, it was windy.
          So I moved to arguably the better coast.
          California is nice and warm, reminds me of Manipal, except the traffic and taxes.
        </p>

        <p>
          Besides computers, I love{' '}
          {INTERESTS.slice(1).map((item, i) => {
            const rest = INTERESTS.slice(1)
            const isLast = i === rest.length - 1
            const isSecondLast = i === rest.length - 2
            const word = typeof item === 'string' ? item : item.word
            const suffix = isLast ? '.' : isSecondLast ? ' and ' : ', '

            if (typeof item === 'object' && (item.tip || item.img)) {
              return (
                <span key={word}>
                  <PeakTrigger text={item.tip || ''} img={item.img} imgAlt={item.imgAlt} style={underlined}>{word}</PeakTrigger>
                  {suffix}
                </span>
              )
            }
            return <span key={word}>{word}{suffix}</span>
          })}
        </p>

        <p>
          Hopefully, there will be time for everything.
          <PeakTrigger
            text="Gokul P"
            className="annotation-star"
          >
            {'✳\uFE0E'}
          </PeakTrigger>
        </p>
      </div>
    </section>
  )
}
