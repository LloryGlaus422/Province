$(document).ready(function(){
    $("button").on('click',function(){
      
        $.ajax({
            url: 'http://127.0.0.1:8080/request',
            crossDomain: 'true',
            data: JSON.stringify({
                rate: $("select").val()               
            }),
            type: 'POST',
            success: function (response) {
                console.log("rated");
              
            },
            error: function (err) {
               
                
            }
        })
    });
});