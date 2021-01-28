var input = prompt("Input any number with decimal points", "3.4");
var num = Math.ceil(input);
var text="This is my dummy text";
var sliceText = text.slice(0, num);

var str = "";
for(i=sliceText.length-1; i>=0; i--){
	str += sliceText[i];
}

alert(str);