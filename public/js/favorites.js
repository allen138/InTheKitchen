//document ready on load
$(document).ready(function() {

});


var thistoDelete;
$(document).on("click", ".deleteRecipe", function() {
  console.log("this was clicked");
  thistoDelete = $(this).attr("id");
  console.log(thistoDelete);
  $.ajax("/api/deletefavorite/" + thistoDelete, {
    type: "DELETE"
  }).then(function() {
    setTimeout(function() {
    getthisFavs();
    }, 1000);
  });
});
 function getthisFavs (){
     console.log("this was called");
    $.get("/favorites");
 };