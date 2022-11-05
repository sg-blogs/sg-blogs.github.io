$(document).ready(() => {
    // var livejs = document.createElement('script');
    // livejs.setAttribute('src', 'https://livejs.com/live.js');
    // document.head.appendChild(livejs);
    // delete livejs;
});

$(window).on('load', () => {
    $('header').load('/common/header.html', () => {
        $('.sidenav').sidenav();
        $('.materialboxed').materialbox();
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