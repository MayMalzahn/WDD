

function del(id){
	con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
	var qu = "DELETE FROM items WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("del pressed "+id);
	
	})
 });
};

function ed(id,nam){
		con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
			var qu = "UPDATE items SET name="+nam+" WHERE id="+id;
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("ed pressed "+id);
 });
});
}
function add(nam){
	var name = document.getElementById(itemName).value
		con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
			var qu ="INSERT INTO items(name) VALUES ("+nam+")";
con.query(qu, function (err, result) {
 if (err) throw err;
	console.log("add pressed "+name);
 });
});
}