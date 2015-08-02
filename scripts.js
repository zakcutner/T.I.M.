navigator.geolocation.getCurrentPosition(function(location) {
    $.getJSON('http://api.open-notify.org/iss-pass.json?callback=?', {lat: location.coords.latitude, lon: location.coords.longitude}, function(data) {
        function repeat() {
            duration = moment.duration(duration - 1000);
            $('#timer').html('<span>' + duration.hours() + '</span> hours <span>' + duration.minutes() + '</span> minutes <span>' + duration.seconds() + '</span> seconds');
        }

        var difference = moment.unix(data.response[0].risetime).diff(moment());
        var duration = moment.duration(difference);

        repeat();
        $('body').css('display', 'table');
        setInterval(repeat, 1000);
    });
});
