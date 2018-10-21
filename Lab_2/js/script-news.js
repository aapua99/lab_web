$(document).ready(function () {

    images=JSON.parse(localStorage.getItem("images"));
    titleNews=JSON.parse(localStorage.getItem("titleNews"));
    textNews=JSON.parse(localStorage.getItem("textNews"));
    if (titleNews != null) {
        for (i in titleNews) {
            $('.row').append("<div class=\"news-item col-lg-3 col-md-5 col-sm-12  mt-md-5 mt-sm-5\">\
            <div class=\"w-90 card ml-auto mr-auto\">\
                <img class=\"w-100 card-img-top\" src=\""+ images[i] +"\">\
                <h2>"+titleNews[i]+"</h2>\
                <div class=\"news-text mb-4  ml-3 mr-3\">\
                    <span>"+textNews[i]+"</span>\
                </div>\
            </div>\
        </div>")
        }
    }
})