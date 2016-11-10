const fs = require('fs');
const glob = require('glob');

// Read all 'md' files in 'content' directory and print each file's content
// Use glob for pattern matching, fs for reading the file
// Run this script with 'node scripts/1-read-md-files.js'