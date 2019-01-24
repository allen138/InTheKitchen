$(document).ready(function() {
  
});
var idofRecipe;
$(document).on("click", ".editRecipe", function() {
  idofRecipe = $(this).attr("id");
  console.log(idofRecipe);
  var titletoUse = ".title" + idofRecipe;
  var imgtoUse = ".img" + idofRecipe;
  var desctoUse = ".desc" + idofRecipe;
  $("#titleforRecipe").val($(titletoUse).attr("id"));
  $("#avatar").val($(imgtoUse).attr("id"));
  $("#textAreaForRecipe").val($(desctoUse).attr("id"));
});
$(document).on("click", ".savetheUpdates", function() {
  event.preventDefault();

  updateRecipe({
    id: idofRecipe,
    title: $("#titleforRecipe").val(),
    desc: $("#textAreaForRecipe").val()
  });
  setTimeout(function() {
    window.location.href = "/yourrecipes";
  }, 1000);
});
function updateRecipe(authorData) {
   $.ajax({
      method: "PUT",
      url: "/api/updateRecipe",
      data: authorData
    }).then(function() {
     
      window.location.href = "/yourrecipes";
      });
  }

