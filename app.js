const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const janeParkRoutes = require("./router/janepark.js");
const countriesRoutes = require("./router/countries.js");


app.set("view engine", "ejs");
app.use(express.static("assets"));

// Configure your app to correctly interpret POST
// request bodies. The urlencoded one handles HTML
// <form> POSTs. The json one handles jQuery POSTs.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/search", function (req,res) {
  // console.log(req.body)
  res.render("page/form", {id: req.params.potato})
})

app.use("/countries", countriesRoutes);
app.use("/", janeParkRoutes);

//	Jane Park Webpage Template

// app.get("/", function(req, res) {
//
// app.get("/imagegallery", function(req, res) {
// 	res.render("template", {
// 		page: "page/imagegallery",
// 	});
// });


//	incorporating countries onto template

// app.get("/countries/:code", function(req, res) {
// 	var country = countries[req.params.code];
// 	res.render("template", {
// 		page: "page/countries.ejs",
// 		data: country,
// 	});
// 	if (!country) {
// 		res.status(404);
// 		return res.send("This is not a country");
// }
// //Otherwise, render the admin....
// res.render("admin");
// });

app.get("*", function (req, res) {
	res.send('<img src="/css/images/bowie.jpg">');
	//insert David Bowie 404
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
