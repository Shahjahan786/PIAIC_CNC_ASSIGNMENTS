var total = 500;
var obtained = 0;
var percentage = 0;

for (var i = 0; i < 5; i++) {
    obtained += Number(prompt('Enter course' + i + ' marks: '));
}

percentage = (obtained / total) * 100;
var grade = "";


    switch (true) {
        case (percentage >= 90 && percentage <= 100):
            grade ='A+';
            break;

        case (percentage >= 75 && percentage <= 89):
            grade ='A';
            break;

        case (percentage >= 60 && percentage <= 74):
            grade ='B';
            break;

        case (percentage >= 45 && percentage <= 59):
            grade ='C';
            break;

        case (percentage >= 30 && percentage <= 44):
            grade ='D';
            break;

        default:
            grade ='F';
            break;
    }
	
	alert("Grade "+ grade);