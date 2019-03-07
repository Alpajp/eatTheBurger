$(document).ready(function(){

    

    $(".fa-utensils").on("click", function() {
  
      // read id from button
      const burgerId = $(this).siblings(".servedBurger").text().split(".")[0];
      console.log("This is id: " + burgerId);
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT"
      }).then(function(data) {
        location.reload();
      });
      
    });
    
    $(".fa-trash-alt").on("click", function () {
      // read id from button
      const delBurger = $(this).siblings(".devouredBurger").text().split(".")[0];
      console.log("This is ID: " + delBurger);
      $.ajax({
        url: "/api/burgers/" + delBurger,
        method: "DELETE"
      }).then(function (data) {
        location.reload();
      });
  
    })
  
    $("#text-enter-button").on("click", function(e) {
      e.preventDefault();
    console.log("This is what the entry is" + this);
      // package up the burger type
      const burgerItem = {
        burger_name: $("#enter_text").val().trim()
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