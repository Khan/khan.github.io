"use strict";

const fs = require("fs");
const handlebars = require('handlebars');

const entries = require("../data.js");

const TEMPLATES = "./templates";

function getTemplate(name) {
    return fs.readFileSync(`${TEMPLATES}/${name}`, "utf8");
}

const indexTemplate = getTemplate("index.tpl");
const rowTemplate = getTemplate("row.tpl");
const panelTemplate = getTemplate("panel.tpl");

/*
 * A generic function for finding a template, rendering it with data, and
 * optionally appending it into an element on the page.
 */
function renderTemplate(template, data) {
    return handlebars.compile(template)(data);
}

/*
 * Loop through the entries and populate the page with the content
 */
function renderPage() {
    const rows = [];

    while (entries.length > 0) {
        const leftData = entries.shift();
        const leftContent = renderTemplate(panelTemplate, leftData);

        const rightData = entries.shift();
        const rightContent = rightData && renderTemplate(panelTemplate, rightData);

        const row = renderTemplate(rowTemplate, {left: leftContent, right: rightContent});
        rows.push(row);
    }

    return renderTemplate(indexTemplate, {content: rows.join("\r\n")});
}

fs.writeFileSync("index.html", renderPage());
