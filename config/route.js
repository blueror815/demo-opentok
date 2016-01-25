/**
* Routes all API requests to particular functions
* This file would be referenced by the 'app.js' file, as;
* 
*
* 	var app  = express();
*		var routes = require(./router);
*		
*	And called
*
*		routes.setup(app);
*
*
*/

/* require for root path */
require('rootpath')();

var video = require('app/controller/video');

module.exports.setup = function(app) {

	console.log("***********************");
	console.log("set up route for all api");
	console.log("***********************");

	app.get('/', video.index);

	// app.get('/webinar', home.index);
}