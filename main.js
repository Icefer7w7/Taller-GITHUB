var RandomNumber = parseInt(Math.random()*10)+1;
console.log("secret Numer", RandomNumber);
var num;

while(RandomNumber !=num){
    num = parseInt(prompt("Coloca your number between 1 and 10"));

    var difference=Math.abs(RandomNumber-num);

    if(RandomNumber == num){
        console.log("CORRECT")
    }
    else if(difference <= 3){
        console.log("HOT")
    }
    else{
        console.log("Cold")
    }

}