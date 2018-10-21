$(document).ready(function () {

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


    $('#add-fans').click(function () {
        var d = new Date();
        var date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear()
        if ($("#text-fans").val().trim() != '') {
            fans.push($("#text-fans").val().trim());
            time.push(date);
            $('#text-fans').css('border-color', '#A9A9A9');
            $('#text-fans').css('border-width', '1px');
            $('.row').append("<div class=\"card fans-card col-12 \">\
                <div class=\"card-body\">\
                    <h5 class=\"card-title\">Відгук</h5>\
                    <p class=\"card-text\">" + $('#text-fans').val() + "</p>\
                    <p class=\"card-text fans-review-date\">" + date + "</p>\
                    <p class=\"car-text fans-review-login\">fan№1</p>\
                </div>\
            </div>")
            $("#text-fans").val('');
            if (!isOnline()) {
                localStorage.setItem("review", JSON.stringify(fans))
                localStorage.setItem("time", JSON.stringify(time))
            }

        } else {
            alert('Заповніть усі поля');
            $('#text-fans').css('border-color', '#FF2D2D');
            $('#text-fans').css('border-width', '4px');

        };
    });

});

function isOnline() {
    return window.navigator.onLine;
}
window.addEventListener("online", function(){
    sendData();
    this.localStorage.removeItem("time");
    this.localStorage.removeItem("review");
});

function sendData() {

}
