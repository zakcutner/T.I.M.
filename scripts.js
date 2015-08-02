function init(location) {
    $.getJSON('http://api.open-notify.org/iss-pass.json?callback=?', {lat: location.coords.latitude, lon: location.coords.longitude}, function(data) {
        var end = moment.unix(data.response[0].risetime);
        var start = moment();
        var difference = end - start;
        var duration = moment.duration(difference * 1000, 'milliseconds');

        setInterval(function() {
            duration = moment.duration(duration - 1000, 'milliseconds');
            $('body').css('display', 'table');
            $('#timer').html('<span>' + duration.days() + '</span> : <span>' + duration.hours() + '</span> : <span>' + duration.minutes() + '</span> : <span>' + duration.seconds() + '</span>');
        }, 1000);
    });
}

navigator.geolocation.getCurrentPosition(init);
