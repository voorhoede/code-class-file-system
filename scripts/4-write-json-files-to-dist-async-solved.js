const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');

const startTime = new Date().getTime();

// Write all 'json' files to 'dist/json/', do everything Asynchronous
const destinationFolder = 'dist/json/';

glob('content/**/*.json', (err, files) => {
    if (err) { throw err; }

    files.forEach((file) => {
        const filename = path.basename(file);

        fs.readFile(file, 'utf8', (err, contents) => {
            if (err) { throw err; }

            mkdirp(destinationFolder, (err) => {
                if (err) { throw err; }
                writeFile(path.join(destinationFolder, filename), contents);
            });
        });
    });
});

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) { throw err; }

        console.log(`written file ${filePath}`);
    });
}
