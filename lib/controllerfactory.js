var fs = require('fs');

var controllerFactory = {
  load: function () {
    var filesInDirectory = function (path) {
      var controllerFiles = [];

      var files = fs.readdirSync(path);
      files.forEach(function (file) {
        var stat = fs.statSync(file);
        if (stat.isFile()) {
          controllerFiles.push(file);
        } else if (stat.isDirectory()) {
          controllerFiles.concat(filesInDirectory(file));
        }
      });

      return controllerFiles;
    };

    var controllerFiles = filesInDirectory('../app/controllers/');
  },
  makeController: function (name) {
    
  }
};

controllerFactory.load = 

module.exports = controllerFactory;