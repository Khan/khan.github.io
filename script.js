/**
 * These are the projects, in order, which we are listing on the page.
 * They will be rendered with the Handlebars templates in index.html
 */
var entries = [
    // Flagship projects
{
    projectSlug: "aphrodite",
    projectName: "Aphrodite",
    language: "JavaScript",
    description: "Inline styles that work!"
}, {
    projectSlug: "katex",
    projectName: "KaTeX",
    language: "JavaScript",
    description: "The fastest math rendering library for the web."
}, {
    projectSlug: "live-editor",
    projectName: "Live Editor",
    language: "JavaScript",
    description: "A browser-based live coding environment."
}, {
    projectSlug: "perseus",
    projectName: "Perseus",
    language: "JavaScript",
    description: "Khan Academy's exercise question editor and renderer."
}, {
    projectSlug: "tota11y",
    projectName: "Tota11y",
    language: "JavaScript",
    description: "An accessibility (a11y) visualization toolkit."
}, {
    projectSlug: "kmath",
    projectName: "Kmath",
    language: "JavaScript",
    description: "avaScript Numeric Math Utilities."
},
    // Some new projects, which we'd like to be closer to the top
{
    projectSlug: "mu-lambda",
    projectName: "Mu Lambda",
    language: "JavaScript",
    description: "A small library of functional programming utilities."
}, {
    projectSlug: "react-balance-text",
    projectName: "React Balance Text",
    language: "JavaScript",
    description: "A React wrapper for the Adobe Web Platform's Balance-Text Project"
}, {
    projectSlug: "fuzzy-match-utils",
    projectName: "Fuzzy Match Utils",
    language: "JavaScript",
    description: "A collection of string matching algorithms designed with React Select in mind."
}, {
    projectSlug: "react-multi-select",
    projectName: "React Multi-Select",
    language: "JavaScript",
    description: "A multiple select component for React"
},
    // ALl the rest of the projects
{
    projectSlug: "react-components",
    projectName: "React Components",
    language: "JavaScript",
    description: "Some components we build for Khan Academy the world might find useful."
}, {
    projectSlug: "snippets",
    projectName: "Snippets",
    language: "Python",
    description: "Code related to collecting and pushing weekly snippets."
}, {
    projectSlug: "khan-api",
    projectName: "Khan API",
    language: "JavaScript",
    description: "Documentation for (and examples of) using the Khan Academy API."
}, {
    projectSlug: "tinyquery",
    projectName: "Tiny Query",
    language: "Python",
    description: "A Python in-memory test stub for BigQuery."
}, {
    projectSlug: "gae_mini_profiler",
    projectName: "GAE Mini Profiler",
    language: "JavaScript",
    description: "A ubiquitous mini-profiler for Google App Engine, inspired by mvc-mini-profiler."
}, {
    projectSlug: "i18nize_templates",
    projectName: "i18nize Templates",
    language: "Python",
    description: "A tool to automatically add i18n markup to jinja2 and handlebars templates."
}, {
    projectSlug: "guacamole",
    projectName: "Guacamole",
    language: "Python",
    description: "General-use machine learning for learning library."
}, {
    projectSlug: "structuredjs",
    projectName: "Structured JS",
    language: "JavaScript",
    description: "A simple interface for checking the structure of JavaScript code."
}];

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

/*
 * Github has a very low rate limit for public API requests.  Since we are
 * making 2n requests to the API, reloading the page a couple of times causes
 * the API requests to fail.  The data doesn't change often, so make the
 * request and store the result in localStorage.  If a future request fails,
 * pull it out of loalStorage so the page doesn't fail.
 */
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

/*
 * A generic function for finding a template, rendering it with data, and
 * optionally appending it into an element on the page.
 */
function renderTemplate(templateSelector, data, intoSelector) {
    var templateSource = $(templateSelector).html();
    var template = Handlebars.compile(templateSource);
    var rendered = template(data);

    if(intoSelector) {
        $(intoSelector).append(rendered);
    }

    return rendered;
}

/*
 * Loop through the entries and populate the page with the content
 */
function populatePage() {
    while (entries.length > 0) {
        var leftData = entries.shift();
        var leftContent = renderTemplate("#panel-template", leftData);

        var rightData = entries.shift();
        var rightContent = rightData && renderTemplate("#panel-template", rightData);

        renderTemplate("#row-template", {left: leftContent, right: rightContent}, ".page-content");
    }
}

$(function () {
    populatePage();

    $(".card-content").each(function () {
        var repo = $(this).data("repo");
        var repoUrl = "https://api.github.com/repos/Khan/" + repo;
        var $activity = $(this).find(".activity");
        var $updated = $(this).find(".updated-ago");

        /*
         * Populate the last-updated content from github data
         */
        getJSONFallbackToCache(repoUrl + "/commits", function (data) {
            try {
                var lastUpdated = new Date(data[0].commit.committer.date);
                $updated.text(timeAgoInWords(lastUpdated));
            } catch (e) {
                return;
            }
        });

        /*
         * Populate the activity graph from github data
         */
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
