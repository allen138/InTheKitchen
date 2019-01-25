$(document).ready(function() {
  getUser();
});

var userid;
function getUser() {
  $.get("/api/current_user", function(data) {
    userid = data.id;
  });
}
$(document).on("click", ".saveRecipe", function() {
  insertnewFav({
    AuthorId: userid,
    RecipeId: $(this).attr("id")
  });
});

function insertnewFav(authorData) {
  $.post("/api/newfavorite", authorData);
}
