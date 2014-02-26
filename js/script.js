$(document).ready( function() {

    $('div.backgroundcolorform').hide();
    $('div.backgroundimageform').hide();
            
            $('.demo').each( function() {
                $(this).minicolors({
                    animationSpeed: 50,
                    animationEasing: 'swing',
                    change: null,
                    changeDelay: 0,
                    control: 'hue',
                    defaultValue: '',
                    hide: null,
                    hideSpeed: 100,
                    inline: false,
                    letterCase: 'lowercase',
                    opacity: false,
                    position: 'bottom left',
                    show: null,
                    showSpeed: 100,
                    theme: 'bootstrap'
                });
                
            });


        $('#font-color-select.demo').blur(function(){

           var rgbValue = $(this).minicolors('rgbString');
           $('p.fontcolor').css('background-color', rgbValue);

        });

        $('#header-color-select.demo').blur(function(){

           var rgbValue = $(this).minicolors('rgbString');
           $('p.headercolor').css('background-color', rgbValue);

        });

        $('#background-color-select.demo').blur(function(){

           var rgbValue = $(this).minicolors('rgbString');
           $('p.backgroundcolor').css('background-color', rgbValue);

        });

        $('div.button-group ul li a').click(function(){

            var innerText = $(this).text();
            $('div.button-group div button.btn').html(innerText + '    <span class="caret"></span>');

            if( innerText == "Select Color")
                {
                    $('div.backgroundimageform').hide();
                    $('div.backgroundcolorform').show();
                }
            else
                {
                    $('div.backgroundcolorform').hide();
                    $('div.backgroundimageform').show();
                }

        });


        $('div.app-image img').click(function() {
            $(this).attr('src', function(i, oldSrc) {
                    return oldSrc == 'images/check.jpg' ? 'images/uncheck.jpg' : 'images/check.jpg';
            });
           
        });

        
             
     var pathname = window.location.pathname;
     if((pathname.indexOf('home') > -1) || (pathname.indexOf('dashboard') > -1)){
        $('ul.nav.navbar-nav li').eq( 0 ).addClass("active");
     }
     else if(pathname.indexOf('design') > -1){
        $('ul.nav.navbar-nav li').eq( 1 ).addClass("active");
     }
     else if(pathname.indexOf('role') > -1){
        $('ul.nav.navbar-nav li').eq( 2 ).addClass("active");
     }
     else if(pathname.indexOf('app') > -1){
        $('ul.nav.navbar-nav li').eq( 3 ).addClass("active");
     }
     else if(pathname.indexOf('product') > -1){
        $('ul.nav.navbar-nav li').eq( 4 ).addClass("active");
     }     

            
});

