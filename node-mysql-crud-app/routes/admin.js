const fs = require('fs');
module.exports = {
    getItems: (req, res) => {
        let query = "select * from items";
        con.query(query, (err, result) => {
            if (err) {
                res.render('index',{pagename:'home',errors:errors});
            }
            res.render('admin.ejs', {
                items: result
            });
        });
    },

 del: (req, res) => {
	 let id = req.body.id;
	var qu = "DELETE FROM items WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("del pressed "+id);
	
	})
},
ed: (req, res)=>{
	let id = req.body.id;
	let nam = req.body.name;
			var qu = "UPDATE items SET name="+nam+" WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("ed pressed "+id);
 });
	res.redirect("/admin");
},

add: (req, res)=>{
	let nam = req.body.name;

			var qu ="INSERT INTO items(name) VALUES ("+nam+")";
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("add pressed "+name);
 });
	res.redirect("/admin");
}}