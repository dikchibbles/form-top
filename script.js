const form = document.querySelector('#main-form')
form.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
})

