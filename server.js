#!/usr/bin/env node
var prerender = require('./lib');
var glob = require('glob');
var chromeLocation = glob.sync('./node_modules/puppeteer/.local-chromium/linux-*/chrome-linux/chrome').pop();

var server = prerender({chromeLocation});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
