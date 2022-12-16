"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");

// Read the contents of the HTML project templates directory
fs.readdir('./src/app/project/project-templates/html', function (err, files) {
    if (err) {
        throw err;
    }

    // Create an empty object to store the HTML templates
    var projectTemplates = {};

    // Loop through the files in the directory
    for (var i = 0; i < files.length; i++) {
        // (i.e. the file name without the .html extension)
        var projectName = path.parse(files[i]).name;
        // Read the HTML file
        var data = fs.readFileSync('./src/app/project/project-templates/html/' + files[i], 'utf8');

        // Add the HTML to the projectTemplates object, using the
        // project name as the property name
        projectTemplates[projectName] = data;
    }

    // Write the projectTemplates object to a new TypeScript file
    fs.writeFile('./src/app/project/project-templates/project-templates.ts', "export const projectTemplates = ".concat(JSON.stringify(projectTemplates, null, 2)), function (writeErr) {
        if (writeErr) {
            throw writeErr;
        }
    });
});
