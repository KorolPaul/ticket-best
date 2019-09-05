$(document).ready(function () {
    var isMobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    /* Menu toggle */
    const $menu = $('.menu');
    const $menuToggle = $('.js-menu-toggle');

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        $menu.toggleClass('opened');
        $('html').toggleClass('menu-opened');
    }
    $menuToggle.on('click', toggleMenu);


    /* Popup */
    var $popup = $('.popup');

    function togglePopup() {
        $popup.toggleClass('opened');
    }

    $('.fade').on('click', togglePopup);

    /* Dropdowns */
    $('select').selectize({
        create: true,
        sortField: 'text'
    });

    /* Slider */
    $('.slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1
    });

    $('.reviews').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoWidth: true
    });

    $('.smi').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        items: 1
    });
});
