$(function () {
  $(".card .activity").each(function () {
    var lineData = [];
    var $bar;

    var padding = 1; // 2px
    var count = 52;
    var containerWidth = $(this).outerWidth();
    var width = (containerWidth - (count - 1) * padding) / count;

    for (var i = 0; i < count; i++) {
      height = Math.floor(Math.random() * 100);
      $bar = $("<div></div>")
        .addClass("bar")
        .css("left", (width + padding) * i + "px")
        .css("width", width)
        .css("height", height + "px")

      $(this).append($bar)
    }
  });
});
