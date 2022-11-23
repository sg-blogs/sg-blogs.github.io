$(document).ready(() => {
    $('.loader').fadeOut();
    window.menu = false;
    $('modules').load('/common/modules.html', () => {
        $('header').load('/common/header.html', () => {
            try {
                $('.sidenav').sidenav();
                $('.materialboxed').materialbox();
                window.menu = true;
            } catch { }
        });
    });

    $('.header-search>input')
        .on('focus', () => {
            $('.header-search').css('box-shadow', '-4px 4px 7px black');
        })
        .on('blur', () => {
            $('.header-search').css('box-shadow', '-1px 1px 2px black');
        });


    $('blog-link').click((link) => {
        window.open(link.currentTarget.innerText, '_blank');
    });

});

window.onload = function () {
    if (window.menu != true) {
        try {
            $('.sidenav').sidenav();
            $('.materialboxed').materialbox();
        } catch { }
    }

    var url = new URLSearchParams(window.location.search);
    if (url.has('popup_ads') == false && url.get('popup_ads') != 'false') {
        var script = document.createElement('script');
        script.src = "//pistolterrificsuspend.com/b6/ea/d1/b6ead10d46e42451622bbc85bc0c59d5.js";
        document.head.appendChild(script);
    }
}

$(window).on('load', () => {
    $('.loader').fadeOut();
});