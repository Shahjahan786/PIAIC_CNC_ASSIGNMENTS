var inputValue=prompt("Enter any sentence to capitalize each word","cloUd naTive computinG");

console.log(toTileCase(inputValue));
function toTileCase(inputValue){
	var arr = inputValue.split(" ");

	for(i = 0; i< arr.length; i++){
		var str = arr[i];
		arr[i] = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
	
	return arr.join(" ");
}

var num = parseInt(prompt("Enter number to find factorial", 5));
console.log(factorial(num));
function factorial(num){
	var fact = 0;
	
	if(num == 0 ){
		return 1;
	}
	
	for(i = num-1; i>0; i--){
		fact += fact * i; 
	}
	
	return fact;
}




