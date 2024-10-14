const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    768: {
        items: 1,

    },
    960: {
        items: 1
    }
}
$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /****click event on toggel */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    /***owl for blog */
    $('.owl-carousel').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 4500,
        dots: false,
        nav: true,
        navText: [$('.owl-nav-prev'), $('.owl-nav-next')],
        responsive: responsive
    });

    //click to scroll up
    // $(".move-up span").click(() => {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 1000);
    // });
    //anime on scroll
    AOS.init();
});