var idofRecipe;
$(".editRecipe").on("click", function() {
  idofRecipe = $(this).attr("id");
  $.ajax({
    method: "GET",
    url: "/api/recipes/" + idofRecipe
  })
    .then(res => {
      $("#titleforRecipe").val(res.title);
      $("#textAreaForRecipe").val(res.desc);
    })
    .catch(err => console.log(err));
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

var deleteRecipe;
$(".deleteYourRecipe").on("click", function() {
  deleteRecipe = $(this).attr("id");
  console.log(deleteRecipe);
  $.ajax("/api/deleteRecipe/" + deleteRecipe, {
    type: "DELETE"
  }).then(function() {
    setTimeout(function() {
      location.reload();
    }, 500);
  });
});
