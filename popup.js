document.addEventListener("DOMContentLoaded", function() {
    var labNum = $(".lab").val();
    console.log(labNum);
    $.ajax({
            url: "http://127.0.0.1:5000/sign-in",
            // The data to send (will be converted to a query string)
            data: JSON.stringify({
              user: "ezra.jesalva15@gmail.com",
              password:"Ezra1998"

            }),
            type: "POST",
            // The type of data we expect back
            contentType: "application/json",
            dataType: "json",

        })
        .done(function(json) {
          console.log(json);
        })
        .fail(function(xhr, status, errorThrown) {
            alert("Sorry, there was a problem!");

        })
        .always(function(xhr, status) {
        });

});
