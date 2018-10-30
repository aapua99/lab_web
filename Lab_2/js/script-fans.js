var useLocalStorage = false;

function fansReview(text, time) {
    this.text = text;
    this.time = time
}

$(document).ready(function () {
    getData()
    window.addEventListener("online", function () {
        getData();
    });
    $('#add-fans').click(function () {

        if ($("#text-fans").val().trim() != '') {

            addDataToDB();

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
    if (!isOnline()) {
        if (useLocalStorage) {
            var fans = JSON.parse(localStorage.getItem("review"));
            var time = JSON.parse(localStorage.getItem("time"));

            if (fans != null) {
                for (i in fans) {
                    $('.row').append("<div class=\"card fans-card col-12 \">\
            <div class=\"card-body\">\
                <h5 class=\"card-title\">Відгук</h5>\
                <p class=\"card-text\">" + fans[i] + "</p>\
                <p class=\"card-text fans-review-date\">" + time[i] + "</p>\
                <p class=\"car-text fans-review-login\">fan№1</p>\
            </div>\
        </div>");
                }
            } else {
                fans = []
                time = []
            }

        } else {
            var request = indexedDB.open("fans", 2);
            request.onsuccess = function (event) {
                var db = event.target.result;
                var objectStore = db.transaction(["fans"]).objectStore("fans");
                objectStore.openCursor().onsuccess = function (event) {
                    cursor = event.target.result;
                    if (cursor) {
                        $('.row').append("<div class=\"card fans-card col-12 \">\
            <div class=\"card-body\">\
                <h5 class=\"card-title\">Відгук</h5>\
                <p class=\"card-text\">" + cursor.value.text + "</p>\
                <p class=\"card-text fans-review-date\">" + cursor.value.time + "</p>\
                <p class=\"car-text fans-review-login\">fan№1</p>\
            </div>\
        </div>");
                        cursor.continue();
                    }
                }

            }
        }
    }
}

function addDataToDB() {
    var d = new Date();
    var date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear()
    if (useLocalStorage) {
        fans.append($("#text-fans").val().trim())
        time.append(date)
        if (!isOnline()) {
            localStorage.setItem("review", JSON.stringify(fans))
            localStorage.setItem("time", JSON.stringify(time))
        }
    } else {
        if (!isOnline()) {
            var request = indexedDB.open("fans", 2);
            request.onerror = function (event) {
                alert(event)
            }
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                var objectStore = db.createObjectStore("fans", {
                    keyPath: "time"
                })

                objectStore.createIndex("text", "text", {
                    unique: false
                })
                objectStore.add(new fansReview($("#text-fans").val().trim(), date))
            }
            request.onsuccess = function (event) {
                var db = event.target.result;
                var objectStore = db.transaction(["fans"], "readwrite").objectStore("fans");
                request = objectStore.add(new fansReview($("#text-fans").val().trim(), date))
                request.onsuccess = function (event) {
                    console.log("add new fans review")
                }
            }
        }
    }
}