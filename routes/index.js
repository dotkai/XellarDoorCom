
/*
 * GET home page.
 */

var thithe = 'Express';

exports.index = function(req, res){
  res.render('index', { title: thithe });
};

exports.mystore = function(req, res){
  res.render('mystore', { title: thithe });
};

exports.menStore = function(req, res){
	res.render('menStore', { title: thithe });
};
