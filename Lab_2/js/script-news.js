var useLocalStorage = false;


$(document).ready(function () {
    getData();
})

function getData() {
    fetch("http://localhost:3000/newsdb").then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function (json) {
            for (var i in json) {
                insertData(json[i].img, json[i].title, json[i].text)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
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