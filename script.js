$(function () {
    $(".card").each(function () {
        var repo = $(this).data("repo");
        var url = "https://api.github.com/repos/Khan/" + repo + "/stats/commit_activity";
        var $activity = $(this).find(".activity");

        $.getJSON(url, function (data) {
            data = data.slice(26);

            var activityByWeek = data.map(function (week) {
                return week.total
            });
            var maxActivity = Math.max.apply(null, activityByWeek);

            var padding = 1;
            var count = activityByWeek.length;
            var containerWidth = $activity.outerWidth();
            var width = (containerWidth - (count - 1) * padding) / count;

            activityByWeek.forEach(function (week, i) {
                var height = Math.floor(week / maxActivity * 100);
                var $bar = $("<div></div>")
                    .addClass("bar")
                    .css("left", (width + padding) * i + "px")
                    .css("width", width)
                    .css("height", height + "px")

                $activity.append($bar)
            });
        });
    });
});
