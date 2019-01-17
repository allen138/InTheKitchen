
//document ready on load
$(document).ready(function() {
  //on form submission
});

$(document).on("click", ".submitform", function() {
  console.log("clicked submit");
  event.preventDefault();
  console.log($("#cuisinetype").val());
  console.log($("#titleforRecipe").val());
  console.log($("#textAreaForRecipe").val());
   console.log(
    $("#avatar")
      .val()
      .split("\\")
      .pop()
  );;
  insertNewRecipe({
    cuisine: $("#cuisinetype").val(),
    title: $("#titleforRecipe").val(),
    image: $("#avatar")
      .val()
      .split("\\")
      .pop(),
    desc: $("#textAreaForRecipe").val()
  });
});
function insertNewRecipe(authorData) {
  $.post("/api/newrecipes", authorData).then(console.log("here"));
}
$(document).on("click", "#clicktoUpload", function() {
  if($("#avatar").val().split("\\").pop()){
    $("#alertSuccess").html("Success").css("color", "#009933");
  }else{
    $("#alertSuccess").html("Failed, Try again").css("color", "#e60000"); 
  }
  
});
