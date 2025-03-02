//console.log(`Hello`); This is to print output

//window.alert(`This is an alert`); This is for a pop up

//This is for a single line of comment
/* This
is
for
multi-line
*/
//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent =  `I like pizza!`;

//variable is a container that stores a value
let x;
//or you can assign while declaring like
let y = 100;
//It can also be a string
let name = "Raksha";
let age = 30;
//console.log(`My name is ${name} and age is ${age}`);
//To see the data type
//console.log(typeof age);

//Boolean data type
let online = true;
//console.log(typeof online);

//Printing some values on the webpage instead of the dev tools
let fullName = "Raksha Manohar";
let age2 = 30;
let student = false;

//document.getElementById("p1").textContent = fullName; //Can just print the value of the variable as well
//document.getElementById("p2").textContent = `My age is ${age2}`;
//document.getElementById("p3").textContent = `Is Raksha a student : ${student}`;

let students = 30;
//Double asterisks is the exponent operator
//modulas operator gives the remainder of any division

let extraStudents = students % 4;
//console.log(extraStudents);

students++;//increment operator
students--;//decrement operator
students += 1; //the following are augmented assignment operators
students -= 1;
students *= 7;
students **= 3;
students %= 13;
//console.log(students);

/*
operator precedence - always left to right in the following order of priority
1. parenthesis ()
2. exponents
3. multiplication and division and modulo
4. addition and subtraction
*/

let result = 12 % 5 + 8 / 2;
//console.log(result);

/* Two ways to accept user input are by a window prompt or an HTML textbox - HTML is more professional*/

//let dog;
//dog = window.prompt(`What is your dog's name?`);
//console.log(dog);

let username;
document.getElementById("myButton").onclick = function(username){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}!`;
}

//inputs are accepted as string so we need to know how to do a type conversion
//let age3 = window.prompt("How old are you?")
//age3 = Number(age3);
//age+=1;
//console.log(age3, typeof age3);
//remove the type conversion func and try again, it will only append


let a = "pizza";
let b = "pizza";
let c = "pizza";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
30
//We can see that strings can't be converted into numbers. Also, if there is no value in the variable, the boolean will return false. Otherwise it is always true.

let circumference;
let radius;
const PI = 3.14;
document.getElementById("myButton2").onclick = function(){
    radius = document.getElementById("myInput2").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = circumference + " cms";
}
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let number = document.getElementById("myH3");
let count = 0;

increase.onclick = function(){
    count = count + 1;
    if(count<=1){
        number.textContent = count + ` cm`;
    }
    else{
    number.textContent = count + ` cms`;}
}
decrease.onclick = function(){
    count = count - 1;
    if(count<=1){
        number.textContent = count + ` cm`;
    }
    else{
    number.textContent = count + ` cms`;}
}
reset.onclick = function(){
    count = 0;
    if(count<=1){
        number.textContent = count;
    }
    else{
    number.textContent = count + ` cms`;}
}
