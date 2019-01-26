var thistoDelete;
$(document).on("click", ".deleteRecipe", function() {
  thistoDelete = $(this).attr("id");
  console.log(thistoDelete);
  $.ajax("/api/deletefavorite/" + thistoDelete, {
    type: "DELETE"
  }).then(function() {
    setTimeout(function() {
      location.reload();
    }, 500);
  });
});