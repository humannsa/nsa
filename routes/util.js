exports.init = function(app) {
  // Echo methods
  app.post('/echo', function(req, res) {
    res.send(req.body);
  });

};