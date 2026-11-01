// Hover any [data-tip] or [data-img] element to see its popup; click to pin it open.
const tip = document.createElement('div')
tip.id = 'tip'
document.body.appendChild(tip)
let pinned = null
let current = null

function place(el) {
  const r = el.getBoundingClientRect()
  const maxLeft = scrollX + document.documentElement.clientWidth - tip.offsetWidth - 8
  tip.style.left = Math.max(8, Math.min(r.left + scrollX, maxLeft)) + 'px'
  let top = r.bottom + scrollY + 6
  if (r.bottom + tip.offsetHeight + 14 > innerHeight) top = r.top + scrollY - tip.offsetHeight - 6
  tip.style.top = top + 'px'
}

function show(el) {
  current = el
  tip.replaceChildren()
  if (el.dataset.img) {
    const img = document.createElement('img')
    img.src = el.dataset.img
    img.alt = el.dataset.alt || ''
    img.onload = () => { if (current === el) place(el) }
    tip.appendChild(img)
  }
  if (el.dataset.tip) {
    const text = document.createElement('div')
    text.textContent = el.dataset.tip
    tip.appendChild(text)
  }
  tip.classList.toggle('has-img', !!el.dataset.img)
  tip.style.display = 'block'
  place(el)
}

function hide() { current = null; tip.style.display = 'none' }

document.querySelectorAll('[data-tip], [data-img]').forEach(el => {
  el.addEventListener('mouseenter', () => show(el))
  el.addEventListener('mouseleave', () => { if (pinned !== el) pinned ? show(pinned) : hide() })
  el.addEventListener('click', e => {
    e.stopPropagation()
    if (pinned === el) { pinned = null; hide() } else { pinned = el; show(el) }
  })
})

tip.addEventListener('click', e => e.stopPropagation())
document.addEventListener('click', () => { pinned = null; hide() })
