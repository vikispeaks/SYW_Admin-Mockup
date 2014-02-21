$(document).ready( function() {

    $('div.backgroundcolorform').hide();
    $('div.backgroundimageform').hide();
            
            $('.demo').each( function() {
                //
                // Dear reader, it's actually very easy to initialize MiniColors. For example:
                //
                //  $(selector).minicolors();
                //
                // The way I've done it below is just for the demo, so don't get confused 
                // by it. Also, data- attributes aren't supported at this time...they're 
                // only used for this demo.
                //
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


            
        });