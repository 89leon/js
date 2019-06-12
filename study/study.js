const folder ='/Users/user/Downloads';// './mbd/';
const fs = require('fs');

const writePath = '';


var write = function(file){
  fs.appendFile("\/Users/user/Desktop/js git/js/study/mbd", file + "\r\n" , function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
}




String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    //console.log("list:"+list);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            //console.log("file:"+ file);
            file = file.replace('./mbd//' ,'').replaceAll('/',' ');
            write(file);
            results.push(file);

        }
    });
    return results;
}
console.log(walk(folder));
