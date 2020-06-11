$("#about_link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about_content").offset().top - 50,
    },
    "slow"
  );
});

$("#services_link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#services").offset().top - 50,
      // scrollTop: $("#services").height(),
    },
    "slow"
  );
});
