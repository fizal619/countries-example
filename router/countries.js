const express = require("express");
const router = express.Router();
const countries = require("../json/countries.json");
//	console.log(countries);

// ---> /countries
router.post("/", function(req, res) {

  // res.json(req.params)
	var country = countries[req.body.code.toUpperCase()];

  if(req.body.nogo == ""){
    res.render('page/idontwanna', {
      countryList: ['USA', 'AUS', 'CAN', 'MEX'],
      countries: countries
    })
  }


	if (!country) {
		res.status(400);
		return res.send("This is not a country!");
	}
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});


});

//   ----> /countries
router.get('/', function (req,res) {
	var home = countries.USA;

	res.render("template", {
		page: "page/countries.ejs",
		data: home,
	});
});

module.exports = router;
