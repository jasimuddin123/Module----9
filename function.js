// Function Call

function first(){
    console.log("Islam Is full code of Life");
    console.log(" Islam is full peace of Life");
}
first();


// function with Parameter 

function add(num){
    var result = num * 5;
    console.log(result);
}

add(5);
add(2);

// Function Return 

function reTurn(num1){
    var result = num1 *2;
    return result;
}

var first = reTurn(2);
var second = reTurn(10);
var total = first + second;
console.log(total);

// Function Return with 2nd Method 

function name(num2){
    var result = num2 +10;
    return result;
}

var resultNum2 = name(20);
var resultNum3 = name(10);

console.log(resultNum2,resultNum3);

// Function with Multi Parameter 

function multiPara(num3, num4){
    var result = num3 + num4;
    return result;
}
var firstPara = multiPara(200,300);
console.log(firstPara);
