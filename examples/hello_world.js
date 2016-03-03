// Require Diet
var server = require('diet')

// Create App
var app = server().listen(6500)

// Require MySQL Module
var mysql = require('../')

// Register MySQL Connection
mysql.connect({ 
	app        : app, 
	database   :'information_schema',
	host       : 'localhost',
	user       : 'root',
	password   : ''
})

// Listen on GET / and use the `db` plugin for this route
app.get('/', function($){
    $.mysql.query('SELECT * FROM CHARACTER_SETS', function(err, sets){
		$.data.sets = sets
		$.json()
	})
})

/*
	Requesting "GET /" should give you a JSON String like: 
	
	{"sets":[{"CHARACTER_SET_NAME":"big5","DEFAULT_COLLATE_NAME":"big5_chinese_ci","DESCRIPTION":"Big5 Traditional Chinese","MAXLEN":2},{"CHARACTER_SET_NAME":"dec8","DEFAULT_COLLATE_NAME":"dec8_swedish_ci","DESCRIPTION":"DEC West European","MAXLEN":1},{"CHARACTER_SET_NAME":"cp850","DEFAULT_COLLATE_NAME":"cp850_general_ci","DESCRIPTION":"DOS West European","MAXLEN":1},
	  ....
	  ....
*/