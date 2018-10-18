$(document).ready(function () {
    $('#add-fans').click(function () {
        var d = new Date();
        if ($("#text-fans").val().trim() != '') {
            $('#text-fans').css('border-color', '#A9A9A9');
            $('#text-fans').css('border-width', '1px');
            $('.row').append("<div class=\"card fans-card col-12 \">\
                <div class=\"card-body\">\
                    <h5 class=\"card-title\">Відгук</h5>\
                    <p class=\"card-text\">" + $('#text-fans').val() + "</p>\
                    <p class=\"card-text fans-review-date\">" + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + "</p>\
                    <p class=\"car-text fans-review-login\">fan№1</p>\
                </div>\
            </div>")
            $("#text-fans").val('');

        } else {
            alert('Заповніть усі поля');
            $('#text-fans').css('border-color', '#FF2D2D');
            $('#text-fans').css('border-width', '4px');

        };
    });
});
