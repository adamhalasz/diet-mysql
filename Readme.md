# **diet-mysql**
Diet middleware for the [mysql][1] module:

## **Install**
```
npm install diet-mysql
```

## **Usage**
```js
// Require Diet
var server = require('diet')

// Create App
var app = server().listen(6500)

// Require Diet MySQL Module
var mysql = require('diet-mysql')

// Register MySQL Connection
mysql.connect({ 
	app        : app,          
	database   : 'your_project',
	host       : 'localhost',
	user       : 'root',
	password   : ''
})

// Listen on GET / and use the `db` plugin for this route
app.get('/', function($){
    $.mysql.query('SELECT * FROM accounts', function(error, accounts){
    	if(error) throw error
		$.data.accounts = accounts
		$.json()
	})
})
```

## **Features**
- Simplifies connecting to mysql
- Creates a mysql wrapper for diet that can be used in diet routes.
- the `connection.end()` is called automatically on `$.end()` so you don't have to.
- Very small, just 20kb

## **API**
The plugin returns a few methods when you call it:

### **mysql.connect(*options*)** - function
The `app` and `database` parameters are required everything else is optional.

```js
// example - with the defaults
mysql.connect({
	app		  : app,           // your diet server instance
	host      : 'localhost',   // the mysql host address
	user      : 'root',        // the mysql username
	password  : '',            // the mysql password for the username
	database  : 'test',        // the mysql database to connect to
	namespace : 'mysql'        // the namespace to use within diet routes in the signal ($.mysql)
})
```

### **mysql.class** - object
This is a shortcut for the return values of `require('mysql')` inside `diet-mysql`.


## **One Liner**
If you only need to use one database, you can shorten your call to:
```js
require('diet-mysql').connect({ app: app, database: 'test' })
```

# License
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [1]: https://github.com/felixge/node-mysql