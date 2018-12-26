document.addEventListener("DOMContentLoaded", function() {
    $.ajax({
            url: "http://127.0.0.1:5000/lab-one",
            // The data to send (will be converted to a query string)
            data: {
              "questions":["1", "5", "7"]
            },
            type: "POST",
            // The type of data we expect back
            dataType: "json",
        })

        .done(function(json) {
          console.log(json.answers);

        })
        .fail(function(xhr, status, errorThrown) {
            alert("Sorry, there was a problem!");

            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        })
        .always(function(xhr, status) {
            console.log("fomosjed")
        });

});
