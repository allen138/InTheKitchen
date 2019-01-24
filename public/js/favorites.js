 //document ready on load
$(document).ready(function() {
    getUser();
  });
  
  var userid;
  function getUser() {
    console.log("loaded");
  
    $.get("/api/current_user", function(data) {
      userid = data.id;
      console.log(userid + "this is the user id");
    });
  }
 var thistoDelete;
 $(document).on("click", ".deleteRecipe", function() {
    thistoDelete =$(this).attr("id");
 
    $.ajax({
      method: "DELETE",
      url: "/api/deletefavorite/" + thistoDelete
    })
      .then(console.log('here'));
  }
});