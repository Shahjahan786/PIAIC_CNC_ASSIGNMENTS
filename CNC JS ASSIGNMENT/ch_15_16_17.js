var courses = [];

var course1= prompt("Course 1", "Computer"); 
var course2= prompt("Course 2", "Math"); 
var course3= prompt("Course 3", "English"); 
var course4= prompt("Course 4", "Urdu"); 
var course5= prompt("Course 5", "Bio"); 
courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

var course1Value= prompt(course1, course1); 
var course2Value= prompt(course2, course2); 
var course3Value= prompt(course3, course3); 
var course4Value= prompt(course4, course4); 
var course5Value= prompt(course5, course5); 

alert(courses);

if(course1 != course1Value){
	courses.splice(0, 1,course1Value);
}

if(course2 != course2Value){
	courses.splice(1, 1,course2Value);
}

if(course3 != course3Value){
	courses.splice(2, 1,course3Value);
}

if(course4 != course4Value){
	courses.splice(3, 1,course4Value);
}

if(course5 != course5Value){
	courses.splice(4, 1,course5Value);
}

alert(courses);

