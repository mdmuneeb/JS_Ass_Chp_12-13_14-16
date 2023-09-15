
//! Chapter 12-13

// ? Question 1
// let input = +prompt("Enter number or string");

// if (65<= input <= 90){
//     console.log("It is an upper case");
// }

// else if (97<=input<=122){
//     console.log("It is a lower case string");
// } else{
//     console.log("It is neither");
// }

// ? Question 2

// let input_1 = +prompt("Enter integer 1: ");
// let input_2 = +prompt("Enter integer 2: ");


// if (input_1>input_2){
//     console.log("Integer "+ input_1 +" is greater");
// }

// else if (input_2 > input_1){
//     console.log("Integer " +input_2+ " is greater")
// }

// else {
//     console.log("Both are equal")
// }


// ? Question 3

// let input = +prompt("Enter number: ");

// if (input < 0){
//     console.log("Number is negative");
// }

// else if (input > 0){
//     console.log("Number is positive");
// }

// else{
//     console.log("Number is equal to zero");
// }



// ? Question 4

// let input = prompt("Enter a character: ")

// if ("aeiouAEIOU".includes(input)){
//     console.log("It is a vowel");
// }

// else {
//     console.log("It is not a vowel");
// }



//? Question 5

// let pass = "abc";
// let cpass = prompt("Enter password: ");

// if (pass === cpass){
//     alert("Correct! The password you entered matches the original password");
// }

// else if (cpass === ""){
//     alert("Please enter password");
// }

// else {
//     alert("Incorrect password");
// }


// ? Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else {
// greeting = "Good evening";
// }


// ? Question 7

// let time = +prompt("Enter time e.g 1900 ");

// if (time >= 0 && time < 1200){
//     alert("Good Morning")
// }

// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }

// else if (time >= 1700 && time < 2100) {
//     alert("Good evening")
// }

// else if (time >= 2100 && time <= 2359){
//     alert("Good night")
// }

// else {
//     alert("Invalid Input")
// }


//! CHAPTER 14-16 

//? Question 1

// let arr = [];
// arr.push("Ali");
// arr.push("Muneeb");

// console.log(arr)


//? Question 2

// let studentNames = new Array;

//? Question 3

// let arr = ["a","b","c","d"];

//? Question 4

// let arr = [1,2,3,4,5];

//? Question 5

// let arr = [True,False];

//? Question 6

// let arr = [1,"a",true];

//? Question 7

// let arr = ["SSC","HSC","BCS","BS","BCOM","MS","M","M.Phil.","PhD"];

// for (let i = 0; i<arr.length; i++){
//     console.log(i+1+")"+arr[i])
// }

//? Question 8

// let arr = []

// for (let i = 0; i < 3; i++){
//     let name = prompt("Enter name");
    
//     let marks = prompt("Enter marks")

//     arr.push("Score of "+name+" is "+marks+".Percentage: "+(marks/500)*100+"%");
// }

// console.log(arr);
// document.write(arr);


//? Question 9

// let arr = ["Red","Green","Pink","Orange","Blue","Black","Grey"];

// for (let i = 0; i<arr.length; i++){
//     document.write(i+1+") "+arr[i]+"<br>");
// }

// let user = prompt("Do you want to add colour at first index Y|N: ");


// ! a
// if (user === "Y"){
//     let addFirst = prompt("Enter the colour you want to add at first index: ")
//     arr.unshift(addFirst);
//     document.write("<h1>Updated list</h1>")
//     for (let i = 0; i<arr.length; i++){
//         document.write(i+1+") "+arr[i]+"<br>");
//     }
// }

// ! b
// if (user === "Y"){
//     let addFirst = prompt("Enter the colour you want to add at first index: ")
//     arr.push(addFirst);
//     document.write("<h1>Updated list</h1>")
//     for (let i = 0; i<arr.length; i++){
//         document.write(i+1+") "+arr[i]+"<br>");
//     }
// }

// ! c

// let ask = prompt("Do you want to add two color at starting Y|N ");

// if (ask === "Y" ){
//     arr.unshift("Peach","Brown");
// }

// for (let i = 0; i<arr.length; i++){
//     document.write(i+1+") "+arr[i]+"<br>");
// }

// ! d

// arr.shift();

// for (let i = 0; i<arr.length; i++){
//     document.write(i+1+") "+arr[i]+"<br>")};


// ! e

// arr.pop();
// for (let i = 0; i<arr.length; i++){
//     document.write(i+1+") "+arr[i]+"<br>")};


// ! f

// let ask1 = +prompt("Enter first index");
// let ask2 = +prompt("Enter last index");
// let ask3 = +prompt(" colors do you want to add");

// arr.splice(ask1,ask2,ask3);

// ! g
// let ask1 = +prompt("Enter first index");
// let ask2 = +prompt("Enter last index");

// arr.splice(ask1,ask2);

// for (let i = 0; i<arr.length; i++){
//     document.write(i+1+") "+arr[i]+"<br>")};


//? Question 10

// let arr = [320,230,480,120];

// document.write("Scores of students : "+arr+"<br>")
// document.write("Scores of students : "+arr.sort())


//? Question 11

// let arrCities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// document.write("Cities List: <br>"+arrCities+"<br>");

// let assSelectedCities = arrCities.slice(2,4);
// document.write("Selected Cities List: <br>"+assSelectedCities);


//? Question 12

// let arr = ["This","is","my","cat"];

// document.write("Array: <br>"+arr.join()+"<br>")

// let newString = "";

// for (let i = 0; i<arr.length; i++){
//     newString += (arr[i]+" ")
// }

// document.write("String <br>"+newString);


//? Question 13

// let arr = ["Keyboard","Mouse","Printer","Monitor"];

// document.write("Devices <br>"+arr+"<br>")

// for (let i = 0; i <arr.length;i++){
//     document.write("Output: <br>"+arr[i]+"<br>")
// }

//? Question 14

// let arr = ["Keyboard","Mouse","Printer","Monitor"];
// let newArr = arr.reverse()
// document.write("Devices <br>"+arr+"<br>")

// for (let i = 0;i<arr.length;i++){
//     document.write("Output: <br>"+newArr[i]+"<br>")
// }   

//? Question 15

// var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"] 


// var dropDown = "<select>\n"

// for (let i= 0; i<arr.length;i++ ){

//     dropDown += "<option>"+arr[i] +"</option>\n";
// }

// dropDown += "</select>";

// document.write(dropDown);


