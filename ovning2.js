function myPIN(pin) {
    //change value from string to integer
    var p = parseInt(pin);
    //count starts at one since first login
    //counts as one trial
    var count = 1;
    //rightPin holds the correct pin
    var rightPin = 1234;
    //check if pin matches
    if(p === rightPin) {
        console.log("Welcome to the balance");
    } else {
        console.log("Wrong PIN.")
        //counts how many times user tries to login
        while(count < 3){
            p = parseInt(prompt("Enter PIN: "));
            count++;
            if(p === rightPin) {
                console.log("Welcome to the your account balance");
                //count sets to 4 so we are out of the loop if
                //pin is correct.
                count = 4;
            } else {
                console.log("Wrong PIN.");
              }
        }
        //if user tried 3 times, display alert message
        if(count === 3){
            alert("Please, go to your local branch.");
        }
        
    }
}    
myPIN(prompt("Enter PIN: "));