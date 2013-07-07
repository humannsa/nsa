exports.init = function(app){
  app.get("/hello", function(req, res){
    res.render('client/data', {title:"Client Data"});
  });
};
