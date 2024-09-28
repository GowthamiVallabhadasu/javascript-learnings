// passing function as an argument to another function while invocation 

function firstFunction(callbackFunction){
    console.log("First function")
    callbackFunction() // please note this we must call the call back explictly
}

// call back function definition 
function secondFunction(){
    console.log("Call back function is executed")
}

// function invocation 

// here second function is passed as call back
let a=firstFunction(secondFunction)