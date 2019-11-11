'use strict'
var Name = prompt(' What is your name?');
alert('welcome' + ' ' + Name);
var name = prompt('Guess , What is my name?');
if (name == "alaa") {
    alert('you are perfcet' + ' ' + 'My name is ' + name);
} else {
    alert('That is wrong , it is not' + ' ' + name + ' ' + ' My name is alaa');
}

//console.log('Name=', name);

var age = prompt('Also whats do you think about my age?');
if (age == "22") {
    alert('you are amazing' + ' ' + 'My age is ' + age);
} else {
    alert('That is wrong , it is not' + ' ' + age + ' ' + 'Im 22 Years old');
}
//console.log('Age=', age);

var job = prompt('Now,Do you think that im an Civil Engineer? yes or no?');
job = job.toLowerCase()
switch (job) {
    case 'yes':
    case 'y':
        alert('yah im an civil engineer ');
        break;

    default:
        alert('No really im an civil engineer ');
        break;
}
//console.log('job=', job);

var fav = prompt('Do you like to creat own website? yes or no?');
fav = fav.toLowerCase()
switch (fav) {
    case 'yes':
    case 'y':
        alert(' it is greet to learn how you can create your own webpage ');
        break;

    default:
        alert('Ok');
        break;
}

var place = prompt('Are you from Jordan? yes or no?');
place = place.toLowerCase()
switch (place) {
    case 'yes':
    case 'y':
        alert('yah me too');
        break;

    default:
        alert(' welcome :) ');
        break;
}

var web = prompt('Do you like our website? yes or no?');
web = web.toLowerCase()
switch (web) {
    case 'yes':
    case 'y':
        alert('Thank you :)');
        break;

    default:
        alert('you can contact with us ');
        break;
}

var programmer = prompt('Do you know any thing about programming language? yes or no?');
programmer = programmer.toLowerCase()
switch (programmer) {
    case 'yes':
    case 'y':
        alert('amazing ');
        break;

    default:
        alert('try to know some thing');
        break;
}
alert('Good Job' + ' ' + Name + ' :) ');