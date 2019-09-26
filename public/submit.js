$(document).ready(function () {
    
    $("button").on('click', function () {
        var rate = $(this).text()
        $.ajax({
            url: '/rate',
            crossDomain: 'true',
            data: {
                province: $("title").text(),
                rate: rate,
            },
            success: function (data) {
                alert(data);
            }

        })
    });
});
