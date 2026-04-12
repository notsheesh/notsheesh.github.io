import { PeakTrigger } from '../components/Peak'

const HL = {
  manipal: { color: '#8B1A1A' },
  rit:     { color: '#F76902' },
  cmu:     { color: '#c41230' },
  nvidia:  { color: '#76b900' },
}

const hl = (school) => ({
  fontWeight: 700,
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
  ...HL[school],
})

export default function ThenAndNow() {
  return (
    <section id="now" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 2, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationThickness: '1px' }}>
        Then &amp; Now
      </h2>

      <p>
        I started formally training in computers at{' '}
        <span style={hl('manipal')}>Manipal Institute of Technology</span>,
        in Manipal — a small beach town on India's west coast.
      </p>

      <p>
        After graduating with a B.Tech. in Electrical and Communication Engineering,
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
          style={{ textDecoration: 'underline', textUnderlineOffset: '0.18em', textDecorationThickness: '1px' }}
        >
          NeuroAI Computer Architecture Lab
        </PeakTrigger>
        {' '}
        <a href="https://arxiv.org/abs/2603.12465" target="_blank" rel="noreferrer" style={{ fontSize: '0.75em', verticalAlign: 'super', color: 'var(--muted)' }}>[arxiv]</a>
        {' '}while TAing his flagship course —{' '}
        <PeakTrigger
          text=""
          img="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347382081i/2913411.jpg"
          style={{ textDecoration: 'underline', textUnderlineOffset: '0.18em', textDecorationThickness: '1px' }}
        >
          18740 Modern Computer Architecture
        </PeakTrigger>.
      </p>

      <p>
        Pittsburgh wasn't any better, and worse yet, it was windy.
        So I moved to arguably the better coast.
        Now, I work as a fullchip verification engineer with a focus on memory systems at{' '}
        <span style={hl('nvidia')}>NVIDIA</span>.
        California is nice and warm, reminds me of Manipal, except the traffic and taxes.
      </p>
    </section>
  )
}
