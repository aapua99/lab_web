$(document).ready(function () {
    $('#add-news').click(function () {
        if ($('#add-image').attr('src') != 'img/icon.png') {
            if ($('#label-news').val().trim() != '' && $('#text-news').val().trim() != '') {

                $('#label-news').css('border-color', '#A9A9A9');
                $('#label-news').css('border-width', '1px');
                $('#text-news').css('border-color', '#A9A9A9');
                $('#text-news').css('border-width', '1px');
                alert('Новина успішно додана');
                $('#text-news').val('');
                $('#label-news').val('');
                $('#add-image').attr("src", "img/icon.png");
                $('input[type=file]').val("");


            } else {
                if ($('#text-news').val().trim() == '') {
                    $('#text-news').css('border-color', '#FF2D2D');
                    $('#text-news').css('border-width', '4px');
                } else {
                    $('#text-news').css('border-color', '#A9A9A9');
                    $('#text-news').css('border-width', '1px');
                };
                if ($('#label-news').val().trim() == '') {
                    $('#label-news').css('border-color', '#FF2D2D');
                    $('#label-news').css('border-width', '4px');
                } else {
                    $('#label-news').css('border-color', '#A9A9A9');
                    $('#label-news').css('border-width', '1px');
                }

            }
        } else {
            alert('Додайте зображення')
        }
    });
    $('input[type=file]').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);

        $("#add-image").attr('src', tmppath);

    });
});


