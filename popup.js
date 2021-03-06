const baseUrl = "http://127.0.0.1:5000/" //for testing

document.addEventListener("DOMContentLoaded", function() {
    checkSignedIn();
    getLab();

});

$(".lab").on("change",function(e){
  getLab();

});

function getLab(){
  var labNum = $(".lab").val();

  $.ajax({
          url: baseUrl + "lab/" + labNum,
          type: "GET",
          // The type of data we expect back
          contentType: "application/json",
          dataType: "text",
      })
      .done(function(json) {
        console.log(json)
      })
      .fail(function(xhr, status, errorThrown) {
      })
      .always(function(xhr, status) {console.log('finished lab getting')});
}
$("#signInForm").submit(function(e) {
    e.preventDefault();
    var user = $("#user").val();
    var password = $("#password").val();

    $.ajax({
            url: baseUrl + "sign-in",
            data: JSON.stringify({
                user: user,
                password: password
            }),
            type: "POST",
            // The type of data we expect back
            contentType: "application/json",
            dataType: "text",
        })
        .done(function(json) {
          console.log('signed in',json)
            if(json === "YES"){
              login();
            }
        })
        .fail(function(xhr, status, errorThrown) {
          console.log(errorThrown);
        })
        .always(function(xhr, status) {console.log(status)});
})

function checkSignedIn(){
  console.log('in method')
  $.ajax({
          url: baseUrl + "check-signed-in",
          // The data to send (will be converted to a query string)
          type: "GET",
          // The type of data we expect back
          contentType: "application/json",
          dataType: "text",
      })
      .done(function(json) {
          if(json === "YES"){
            login();
          }
      })
      .fail(function(xhr, status, errorThrown) {
      })
      .always(function(xhr, status) {});
}



function login(){
  $("#signIn").hide();
  $("#loggedIn").show();
}
