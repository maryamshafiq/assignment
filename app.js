
// Chapter 31-34

// Task #1
// var currentDateAndTime = new Date();
// document.write(currentDateAndTime);

// Task 2:Current month
// var d = new Date();
// var words = ['January','February','March','April','May',"June",'July','August','September','October','November','December'];
// var monthinwords = words[d.getMonth()];
// alert("Current Month "+ monthinwords);

// Task 3: alert day
// var date = new Date();
// var days = ['Sun','Mon','Tue',"Wed",'Thur','Fri','Sat'];
// var day = days[date.getDay()];
// alert(day);

// Task 4: 
// var date = new Date;
// var days = ['Sun','Mon','Tue',"Wed",'Thur','Fri','Sat']
// var day = days[date.getDay()]
// if (day == "Sat" | "Sun"){
//     alert("It's  Fun day")
// }
// else{
//     alert("It's not Fun day")
// }

// Task 5
// var day = new Date();
// var daysOfMonth = day.getDay()
// if (daysOfMonth< 16){
//     alert("First 15  days of the month");
// }

// else{
//     alert("Last days of the month");
// }

// Task 6:
// var D = new Date();
// var milli = D.getTime() ;
// var min = D.getTime()/(1000 * 60);
// document.write("Current Date: "+D +"<br>")
// document.write("Ellapsed milliseconds since January 1, 1970 : "+milli +"<br>")
// document.write("Ellapsed minutes since January 1, 1970 : "+min +"<br>")


// Task 7
// var d = new Date();
// var Hours = d.getHours()

// if(Hours < 12){
//     alert("It's AM");
// }

// else{
//     alert(" It's PM");
// }

// Task 8:
// var laterDate = new Date("Dec 31,2022")
// document.write("LaterDate:" + " " + laterDate)

// Task 9
// var todayDate = new Date()
// var RDate = new Date("June 18,2015")
// var miliseconds = todayDate.getTime()
// var miliseconds2 = RDate.getTime()
// var difference = miliseconds-miliseconds2
// var daysTillRamadan =Math.floor(difference/(1000*60*60*24)) 
// alert("Days passed till 2015 ramadan are" +" " + daysTillRamadan );


// Task 10
// var refDate = new Date("December 05, 2015 22:50:16")
// var prevDate = new Date("January 01, 2015")
// var refTime = refDate.getTime()
// var prevTime = prevDate.getTime()
// var diffInmili = refDate-prevDate
// var second = Math.ceil(diffInmili/(1000*60))
// document.write("The Seconds passed since beginning of 2015 are" + " " + second)

// Task 11
// var currentDate = new Date();
// document.write("Current date: " + currentDate +"<br>")
// var hourAgo=new Date()
// var hours = hourAgo.getHours()
// hourAgo.setHours(hours-1)
// document.write("1 hour ago, it was" + " " +hourAgo)


// Task 12
// var currentDate = new Date();
// document.write("Current date: " + currentDate);

// currentDate.setFullYear(currentDate.getFullYear() -100);

// document.write("<br>100 years back, it was " + currentDate);

// Task 13
// var age = +prompt("Enter age:");
// var today = new Date();
// var currentYear = today.getFullYear();
// var yearDiff =  currentYear- age;
// document.write("Your age is " + age);
// document.write("<br>Your birth year is " + yearDiff);

// Task 14
// var customerName = prompt("Enter Customer Name","Enter customer name here");
// var currentMonth = prompt("Enter Current Month", "For Example: January");
// var numberOfUnits = +prompt("Enter Number of Units", "Enter number of units here")

// var chargesPerUnit = 50;
// var latePaymentSurcharge = 350;
// var netAmountPayableWdd = numberOfUnits * chargesPerUnit;
// var grossAmountPayable = netAmountPayableWdd + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br>Customer Name: " + "<b>" + customerName + "</b>");
// document.write("<br>Month: " + "<b>" + currentMonth + "</b>");
// document.write("<br>Number of units: " + "<b>" + numberOfUnits + "</b>" );
// document.write("<br><br><br>Charges per unit: " + "<b>" + chargesPerUnit.toFixed(2) + "</b>");
// document.write("<br>Net Amount Payable (within Due Date): " + "<b>" + netAmountPayableWdd.toFixed(2) + "</b>");
// document.write("<br>Late Payment Surcharge: " + "<b>" + latePaymentSurcharge.toFixed(2) + "</b>");
// document.write("<br>Gross Amount Payable (after Due Date) " + "<b>" + grossAmountPayable.toFixed(2) + "</b>");


// Chapter # 35-38-----------------------------------------------


// Task # 1
// function dateTime () {
//     var date = new Date();
//     document.write(date);
// }
// dateTime();

// Task # 2

// function fullName()
// {
//     var firstName = prompt("Enter first name");
//     var lastName = prompt("Enter last name");
//     var fullName = firstName + " " + lastName;
//     alert("Welcome" +" " + fullName);
// }

// fullName();

// Task # 3

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// function addition(num1,num2)
// {
//     return num1 + num2 ;
// }

// var sum = addition(num1,num2);
// document.write("Sum of " +num1+ " + " +num2 + " = " + sum);

// Task # 4

// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var operator= prompt("Enter Operator like +,-");
// function calculator (num1,num2,operator)
// {
//     if (operator === "+")
//     {
//         return num1 + num2;
//     }

//     else if (operator === "-")
//     {
//         return num1 - num2;
//     }
//     else if (operator === "*")
//     {
//         return num1 * num2;
//     }
//     else if (operator === "/")
//     {
//         return num1 / num2;
//     }
//     else if (operator === "%")
//     {
//         return num1 % num2;
//     }
// }
// var result = calculator(firstNumber,secondNumber,operator);
// document.write("Result: " + result);

// Task # 5

// var num = +prompt("Enter a number");
// function square(num)
// {
//     return num * num;
// }
// var result = square(num);

// document.write("Square of " +num+ " is " + result);

// Task 6

// function fact(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         }
//         else if (n < 0) {
//             return -1;
//         }
//         else  {
//             return n * fact(n - 1);
//         }
//     }
//     var n = +prompt("Enter Number: ");
//     var f = fact(n);
//     if (f === -1) {
//         document.write("Negative Number Factorials are not possible<br>");
//     }
//     else {
//         document.write("Factorial of " + n + " is " + f + "<br>");
//     }

// Task # 7

// var startNumber = +prompt("Enter start number");
// var endNumber = +prompt("Enter end number");
// function counting(startNumber,endNumber)
// {
//     for (var i=startNumber; i<=endNumber;i++)
//     {
//         document.write(i + "<br>");
//     }    
// }
// counting(startNumber,endNumber);
 
// Task #8
// function calculateSquare(num) {
//         return num * num;
//     }
//     function calculateHypotenuse(base, perpendicular) {
//         return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular)).toFixed(2);
//     }
//     var base = +prompt("Enter Base: ");
//     var perpendicular = +prompt("Enter Perpendicular: ");
//     document.write("Hypotenuse: " + base + " and " + perpendicular + " is " + calculateHypotenuse(base, perpendicular) + "<br>");


// Task # 9

// function area(width,height)
// {
//     return width * height;
// }
// var result = area(4,5);
// document.write("Area of rectangle is " +result);

// Task # 10
// function palindrome(str) {
//         var revStr = str.split("").reverse().join("");
//         if (str === revStr) {
//             document.write("Given string \"" + str + "\" is a palindrome<br>");
//         }
//         else {
//             document.write("Given string \"" + str + "\" is not a palindrome<br>");
//         }
//     }
//     var str = prompt("Enter a phrase: ");
//     palindrome(str);

// Task # 11

// var str = prompt("Please type a string", "Type String here");
// function titleCase(str)
// {
//   var splitString = str.split(' ');
//   var newArray = [];
    
//   for(var i = 0; i < splitString.length; i++){
//     newArray.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1));
//   }
//   return newArray.join(' ');
// }
// var strInTitleCase = titleCase(str);
// alert(strInTitleCase);

// Task # 12

// var str = prompt("Please type a string", "Type String here");
// function longestWord(str) 
// {
//     var words = str.split(' ');
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
// }
// alert("Longest word Within String is "+longestWord(str));








// Chapter # 21 -25

// Task #1
// var fName  = prompt("Enter your first name");
// var lName  = prompt("Enter your last name");
// var fullName= fName + lName;
// alert("Welcome " + "" +fullName +" " + "to this site"); 

// Task#2
//   var fPhone = prompt("Enter your favourite mobile model");
//   var phoneLength = fPhone.length;
//   document.write("My favourite Phone is:" + " " + fPhone + "<br>");
//   document.write("Length of string :" + " " + phoneLength);


// Task#3
//   var word ="Pakistan";
//   var wordIndex = word.indexOf('n');
//   document.write("String:" + " " + word + "<br>");
//   document.write("Index of 'n':" + " " + wordIndex);

// Task#4
//   var word ="Hello World";
//   var wordLastIndex = word.lastIndexOf('l');
//   document.write("String:" + " " + word + "<br>");
//   document.write("Last Index Of 'l':" + " " + wordLastIndex);

// Task#5
// var word = "Pakistani";
// var wordIndex = word.charAt('3');
// document.write("String:" + " " + word + "<br>");
// document.write("Character at index 3 is:" + " " + wordIndex);

// Task#6
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert("Welcome to our website" + " " + fullName);

// Task#7
//   var city = " Hyderabad";
//   var replace = city.replace('Hyder', 'Islam');
//   document.write("City:" + " " + city + "<br>");
//   document.write("After replacement:" + " " + replace);

// Task#8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newText = message.replace(/and/g, "&");
// document.write(newText);

// Task#9
//   var string = '472';
//   document.write("Value:" + " " + string + "<br>");
//   document.write("Type:" + " " + typeof(string)+ "<br>");
//   var number = Number(string);
//   document.write("Value:"+ " " + number + "<br>");
//   document.write("Type:" + " " + typeof(number));

// Task#10
// var word = prompt("Please type a word", "Type word here");
// var upperCase = word.toUpperCase();
// document.write("User input: " + word + "<br>" );
// document.write("Upper case: " + upperCase);


// Task#11

// var word = prompt("Please type a word", "Type word here");
// var firstChar = word.slice(0,1);
// var otherChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input: " + word);
// document.write("<br>Title case: " + titleCase);

// Task#12

// var num = 35.36;
// var convetToString = num.toString();
// document.write("Number: " + num + "<br>");
// var string = convetToString.replace(".","");
// document.write("Result:" + " " + string);

// Task#14

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var convertToLower = search.toLowerCase();
// if (bakeryItems .indexOf(convertToLower) != -1)
// {
//     document.write(convertToLower + " is <strong>available</strong> at index " + bakeryItems .indexOf(convertToLower) + " in our bakery");
// }

// else
// {
//     document.write("We are sorry " + convertToLower + " is <strong>not available</strong> in our bakery");
// }

// Task#16
// var university = "University of Karachi";
// var splitUni = university.split("");
// for (var i=0;i<splitUni.length;i++)
// {
//     document.write("<br>" + splitUni[i]);
// }

// Task#17
//   var input = prompt("Enter any word");
//   var length = input.length;
//   var index = input.charAt(length-1);
//   document.write("User Input:" + " " + input+ "<br>");
//   document.write("Last character of  input:" + " " + index);

// Task#18

// var string = "The quick brown fox jumps over the lazy dog.";
// var stringInLowerCase = string.toLowerCase();
// var count = (stringInLowerCase.match(/the/g)).length;
// document.write("Text: " + string);
// document.write("<br>There are "+count+" occurence(s) of the word 'the'");

// Chapter # 26 -30

// Task#1

// var num = +prompt("Enter a positiver integer");
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write("number: "+num);
// document.write("<br>round Off value: "+roundOffValue);
// document.write("<br>floor value: "+floorValue);
// document.write("<br>ceil value: "+ceilValue);

// Task#2
//   var input = +prompt("Enter a negative floating point");
//   var sign = Math.sign(input);
//   var roundOff = Math.round(input);
//   var floor = Math.floor(input);
//   var ceil = Math.ceil(input);
//   if(sign===-1){
//     document.write("number" + " " + input + "<br>");
//     document.write("round Off value :" + " " + roundOff + "<br>");
//     document.write("float value:" + " " + floor  + "<br>");
//     document.write("ceil value:" + " " + ceil);
//   }       
//   else{
//     alert("Enter a negative floating point");
//   }

// Task#3
//   var number = +prompt("Enter a number");
//   var absoulteValue = Math.abs(number);
//   document.write("The absolute value of" + " " + number + " "+ "is " + " " + absoulteValue);

// Task#4
//   var dice = "random dice";
//   var random = Math.floor(Math.random()*6 + 1);
//   document.write(dice + " " + random);

// Task#5
//   var coin= "random coin value:";
//   var head = "Head";
//   var tail = "Tail";
//   var random = Math.floor(Math.random()*2 +1);
//   if(random ===2){
//     document.write("2"+ "<br>" + coin +" " + head);
//   }
//   else{
//     document.write("1" + "<br>" + coin + " " + tail);
//   }
  
// Task#6
//   var num = "random number between 1 and 100:";
//   var random = Math.floor (Math.random()*100 +1);
//   document.write(num + " " + random);

// Task#7

// var num = prompt("Enter your weight in Kilograms");
// var weight =  parseFloat(num);
// var totalWeight = weight + 8.3;
// document.write("The weight of user is " + totalWeight + " kilograms");

//Task#8
var guess = +prompt("Enter a number between 1 and 10");
var secretNumber = Math.floor(Math.random() * 10) + 1;
if (guess === secretNumber) 
{
alert("Well done! Correct answer");
}
if (guess !== secretNumber) 
{
    alert("Try again!");
}




// chapter 1/
// Answer # 1

// alert("Error! Please enter a valid Password.");

// Answer # 2

// var a = "Welcome to JS Land..."; 
// var b = "\nHappy Coding!";
// var c = (a+b);
// alert(c);


// Answer # 3

// alert("Welcome to JS Land...");

// Answer # 4

// var x = "Happy Coding! \n  Prevent this page from creating additional dialogs.";
// alert(x);

// Answer # 5

// console.log("Hello... I can run JS through my web browser's console");

// Chapter # 2

// Answer # 1

// var username;

// Answer # 2

// var myName = "maryamShafiq";

// Answer # 3

// var message = "Hello World";
// alert(message);

// Answer # 4

// var name = "Jhone Doe";
// alert(name);

// var age = "15 years old";
// alert(age);

// var skill = "Certified Mobile application Development";
// alert(skill);

// Answer # 5

var x = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(x);

// Answer # 6

// var a = "My email address is";
// var b = " example@gmail.com";
// var email = (a+b);
// alert(email);

// Answer # 7

// var x = "I am trying to learn from the Book";
// var y = " A Smarter way to learn JavaScript";
// var book = (x+y);
// alert(book);

// Answer # 8

// document.write("Yah! I can write HTML content through JavaScript.");

// Answer # 9

// var x ="??????????????????????????????????????????????????????????????????";
// alert(x);

// Chapter # 3

// Answer # 1

// var age = "I am 15 years old";
// alert(age);

// Answer # 2

// var x = "You have visited this site ";
// var y = "15 times";
// var visited = (x+y);
// alert(visited);

// Answer # 3

// var birthYear = "My birth year is 1997";
// document.write(birthYear);

// Answer # 4

// var vname = "John Doe ";
// var product = "ordered 15 T-Shirt(s) ";
// var store = "on XYZ Clothing Store";
// document.write(vname+product+store);

//              OR

// var visitorname = "John Doe";
// var product = "T-Shirt(s)";
// var quantity = 15;
// document.write(visitorname + " " + "ordered" + " " + quantity + " " + product + " " + "on xyz clothing store");

// Chapter # 4

// Answer # 1

// var name,age,nationality;

// Answer # 2

// var name,age,nationality,product,store(legal names);
// var 1stperson,alert,var,2sid,"name"(Illegal names);

// Answer # 3

// var a = "Rules for naming JS variables";
// var b = "Variable names can only contain numbers,$ and _. For example: $my_1st variable";
// var c = "Variable must begin with a letter, $ or _. For example $name, _name or name";
// var d = "Variable names are case sensitive";
// var e = "Variable names should not be JS keywords";
// document.write(a+"<br>"+"<br>"+"<br>" +b+"<br>"+c+"<br>"+d+"<br>"+e);

// Chapter # 5

// Answer # 1

// var a = 3;
// var b = 5;
// var c = (a+b);
// document.write(c+"<br>");
// document.write("The sum of 3 and 5 is 8");

// Answer # 2

// var a = 3;
// var b = 5;
// var c = (a-b);
// document.write(c);

// var a = 3;
// var b = 5;
// var c = (a*b);
// document.write(c+"<br>");
// document.write("The Multiplication of 3 and 5 is 15");

// var a = 3;
// var b = 5;
// var c = (a/b);
// document.write(c+"<br>");
// document.write("The Division of 3 and 5 is 0.6");

// var a = 5;
// var b = 3;
// var c = (a%b);
// document.write(c+"<br>");
// document.write("The remainder is 2");

// Answer # 3

// var a;
// document.write("Value after variable declaration is undefined." +"<br>");
// var a = 5;
// document.write(a+"<br>");
// document.write("Initial Value: 5"+"<br>");
// var a = ++a;
// document.write(a+"<br>");
// document.write("Value after increment is: 6"+"<br>");
// var a = a+7;
// document.write(a+"<br>");
// document.write("Value after addition is: 13"+"<br>");
// var a = --a;
// document.write(a+"<br>");
// document.write("Value after decrement is: 12"+"<br>");
// var a = a%3;
// document.write(a+"<br>");
// document.write("The remainder is: 0"+"<br>");




