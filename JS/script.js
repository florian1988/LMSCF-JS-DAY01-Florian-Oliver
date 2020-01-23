var br = "<br>";
var hr = "<hr>"


var age = 25;
console.log ("Hi my name is Martin and i am" + " " + age + " " + "years old");
document.write("Hi my name is Martin and i am" + " " + age + " " + "years old"+br);

var players = ["Martin" , "Thomas" , "Peter" , "Mathias" , "Niki"];
document.write("The most valuable player in the game is" + " " + players.slice(3,4)+br);

// -----------intermediate---------------------------

var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]
document.write(cars.sort()+br)



var fruits = ["apple", "banana", "kiwi", "orange"]
document.write(fruits.slice(0,3)+br)
document.write(fruits.slice(0)+br)
document.write(fruits.slice(0,3)+br)

var animals =["monkey", "horse", "dog"]
document.write(animals.reverse()+br)
animals.push("cat")
document.write(animals.reverse()+br)

var a = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
var newFruits = new Array();
newFruits = a.split("/")
console.log(newFruits)
a[0] = "mango"
a[1] = "cherries"
a[2] = "kiwi"
a[3] = "grapes"
a[4] = "pear"
a[5] = "peach"
a[6] = "orange"
a[7] = "lemon"
length: 8
document.write(newFruits.join(" ") +br)


// -----------advanced---------------------------
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var c = Number(c)
var d = Number(d)
var result = a+b+c+d+e
document.write(result +br)

var f = '1';
var g = 15;
var h = 8;
var i = "1";

var f = Number(f)
var i = Number(i)
document.write(f*g*h*i+br)

var lotNumbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
 [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

document.write(lotNumbers[1][1]+br,lotNumbers[4][2]+br, lotNumbers[5][3]+br, lotNumbers[2][3]+br)


				 // 0      1     2     3       4     
var sentence = [ ["Vienna ", "is ", "a ", "nice ", "city"], 
			   ["Vienna ", "is ", "a ", "nice ", "city"],
			   ["Vienna ", "is ", "a ", "nice ", "city"],
			   ["Vienna ", "is ", "a ", "nice ", "city"],
			   ["Vienna ", "is ", "a ", "nice ", "city"] ]

document.write(sentence[0][0] + sentence[1][1] + sentence[2][2] + sentence[3][3] + sentence[4][4] +br)

var article = 'Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".';
var text = new Array();
text = article.split("$");
console.log(text)
document.write(text.join(" ")) 