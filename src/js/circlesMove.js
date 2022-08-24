const circleSmall = document.querySelectorAll('.slider__circleSmall')
const circleMedium = document.querySelectorAll('.slider__circleMedium')
const circleLarge = document.querySelectorAll('.slider__circleLarge')


export function circleMove(e) {
    const mouseY = e.pageY / 2
    const mouseX = e.pageX / 2

    for (let i = 0; i < circleSmall.length; i++) {
        circleSmall[i].style.transform = `translate3d(${mouseX}px, ${-mouseY}px, 0)`
    }

    for (let i = 0; i < circleMedium.length; i++) {
        circleMedium[i].style.transform = `translate3d(${mouseX}px, ${-mouseY}px, 0)`
    }

    for (let i = 0; i < circleLarge.length; i++) {
        circleLarge[i].style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

}