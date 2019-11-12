'use strict'
var userName = prompt(' What is your name?');

while (parseInt(userName)) {
    userName = prompt(' your name is so necessary , please input your name ');
}
alert('welcome' + ' ' + userName);

var counter = 0;

//////////////The 6 questions////////
var question = [
    ["Do you think that i love cats?", "correct .. i love cats so much", " wrong , i love cats", "Try again"], ["Do you think my favourite dish is mansaf?", "No, idont like masaf", " i prefer pizza", "Try again"], ["do you think im from jordan?", "yes im", "wrong im a jordanian", " Try again"], [" Do you think that i love programming language??", "yes i love it", "wrong ", " Try again"], ["do you think that im an civil engineer?", " yah im ", "wrong", "Try again"], ["Do you think that im suding in LTUC?", "yah im", "wrong", "Try again"]]
function AboutMe() {
    for (var i = 0; i < 5; i++) {
        var exactArray = question[i];
        var promptQuestion = exactArray[0];
        var posetiveReply = exactArray[1];
        var negativeReply = exactArray[2];
        var defultReply = exactArray[3];
        var userName = prompt(promptQuestion);
        userName = userName.toLowerCase();
        switch (userName) {
            case "yes":
            case "y":
                alert(posetiveReply);
                counter = counter + 1;
                // console.log(userName);
                break;
            case "no":
            case "n":
                alert(negativeReply);
                // console.log(userName);
                break;
            default:
                alert(defultReply);
                //console.log(userName);
                break;
        }
    }
}
AboutMe();
alert("Your score is: " + counter );
//////////////////////////////////////////the 6th question////////////////////////////////////////
function myAge(){
    for (var age = 0; age < 4; age++) {
        var old = prompt("Guess how old i am ! Note that : You have 4 trials")
        if (old == 22) {
            alert("Yes exactly! im 22 years old");
            counter = counter + 1;
            // console.log(old);
            break;
        } else if (old > 22) {
            alert("too high");
            // console.log(old);
        } else if (old < 22) {
            alert(" too low");
            // console.log(old);
        }
    }
    alert("I am 22 years old");
    alert("Your score is: " + counter );
    }
    myAge();
    ////////////////////////////////////////the 7th question//////////////////////////////////////////

    function gussingGame(){
    var game = ['cat', 'dog', 'turtles', 'parrot', 'fish', 'hamster'];
    for (var times = 0; times < 6; times++) {
        var play = prompt("I love 6 different pets ^_^ , So can you guess one of them?");
        switch (play) {
            case game[0]:  
            case game[1]:
            case game[2]:
            case game[3]:
            case game[4]:
            case game[5]:
                alert(" You are right :) My fav pets are: cat, dog, turtles, parrot, fish, hamster");
                counter = counter + 1;
                // console.log(play);
                times = 5;
                break;
            default:
                alert("You are rong .. Try again ")
            //  console.log(play);
                break;
        }}
    alert("  My fav pets are: cat, dog, turtles, parrot, fish, hamster ");
    }
    gussingGame();
    alert("You got " + counter + " points after completing the quiz");
    alert("Thanks for being here " + user);



