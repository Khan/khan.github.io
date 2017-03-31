/**
 * Simple function to return how long ago "in words" a passed in Date() object
 * happened
 *
 * For example: "3 years ago" or "2 weeks ago"
 * The smallest granularity is "today"
 */
function timeAgoInWords(ts) {
    var ms = new Date() - ts;
    var days = ms / 1000 / 60 / 60 / 24;

    function ntext(n, singular, plural) {
        if (n >= 1 && n < 2) {
            return "1 " + singular;
        } else {
            return parseInt(n) + " " + plural;
        }
    }

    if (days > 365) {
        var years = days / 365;
        return ntext(years, "year", "years") + " ago";
    }

    if (days > 30) {
        var months  = days / 30;
        return ntext(months, "month", "months") + " ago";
    }

    if (days > 7) {
        var weeks = days / 7;
        return ntext(weeks, "week", "weeks") + " ago";
    }

    if (days >= 2) {
        return parseInt(days) + " days ago";
    } else if (days >= 1) {
        return "yesterday";
    } else {
        return "today";
    }
}

function getJSONFallbackToCache(url, handler) {
    var errorHandler = function() {
        if (!localStorage) {
            return;
        }

        var data = localStorage.getItem(url);

        if (data) {
            data = JSON.parse(data);
            handler(data);
        }
    }

    var result = $.getJSON(url, function(data) {
        if (localStorage) {
            localStorage.setItem(url, JSON.stringify(data));
        }

        handler(data);
    }).fail(errorHandler);
}

$(function () {
    $(".card").each(function () {
        var repo = $(this).data("repo");
        var repoUrl = "https://api.github.com/repos/Khan/" + repo;
        var $activity = $(this).find(".activity");
        var $updated = $(this).find(".updated-ago");

        getJSONFallbackToCache(repoUrl + "/commits", function (data) {
            try {
                var lastUpdated = new Date(data[0].commit.committer.date);
                $updated.text(timeAgoInWords(lastUpdated));
            } catch (e) {
                return;
            }
        });

        getJSONFallbackToCache(repoUrl + "/stats/commit_activity", function (data) {
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
