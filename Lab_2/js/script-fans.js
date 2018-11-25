var useLocalStorage = false;



$(document).ready(function () {
    getData()
    window.addEventListener("online", function () {
        getData();
    });
    $('#add-fans').click(function () {

        if ($("#text-fans").val().trim() != '') {


            addToServer($("#text-fans").val().trim() );

        } else {
            alert('Заповніть усі поля');
            $('#text-fans').css('border-color', '#FF2D2D');
            $('#text-fans').css('border-width', '4px');

        };
    });
    $("#text-fans").val().trim()

});

function isOnline() {
    return window.navigator.onLine;
}


function getData() {
    fetch("http://localhost:3000/fansdb").then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function (json) {
            for (var i in json) {
                $('.row').append("<div class=\"card fans-card col-12 \">\
            <div class=\"card-body\">\
                <h5 class=\"card-title\">Відгук</h5>\
                <p class=\"card-text\">" + json[i].title + "</p>\
                <p class=\"card-text fans-review-date\">" + json[i].date + "</p>\
                <p class=\"car-text fans-review-login\">fan№1</p>\
            </div>\
        </div>");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}



function addToServer(titleText) {
    var d = new Date();
    fetch("http://localhost:3000/fansdb", {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'POST',
            },
            method: "POST",
            body: JSON.stringify({
                title: titleText,
                date: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear()
            })
        })
        .then(function (res) {
            console.log(res)
        })
        .catch(function (res) {
            console.log(res)
        })
}