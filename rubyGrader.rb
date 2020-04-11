puts "Please enter student name: "
name = gets

puts "Please enter assignment name: "
assignName = gets

puts "Please enter grade: "
grade = gets

puts(name+"@fullsail.edu")
if grade.to_i < 60
	puts("Here is the grade for "+assignName+": F")
elsif grade.to_i >= 60 and grade.to_i < 70
	puts("Here is the grade for "+assignName+": D")
elsif grade.to_i >= 70 and grade.to_i < 80
	puts("Here is the grade for "+assignName+": C")
elsif grade.to_i >= 80 and grade.to_i < 90
	puts("Here is the grade for "+assignName+": B")
elsif grade.to_i >= 90
	puts("Here is the grade for "+assignName+": A")
else
	puts("Hmm...I do not recognize that grade as a number.")
	end
