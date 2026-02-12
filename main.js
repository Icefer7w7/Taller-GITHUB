var RandomNumber = Math.random()*10
var num;

while(RandomNumber !=num){
    num = (prompt("Coloca your number"));

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