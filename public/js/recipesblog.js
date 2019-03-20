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
  var grab = "#saveSuccess" + $(this).attr("id");
  $(grab).html("Saved!");
  console.log(grab);
  $(grab).fadeOut(2000);
  insertnewFav({
    AuthorId: userid,
    RecipeId: $(this).attr("id")
  });
});

function insertnewFav(authorData) {
  $.post("/api/newfavorite", authorData);
}
function renderAvatar() {
  $.get("/api/current_user", function(data) {
    var avatarUrl = data.avatar;
    $("#avatarImgTag").attr("src", avatarUrl);
  });
}

function hideOrDisplaySignInLink() {
  $.get("/api/current_user", function(data) {
    if (data.id) {
      renderAvatar();
      $(".login").hide();
    } else {
      $("#avatarDropdown").hide();
    }
  });
}
hideOrDisplaySignInLink();
