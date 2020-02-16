#!/usr/bin/env node

const defaults = {
  auto_throw: true
};

function getpipe(callback, options = {}) {
  var data = "";
  var self = process.stdin;
  options = Object.assign(defaults, options);

  self.on("readable", function() {
    var chunk = this.read();
    if (chunk === null) {
      if (!data) {
        if (options.auto_throw) throw new Error("empty");
        callback(data);
      }
    } else {
      data += chunk;
    }
  });

  self.on("end", function() {
    callback(data);
  });
}

module.exports = getpipe;
