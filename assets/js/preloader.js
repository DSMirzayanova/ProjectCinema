document.addEventListener('DOMContentLoaded', () => {

    const mediaFiles = document.querySelectorAll('iframe');
    let i = 0

    Array.from(mediaFiles).forEach((file, index) => {
        console.log(file);
        file.onload = () => {
            i++
            if(i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
            }
        }
    })

})


window.addEventListener('load', function () {
    preloader.classList.add('preloader--hide');
  });
