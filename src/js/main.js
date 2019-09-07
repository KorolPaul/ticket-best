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
    $('select:not([id])').selectize({
        create: true,
        sortField: 'text'
    });

    /* Search aotucomplet */
    $('#select-search').selectize({
        valueField: 'url',
        labelField: 'name',
        searchField: 'name',
        options: [],
        create: false,
        render: {
            option: function(item, escape) {
                return '<div>' + escape(item.name) +'</div>';
            }
        },
        score: function(search) {
            var score = this.getScoreFunction(search);
            return function(item) {
                return score(item) * (1 + Math.min(item.watchers / 100, 1));
            };
        },
        load: function(query, callback) {
            if (!query.length) return callback();
            $.ajax({
                url: 'https://api.github.com/legacy/repos/search/' + encodeURIComponent(query),
                type: 'GET',
                error: function() {
                    callback();
                },
                success: function(res) {
                    callback(res.repositories.slice(0, 10));
                }
            });
        }
    });

    /* Slider */
    $('.slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1
    });

    $('.participants').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        responsive:{
            1024:{
                margin: 20,
                items: 2,
            },
            1200:{
                margin: 20,
                items: 4,
                nav: false,
            }
        }
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
