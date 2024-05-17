const showbtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const exit = document.getElementById('exit-btn')
const overlay = document.getElementById('overlay')

showbtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

exit.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

document.addEventListener('keydown', (e)=> {
    if(e.key == 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})