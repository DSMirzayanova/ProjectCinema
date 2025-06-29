document.addEventListener('DOMContentLoaded', () => {

    UpdateView();

    const mainFavoriteBtn = document.querySelector('.set__favorite__btn');
    mainFavoriteBtn.onclick = function() {
        var isActive = this.getAttribute('data-isActive');
        const postersItem = document.querySelectorAll('.poster__item');

        if (isActive == 'false') {
            var favorite = JSON.parse(localStorage.getItem('favorite'));
            postersItem.forEach((item) => {
                var idPos = item.getAttribute('data-id');
                var inArr = false
                favorite.forEach((id) => {
                    if (idPos == id) {
                        inArr = true;
                    }
                })

                if (!inArr)
                    item.classList.add('poster__item--hide');                        
            })
            this.setAttribute('data-isActive', 'true');
        }
        else {
            postersItem.forEach((item) => {
                item.classList.remove('poster__item--hide');
            })
            this.setAttribute('data-isActive', 'false');
        }
    }

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
        if (favorite != null) {
            favorite.forEach((id) => {
                if (idFav == id) {
                    isFavorite = 'favorite';
                }
            })
        }
       

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

function setCookie (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) + 
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "? secure" : "");
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != - 1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset,end));
        }
    }

    return(setStr);
}
