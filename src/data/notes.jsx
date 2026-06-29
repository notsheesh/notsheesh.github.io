const note = (id, date, content, details = {}) => ({ id, date, content, ...details })

export const notes = [
  note('sample-the-world', '2026-06-28', '“You can sample the world or you can live in it.” — Simon Sarris'),
  note('simple-rules', '2026-06-28', '“Simple, clear purpose and principles give rise to complex, intelligent behavior. Complex rules and regulations give rise to simple, stupid behavior.” — Dee Hock'),
  note('valuable-education', '2026-06-28', '“The most valuable of all education is the ability to make yourself do the thing you have to do, when it has to be done, whether you like it or not.” — Aldous Huxley'),
  note('yuddh', '2026-06-28', (
    <p>
      युद्ध नहीं जिनके जीवन में, वे भी बहुत अभागे होंगे।<br />
      या तो प्रण को तोड़ा होगा, या फिर रण से भागे होंगे॥ — डॉ. अर्जुन सिसोदिया
    </p>
  )),
  note('btree', '2026-06-07', '“The more you think about what the B in B-tree means, the better you understand B-trees.” — Rudolf Bayer'),
  note('build-thought', '2026-05-21', '“Get that soft sponge in your head, which was mostly a primitive state machine tuned by evolution to hunt and eat and fuck, to think abstractly. Learn to build thought.” — Vlad Feinberg'),
  note('future', '2026-04-27', '“The future is already here, it’s just not evenly distributed.” — William Gibson'),
  note('teachers', '2025-10-23', 'There are no bad students, only impatient teachers.'),
  note('hell', '2025-10-20', '“If you’re going through hell, keep going.” — Winston Churchill'),
  note('simplicity', '2025-10-19', '“An idiot admires complexity, a genius admires simplicity” — Terry Davis, Creator of Temple OS'),
  note('knowledge', '2025-10-18', '“No amount of knowledge is going to change man, because knowledge is limited, and as long as you remain in that realm of knowledge, you will always remain within a certain limitation.” — J. Krishnamurti'),
  note('anything', '2025-10-16', (
    <ul>
      <li>“The only principle that does not inhibit progress is: anything goes.” — Paul Feyerabend</li>
      <li>
        <a rel="external" href="https://www.marxists.org/reference/subject/philosophy/works/ge/feyerabe.htm" className="link">
          Against Method, Outline of an anarchistic theory of knowledge
        </a>
      </li>
    </ul>
  )),
  note('bombs', '2025-10-14', '“I am thinking about something much more important than bombs. I am thinking about computers.” — John von Neumann'),
  note('noam', '2025-10-13', (
    <p>
      “We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence” — Noam Shazeer,{' '}
      <a rel="external" href="https://arxiv.org/abs/2002.05202v1" className="link">
        GLU Variants Improve Transformer
      </a>
    </p>
  )),
  note('12', '2025-10-12', '“When you first start to study a field, it seems like you have to memorize a zillion things. You don’t. What you need is to identify the core principles – generally three to twelve of them - that govern the field.” — John Reed'),
  note('magic', '2025-10-11', 'Hold your dreams like pixie dust in a jar, close and hidden in the dark — for they only glow in the hush of your heart, or scatter at the first wind of doubt.'),
  note('reality', '2025-10-11', (
    <ul>
      <li>Reality is the best framework.</li>
      <li>Slow is fake. Reality is the fastest framework.</li>
      <li>Simulation is fake. Reality is the truest framework.</li>
    </ul>
  )),
  note('intelligence', '2025-10-06', '“If you value intelligence above all other human qualities, you’re gonna have a bad time” — Ilya Sutskever'),
  note('fear', '2025-09-28', '“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.” ― Frank Herbert, Dune', {
    title: 'Fear is the mind killer',
  }),
  note('ramanujan', '2025-03-24', '“Don’t you see? An equation has no meaning to me... unless it expresses a thought of God.” — Srinivas Ramanujan Aiyangar', {
    image: 'https://m.media-amazon.com/images/M/MV5BMzg5NmI3ZDktOGU0Ni00OTI1LWI0NTktNmY0YTBiNjJkMDg0XkEyXkFqcGc@._V1_.jpg',
    imageAlt: 'Srinivasa Ramanujan writing equations in chalk in The Man Who Knew Infinity',
    subimages: [
      'https://m.media-amazon.com/images/M/MV5BYTdlZjNkNmItMTQ0MS00MmQ0LTkyYmMtMDJmZWY1OTlhMDY2XkEyXkFqcGc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMDhiY2FjNTctMWQxNi00MzA0LWFlZmEtMjllYzA0MTQ5NGMxXkEyXkFqcGc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BYThlMWFlOGMtOTc2MS00ODhiLTgxNTAtZmNjYWE1NDVhODg2XkEyXkFqcGc@._V1_.jpg',
    ],
    subimageAlts: [
      'Srinivasa Ramanujan working on mathematics in a sunlit room',
      'G. H. Hardy reading at his desk in The Man Who Knew Infinity',
      'Srinivasa Ramanujan and his wife Janaki outside their home',
    ],
  }),
  note('composite', '2025-03-16', '“The ideal engineer is a composite ... He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.” — N. W. Dougherty'),
  note('giants', '2025-02-19', '“If I have seen further, it is by standing on the shoulders of giants.” — Sir Isaac Newton', {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Orion_aveugle_cherchant_le_soleil.jpg/1280px-Orion_aveugle_cherchant_le_soleil.jpg',
    imageAlt: 'Blind Orion searching for the rising sun in Nicolas Poussin’s landscape painting',
  }),
  note('secret', '2025-02-19', '“There is no secret ingredient. It’s just you.” — Mr. Ping', {
    image: 'https://sethlewis.ie/wp-content/uploads/2021/03/poscroll1-e1616582385237.jpeg',
    imageAlt: 'Mr. Ping looking through a scroll in Kung Fu Panda',
  }),
  note('turing', '2025-01-06', (
    <>
      <p>“Sometimes it’s the very people who no one imagines anything of who do the things no one can imagine.” — Christopher, The Imitation Game</p>
      <p>“A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.” — Alan Turing</p>
    </>
  ), {
    image: 'https://m.media-amazon.com/images/M/MV5BMTc3ZWRhYmYtOGVhZS00NmNkLWJiNzMtN2I1MTJlNWM2NjEyXkEyXkFqcGc@._V1_.jpg',
    imageAlt: 'Alan Turing sitting in front of the bombe machine in The Imitation Game',
    subimages: [
      'https://m.media-amazon.com/images/M/MV5BMmQ5YzA1OTMtNDE1Mi00MWU1LWE3OTQtNjQ2ZTNkYTIwMjc1XkEyXkFqcGc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDRkYjlhMjItZDA3Zi00YTY2LTlhOTctNjdlYjljYjM5ZjNiXkEyXkFqcGc@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BODc4M2NjM2UtMmMxYS00ZDI0LWFhYjEtNmYxZmRjMDI5ODg0XkEyXkFqcGc@._V1_.jpg',
    ],
    subimageAlts: [
      'Alan Turing and Joan Clarke working on papers outside at Bletchley Park',
      'Alan Turing silhouetted alone in a field at sunset',
      'Alan Turing and other cryptanalysts looking at the bombe machine',
    ],
  }),
  note('mountain', '2024-09-04', '“Mountain: identified. Time to climb” — Ilya Sutskever'),
  note('chm', '2024-07-05', (
    <>
      <p>“The best way to predict the future is to invent it.” — Alan Kay</p>
      <p>“Necessity is the mother of invention.” — Plato</p>
    </>
  ), {
    title: 'Computer History Museum, Mountain View, CA',
  }),
  note('minimalism', '2024-06-06', '“All you needed was a light, a cup of tea, and your stereo.” — Steve Jobs', {
    image: 'https://res.cloudinary.com/dkpjmxbwo/image/upload/v1/Aspen/TEMP/TEMP_Steve_and_Tiffany_lamp_Diana_Walker_x75sqx',
    imageAlt: 'Steve Jobs sitting on the floor under a Tiffany lamp in his Woodside home',
  }),
  note('roon', '2022-10-22', '“Experts are fake, smart generalists rule the world, everything is designed by people no smarter than you, and courage is in shorter supply than genius” — roon'),
].sort((a, b) => b.date.localeCompare(a.date))
