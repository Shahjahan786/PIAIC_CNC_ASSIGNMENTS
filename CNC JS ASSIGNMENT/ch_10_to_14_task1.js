var num1 = parseInt(prompt("Enter First number"));
	var num2 = parseInt(prompt("Enter 2nd number"));
	var op = prompt("Enter operator +,-,*, / & % ");
	var res = "";

	if(op == "+"){
		res = num1 + num2;
	}else if(op == "-"){
		res = num1 - num2;
	}else if(op == "%"){
		res = num1 % num2;
	}else if(op == "*"){
		res = num1 * num2;
	}else if(op == "/"){
		res = num1 / num2;
	}else{
		res = "Invalid operator";
	}

	alert(res);