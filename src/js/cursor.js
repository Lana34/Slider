
export const buttons = document.querySelectorAll('.slider__switchButton')
const cursor = document.querySelector('.cursor')
const links = document.getElementsByTagName('a')

export const moveCursor = (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

}

window.addEventListener('mousemove', moveCursor)


export function changeCurcor() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
        })
    
        buttons[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
        })
    
    }
    
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
        })
    
        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
        })
    
    }
}
