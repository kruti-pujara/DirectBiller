jQuery(document).ready(function(){
    windowScroll();

    jQuery('.hamburger').click(function(){
        jQuery('html, body').toggleClass('open-menu')
    });
});

function windowScroll(){
    jQuery(window).on("scroll", function(){
        if (jQuery(window).scrollTop()){
            jQuery('.site-header').addClass('scroll');
        }
        else{
            jQuery('.site-header').removeClass('scroll');
        }
    });
}