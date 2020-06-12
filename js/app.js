$("#about_link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about_content").offset().top - 95,
    },
    "slow"
  );
});

$("#services_link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#services").offset().top - 95,
    },
    "slow"
  );
});

$("#contactus_link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#contactus").offset().top - 50,
    },
    "slow"
  );
});
