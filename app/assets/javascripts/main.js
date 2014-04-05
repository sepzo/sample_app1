var dp = jQuery;
dp.noConflict();
dp(document).ready(function() 
{

    //SMOOTH SCROLL 
    dp('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });

    
    //PARALLAX
    dp('.parallaxize').parallax("50%", 0.3);

   
}
);

dp(window).load(function() {
    dp("#lazyload").fadeOut();
});