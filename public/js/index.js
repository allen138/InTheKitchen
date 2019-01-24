//-------------------------------------------------------------------------------------------//
//New Stuff
$(document).ready(function() {
  gerthisusersRecies();
});

//on click of for each
$(document).on("click", ".feature-container", function() {
  var idtoGet = $(this).attr("id");
  getthisRecipe(idtoGet);
});
//get this type of recipe
function getthisRecipe(idtoGet) {
  var id = idtoGet;
  $.get("/api/getrecipes/" + id, function(data) {
    console.log(data);
  });
}
//get user
var userid;
function getUser() {
  $.get("/api/current_user", function(data) {
    userid = data.id;
    $("#loggedInUserName").text(data.firstName);
  }).then(function(userid) {
    gerthisusersRecies(userid);
  });
}
getUser();
// $(document).on("click", ".yourRecipes", function() {
//   console.log("here");
//   console.log(req.user.id);
//   window.location.href = "/yourrecipes/" + userid;
// });

function gerthisusersRecies() {
  $.get("/yourrecipes/id");
}
function renderAvatar() {
  $.get("/api/current_user", function(data) {
    var avatarUrl = data.avatar;
    $("#avatarImgTag").attr("src", avatarUrl);
  });
}
renderAvatar();
