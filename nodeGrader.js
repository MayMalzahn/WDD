const readline = require("readline");
const rl = readline.createInterface({
input : process.stdin,
output: process.stdout
})
rl.question("Please enter student name: ", (name)=>{
rl.question("Please enter assignment name: ",(assignName)=>{
rl.question("Please enter grade: ",(grade)=>{
console.log(name+"@fullsail.edu");
if(parseInt(grade) < 60){console.log("Here is the grade for "+assignName+": F")}
else if(parseInt(grade) >= 60 && parseInt(grade) < 70){console.log("Here is the grade for "+assignName+": D")}
else if(parseInt(grade) >= 70 && parseInt(grade) < 80){console.log("Here is the grade for "+assignName+": C")}
else if(parseInt(grade) >= 80 && parseInt(grade) < 90){console.log("Here is the grade for "+assignName+": B")}
else if(parseInt(grade) >= 90){console.log("Here is the grade for "+assignName+": A")}
else{
	console.log("Hmm...I do not recognize that grade as a number.");
}
rl.close();
})
})
})