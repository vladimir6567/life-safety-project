import {Header} from './Header';
import {Content} from './Content';
import {bioModel} from './models/bio';
import {naturalModel} from './models/natural';
import {socModel} from './models/soc';
import {ecoModel} from './models/eco';
import {techModel} from './models/tech';

const pages = {
  Bio: ['active', bioModel,],
  Natural: ['', naturalModel,],
  Soc: ['', socModel,],
  Tech: ['', techModel,],
  Eco: ['', ecoModel,],
}

class App {

  init() {

    const site = new Content('#content', pages)
    site.init()
    new Header('.nav-item', pages, () => {
      site.init()
    })

  }
}

new App().init()