exports.init = function(app){
  app.get("/client/data", function(req, res){
    res.render('data', {title:"Client Data"});
  });
};
