module.exports = {
    getUsers: (req, res) => {
		console.log("getting users...");
        let query = "select * from users"; 
        con.query(query, (err, result) => {
            if (err) {
                res.render('index',{pagename:'home',errors:errors});
            }
			console.log(result);
            res.render('index.ejs', {
                user: result
            });
        });
		
    },
};

