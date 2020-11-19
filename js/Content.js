import {bioModel} from './models/bio';


export class Content {
  constructor(selector, pages) {
    this.$el = document.querySelector(selector)
    this.pages = pages

  }

  init() {
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `<div class="anim"></div>`)

    this.$anim = this.$el.firstChild

    let model
    for(let key in this.pages){
      if (this.pages[key][0] === 'active') {
        model = this.pages[key][1]
      }
    }

    model.forEach(page => {
        switch (page.group) {
          case 'mainHeader' :
            this.mainHeaderDraw(page)
            break
          case 'contHeader':
            this.contHeaderDraw(page)
            break
          case 'PicGroup' :
            this.pickGroupDraw(page)
            break
          case 'TextContent':
            this.TextContentDraw(page)
            break
          case 'List':
            this.listDraw(page)
            break
          case 'PicText':
            this.picText(page)
            break
        }
    })
  }

  mainHeaderDraw(el) {
    const html = `
      <div class="${el.class}"><h1>${el.cont}<h1></div>
    `
    this.$anim.insertAdjacentHTML('beforeend', html)
  }

  contHeaderDraw(el) {
    const html = `
      <div class="${el.class}"><h3>${el.cont}<h3></div>
    `
    this.$anim.insertAdjacentHTML('beforeend', html)
  }

  pickGroupDraw(el) {
    const html = `
    <div class="${el.class}">
        ${picAdd(el.cont)}
    </div>
    `

    this.$anim.insertAdjacentHTML('beforeend', html)
  }

  listDraw(el) {
    const html = `
    <ul class="list-unstyled">
    <ul>
      ${listAdd(el.cont)}
    </ul>
    </ul>
    `
    this.$anim.insertAdjacentHTML('beforeend', html)
  }

  TextContentDraw(el) {
    const html = `
      <div class="${el.class}"><p>${el.cont}<p></div>
    `
    this.$anim.insertAdjacentHTML('beforeend', html)
  }

  picText(el) {
    const html =`
      <div class="${el.class}">
        ${picTextAdd(el.cont)}
      </div>
    `
    this.$anim.insertAdjacentHTML('beforeend', html)
  }
}

function listAdd(cont) {
  return cont.map(str => {
    return `<li>${str}</li>`
  })
    .join('')
}

function picAdd(cont) {
  const text = cont.text
  const img = cont.img
  const html = []
  for (let i = 0; i < text.length; i++) {
    console.log(img[i])
    html.push(`
      <div class="card" style="width: 22rem;">
        <img src="${img[i]}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${text[i]}</p>
        </div>
       </div>
    `)
  }
  return html.join('')
}

function picTextAdd(cont) {
  return `
    <div>
      <img src="${cont.img}" alt="..." class="img-thumbnail">  
    </div>
    <div class="pic_text"><p>${cont.text}<p></div>
  `

}
