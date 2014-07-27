# **diet-mysql**
A diet plugin for the most popular mysql nodejs driver:
[https://github.com/felixge/node-mysql][1]

## **Features**
- Simplifies connecting to mysql
- Creates a mysql wrapper for diet that can be used in local diet routes.
- the `connection.end()` is called automatically on `$.end()` so you don't have to.
- Very small, just 20kb

## **Install**
```
npm install diet-mysql
```

## **Usage**
```js
// Require Diet
require('diet');

// New Domain
app = new Domain('http://example.com/');

// MySQL
var mysql = app.plugin('diet-mysql');
var db = mysql.db({ database:'test' });

// Use in Route
app.get('/', db, function($){
    $.db.query('SELECT * FROM accounts', function(err, accounts){
		$.data.accounts = accounts;
		$.html();
	});
});
```

## **One Liner**
If you only need to use one database, you can shorten your call to:
```js
var db = app.plugin('diet-mysql').db({ database: 'test' });
```

## **Methods**
The plugin returns a few methods when you call it:

**mysql.db**
The `database` paremeter is required everything else is optional.
```js
// api
var db = mysql.db(database, port, host, protocol);
```
```js
// example - with the defaults
var db = mysql.db({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'test'
});
```

**mysql.class**
This is a shortcut for the return values of `require('mysql')` inside `diet-mysql`.

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