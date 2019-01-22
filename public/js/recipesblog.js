//on page load
$(document).ready(function() {
  getUser();
});

$(document).on("click", ".dropdown-item", function() {
  console.log(this.attr("id"));
});
//get user
function getUser() {
  
  $.get("/api/current_user", function(data) {
    if (!data.firstName) {
      $(".login").show();
      $(".userName").hide();
    } else {
      $("#loggedInUserName").text(data.firstName);
      $("#loggedInUserName").addClass(data.id);
      $(".login").hide();
    }
  });
}
