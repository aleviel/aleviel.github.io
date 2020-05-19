$(document).ready(function() {
    $('.features-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: '<button class="arrow prev"></button>',
                    nextArrow: '<button class="arrow next"></button>',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="arrow prev"></button>',
                    nextArrow: '<button class="arrow next"></button>'
                }
            }
        ]
    });
    $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="feedback-slider-button feedback-slider-button-prev"><img src="img/feedback/prev-ar.svg" alt=""></button>',
        nextArrow: '<button type="button" class="feedback-slider-button feedback-slider-button-next"><img src="img/feedback/next-ar.svg" alt=""></button>'
    })
    $('.material-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: '<button class="arrow prev"></button>',
                    nextArrow: '<button class="arrow next"></button>',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="arrow prev"></button>',
                    nextArrow: '<button class="arrow next"></button>'
                }
            }
        ]
    });
});