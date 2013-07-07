exports.init = function(app){
  app.get("/hello", function(req, res){
    res.render('data', {title:"Client Data"});
  });
};
