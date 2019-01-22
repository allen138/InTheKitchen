//on page load
$(document).ready(function() {
  // $(".whattoSearch").text("Searching for " + selected);
});

$(document).on("click", ".dropdown-item", function() {
  console.log(this.attr("id"));
});
