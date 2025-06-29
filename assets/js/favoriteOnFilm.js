document.addEventListener('DOMContentLoaded', () => {

    UpdateView();
    const favoriteBtns = document.querySelectorAll('.favorite__btn');
    console.log(favoriteBtns.length);
    favoriteBtns.forEach((btn)  => {
        btn.onclick = function() {
            var id = this.getAttribute('data-favoriteId');
            actionFav(id);
        }
    })
});

function UpdateView() {
    var favorite = JSON.parse(localStorage.getItem('favorite'));
    const favoriteBtns = document.querySelectorAll('.favorite__btn');

    favoriteBtns.forEach((btn)  => {
        var idFav = btn.getAttribute('data-favoriteId');

        var isFavorite = 'none';

        favorite.forEach((id) => {
            if (idFav == id) {
                isFavorite = 'favorite';
            }
        })

        btn.setAttribute('data-favorite', isFavorite);
    })
    
}

function actionFav(id) {
    //var favorite = JSON.parse(getCookie('favorite'));
    var favorite = JSON.parse(localStorage.getItem('favorite'));

    if (favorite === null || !(favorite instanceof Array))
        favorite = [];

    var inFav = false;

    for (i = 0; i < favorite.length; i++) {
        if (favorite[i] == id) {
            console.log("Delete " + id);
            favorite.splice(i, 1);
            inFav = true;
        }
    }

    if (!inFav) {
        console.log("Add " + id);
        favorite.push(id);        
    }

    var date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    console.log(favorite);
    
    localStorage.setItem('favorite', JSON.stringify(favorite));
    UpdateView();
    // setCookie('favorite', JSON.stringify(favorite), date.toUTCString, '/');
}