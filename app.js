// Story Making Game
/*
1. Create a variable and capture input
2. Create variables to capture each piece of input
3. Add an alert to tell user they are finished
4. Combine input with other strings to create message
5. Print story to document window
*/

var adjective = prompt("Please type an adjective");
var verb = prompt("Please type a verb");
var noun = prompt("Please type a noun");
var sentence = "<h2>There once was a " + adjective;
sentence += " penguin who wanted to use JS to " +  verb;
sentence += " the " + noun + ".</h2>";

document.write(sentence);

alert("You are finshed");
