var name = prompt("Enter your name", "Shahjahan Samoon");
var day = prompt("Enter your birth day", "15");
var month = prompt("Enter your birth month", "09");
var year = prompt("Enter your birth year", "1989");

var welcome;  
var today = new Date();  
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
	
if (hour < 12) {  
    welcome = "good morning";  
} else if (hour < 17) {  
    welcome = "good afternoon";  
} else {  
    welcome = "good evening";  
}  
	
console.log("Hello, "+name +", "+ welcome);
var dateStr = year+"/"+month+"/"+day;
var birthDate = new Date(dateStr);
console.log("Your DOB is " + birthDate);

var isTodayBirthday = birthDate.getDate() == today.getDate() && birthDate.getMonth() == today.getMonth();

var nextBirthday = isTodayBirthday ? today : new Date(today.getFullYear()+1, birthDate.getMonth(), birthDate.getDate());





var diff = today-birthDate;

days = diff / (1000 * 60 * 60 * 24);

if(isTodayBirthday){
	console.log("happy Birth Day "+name+". Today is Your "+ Math.floor(days/365.25)  +" Birthday");
}else {
	console.log("Next Birthday: "+nextBirthday);
}

console.log("Your Age in Days  "+Math.ceil(days));






