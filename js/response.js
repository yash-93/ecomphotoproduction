function scrollToServices_response() {
  window.location.href = "http://localhost/Website/index.html#services";
  var element = document.querySelector("#services");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToAbout_response() {
  window.location.href = "http://localhost/Website/index.html#about_content";
  var element = document.querySelector("#services");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToContact_response() {
  window.location.href = "http://localhost/Website/index.html#contactus";
  var element = document.querySelector("#services");
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
