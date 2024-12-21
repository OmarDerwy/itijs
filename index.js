function sortThreeNumbersDesc(a,b,c){
    var temp;
    if(b<c){
        temp=c;
        c=b;
        b=temp;
    }
    if(a<b){
        temp=a;
        a=b;
        b=temp;
    }
    if(b<c){
        temp=c;
        c=b;
        b=temp;
    }
    alert(a+", "+b+", "+c)
}

function fizzBuzz(){
    for (var itr=1; itr<100; itr++){
        var flag=0
        if(itr%3===0){
            console.log('Fizz');
            flag=1
        }
        if(itr%5===0){
            console.log('buzz');
            flag=1
        }
        if(flag===0){
            console.log(itr)
        }
    }
}

function multipleOf3and5(){
    var sum=0
    for (var itr=1; itr < 1000; itr++){
        if (itr%3==0||itr%5==0){
            console.log(itr)
            sum=sum+itr
        }
    }
    console.log("sum: "+sum)
    return sum
}

function guessingGame(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var message="NULL";
    var trial=0;
    var num=getRandomInt(1,10);
    console.log(num)
    var guess;
    var wincondition=0;
    do{
        guess=parseInt(prompt(message==="NULL"?"guess a number between 1-10":message));
        if (guess>num){
            message="Too High"
        }else if (guess<num){
            message="Too Low"
        }else if (isNaN(guess)){
            break;
        }
        else{
            wincondition=1
            break;
        }
        trial+=1
        ;
    }while(guess!=num && trial < 3);
    if(wincondition===1){
        alert("Correct!")
    }else{
        alert("you failed :(")
    }
    console.log("Game Over")
}

function happyNumber(numOfHappyNumbers){
    var flag;
    var i=0;
    var numToTry=1;
    while (i < numOfHappyNumbers) {
        var sum=numToTry;
        // console.log("Current Number: "+numToTry)
        for(var j = 0; j < 10; j++){
            sum = returnSum(sum);
            if(sum === 1){
                console.log("Happy Number! :D ("+numToTry+")");
                i++;
                flag=1;
                break;
            }
            // console.log("Sum: "+sum);
        }
        if(flag === 0){
            console.log("Sad Number :( ("+numToTry+")")
        }
        flag=0
        numToTry++;
    }
    function returnSum(num){
        var digit;
        var sum=0;
        while(num !== 0){
            digit=num%10;

            num=Math.floor(num/10);
            // console.log("Digit: "+digit+" Num: "+num)
            sum+= digit*digit;
        }
        return sum
    }
}