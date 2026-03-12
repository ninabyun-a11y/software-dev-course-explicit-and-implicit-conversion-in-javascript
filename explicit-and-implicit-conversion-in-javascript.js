/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
PART 1

Problem #1
original:
let result = "5" - 2;
console.log("The result is: " + result);

fix:
let result = String ("5" - 2)
console.log("The result is: " + result);

explanation: by implementing the String conversion, the code takes the string 
of the entire input instead of automatically converting the "5" to 5 because of the '-' sign
________________________________________________________________________________________________________
Problem #2
original:
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

fix: 
let isValid = Boolean(“false”);
let stringValue = String(isValid);
if (String(isValid)) {
    console.log("This is valid!");
}

explanation:  by implementing the String conversion, the code now takes the value of false, 
whereas before, it was reading "false" as a false value simply because of the quotation marks, therefore, 
any word in quotation marks would have rendered false 
____________________________________________________________________________________________________________
Problem #3
original:
let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

fix: 
let str = "25";
let num = Number(str);
let totalAge = num+5;
console.log("Total Age: " + totalAge);

explanation:  by implementing the Number conversion, the code now takes the numerical value of 25 and calculates 
the sum of 25 and 5 to display 30, whereas before, it would simply display 25 next to 5, making the output 255
________________________________________________________________________________________________________________

PART 2
1. implicit type conversion example 
let phrase = String ("The value of pi is ")
let pi;
console.log(phrase + pi)

2. explicit type conversion example 
let value = (“12345”)
let converted = number(value)
console.log(converted)
