// Hover any [data-tip] element to see its note; click to pin it open.
const tip = document.createElement('div')
tip.id = 'tip'
document.body.appendChild(tip)
let pinned = null

function show(el) {
  tip.textContent = el.dataset.tip
  tip.style.display = 'block'
  const r = el.getBoundingClientRect()
  let left = r.left + scrollX
  const maxLeft = scrollX + document.documentElement.clientWidth - tip.offsetWidth - 8
  tip.style.left = Math.max(8, Math.min(left, maxLeft)) + 'px'
  let top = r.bottom + scrollY + 6
  if (r.bottom + tip.offsetHeight + 14 > innerHeight) top = r.top + scrollY - tip.offsetHeight - 6
  tip.style.top = top + 'px'
}

function hide() { tip.style.display = 'none' }

document.querySelectorAll('[data-tip]').forEach(el => {
  el.addEventListener('mouseenter', () => show(el))
  el.addEventListener('mouseleave', () => { if (pinned !== el) pinned ? show(pinned) : hide() })
  el.addEventListener('click', e => {
    e.stopPropagation()
    if (pinned === el) { pinned = null; hide() } else { pinned = el; show(el) }
  })
})

tip.addEventListener('click', e => e.stopPropagation())
document.addEventListener('click', () => { pinned = null; hide() })
