var marks1 = parseInt(prompt("Enter English marks: "));
var marks2 = parseInt(prompt("Enter Math marks: "));
var marks3 = parseInt(prompt("Enter Physics marks: "));
var marks4 = parseInt(prompt("Enter Biology marks: "));
var marks5 = parseInt(prompt("Enter Urdu marks: "));

var totalMarks = 500;
var obtainedMarks  = marks1 + marks2 + marks3 + marks4 +marks5;
var perc = obtainedMarks * 100/ totalMarks;
alert(perc);