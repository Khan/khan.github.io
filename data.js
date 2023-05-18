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
        projectLogo: "./img/aphrodite.svg",
        description: "Inline styles that work!"
    }, {
        projectSlug: "katex",
        projectName: "KaTeX",
        language: "JavaScript",
        projectLogo: "./img/katex.png",
        description: "The fastest math rendering library for the web."
    }, {
        projectSlug: "live-editor",
        projectName: "Live Editor",
        language: "JavaScript",
        projectLogo: "./img/live-editor.png",
        description: "A browser-based live coding environment."
    }, {
        projectSlug: "perseus",
        projectName: "Perseus",
        language: "JavaScript",
        projectLogo: "./img/perseus.png",
        description: "Khan Academy's exercise question editor and renderer."
    }, {
        projectSlug: "perseus/tree/main/packages/kmath",
        projectName: "Kmath",
        language: "JavaScript",
        projectLogo: "./img/kmath.svg",
        description: "JavaScript Numeric Math Utilities."
    }, {
        projectSlug: "wonder-blocks",
        projectName: "Wonder Blocks",
        language: "JavaScript",
        projectLogo: "./img/wonder-blocks.svg",
        description: "React components for Wonder Blocks design system."
    },
    // Some new projects, which we'd like to be closer to the top
    {
        projectSlug: "genqlient",
        projectName: "genqlient",
        language: "Go",
        description: "A truly type-safe GraphQL client for Go."
    }, {
        projectSlug: "mu-lambda",
        projectName: "Mu Lambda",
        language: "JavaScript",
        projectLogo: "./img/Mu-lambda.png",
        description: "A small library of functional programming utilities."
    }, {
        projectSlug: "react-balance-text",
        projectName: "React Balance Text",
        language: "JavaScript",
        projectLogo: "./img/react-balance-text.png",
        description: "A React wrapper for the Adobe Web Platform's Balance-Text Project"
    }, {
        projectSlug: "fuzzy-match-utils",
        projectName: "Fuzzy Match Utils",
        language: "JavaScript",
        projectLogo: "./img/fuzzy-match-utils.png",
        description: "A collection of string matching algorithms designed with React Select in mind."
    }, {
        projectSlug: "react-multi-select",
        projectName: "React Multi-Select",
        language: "JavaScript",
        projectLogo: "./img/react-multi-select.png",
        description: "A multiple select component for React"
    }, {
        projectSlug: "perseus/tree/main/packages/math-input",
        projectName: "Math Input",
        language: "JavaScript",
        description: "An expression editor for the mobile web."
    },
    // All the rest of the projects
    {
        projectSlug: "react-components",
        projectName: "React Components",
        language: "JavaScript",
        projectLogo: "./img/react-components.png",
        description: "Some components we build for Khan Academy the world might find useful."
    }, {
        projectSlug: "snippets",
        projectName: "Snippets",
        language: "Python",
        projectLogo: "./img/snippets.png",
        description: "Code related to collecting and pushing weekly snippets."
    }, {
        projectSlug: "khan-api",
        projectName: "Khan API",
        language: "JavaScript",
        projectLogo: "./img/khan-api.png",
        description: "Documentation for (and examples of) using the Khan Academy API."
    }, {
        projectSlug: "tinyquery",
        projectName: "TinyQuery",
        language: "Python",
        projectLogo: "./img/tinyquery.png",
        description: "A Python in-memory test stub for BigQuery."
    }, {
        projectSlug: "gae_mini_profiler",
        projectName: "GAE Mini Profiler",
        language: "JavaScript",
        projectLogo: "./img/gae_mini_profiler.png",
        description: "A ubiquitous mini-profiler for Google App Engine, inspired by mvc-mini-profiler."
    }, {
        projectSlug: "i18nize_templates",
        projectName: "i18nize Templates",
        language: "Python",
        projectLogo: "./img/i18nize_templates.png",
        description: "A tool to automatically add i18n markup to jinja2 and handlebars templates."
    }, {
        projectSlug: "guacamole",
        projectName: "Guacamole",
        language: "Python",
        projectLogo: "./img/guacamole.png",
        description: "General-use machine learning for learning library."
    }, {
        projectSlug: "structuredjs",
        projectName: "Structured JS",
        language: "JavaScript",
        projectLogo: "./img/structuredjs.png",
        description: "A simple interface for checking the structure of JavaScript code."
    }, {
        projectSlug: "swifttweaks",
        projectName: "SwiftTweaks",
        language: "Swift",
        projectLogo: "./img/swifttweaks.png",
        description: "Adjust your iOS app on-device, without needing to recompile."
    }
];

module.exports = entries;
