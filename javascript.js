var number=prompt("Enter number");
var num= parseInt(number);

function checkNumber(num){
	alert(num);
	if(isNaN(num)){
	document.write(num + " number is not a digit,Enter a valid number");
	}
	else
	{
		document.write(num + " is a digit");
	}
}
		checkNumber(num);