function contentWrap(){
    if ($('article').hasClass('content-wrap')){
        $('.content-wrap').css('margin-top', $('.header').innerHeight() + 'px');
    };
}

$(document).ready(function() {
    contentWrap();

    $('#nav-toggle').on('click', function() {
        $('.header').toggleClass('nav-active');
        if ($('.header').hasClass('nav-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    $('.header-nav a').on('click', function() {
        if ($('.header').hasClass('nav-active')) {
            $('.header').toggleClass('nav-active');
            document.body.style.overflow = '';
        }
    });

    $('.modal-trigger').on('click', function() {
        var target = $(this).attr('data-target');
        $(target).fadeIn(100, 'linear');
        $(target + ' ' + '.modal-overlay').fadeIn(300, 'linear');
        $(target).addClass('active');
    });

    $('.modal-close, .modal-overlay').on('click', function() {
        $('.modal.active').fadeOut(100, 'linear');
        $('.modal.active .modal-overlay').fadeOut(300, 'linear');
        $('.modal.active').removeClass('active');
    });
    
    $('.program-question').on('click', function() {
        var cardValue = $(this).parent().find('h4').text();

        $('.program-question-modal').find('h4').text(cardValue);
        $('#selected-program').val(cardValue);
        $('.program-question-modal').fadeIn(100, 'linear');
        $('.program-question-modal .modal-overlay').fadeIn(300, 'linear');
        $('.program-question-modal').addClass('active');
    });

    $('.video-toggle').on('click', function() {
        var videoSource = $(this).parent().find('.video-review').get(0);
        var videoOverlay = $(this).parent().parent().find('.rev-content');

        if (videoSource.paused === true){
            $(this).addClass('playing');
            $(videoOverlay).fadeOut('fast');
            $(videoSource).trigger('play');
            $(videoSource).attr('controls', '');
        } else {
            $(videoSource).trigger('pause');
        };
    });
    $('.video-review').on('pause', function(){
        $(this).parent().find('.video-toggle').removeClass('playing');
        $(this).removeAttr('controls');
        $(this).parent().parent().find('.rev-content').fadeIn('slow');
    });
});
$(window).on('resize', function() {
    contentWrap();
});
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > $('.header').innerHeight()) {
        $('.header').addClass('header-onmove');
    }
    else {
        $('.header').removeClass('header-onmove');
    };
});