var inputValue="cloUd naTive computinG";
const words = inputValue.split(" ");
var res = "";
for (let i = 0; i < words.length; i++) {
    res += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() + " ";
}

alert(res);

