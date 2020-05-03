const fs = require('fs');
const bodyParser = require('body-parser');
module.exports = {
    getItems: (req, res) => {
		console.log("are we there yet?");
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
	 let id = req.params.id;
	var qu = "DELETE FROM items WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("del pressed "+id);
	
	});
	 res.redirect("/admin");
},
ed: (req, res)=>{
	let id = req.params.id;
	let nam = req.body["itemEdit"+id];
			var qu = "UPDATE items SET name='"+nam+"' WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("ed pressed "+id);
 });
	res.redirect("/admin");
},

add: (req, res)=>{
	console.log(req.body);
	let nam = req.body.itemNameAdd;
	console.log("adding "+nam);
			var qu ="INSERT INTO items (name) VALUES ('"+nam+"')";
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("add pressed "+nam);
 });
	res.redirect("/admin");
}}

