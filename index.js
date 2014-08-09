// Dependencies
require('sugar')
var mysql = require('mysql');

module.exports.class = mysql;
module.exports.db = function(options){
	var options = options || {};
	var config = merge({
		database : options.database || 'test',
		host	 : options.host 	|| 'localhost',
		user	 : options.user		|| 'root',
		password : options.password || ''
	}, options);
	function MySQLClass($){
		var connection = mysql.createConnection({
			  host     : config.host,
			  user     : config.user,
			  password : config.password,
			  database : config.database
		});
		connection.connect(function(error) {
			if(error){
				throw new Error(error);
			} else {
				$.onEnd(function(callback){
					connection.end();
					callback();
				});
				$.return(connection);
			}
		});
	}
	return MySQLClass;
}