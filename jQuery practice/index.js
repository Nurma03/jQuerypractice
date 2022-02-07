$("div").hide();

$("h1").on("click", function() {
  $("h1").fadeOut();
  $("div").fadeIn();
});

$("button").on("click", function() {
  if ($("Password") == $("Password1")) {
    console.log("Succesful registration");
  }
  else {
    console.log("ERROR!!!");
  }
});
