$(document).ready(function() {
  const parks = document.querySelectorAll(".unvisited");

  function showAll() {
    [...parks].forEach(park => {
      park.classList.remove("hidden");
    });
  }

  function showVisited() {
    [...parks].forEach(park => {
      park.classList.add("hidden");
    });
  }

  $(".segment").each(function() {
    $(this).click(function() {
      if (!$(this).hasClass("checked")) {
        $(this)
          .siblings()
          .each(function() {
            $(this).removeClass("checked");
          });

        $(this).addClass("checked");
      }

      if (this.id === "all") {
        showAll();
      } else {
        showVisited();
      }
    });
  });
});
