document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('AboutFilm');
    btn.addEventListener('click', () => {
        console.log("click to button");
        const poppup = document.getElementById('model');
        poppup.classList.add('enable');

        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            const poppup = document.getElementById('model');
            poppup.classList.remove('enable');
        });

        const backgroundModel = document.getElementById('model');
        backgroundModel.addEventListener('click', () => {
            const poppup = document.getElementById('model');
            poppup.classList.remove('enable');
        });
    })

})