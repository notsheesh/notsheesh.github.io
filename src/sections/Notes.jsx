import { marked } from 'marked'
import { PeakTrigger } from '../components/Peak'

const noteModules = import.meta.glob('../notes/*.md', { eager: true })

const renderer = new marked.Renderer()

renderer.link = (href, title, text) => {
  let out = `<a rel="external" href="${encodeURI(href)}" class="link"`
  if (title) out += ` title="${escapeAttribute(title)}"`
  out += `>${text}</a>`
  return out
}

const notes = Object.entries(noteModules)
  .map(([path, module]) => {
    const data = module.default || module
    return {
      id: path.match(/\/([^/]+)\.md$/)?.[1] || path,
      ...data,
    }
  })
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function Markdown({ source }) {
  const html = marked.parse(source || '', {
    smartLists: true,
    smartypants: true,
    renderer,
  })

  return <div className="md-output" dangerouslySetInnerHTML={{ __html: html }} />
}

function NoteImage({ src, title }) {
  return (
    <a className="note-image-link" rel="external" href={src}>
      <img
        className="note-image"
        src={src}
        alt={title ? `${title} preview image` : 'Note preview image'}
        decoding="async"
      />
    </a>
  )
}

export default function Notes() {
  return (
    <section id="notes" className="notes-section">
      <h2 className="section-heading">Notes</h2>
      <p className="notes-intro">
        <em>
          Things I want to remember ∩ Things I don't mind the internet knowing
          <PeakTrigger
            text={'<a rel="external noopener noreferrer" target="_blank" href="https://squadrick.dev/">squadrick.dev</a>'}
            className="annotation-star"
          >
            {'✳\uFE0E'}
          </PeakTrigger>
        </em>
      </p>

      <div className="notes-list">
        {notes.map(note => (
          <article className="note-post" id={`note-${note.id}`} key={note.id}>
            {note.title && (
              <header className="note-header">
                <h3>{note.title}</h3>
              </header>
            )}

            {note.image && <NoteImage src={note.image} title={note.title} />}

            {note.subimages && (
              <div className="note-subimages">
                {note.subimages.map(image => (
                  <NoteImage src={image} title={note.title} key={image} />
                ))}
              </div>
            )}

            <Markdown source={note.content} />
          </article>
        ))}
      </div>
    </section>
  )
}
