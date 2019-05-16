var zomato = require("../../public/zomato");
var client = zomato.createClient({
  userKey: "056aa6d7d9091ddc6b978f808e9ff9bc"
});

/* Get cities with restaurants */
module.exports.getCities = function(req, res) {
  client.getCities(
    {
      q: "New"
    },
    function(err, result) {
      if (!err) {
        res.send(JSON.parse(result));
      } else {
        res.send(err);
      }
    }
  );
};
