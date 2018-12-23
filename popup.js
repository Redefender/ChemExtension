document.addEventListener("DOMContentLoaded", function() {
    $.ajax({
            url: "http://127.0.0.1:5000/lab-one",
            // The data to send (will be converted to a query string)
            data: {
                "1": [
                    "this is the answer for question 1"
                ],
                "5": [
                    "this is the answer for question 5"
                ],
                "7": [
                    "this is the answer for question 7"
                ]
            },
            type: "POST",
            // The type of data we expect back
            dataType: "json",
        })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
        .done(function(json) {
          $("h1").text(json)
        })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        .fail(function(xhr, status, errorThrown) {
            alert("Sorry, there was a problem!");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        })
        // Code to run regardless of success or failure;
        .always(function(xhr, status) {
            alert("The request is complete!");
        });
      });
