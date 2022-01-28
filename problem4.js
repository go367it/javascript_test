// taking input
const number = -10;

// function for checking
const posNegZero = (num) =>{
    if(num < 0){
        console.log("It's negative number")
        return;
    }
    else if(num > 0){
        console.log("It's positive number")
        return;
    }
    else if(num === 0){
        console.log("It's Zero")
        return;
    }
    else{
        console.log("It's not a number")
        return;
    }
}

posNegZero(number) // calling function