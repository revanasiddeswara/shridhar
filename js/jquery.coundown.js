// CountDown Clock
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : https://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown

(function ($) {
    $.fn.countdown = function (options, callback) {
        var settings = $.extend({
            date: null,
            day: 'Day',
            days: 'Days',
            hour: 'Hour',
            hours: 'Hours',
            minute: 'Minute',
            minutes: 'Minutes',
            second: 'Second',
            seconds: 'Seconds'
        }, options);

        if (!settings.date) {
            $.error('Date is not defined.');
        }

        if (!Date.parse(settings.date)) {
            $.error('Incorrect date format, it should look like this: 12/24/2012 12:00:00.');
        }

        var container = this;

        function currentDate() {
            let date = new Date();
            let istOffset = 5.5 * 60 * 60 * 1000; // Convert 5.5 hours to milliseconds
            let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
            return new Date(utc + istOffset);
        }

        function countdown() {
            var target_date = new Date(settings.date);
            var current_date = currentDate();

            var difference = target_date - current_date;

            if (difference < 0) {
                clearInterval(interval);
                if (callback && typeof callback === 'function') callback();
                return;
            }

            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

            var text_days = (days === 1) ? settings.day : settings.days,
                text_hours = (hours === 1) ? settings.hour : settings.hours,
                text_minutes = (minutes === 1) ? settings.minute : settings.minutes,
                text_seconds = (seconds === 1) ? settings.second : settings.seconds;

            days = (String(days).length >= 2) ? days : '0' + days;
            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            container.find('.days').text(days);
            container.find('.hours').text(hours);
            container.find('.minutes').text(minutes);
            container.find('.seconds').text(seconds);

            container.find('.days_text').text(text_days);
            container.find('.hours_text').text(text_hours);
            container.find('.minutes_text').text(text_minutes);
            container.find('.seconds_text').text(text_seconds);
        }

        var interval = setInterval(countdown, 1000);
    };
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    let count = localStorage.getItem('visitorCount') || 0; // Get count from Local Storage or default to 0
    document.getElementById('visitorCount').textContent = `Total Visitors: ${count}`;

    // Increment the count whenever the page loads
    count++;
    localStorage.setItem('visitorCount', count); // Save the updated count in Local Storage
});
