document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('toolbarButton');
    btn.addEventListener('click', () => {
        console.log("click to button");
        const nav = document.getElementById('nav');
        const btn = document.getElementById('toolbarButton');
        nav.classList.add('enable');
        btn.classList.add('disable');

        const closeButton = document.getElementById('toolbarButtonClose');
        closeButton.classList.remove('disable')
        closeButton.addEventListener('click', () => {
            const closenav = document.getElementById('nav');
            const closeButton = document.getElementById('toolbarButtonClose');

            closenav.classList.remove('enable');            
            closeButton.classList.add('disable');
            const btn = document.getElementById('toolbarButton');
            btn.classList.remove('disable');
        });
    })

})