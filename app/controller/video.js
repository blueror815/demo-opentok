/**
*
* Video Controller
*
*/

require('rootpath')();

var express = require('express');
var OpenTok = require('opentok');
var config = require('config/opentok');
var app = express();

/**
*
* function: index
* 
*/

exports.index = function(req, res) {

	console.log("Video index function is calling now...");

	var api_key = config.API_KEY;
	var api_secret = config.API_SECRET;

	console.log("API KEY is " + api_key);

	var	opentok = new OpenTok(api_key, api_secret);

	console.log("OpenTok is " + opentok);
	var session_id = "2_MX40NTQ3MjU1Mn5-MTQ1MzY5NzEzMjIwNH5sNFpaVjlLVEM5Q1pSSGhZRWhaeXREVmJ-QX4";
	var token = opentok.generateToken(session_id);

	console.log("this is token " + token);

	res.render('index', {
		api_key: api_key,
		sessionId: session_id,
		token: token
	});

	/*
	opentok.createSession({mediaMode: 'routed', archiveMode: 'always'}, function(err, session) {
		if (err) throw err;

		console.log("this is session " + session.sessionId);

		var token = opentok.generateToken(session.sessionId);

		console.log("this is token " + token);
	
		res.render('index', {
			api_key: api_key,
			sessionId: session.sessionId,
			token: token
		});

	});
*/
}