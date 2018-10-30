var useLocalStorage = false;


$(document).ready(function () {
    getData();
})

function getData() {
    if (isOnline()) {
        if (useLocalStorage) {

            images = JSON.parse(localStorage.getItem("images"));
            titleNews = JSON.parse(localStorage.getItem("titleNews"));
            textNews = JSON.parse(localStorage.getItem("textNews"));
            if (titleNews != null) {
                for (i in titleNews) {
                    insertData(images[i], titleNews[i], textNews[i])
                }
            }

        } else {
            request = indexedDB.open("news", 2);
            request.onsuccess  = function (event) {
                var db = event.target.result;
                var objectStore = db.transaction(["news"], "readwrite").objectStore("news");
                objectStore.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        insertData(cursor.value.image, cursor.value.title, cursor.value.text);
                        cursor.continue();
                    }
                }
            }
        }
    }
}

function insertData(image, title, text) {
    $('.row').append("<div class=\"news-item col-lg-3 col-md-5 col-sm-12  mt-md-5 mt-sm-5\">\
    <div class=\"w-90 card ml-auto mr-auto\">\
        <img class=\"w-100 card-img-top\" src=\"" + image + "\">\
        <h2>" + title + "</h2>\
        <div class=\"news-text mb-4  ml-3 mr-3\">\
            <span>" + text + "</span>\
        </div>\
    </div>\
</div>")
}

window.addEventListener("online", function () {
    getData();
});

function isOnline() {
    return window.navigator.onLine;
}