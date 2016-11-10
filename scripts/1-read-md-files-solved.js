const fs = require('fs');
const glob = require('glob');

// Read all 'md' files in 'content' directory and print each file's content

glob('content/**/*.md', (err, files) => {
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