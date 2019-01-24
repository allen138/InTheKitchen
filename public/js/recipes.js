//document ready on load
$(document).ready(function() {
  getUser();
});


function getUser() {
  console.log("loaded");
  var userid;
  $.get("/api/current_user", function(data) {
    userid = data.id;
    console.log(userid + "this is the user id");
  });
}
$(document).on("click", ".submitform", function() {
  event.preventDefault();
  console.log($("#alertSuccess").val());

  insertNewRecipe({
    cuisine: $("#cuisinetype")
      .val()
      .trim(),
    title: $("#titleforRecipe").val(),
    image: $("#avatar")
      .val()
      .split("\\")
      .pop(),
    desc: $("#textAreaForRecipe").val(),
    AuthId: userid
  });
  setTimeout(function() {
    window.location.href = "/home";
  }, 1000);
});
function insertNewRecipe(authorData) {
  $.post("/api/newrecipes", authorData)
    .then(console.log("here"))
    .then(function() {
      $("#cuisinetype").val("");
      $("#titleforRecipe").val("");
      $("#avatar").val("");
      $("#textAreaForRecipe").val("");
      $("#alertSubmit")
        .html("Success")
        .css("color", "#009933");
      $("#alertSuccess").html("");
    });
}
$(document).on("click", "#clicktoUpload", function() {
  if (
    $("#avatar")
      .val()
      .split("\\")
      .pop()
  ) {
    $("#alertSuccess")
      .html("Success")
      .css("color", "#009933");
  } else {
    $("#alertSuccess")
      .html("Failed, Try again")
      .css("color", "#e60000");
  }
});
