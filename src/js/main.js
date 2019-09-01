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
});
