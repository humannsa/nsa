exports.init = function(app){
  app.get("/client/data", function(req, res){
    res.render('./client/data', { title: "client data"});
  });
};
