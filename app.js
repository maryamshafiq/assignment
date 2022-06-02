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

// var x ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
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




