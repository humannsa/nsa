exports.init = function(app){
  app.get("/trainer/dashboard", function(req, res){
    res.render('./trainer/dashboard', { title:"Trainer Dashboard" });
  });
};
