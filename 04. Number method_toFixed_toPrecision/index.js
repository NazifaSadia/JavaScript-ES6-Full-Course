var number = 20;
document.write(typeof(number));

// number to string
number = toString(number);
document.write(typeof(number));

// string to Integer number
var str1 = "20";
var str1 = parseInt(str1);
document.write(typeof(str1));

// string to Float number
var str2 = "20.567";
var str2 = parseFloat(str2);
document.write(typeof(str2));

// Point er por koy ghor dekhabe
var num = 20.567;
console.log(num.toFixed(2));

// Total koy ghor dekhabe
console.log(num.toPrecision(2));

// convert anything to Number
console.log(Number("12"));
console.log(Number("     12.99"));
