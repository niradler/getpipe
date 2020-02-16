#!/usr/bin/env node
const getpipe = require(".");

getpipe(piped_data => console.log("piped data:", piped_data));
