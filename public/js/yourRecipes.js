$(document).ready(function() {
 
});
//get user
// function getUser() {
//   $.get("/api/current_user", function(data) {
//     if (!data.firstName) {
//       $(".login").show();
//       $(".userName").hide();
//     } else {
//       $("#loggedInUserName").text(data.firstName);
//       $("#loggedInUserName").addClass(data.id);
//       $(".login").hide();
//     }
//   });
// }
function gerthisusersRecies() {
 
  $.get("/yourrecipes/id");
}

