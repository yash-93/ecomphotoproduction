function scrollToAbout() {
  var element = document.querySelector("#about_content");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}

function scrollToServices() {
  var element = document.querySelector("#services");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToContact() {
  var element = document.querySelector("#contactus");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToEditingSamples() {
  var element = document.querySelector("#ourwork");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}

document.getElementById("downArrow").addEventListener("click", function () {
  document.getElementById("queryform").classList.toggle("is-active");
});
