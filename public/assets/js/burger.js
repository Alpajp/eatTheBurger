$(document).ready(function(){

    $(".mark-complete").on("click", function() {
      console.log("The burger button was pushed");
  
      // read id from button
      const burgerId = $(this).attr("data-id");
      console.log("This is the id to be eaten" + burgerId);
      $.ajax({
        url: "/api/burgers/" + burger,
        method: "PUT"
      }).then(function(data) {
        location.reload();
      });
  
    });
  
    $(".delete").on("click", function () {
      console.log("The burger button was pushed");
      // read id from button
      const burgerId = $(this).attr("data-id");
      console.log("This burger is to be deleted" + delBurger);
      $.ajax({
        url: "/api/burgers/" + burger,
        method: "DELETE"
      }).then(function (data) {
        location.reload();
      });
  
    })
  
    $("#submit-btn").on("click", function(e) {
      e.preventDefault();
    console.log("This is what the entry is" + this);
      // package up the burger type
      const burgerItem = {
        burger: $("#burger-input").val().trim()
      }
      console.log("This is burgerItem" + burgerItem);
      $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: burgerItem // req.body
      })
      .then(function(data) {
        location.reload();
      });
    });
  
  });