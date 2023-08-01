//what is hoisting in javascript
a();
console.log(x);
var x = 10;
function a() {
	console.log("hello javascript");
}

//what is lexicalscope and scope chain
// exmaple1:
function a() {
	var x = 10;
	return function () {
		console.log(x);
	};
}
var lex = a();
lex();

// example 2
function b() {
	var x = 10;
	return function c() {
		var y = 10;
		return function d() {
			var z = 10;
			return function () {
				console.log(x + y + z);
			};
		};
	};
}
var lexical = b();
lexical()()();

//what is closure
function outer() {
	var x = 10;
	function inner() {
		console.log(x);
	}
	x = 100; //reference of x in inner function persist not value
	return inner;
}

var closure = outer(); //it will return a complete inner function
closure();

//setTimeout+closure

function setTime() {
	for (var i = 1; i <= 5; i++) {
		//apply let instead of var and closure
		setTimeout(() => console.log(i), i * 1000);
	}
	console.log("helllooooo javascipt");
}
setTime();
//output will be 5-times 6
//it is because of closure because here variable i(settimeout) has been refering to the value of its outer variable i(for loop var i)
//but instead of var if you put let then it will work fine it is because of let keyword is initializing all time to new memory so whenever variable i of settimeout refers to its outer
//variable its always get re-initialize to new memory so here o/p will be 1,2,3,4,5

// so we can overcome with var using closure
function setTime1() {
	for (var i = 1; i <= 5; i++) {
		//apply let instead of var

		function close(x) {
			setTimeout(() => console.log(x), x * 1000);
		}
		close(i);
	}
	console.log("helllooooo javascipt");
}
setTime1();
//so here with help of closure we can overcome with var declaraion and o/p will be 1,2,3,4,5 because each time function is getting reinitialize to a new memory
function xample() {
	let a = 20;
	let update = () => {
		let a = 100;
		a = a;
	};
	update();
	console.log(a);
}
xample();
//what is shadowing

let s = 1;
const t = 2;
var u = 123;
{
	let s = 100; //so inner variable shadowing outer variable
	const t = 200;
	var u = 100;
	console.log(s);
	console.log(t);
	console.log(u);
}

//what is let and const and temproral dead zone
//console.log(temp);
let temp = 10; //cant able to access temp as it is in different memory and it is temporal dead zone

//constructor function
function Count() {
	var counter = 0;
	this.increment = function () {
		counter++;
		console.log(counter);
	};
	this.decrement = function () {
		counter--;
		console.log(counter);
	};
}

var counter1 = new Count();
counter1.increment();
counter1.decrement();

//what is first class function in js

//exp1:
const abc = function xyz() {
	console.log(xyz);
};
abc();
//xyz(); as function is being to a variable which is undefined at initial phase so we can't call xyz at global scope
//exp2:
function abc2(param) {
	console.log(param);
}
abc2(function () {
	console.log("hello");
});

function ca() {}
abc(ca);

//what is callback?
setTimeout(function () {
	console.log("timer");
}, 5000);

function main(callback) {
	console.log("main");
	callback();
}
main(function callback() {
	console.log("callback");
});
//what is high order function
// what is currying function 
  const multiply=function(x,y){
	  console.log(x*y)
  }
let multiplybytwo=multiply.bind(this,2)
multiplybytwo(3)
const muliplyClosure=function(x){
	return function(y){
		console.log(x*y)
	}
}
muliplyClosure(2)(3)
//what is prototype inheritance

//what is polyfill
 let name={
	 firstname="mithilesh",
	 lastname="prajapati"
 }

 let printName=function(email){
	 console.log(this.firstname+" "+this.lastname+""+email)
 }
 const printmyName=printName.bind(name);
 printmyName();

//  now to implement our own mybind function

Function.prototype.mybind=function(...args){
		let self=this,
		params=args.slice(1)
	return function(args2){
		self.apply(args[0],[...params,...args2])

	}
}
const printmyName2=printName.mybind(name);
 printmyName2("mithileshrprajapati");
//what is bind,apply,call
//what is promise
//what is async and await
//what is debouncing and throtling?
let counter=0;
let getdata=()=>(
	console.log("fetching out data.... ",count++)
)
const dosomeMagic=function(fn,delay){
	let timer;
	return function(){
		let self=this;
		args=argumnets
		//cleartimeout  will clear its timer if any keystroke has been made within the delay
		clearTimeout(timer)
	timer= setTimeout(() => {
			fn.apply(self,ar)
		}, delay);

	}
}

const betterfunction=dosomeMagic(getdata,300)

//throttle?
//resizing window how much time its is resized can be count using throttling
const expensive=()=>{
	console.log("expensive")
}
window.addEventListener("onresize",expensive)

const throttle= function(fn,limit){
	let flag=true;
	return function(args){
		let context=this
		if(flag){
			fn.apply(context,args)
			flag=false;
			setTimeout(()=>{
				flag=true
			},limit)
		}

	}
}

const betterExpensive=throttle(expensive,300)
//what is event bubling and event capturing?
//what is event delegation?
// what is map,filter and reduce?
