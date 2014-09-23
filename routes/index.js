
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.hosts = function(req, res){
  res.render('hosts');
};
exports.app = function(req, res){
  window.open("http://deeplink.me/unightlife.io/","_self");
};


