const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');

// Write all 'json' files to 'dist/json/', do everything synchronous.

// Use glob for pattern matching
// Use fs for reading the files
// Use mkdirp for directory creation
// Use path for working with filepaths

// Run this script with 'node exercises/3-write-json-files-to-dist.js'