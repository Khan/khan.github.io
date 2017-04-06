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
    description: "JavaScript Numeric Math Utilities."
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
    projectName: "TinyQuery",
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

module.exports = entries;
