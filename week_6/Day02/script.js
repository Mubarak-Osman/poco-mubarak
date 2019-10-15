
var source = document.getElementById("location");
var target = document.getElementById("second");
var triggerValue = "loc5";

function toggleShowOnSelectedValue(evt) {
  var selectedValue = this[this.selectedIndex].value;
  if (selectedValue === triggerValue) {
    // target.className = "show";
    target.classList.add("show");
  } else {
    // target.className = "";
    target.classList.remove("show");
  }
};

source.addEventListener("change", toggleShowOnSelectedValue, false);