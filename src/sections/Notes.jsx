import { PeakTrigger } from '../components/Peak'
import { notes } from '../data/notes'

function NoteContent({ children }) {
  return (
    <div className="note-content">
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  )
}

function NoteImage({ src, alt }) {
  return (
    <a className="note-image-link" rel="external" href={src}>
      <img
        className="note-image"
        src={src}
        alt={alt || 'Image accompanying this note'}
        decoding="async"
      />
    </a>
  )
}

function NoteSeparator() {
  return (
    <div className="note-separator" aria-hidden="true">
      <span>*</span>
      <span>*</span>
      <span>*</span>
    </div>
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
            text="Squadrick"
            className="annotation-star notes-intro-star"
          >
            {'✳\uFE0E'}
          </PeakTrigger>
        </em>
      </p>

      <div className="notes-list">
        {notes.map((note, index) => (
          <article className="note-post" id={`note-${note.id}`} key={note.id}>
            {note.title && (
              <header className="note-header">
                <h3>{note.title}</h3>
              </header>
            )}

            {note.image && <NoteImage src={note.image} alt={note.imageAlt} />}

            {note.subimages && (
              <div className="note-subimages">
                {note.subimages.map((image, imageIndex) => (
                  <NoteImage
                    src={image}
                    alt={note.subimageAlts?.[imageIndex] || note.imageAlt}
                    key={image}
                  />
                ))}
              </div>
            )}

            <NoteContent>{note.content}</NoteContent>
            {index < notes.length - 1 && <NoteSeparator />}
          </article>
        ))}
      </div>
    </section>
  )
}
