exports.init = function(app){
  app.get("trainer/dashboard", function(req, res){
    res.render('dashboard', {title:"Trainer Dashboard"});
  });
};
