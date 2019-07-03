var zomato = require("../../public/zomatoWrapper");
var client = zomato.createClient({
  userKey: "056aa6d7d9091ddc6b978f808e9ff9bc"
});

/* Get home page */
module.exports.homeList = function(req, res) {
  let locations = [];
  client.search(
    {},
    function (err, result) {
      if (!err) {
        locations = result;
      } else {
        locations = ["There is no locations on your request..."];
      }
    }
  );

  res.render("locations-list", 
  {
    title: "L8cker - find a place to eat and work",
    pageHeader: {
      title: "L8cker",
      strapline: "Find most suitable places to eat and work with wifi near you!"
    },
    locations: locations
  });
};
/* Get location info page */
module.exports.locationInfo = function(req, res) {
  res.render("locations-info", { title: "Location info" });
};
/* Get add review page */
module.exports.addReview = function(req, res) {
  res.render("locations-review-form", { title: "Add review" });
};
