const circleSmall = document.querySelectorAll('.slider__circleSmall')
const circleMedium = document.querySelectorAll('.slider__circleMedium')
const circleLarge = document.querySelectorAll('.slider__circleLarge')


export function turnElementsLeft() {
    let block = document.querySelectorAll('.slider__content')
    for (let i = 0; i < block.length; i++) {
        block[i].classList.add('animated')
    }

    for (let i = 0; i < circleSmall.length; i++) {
        circleSmall[i].classList.add('animated')
    }

    for (let i = 0; i < circleMedium.length; i++) {
        circleMedium[i].classList.add('animated')
    }

    for (let i = 0; i < circleLarge.length; i++) {
        circleLarge[i].classList.add('animated')
    }
}