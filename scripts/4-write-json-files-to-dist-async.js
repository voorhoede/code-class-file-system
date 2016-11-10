const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');

// Write all 'json' files to 'dist/json/', do everything Asynchronous