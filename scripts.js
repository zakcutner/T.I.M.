function init(location) {
    $.getJSON('http://api.open-notify.org/iss-pass.json?callback=?', {lat: location.coords.latitude, lon: location.coords.longitude, n: 1}, function(data) {
        var eventTime = moment.unix(data.response[0].risetime);
        var currentTime = moment()
        var diffTime = eventTime - currentTime;
        var duration = moment.duration(diffTime*1000, 'milliseconds');
        var interval = 1000;

        setInterval(function() {
            duration = moment.duration(duration - interval, 'milliseconds');
            $('body').css('display', 'table');
            $('#timer').html('<span>' + duration.days() + '</span> : <span>' + duration.hours() + '</span> : <span>' + duration.minutes() + '</span> : <span>' + duration.seconds() + '</span>');
        }, interval);
    });
}

navigator.geolocation.getCurrentPosition(init);
