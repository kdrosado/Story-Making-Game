// Story Making Game
/*
1. Create a variable and capture input
2. Create variables to capture each piece of input
3. Add an alert to tell user they are finished
4. Combine input with other strings to create message
5. Print story to document window
*/

var questions = 3;
var questionsLeft = ' ['+ questions + 'questionsleft]';
var adjective = prompt("Please type an adjective" + questionsLeft);
questions -= 1;

questionsLeft = ' ['+ questions + 'questionsleft]';
var verb = prompt("Please type a verb" + questionsLeft);
questions -= 1;

questionsLeft = ' ['+ questions + 'questionsleft]';
var noun = prompt("Please type a noun" + questionsLeft);

var sentence = "<h2>There once was a " + adjective;
sentence += " penguin who wanted to use JS to " +  verb;
sentence += " the " + noun + ".</h2>";

document.write(sentence);

alert("You are finshed");
