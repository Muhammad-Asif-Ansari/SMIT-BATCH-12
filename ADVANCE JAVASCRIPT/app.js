// function Student(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Student.prototype.getFullName = ()=>{
//   return `${this.firstName} ${this.lastName}`
// }
// var student = new Student("Asif","Ansari");
// console.log(student.getFullName());


function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Arrow function as an instance method
  this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

const student = new Student("Asif", "Ansari");
console.log(student.getFullName()); // Output: Asif Ansari

// var str = "hello"
// var str = "boss"
// console.log(str);

// var main = "world";
// var main = "war";
// console.log(main);

// let main = "wonderful";
// let main1 = "beautiful"
// console.log(main);
// console.log(main1);
// main = "hello";
// main1 = "world"
// console.log(main);
// console.log(main1);





// LET VARIABLE:

// let str = "abc"
// let str1 = "xyz"
// console.log(str);
// console.log(str1);
// str = "hello"
// console.log(str);

// const value = 567890;
// value = 123456; // cannot update variable value print show error
// console.log(value);



// CONST VARIABLE:

// const password = 12345
// password = 987 // cannot update variable
// console.log(password);

// if(true){
//     let name = "asif";
//     console.log(name);
    
// }
// let num = 12345;
// function xyz(){
//     let num = 567890;
//     console.log(num);
    
// }
 
// xyz()
// console.log(num);

// let email = "muhammadasifansari101@gmail.com";
// if(true){
//     let email = "abc@gmail.com";
//     console.log(email);
    
// }
// console.log(email);


// if(true){
//     let abc = "hello"
//     console.log(abc);
// }

// let xyz = 123
// function abc(){
//     var xyz = "hello"
//     console.log(xyz);
// }
// abc()

// console.log(xyz);

// let email = "abc@gmail.com"

// if(true){
//     let email = "abc1@gmail.com"
//     console.log(email);
// }

// console.log(email);

// let firstName = "Muhammad Asif";
// let lastName = "Ansari";

// console.log("Hello EveryOne"+ " " + firstName + " " + lastName);
// console.log(`Hello My Name is ${firstName} ${lastName}`);

// let num = 20;
// if(num === 20){
//     console.log(`This is Correct Number`);
    
// }
// else{
//     console.log(`This Number is not available`);
    
// }

// let name = "wasif";
// if(name === "wasif"){
//     console.log(`Correct Name`);
    
// }else{
//     console.log(`Wrong Name`);
    
// }

// let name1 = "raza";
// name1 === "razzaq"? console.log(`This Name is Correct`) : console.log(`This name is incorrect`);

// let number = (2+2)*5;
// let numValue = number
// console.log(numValue);

// numValue === 26? console.log(`value is ${numValue}`):console.log(`value's wrong`);




// let firstName = "ali"
// let lastName = "raza"

// console.log("Hello, " + firstName + " " + lastName + " welcome");
// console.log(`Hello, ${firstName} ${lastName} welcome!`);

// let firstName = "ali"

// if(firstName === "ali"){
//     console.log("welcome! " + firstName);
// }else{
//     console.log("Not AvAIBLE");
// }


// TERNARY OPERATOR:

// let lastName = "ali" 
// lastName === "raza" ? console.log("welcome! " + lastName) : console.log("Not AvAIBLE");



// ------- hoisted variable -------
// var abc;

// ------- DEFAULT PARAMETERS & REST PARAMETERS -------
// function abc(a="please enter your email", ...abc){
//     console.log(a,abc);
// }
// abc("abc@gmail.com","ahmed",324,true,"abc")


// DEFAULT PARAMETERS
// let xyz;

// function xyz(x="Please Enter Your Name", y,...z){
//     console.log(x,y,z);
    
// }
// xyz("Muhammad Asif Ansari",786,false,"hello","random@gmail.com")

// REST PARAMETERS
// function hello(...valueAssign){
//     console.log(valueAssign);
//     console.log(valueAssign[1]);
// }
// hello("asif@gmail.com","ali","908765","true")

// ------- REST PARAMETERS -------
// function abc(...abc){
//     console.log(abc[0]);
// }
// abc("abc@gmail.com","ahmed",324,true,"abc")


// let mixValue = ["asif",123,true];
// let mixValue1 = ["ali",456,false];
// console.log(mixValue,mixValue1);
// let mergeValue = [...mixValue,...mixValue1]
// console.log(mergeValue);



// ------- SPREAD OPERATOR with (array) -------  
// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8,9,10, ...arr]

// let merge = [...arr,...arr1]
// console.log(arr1);


// ------- SPREAD OPERATOR with (object) -------
// let obj = {
//     firstName:"ali",
//     lasstName:"raza"
// }
// let student = {
//     ...obj,
//     email:"abc@gmail.com"
// }

// console.log(student);
// console.log(obj,student);

// console.log({...obj,...student});


// console.log(arr.concat(arr1,arr2));
// console.log(obj.concat(obj1));

// let students = {
//     name : "muneeb",
//     rollNo : 12345
// }
// let studentDetail = {
//     ...students,
//     email : "muneeb@gmail.com",
// }

// console.log(students);
// console.log(studentDetail);
// console.log(students,studentDetail);
// console.log({...students,...studentDetail});

// let str = "Muhammad"
// let str1 = "Asif";
// let str2 = "Ansari";

// let allStr = str.concat(str1,str2)
// console.log(allStr);


// let array = ["Awais","khiza","uzair"];
// let array1 = [2,4,6,8,10];
// let array2 = [true,false,false,true,false];
// let allArray = (array2.concat(array,array1))
// console.log(allArray);


// let studentData = {
//     studentName : "Hamid",
//     class: "4th",
//     rollNo:420,
//     email:"hamid420@gmail.com"
// }
// let studentData1 = {
//     studentName1 : "Asad",
//     class1: "9th",
//     rollNo1:710,
//     email1:"asad710@gmail.com"
// }
// let studentData2 = {
//     studentName2 : "Shahid",
//     class2: "6th",
//     rollNo2:804,
//     email2:"shahid804@gmail.com"
// }
// let allStudentData = Object.assign(studentData,studentData1,studentData2)
// console.log(allStudentData);

// Array or string ke lye .concat lagate hai merge krne ke lye or obect ko merge krne ke lye Object.assign() ka method use krte hain.

// ------- DESTRUCTURING with (object) ------- 
// let obj = {
//   firstName: "ali",
//   lastName: "raza",
//   email: "abc@gmail.com",
// };

// let { lastName, firstName } = obj;

// console.log(firstName, lastName);

// let bikeDetail = {
//     name : "Honda",
//     model : 2024,
//     price : 12_00_00,
//     detail : {
//         company: "HondaCC",
//         deal : "Pakistan",
//     }
// }

// let {model,name,price,detail} = bikeDetail;
// console.log(model,name,price,detail.company);


// ------- DESTRUCTURING with (array) -------
// let arr = ["smit",3254,"ahmed",true]

// let [a,c,b,d] = arr;

// console.log(a,b);

// let mixup = ["piaic",5476,"zeeshan",false,"mateen"]
// let [a,b,c,d,e] = mixup;
// console.log(a,b);



// Array Methods(forEach, map, filter, reduce, some, every):
// let arr = ["smit",3254,"ahmed",true]

// ------- Map() -------

// let result = arr.map(function(val){  
//     console.log(val);
//     return `saylani ${val}`
// })

// console.log(result);


// let mixupValue = ["piaic",5476,"zeeshan",false,"mateen"]
// let getValue = mixupValue.map(function(value){
//     console.log(value);
//     return `kashmir ${value}`
    
// })
// console.log(getValue);

// let arr = ["smit",3254,"ahmed",true]

// ------- ForEach() -------
// let arr = ["smit",3254,"ahmed",true]
// let result = arr.forEach(function(val){
//     console.log(val);
// })

// console.log(result);

// let mixupValue = ["piaic",5476,"zeeshan",false,"mateen"]
// let getValue = mixupValue.forEach(function(value){
//     console.log(value);
    
// })
// console.log(getValue);

// let array = ["ali","anwer","kamal",4567,true,false];
// let arrayValue = array.forEach((abc) => {
//   console.log(abc);
  
// });
// console.log(arrayValue);

// let arrayMix = ["ali","anwer","kamal",4567,true,false];

// arrayMix.forEach(function(randomValue){
// console.log(randomValue);

// })


// let mixArray = ["Bilal","Awais","Wasif",23988,123648,true,false]
// let getMixArray = mixArray.map((xyz)=>{
//   console.log(xyz);
  
// })
// console.log(getMixArray);

// let mixArray1 = ["Bilal","Awais","Wasif",23988,123648,true,false]
//  mixArray.map(function xyz(abc){
//       console.log(abc);
      
//  })
// //  xyz()

// let mixArray2 = ["Bilal","Awais","Wasif",23988,123648,true,false]
// let getMixValue = mixArray2.map((value)=>{
//   console.log(value);
  
// })
// console.log(getMixValue);

// let mixArrayReduce = ["Bilal","Awais","Wasif",23988,123648,true,false]

// let mixArrayReduceValue = mixArrayReduce.reduce((a,b,c,d,e,f,g)=>{
// console.log(a,b,c,d,e,f,g)

// })
// console.log(mixArrayReduceValue);



// let num = [60,10,45,20,65,30,15]

// const minValue1 = num.reduce((a,b)=>{
//         return b<a ? b:a;

// })

// const maxValue1 = num.reduce((a,b)=>{
//   return b>a? b:a;
// })

// let arr = (minValue1);
// console.log(arr);
// let arr1 = maxValue1;
// console.log(arr1);



// ------- Simple Loop -------

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// let arr = ["smit",3254,"ahmed",true]

// ------- Filter() -------

// let arr = ["smit",3254,"ahmed",true]
// let result = arr.filter(function(val){
//     // return typeof val === "string"
//     // return typeof val === "number"
//     // return val === "smit"
//     console.log(val);
//     return arr
    
// })

// console.log(result);
// let ReturnValue = arr
// console.log(ReturnValue);



// let arr = ["smit"]

// ------- Some() -------

// let result = arr.some(function(val){
//     return val === "smit"
// })  

// ------- Every() -------

// let arr = ["smit"]
// let result = arr.every(function(a){
//     console.log(a);
//     return a === "Smit";
// })  

// console.log(result);

// ------- Reduce() -------

// let arr = [10,20,5,34,50]
// // min
//  let result = arr.reduce(function(a,b){
//     // console.log(a,b);
//     return b < a ? b : a  
//     // return b > a ? b : a  
// })

// console.log(result);


// ------- VAR vs LET vs CONST ---------

// function foo(){
//     let abc = "hello"
// }

// console.log(abc);

// if(true){
//     let abc = "hello"
// }
// console.log(abc);

// const abc = "hello"
// console.log(abc);
// abc = "world"
// console.log(abc);

// var abc = "hello"

// let firstName = `ahmed
// khan`;
// let lastName = "khan"

// ------- Template literals -------

// // let fullName = firstName + " " + lastName
// let fullName = `${firstName} ${lastName}`

// console.log(fullName);


// ---- Ternary Operator -------

// let fullName = prompt("enter your name?")

// let abc = fullName === "ali" ? console.log("YES") : console.log("NO");

















// const numbers = [10, 5, 20, 8, 15];

// // Find Minimum
// const minValue = numbers.reduce((a, b) => {
//   return b < a ? b : a;
// });

// // Find Maximum
// const maxValue = numbers.reduce((a, b) => {
//   return b > a ? b : a;
// });

// console.log("Minimum Value:", minValue); // Output: 5
// console.log("Maximum Value:", maxValue); // Output: 20



// const main = document.getElementById("main");
// main.childNodes[0]


let arr = [1, 2, 3];

for (let abc of arr) {
  console.log(abc);
}



let name = ["waheed","imran","zubair"];
for(let xyz of name){
  console.log(xyz);
  
}



let studentName = "Awais"
let age = "20"

let obj = {
  studentName,
  age,
  email : "xyz@gmail.com",
  greet: ()=>{
    return `Hello Eeryone! ${this.studentName}`
  },

}
console.log(obj.greet());



let stdName = "jhdswju"
let age1 = 123

let obj1 = {
  stdName,
  age1,
  email: "abc@gmail.com",
  greet1: function () {
    return `welcome! ${this.stdName}`
  },
};

console.log(obj1.greet1())