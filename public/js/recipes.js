//document ready on load
$(document).ready(function() {
    //on form submission
$(document).on("click",".submitform",handleformSubmit);
event.preventDefault();
if (!$("#cuisinetype").val() || !$("#title").val()|| !$("#avatar").val()|| !$("#textAreaForRecipe").val()){
    alert("Please complete the form!")
    return;
  }
  getimageName();
});
