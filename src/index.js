//const test() => console.log("hello");
//test();


                    //const
   /* const pi=3.14;
    let radius;
    let circumference;

        radius=window.prompt("enter the radius of circle");
        radius=Number(radius);
    
        circumference=2*pi*radius;
        console.log("the circumference is :" ,circumference);*/

       



//  function fn() {
//     let a=document.getElementById("aText").value;
//     a = Number(a);
//     let b=document.getElementById("bText").value;
//     b = Number(b);

//     let c = Math.sqrt(Math.pow(a , 2) + Math.pow(b , 2));

//     document.getElementById("cLabel").innerHTML = "side c is :" + c;



//}


// let count=0

// function fn1() {
//     count-=1;
//     document.getElementById("count").innerHTML=count;
    
// }

// function fn2() {
//     count=0;
//     document.getElementById("count").innerHTML=count;
    
// }

// function fn3() {
//     count+=1;
//     document.getElementById("count").innerHTML=count;
    
// }

       /****slice******* */
// let pN = 'Prudhvi Nag';

// let fname;
// let lname;

// // fname = pN.slice(0,7);
// // lname=pN.slice(8);

// fname= pN.slice(0 ,pN.indexOf(' '));
// lname=pN.slice(pN.indexOf(' ') +1)

// console.log(fname);
// console.log(lname);

        //################# method chaning ##########################//
// let x = 'prudhvi';
// let l = x.charAt(3).toUpperCase().trim();
// console.log(l);

// ################################################# if else if else statements####################################################################################
// function fn(){
//     const myCheckBox=document.getElementById("myCheckBox");
//     const visaCard=document.getElementById("visa");
//     const masterCard=document.getElementById("master");
//     const platinumCard=document.getElementById("platinum");


//     if(myCheckBox.checked){
//         console.log("You are Subcribed!");
//     }
//     else{
//         console.log("You are Not Subcribed!");

//     }


//     if(visaCard.checked){
//         console.log("You are pay with visa card");

//     }
//     else if(masterCard.checked){
//         console.log("You are pay with master card");

//     }
//    else if(platinumCard.checked){
//         console.log("You are pay with platinum card");

//     }
//    else{
//         console.log("select your payment card type");

//     }
    
// }

//  #########################################################  switch function  ###################################################################################################


// function fn1() {
//     let x=document.getElementById("percentage").value;

// switch(x){
//     case "A":
//         console.log("your percentage is above 90");
        
//         break;
//     case "B":
//         console.log("your percentage is between 75 to 89");
//         break;
//     case "C":
//         console.log("your percentage is between 60 to 74");
//         break;
//     case "D":
//         console.log("your percentage is between 60 to 74");
//         break;
//     case "E":
//         console.log("your percentage is between 40 to 59");
//         break;
//     case "F":
//         console.log("your percentage is connot calculate , Your were FAILED the exam");
//         break;
//     default:
//         console.log("out of case");

// }

// }


// ######################################################creating a sample function and passing parameters #########################################################

// function fn(a,b){
    
//     console.log("Happy Brithday to you!");
//     console.log("Happy Brithday dear " , a);
//     console.log("Happy Brithday to you!");
//     console.log("you are " ,b,"years old");
// }

// function fn1(){

//   let a="prudhvi";
//    let b=24;
// fn(a,b);
// }

// fn1();



//########################################################### return  #########################################################################################


// let a;
// let w;
// let h;

// w=window.prompt("enter the width");
// h=window.prompt("enter the height");


// function fn(w,h){
//     return w * h;
// }

// a=fn(w,h);
// console.log("area is" , a);

//############################################################# ternary opertors       #################################################################################
// age(10);


// function age(a){
//     return  a >= 18 ? console.log(true): console.log(false);
// }


//###############################################################  template literals            ###################################################################################

// let fname="Prudhvi";
// let lname="kammela";
// let gender="male";
// let age=24;

// let ht=`Hi ${fname} ${lname}
// gender :${gender} 
//  your ${age} years old `;

// // console.log(text);
//  document.getElementById("text").innerHTML="hello";


// let f=["oranges","apples","bannanas","kiwi","gova"];
// let v=["bootlegard","onions","potatos","sweet-potatos"];
// let m=["fish","chicken","eggs"];

// let a=[f,v,m];

// a[0][1]="mango";

// for(let list of a){
//     for(let food of list){
//         console.log(food);
//     }
// // }

// let i = 0;
// let text = "";
// while (cars[i]) {
//   text += cars[i] + "<br>";
//   i++;
// }


//const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let x = 0; x <= cars.length; x++) {
//     console.log(cars[x]);   
// }

// let x=0;
// while (x < cars.length) {
//     console.log(cars[x]);
// x++;
// }
// let len=cars.length;
// for(let x=0;x<len;x++){
//     console.log(cars[x]);
// }
 //#########################################################  while  ############################################################
// let len=cars.length;
// let x=0;
// while (x<len) {
//     console.log(cars[x]);
//     x++;
    

// }

//#################################################### do while#########################################################3333
// let len=cars.length;
// let x=0;
// do {
//     console.log(cars[x]);
//     x++;
    
// } while (x<len);

// const object=[789,54,15,45,45,12,054];
// for (const x of object) {
//     console.log(x);
// }
// console.log("/////");

// for (const key in object) {
//     console.log(object[key]);
// }

//############################# for in ===>objects #########################################################3

//var p=[id:"123",fname:"Prudhvi",lname:"Kammela",DOB:"29 july 1998"];

// for (const key in p) {
//     console.log(p[key]);
//     }
//#############################   for of ===>arrays  #############################################################################
//  var p=[id="123",fname="Prudhvi",lname="Kammela",DOB="29 july 1998"];
//  for (const x in p) {
//      console.log(p[x]);
    
//  }
//#################################     creating a new map###################################################################################################

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
  
// console.log(fruits.get("apples"));


// const fruits = new Map();
// fruits.set("apples",600);
// fruits.set("bannana",150);
// fruits.set("orange",200);
// fruits.set("gova",70);
// fruits.set("kiwi",900);

    
  
  
// console.log(fruits.get("apples"));
// console.log(fruits.get("kiwi"));
// console.log(fruits.get("gova"));


// #########################################################################################################################################
// var x, y;  
  
// [x=50, y=70] = [100,90];  
// console.log(x);   
// console.log(y); 


// const colorArr = ["0", "yellow", "blue", "green", "white", "black"];
// const [first, second,blue] = colorArr;
// console.log(first, second,blue);
    

