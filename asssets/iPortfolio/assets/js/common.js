var urlParams = new URLSearchParams(window.location.search);

function getLang() {
    return urlParams.get('lang');
}

function showInfo() {
    //var lang="vi-VN";
    var lang = getLang();
    var member = members[urlParams.get('code')][lang];
    $('.myinfo').each(function(i, obj) {
        $("#" + obj.id).html(member[obj.id]);
    });
}

function changeLanguage(lang) {
    urlParams.set('lang', lang);
    var newUrl = window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({}, '', newUrl);
    showInfo();
}

$(document).ready(function() {
    showInfo();

    $('.lang').on('click', function() {
        var lang = $(this).data('lang');
        switchLanguage(lang);
    });
})