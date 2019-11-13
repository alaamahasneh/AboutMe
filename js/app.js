'use strict'
// var userName = prompt(' What is your name?');

// while (parseInt(userName)) {
//     userName = prompt(' your name is so necessary , please input your name ');
// }
// alert('welcome' + ' ' + userName);

var counter = 1;
// alert('Now let us start play guss game ^_^ , please answer with yes or no')
// //(Question 1)//

// var q1 = prompt('Do you think that i love cats?').toLocaleUpperCase();

// while (q1 !== 'yes'&& q1 !=='y' && q1 !== 'no'&& q1 !=='n') {
//     q1 = prompt('sorry but this is Yes or No question?')
// }

// switch (q1) {
//     case 'yes':
//     case 'y':
//         alert('Correct, i love cats so much');
//         alert(counter++);
//                 break;
//     case 'no':
//     case 'n':
//         alert('wrong , i love cats');
//         break;
//     default:
//         alert('Try again');
//         break;
// }
// //(Question 2)//
// var q2 = prompt('Do you think my favourite dish is mansaf?').toLocaleUpperCase();

// while (q2 !== 'yes'&& q2 !=='y' && q2 !== 'no'&& q2 !=='n') {
//     q2 = prompt("sorry but this is Yes or No question?")
// }

// switch (q2) {
//     case 'yes':
//     case 'y':
//         alert('i dont like mansaf');
//         alert(counter++);
//                 break;
//     case 'no':
//     case 'n':
//         alert('i prefer pizza');
//         break;
//     default:
//         alert('Try again');
//         break;
// }
// //(Question 3)//
// var q3 = prompt('Do you think im from jordan?"').toLocaleUpperCase();

// while (q3 !== 'yes'&& q3 !=='y' && q3 !== 'no'&& q3 !=='n') {
//     q3 = prompt("sorry but this is Yes or No question?")

// }

// switch (q3) {
//     case 'yes':
//     case 'y':
//         alert('yah im ');
//         alert(counter++);
//                 break;
//     case 'no':
//     case 'n':
//         alert('wrong im jordanin');
//         break;
//     default:
//         alert('Try again');
//         break;
// }

// //(Question 4)//
// var q4 = prompt('Do you think that i love programming language?').toLocaleUpperCase();

// while (q4 !== 'yes'&& q4 !=='y' && q4 !== 'no'&& q4 !=='n') {
//     q4 = prompt("sorry but this is Yes or No question?")

// }

// switch (q4) {
//     case 'yes':
//     case 'y':
//         alert('yah i love it ');
//         alert(counter++);
//                 break;
//     case 'no':
//     case 'n':
//         alert('wrong i love it');
//         break;
//     default:
//         alert('Try again');
//         break;
// }
// //(Question 5)//
// var q5 = prompt('do you think that im an civil engineer?').toLocaleUpperCase();

// while (q5!== 'yes'&& q5 !=='y' && q5 !== 'no'&& q5 !=='n') {
//     q5 = prompt("sorry but this is Yes or No question?")

// }

// switch (q5) {
//     case 'yes':
//     case 'y':
//         alert('yah im ');
//         alert(counter++);
//                 break;
//     case 'no':
//     case 'n':
//         alert('wrong im civil engineer');
//         break;
//     default:
//         alert('Try again');
//         break;
// }

// alert("Your score is: " + counter );
// // (question 6)//

// for (var trail = 0; trail < 4; trail++) {
//     var old = prompt("Guess how old i am ! Note that : You have 4 trials")
//     if (old == 22) {
//         alert("Yes exactly! im 22 years old");
//         // console.log(old);
//         break;
//     } else if (old > 22) {
//         alert("too high");
//         // console.log(old);
//     } else if (old < 22) {
//         alert(" too low");
//         // console.log(old);
//     }
// }
// alert("I am 22 years old");
// alert("Your score is: " + counter);


//(Question 7)//

    var game = ['cat', 'dog', 'turtles', 'parrot', 'fish', 'hamster'];
    for (var attempt = 0; attempt < 6; attempt++) {
        var play = prompt("I love 6 different pets ^_^ , So can you guess one of them?");
        switch (play) {
            case game[0]:  
            case game[1]:
            case game[2]:
            case game[3]:
            case game[4]:
            case game[5]:
                alert(" You are right :) My fav pets are: cat, dog, turtles, parrot, fish, hamster");
                counter++;
                // console.log(play);
                attempt = 5;
                break;
            default:
                alert("You are rong .. Try again ")
            //  console.log(play);
                break;
        }}
    
    alert("You got " + counter + " points after completing the quiz");
    alert("Thanks for your time " + user);



