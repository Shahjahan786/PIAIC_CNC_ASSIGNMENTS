var courses = ["Computer", "Math", "English", "Urdu", "Bio"];
alert(courses);

for(var i = 0;  i< courses.length; i++){
	var course = courses[i];
	var courseNewValue = prompt(course, course);
	
	if(course != courseNewValue){
		courses.splice(i, 1,courseNewValue);
	}
}


alert(courses);

