import './sass/main.scss'
import desktop from './assets/desktop.png'
import desktop1 from './assets/desktop1.png'

import { changeCurcor } from './js/cursor'
import { moveCursor } from './js/cursor'

window.addEventListener('mousemove', moveCursor)
changeCurcor()



