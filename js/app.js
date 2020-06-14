// $("#about_link").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#about_content").offset().top - 95,
//     },
//     "slow"
//   );
// });

// $("#services_link").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#services").offset().top - 95,
//     },
//     "slow"
//   );
// });

// $("#contactus_link").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#contactus").offset().top - 50,
//     },
//     "slow"
//   );
// });

// $("#about_linkf").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#about_content").offset().top - 95,
//     },
//     "slow"
//   );
// });

// $("#services_linkf").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#services").offset().top - 95,
//     },
//     "slow"
//   );
// });

// $("#contactus_linkf").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#contactus").offset().top - 50,
//     },
//     "slow"
//   );
// });

// $("#editingworksamples").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $("#ourwork").offset().top - 50,
//     },
//     "slow"
//   );
// });

function scrollToAbout() {
  var element = document.querySelector("#about_content");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}

function scrollToServices() {
  var element = document.querySelector("#services");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}

function scrollToContact() {
  var element = document.querySelector("#contactus");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}

function scrollToEditingSamples() {
  var element = document.querySelector("#ourwork");
  element.scrollIntoView({ behavior: "smooth", block: "end", block: "center" });
}
