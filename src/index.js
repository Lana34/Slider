import './sass/main.scss'
import desktop from './assets/desktop.png'
import desktop1 from './assets/desktop1.png'

import { changeCurcor } from './js/cursor'
import { moveCursor } from './js/cursor'
import {circleMove} from './js/circlesMove'
import {buttons} from './js/cursor'
import {plusSlides} from './js/ShowSlides'
import {turnElementsLeft} from './js/animationSlides'


window.addEventListener('mousemove', moveCursor)
changeCurcor()

window.addEventListener('mousemove', circleMove)


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        turnElementsLeft()
        plusSlides(1)

    })
}



