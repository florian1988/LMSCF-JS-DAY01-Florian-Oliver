console.log("Hello form the Console");

document.write("hello from the Browser");

var myage ="31";

console.log("hey my name is Florian and i am " + myage +" years old");


var br ="<br>";

var players = [ "Martin", "Thomas", "Peter", "Mathias", "Niki" ];

document.write("The most valuable player of the match is " + players[1] + "."+br); 


var autos = [ "Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

document.write(autos.sort() +br);


var fruits = ["apple", "banana", "kiwi", "orange"];

document.write("output: " + fruits.slice(0, 3) +br);

document.write("output: " +fruits.sort() +br);

document.write("output: " +fruits.slice(0, 3) +br);

document.write(" "+br);


var animals = [ "dog", "horse", "monkey"];

document.write("output: " +animals.reverse(0, 3) +br); 

animals.push("Cat");

var newanimall = ("output: " +animals.sort() +br);


var newanimal = new Array ();

newanimal = newanimall.split();

document.write(newanimal.shift());


document.write(" " +br);

var anton = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

document.write(anton.substring(0,5) +" "+anton.substring(6,14) +" "+anton.substring(15,19)
	+" "+anton.substring(20,25)+" "+anton.substring(27,31)+" "+anton.substring(32,37)+
	" "+anton.substring(38,44)+" "+anton.substring(45,50))





var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

var c = Number(c); 
var d = Number(d);

document.write(" " +br);

thatresulst = (a+b+c+d+e);

document.write("result: " +thatresulst)

document.write(" " +br);


var f = '1';

var g = 15;

var h = 8;

var i = "1";

var f = Number(f);
var i= Number(i);

var myresult = (f*g*h*i);

document.write("otherresult: " +myresult);

document.write(" " +br);

document.write( "lastresult: " +myresult/thatresulst +br);

var booom = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
 [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

document.write(" " +br);




 document.write("outout:" + booom[1][1] +br);
 document.write("outout:" + booom[4][2] +br);
 document.write("outout:" + booom[5][3] +br);
 document.write("outout:" + booom[2][3] +br);
 document.write("outout:" + booom[2][1] +br);

var baaam = [[booom[1][1]],[booom[4][2]],[booom[5][3]], [booom[2][3]],
[booom[2][1]]];

document.write("output: " +baaam)

var firstchallange = [["Vienna ", "is ", "a ", "nice ", "city "],
					["Vienna ", "is ", "a ", "nice ", "city "],
					["Vienna ", "is ", "a ", "nice ", "city "],
					["Vienna ", "is ", "a ", "nice ", "city "],
					["Vienna ", "is ", "a ", "nice ", "city "]];


var enterchallange = [[firstchallange[0][0]],[firstchallange[1][1]],[firstchallange[2][2]],
 [firstchallange[3][3]],[firstchallange[4][4]]];

document.write(" " +br);

document.write("Solution: " +enterchallange.join(" "));



var lastthing = 'Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$"properties $flow$down;$actions$flow$up".';

var texxt = new Array();
texxt = lastthing.split("$");

document.write(texxt.join(" "));



