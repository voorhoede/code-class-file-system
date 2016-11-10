const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');

// Write all 'json' files to 'dist/json/', do everything synchronous

const destinationFolder = 'dist/json/';
const files = glob.sync('content/**/*.json');

files.forEach((file) => {
    const filename = path.basename(file);
    const content = fs.readFileSync(file, 'utf8');

    if (!fs.existsSync(destinationFolder)) {
        mkdirp.sync(destinationFolder);
    }

    fs.writeFileSync(path.join(destinationFolder, filename), content);

    console.log(`written file ${filename}`);
});

console.log(`written all files`);