var useLocalStorage = false;

function News(image, title, text) {
    this.image = image;
    this.title = title;
    this.text = text;
}

$(document).ready(function () {
    

    $('#add-news').click(function () {
        addDataToDB($('#text-news').val().trim(), $('#label-news').val().trim(),"img/motor.jpg")
    });



    $('input[type=file]').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $("#add-image").attr('src', tmppath);

    });
});

function isOnline() {
    return window.navigator.onLine;
}

function checkForms() {
    if ($('#add-image').attr('src') != 'img/icon.png' && $('#label-news').val().trim() != '' && $('#text-news').val().trim() != '') {
        return true;
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
        if ($('#add-image').attr('src') == 'img/icon.png') {
            alert('Додайте зображення')
        }
        return false;
    }

}

function addDataToDB(text, title, img) {
    
            fetch("http://localhost:3000/newsdb", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Method': 'POST',
                    },
                    method: "POST",
                    body: JSON.stringify({
                        text: text,
                        title: title,
                        img: img
                    })
                })
                .then(function (res) {
                    console.log(res)
                })
                .catch(function (res) {
                    console.log(res)
                })
        
    
}