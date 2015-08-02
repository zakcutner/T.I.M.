navigator.geolocation.getCurrentPosition(function(location) {
    $.getJSON('http://api.open-notify.org/iss-pass.json?callback=?', {lat: location.coords.latitude, lon: location.coords.longitude}, function(data) {
        var difference = moment.unix(data.response[0].risetime).diff(moment());
        var duration = moment.duration(difference);

        setInterval(function() {
            duration = moment.duration(duration - 1000);
            $('body').css('display', 'table');
            $('#timer').html('<span>' + duration.hours() + '</span> hours <span>' + duration.minutes() + '</span> minutes <span>' + duration.seconds() + '</span> seconds');
        }, 1000);
    });
});
