export class Header {
  constructor(selector, pages, updateCallback) {
    this.$els = document.querySelectorAll(selector)
    this.update = updateCallback

    this.init(pages)
  }

  init(pages) {
    this.$els.forEach(i => i.addEventListener('click', this.switch.bind(this, pages)))
  }

  switch(pages, e) {

    if (e.target.className !== 'nav-link active') {
      this.$els.forEach((i, ind) => {
        if (i.children[0].className === 'nav-link active') {
          i.children[0].className = 'nav-link'
          pages[i.id][0] = ''
        }
      })
      e.target.className = 'nav-link active'
      pages[e.target.parentNode.id][0] = 'active'
    }
    console.log(pages)
    e.preventDefault()
    window.scroll(0,0)
    this.update()
  }
}