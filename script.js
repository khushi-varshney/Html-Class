console.log(x);
var x =10;
console.log(x);
x=20;
console.log(x)
var x= 30;
console.log(x);

// console.log(y); can't  be done with let
let y =10;
console.log(y);
y=20;
console.log(y)
// let y= 30;

const z=10;
console.log(z)
// z=0;
// console.log(z);

let str=`Hello world ${x}`;
let int=10;
let float=2.21;
let boolean= true;
let udefined;
let nulll=null;

let data={
    name:"radhe",
    isTrue: true,
}

let colors =[1, "red", {radhe : "krishna"}]
function print(message){
    return `Hello, ${message}`;
}
let prints = print('World Js')


let counter={
    value:0,
    increment: function(){
        this.value++;
    },
    decrement: function(){
        this.value--;
    },
    getValue:function(){
        return this.value;
    }
    
}
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())

let calculator = {
    num1: 4,
    num2: 3,
    modulo: function(){
        return this.num1%this.num2;
    }
}
console.log(calculator.modulo())

let num=[1,2,3,4,5,6,7,8]
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(`${num[i]} is even`)
    }
}

let numbers = [10, -3, 0, 7, -1, 5, -8, 0];
let positives = [];
let negatives = [];
let zeros = [];
for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > 0) {
        positives.push(numbers[i]);  
    } else if (numbers[i] < 0) {
        negatives.push(numbers[i]);  
    } else {
        zeros.push(numbers[i]); 
    }
}
console.log("Positive numbers:", positives);
console.log("Negative numbers:", negatives);
console.log("Zeros:", zeros);