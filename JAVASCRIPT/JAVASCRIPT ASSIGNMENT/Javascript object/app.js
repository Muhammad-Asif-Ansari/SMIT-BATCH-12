

// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// console.log(bike);
// console.log(bike.bikeName);

// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// console.log("wheels" in bike);


// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// console.log(bike);
// console.log(bike.bikeName);


// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }

// bike.bestEngine = "Yamaha",
// console.log(bike);



// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// delete bike.prize
// console.log(bike);



// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// console.log(bike.color[2]);


// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// bike.color[4] = "orange",
// console.log(bike.color);

// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"],
//     getDetails: function(){
//         return`${bike.bikeName} ${bike.prize} ${bike.company}`
//     }
// }
// console.log(bike.getDetails());


// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// console.log(bike.wheels);//undefine  
// console.log(bike.wheels.getWheels);//Error

// var bike = {
//     bikeName:"unique",
//     prize: 140000,
//     model:2024,
//     company:"Yamaha",
//     color:["red","black","blue","green"]
// }
// bike.wheels = 2,
// console.log(bike);

// var bike = [
//     {
//         bikeName:"unique",
//         prize: 140000,
//         model:2024,
//         company:"Yamaha",
//         color:["red","black","blue","green"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
//     {
//         bikeName:"Super Star",
//         prize: 2_00_00_0,
//         model:2024,
//         company:"Toyota",
//         color:["white","grey","brown"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
//     {
//         bikeName:"Super Power",
//         prize: 16_00_00,
//         model:2024,
//         company:"Suzuki",
//         color:["red","black","blue","green"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
//     {
//         bikeName:"Atlas Honda",
//         prize: 25_00_00,
//         model:2024,
//         company:"Honda",
//         color:["red","black","blue","green"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
//     {
//         bikeName:"Sohrab Cycles",
//         prize: 10_00_00,
//         model:2024,
//         company:"Pak Suzuki",
//         color:["red","black","blue","green"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
//     {
//         bikeName:"Q Mobile",
//         prize: 120000,
//         model:2024,
//         company:"Q Mobile Company",
//         color:["red","black","blue","green"],
//         wheels:{
//             getWheels:"superb 2 wheels",
//         },
//           getDetails:function(){
//                 return`${this.bikeName} ${this.prize} ${this.company}`
//             }
//     },
// ]
// console.log(bike);

// console.log(bike[0].getDetails());
// console.log(bike[1].getDetails());
// console.log(bike[2].getDetails());
// console.log(bike[3].getDetails());
// console.log(bike[4].getDetails());
// console.log(bike[5].getDetails());

// for(var i = 0; i < bike.length; i++){
//     console.log(bike[i].getDetails());
    
// }



// chapter 69:- Objects: 

// var student1 = {
//     name: "Ali",
//     rollNo: 1234,
//     class: "fs"
// }
// var student2 = {
//     name: "fahad",
//     rollNo: 1234,
//     class: "fs"

// }
// var student1 = {
//     name: "raza",
//     rollNo: 1234,
//     class: "fs"
// }

// chapter 70:- Objects Properties: 

// student1.fathername = "ahmed"
// // console.log(student1.name);

// // student1.name = "ali"

// console.log(student1.class);
// // console.log(student1.name);

// var car = {
//   name: "Civic",
//   model: 2022,
//   price: 35_00_000, //3500000
//   company: "Honda",
//   availableColors: ["black", "white", "grey"],
//   auto: true,
//   details:{
//     doors: 4
//   }
// };
// delete car.company
// delete car.availableColors[0]

// console.log("company" in car);
// console.log(car.availableColors[0]);

// console.log(car.price);
// console.log(car.availableColors[3] = "red");
// car.details.wheels = 4
// car.auto = false

// var room = {}

// room.chairs = 10;
// console.log(room);


// chapter 72:- Objects Methods: 

// var car = {
//     name: "Civic",
//     model: 2022,
//     price: 35_00_000, //3500000
//     company: "Honda",
//     availableColors: ["black", "white", "grey"],
//     auto: true,
//     other:{
//       doors: 4
//     },
//     getDetails: function(){
//        return `${car.name} ${car.price} ${car.model}`
//     }

//   };

//   console.log(car.getDetails());

//   var str = "HELLO"
//  console.log(str.toLowerCase());

// ARRAY OF OBJECTS:

// var cars = [
//   {
//     name: "Civic",
//     model: 2022,
//     price: 35_00_000, //3500000
//     company: "Honda",
//     availableColors: ["black", "white", "grey"],
//     auto: true,
//     other: {
//       doors: 4,
//     },
//     getDetails: function () {
//       return `${this.name} ${this.price} ${this.model} ${this.availableColors[1]}`;
//     },
//   },
//   {
//     name: "Alto",
//     model: 2010,
//     price: 8_00_000, //3500000
//     company: "Suzuki",
//     availableColors: ["black", "white", "grey"],
//     auto: false,
//     other: {
//       doors: 4,
//     },
//     getDetails: function () {
//       return `${this.name} ${this.price} ${this.model}`;
//     },
//   },
//   {
//     name: "Truck",
//     model: 1999,
//     price: 350_00_000, //3500000
//     company: "Honda",
//     availableColors: ["black", "white", "grey"],
//     auto: true,
//     other: {
//         doors: 2
//     },
//     getDetails: function () {
//       return `${this.name} ${this.price} ${this.model}`;
//     },
//   },
// ];

// console.log(cars[2].getDetails());

// for(){

// }

// console.log(cars);

// for(var i = 0; i < cars.length; i++){
//     console.log(cars[i].getDetails());
// }



