// taking number 
const number = 2;

// function for checking
const oddEven = (num) =>{

    if(num === 0 || num === 1){
        console.log("The number is either 0 or 1")
    }

    else if(num %2 == 0){
        console.log("It's even")
    }
    else{
        console.log("It's odd ")
    }

}

oddEven(number) // calling function