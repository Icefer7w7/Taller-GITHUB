var RandomNumber = parseInt(Math.random()*10)+1;
console.log("secret Numer", RandomNumber);
var num;
var message = "Coloca your number between 1 and 10";

while(RandomNumber !=num){
    num = parseInt(prompt(message));

    var difference=Math.abs(RandomNumber-num);

    if(RandomNumber == num){
        alert("CORRECT");
    }
    else if(difference <= 3){
        message= "HOT";
    }
    else{
        message= "Cold";
    }

}
