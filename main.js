//document.addEventListener('keypress',function(event){
//    var code=event.keyCode;
//    document.getElementById('viewer').innerHTML=code;
//})
var number = 0;
var stringNumber, printString;
var intNumber = 0;
var buffer = [];
var flag = "default";
var condition;

function onButtonClick(ids) {
    buffer.push(ids);
    stringNumber = printString = buffer.join('');
    intNumber = parseInt(stringNumber, 10);
    document.getElementById('viewer').innerHTML = intNumber;
}

function merge() {

    if (flag === "add") {
        number += intNumber;
        condition=number;
        intNumber = 0;
        buffer.splice(0, buffer.length);
        document.getElementById('viewer').innerHTML = number;
    }

    else if (flag === "sub") {
        if (number === 0) {
            number = intNumber;
            condition=number;
            intNumber = 0;
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = number;
        }
        else {
            number -= intNumber;
            condition=number;
            intNumber = 0;
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = number;
        }
    }
    else if (flag === "mul") {

        
       if (number === 0) {
            number = intNumber; 
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = '';
        }
        else {

            number *= intNumber;
            intNumber = 1;
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = number;
        }
    }
    if (flag === "div") {

        if (number === 0) {

            number = intNumber;
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = '';

        }
        else {
            if(intNumber===0)
            {
               
            }
            else
            {
            number /= intNumber;
            intNumber=1;
            buffer.splice(0, buffer.length);
            document.getElementById('viewer').innerHTML = number;
            }    
        }
    }


}

function controller() {
    merge();
    intNumber = 0;
    Buffer = intNumber;
}

function addition() {
    flag = "add";
    controller();
}

function substraction() {
    flag = "sub";
    controller();
}

function multiply() {
    flag = "mul";
    controller();
}

function devide() {
    flag = "div";
    controller();
}

function equal() {
    if (flag === "add" || flag === "sub" || flag === "mul" || flag === "div") {
        merge();
        flag = "";
    }
}


function reset() {
    number = 0;
    intNumber = 0;
    buffer.splice(0, buffer.length);
    flag = "";
    document.getElementById('viewer').innerHTML = 0;
}
