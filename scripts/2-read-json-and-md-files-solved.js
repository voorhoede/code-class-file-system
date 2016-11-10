const fs = require('fs');
const glob = require('glob');

// Read all 'json' and 'md' files in 'content' directory. So not the 'txt files'.

glob('content/**/*.{md,json}', (err, files) => {
    if (err) {
        throw err;
    } else {
        files.forEach((file) => {
            fs.readFile(file, 'utf8', (err, contents) => {
                console.log(contents);
                console.log('------------------------');
            })
        })
    }
});