$(document).ready(function () {

    function fullPage() {
        $('#fullPage').fullpage({
            anchors: ['Main', 'Numbers', 'AboutUs', 'OurBumps', 'PriceList', 'ContactUs'],
            menu: '#navbar-nav',
            paddingTop: '76px',
            onLeave:function(index, nextIndex, direction){
                var loadedSection =$(this);
                if(index == 1 && direction == 'down'){
                    $('.min-coins').spincrement({
                        from: 10,
                        to: 200,
                        leeway: 0,
                        duration: 4000,
                        thousandSeparator: ' '
                    });
                    $('.max-coins').spincrement({
                        from: 200,
                        to: 1500,
                        leeway: 0,
                        duration: 4000,
                        thousandSeparator: ' '
                    });
                    $('.investor-q').spincrement({
                        from: 2000,
                        to: 34567,
                        leeway: 0,
                        duration: 4000,
                        thousandSeparator: ' '
                    });
                }
                else if (index == 3 && direction == 'up') {
                    $('.min-coins').spincrement({
                        from: 10,
                        to: 200,
                        duration: 4000,
                        thousandSeparator: ''
                    });
                    $('.max-coins').spincrement({
                        from: 200,
                        to: 1500,
                        duration: 4000,
                        thousandSeparator: ''
                    });
                    $('.investor-q').spincrement({
                        from: 2000,
                        to: 34567,
                        duration: 4000,
                        thousandSeparator: ' '
                    });
                }
            }
        });
    }

    function windowSize(){
        if($(window).width()>='992'){
            fullPage();
        }
        else {
            $.fn.fullpage.destroy('all');
        }
    }

    function windowResize(){
        if($(window).width()<'992'){
            $.fn.fullpage.destroy('all');
        }
        else {
            $.fn.fullpage.reBuild();
        }
    }

    windowSize();


    $(window).on('resize',windowResize);



    $('.guarantees-slider, .team-slider').slick({
        dots: true
    });

    $('.bumps-slider').slick({
        dots: false
    });

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function renderChart(){
        $('.chart-candle-wrapper').each(function () {

            var newHeightValue = randomInteger(5, 50);

            var newHeightShowing = newHeightValue + '%';
            var newHeightBody = newHeightValue + randomInteger(2, 9) +'%';


            $(this).children('.chart-candle__body').css('height', function () {
                return newHeightBody;
            });

            $(this).children('.chart-candle__showing').css('height', function () {
                return newHeightShowing;
            });
        });
    }

    function randomValue() {

        var randomValuePrice = Math.random();

        var randomValueVol = randomInteger(50, 15000);

        $('.price-quantity').spincrement({
            from: 0,
            to: randomValuePrice,
            decimalPlaces: 8,
            leeway: 0,
            duration: 4000,
            thousandSeparator: ' '
        });

        $('.vol-quantity').spincrement({
            from: 50,
            to: randomValueVol,
            leeway: 0,
            duration: 4000,
            thousandSeparator: ' '
        });
    }

    $('#rerender, #rerender-mobile').click(function() {
        renderChart();
        randomValue();
    });

    var $root = $('html, body');
    $('a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });
        return false;
    });

});