$(document).ready(function () {
    $("button").click(function () {
        var rate = $(this).text();
        var province = $('title').text();
        $.ajax({
            url: "/rate",
            data: { rate: rate, province: province},
            type: "GET",
            success: function (response) {
                $('#rate').text(response);
            },
            error: function (e) {
                console.log(e);
            }
        })
        $('select').val("none");
    });
});
