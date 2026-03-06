let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let clear = document.getElementById("clear");
let proceed = document.getElementById("proceed");
let save = document.getElementById("save");
let del = document.getElementById("del");

let count = 0;

function updateCount() {
  let displayCount = (document.getElementById("display_count").innerHTML =
    count);
}

inc.addEventListener("click", function () {
  count = count + 1;
  updateCount();
});
dec.addEventListener("click", function () {
  count--;
  updateCount();
});
clear.addEventListener("click", function () {
  count = 0;
  updateCount();
});
proceed.addEventListener("click", function () {
  let savedItem = localStorage.getItem("count");
  count = Number(savedItem);
  updateCount();
});
save.addEventListener("click", function () {
  localStorage.setItem("count", count);
  alert("Count data saved successfully");
});

del.addEventListener("click", function () {
  localStorage.removeItem("count");
  alert("Saved data deleted successfully");
});
