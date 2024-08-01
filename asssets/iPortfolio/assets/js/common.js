var urlParams = new URLSearchParams(window.location.search);

function getLang() {
    return urlParams.get('lang');
}

function showInfo() {
    //var lang="vi-VN";
    var lang = getLang();
    var member = members[urlParams.get('code')][lang];
    $('.img-fluid my-avatar').each(function(i, obj) {
        $("#" + obj.id).html(member[obj.id]);
    });
}

function showAva() {
    var lang = getLang(); // Function to get the current language
    var code = urlParams.get('code'); // Assuming urlParams is defined
    var member = members[code][lang];


    // Set the src attribute for the first img element
    $('.img-fluid.my-avatar').attr('src', member['avatar']);

    // Set the src attribute for the second img element
    $('.img-fluid.rounded-circle').attr('src', member['avatar']);
}


function changeLanguage(lang) {
    urlParams.set('lang', lang);
    var newUrl = window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({}, '', newUrl);
    showInfo();
}

$(document).ready(function() {
    showInfo();
    showAva();
    $('.lang').on('click', function() {
        var lang = $(this).data('lang');
        switchLanguage(lang);
    });
})