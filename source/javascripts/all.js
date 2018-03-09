$(document).ready(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    (function(id, endtime) {
        var infoAbend = function(then) {
            $('#date .day').html(padleft(then.getDate()));
            $('#date .mon').html(padleft(then.getMonth() + 1));
            $('#date .year').html(padleft(then.getUTCFullYear()));
        };

        var getTimeRemaining = function(endtime) {
            var now = Date.parse(new Date());
            var then = Date.parse(endtime);
            infoAbend(new Date(endtime));
            if (now >= then) {
                return {
                    'total': 0,
                    'days': 0,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
            }
            var t = then - now;
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        var padleft = function(input) {
            var str = "" + input;
            var pad = "00"
            var ans = pad.substring(0, pad.length - str.length) + str
            return ans
        };

        var initializeClock = function(id, endtime) {
            var clock = "#" + id;
            var timeinterval = setInterval(function() {
                var t = getTimeRemaining(endtime);
                $(clock + " .ds").html(padleft(t.days));
                $(clock + " .hrs").html(padleft(t.hours));
                $(clock + " .min").html(padleft(t.minutes));
                $(clock + " .sec").html(padleft(t.seconds));
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }, 1000);
        };

        initializeClock(id, endtime);
    })('countDown', INFOABEND);
});
