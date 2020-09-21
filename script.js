// ********************************
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// ********************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing arry of names
// and then output either Hello 'Name' or Good Bye 'Name to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the Final output
// on the console should look like this;
/*
Hello Yaakov
Good Bye John
good Bye Jen
Good ByeJason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Luara
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this 
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the enitre contents of the script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the Speakhello.js file.)
(function() {

    var names = ["yakkov", "John", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // STEP 10: (NOTHING TO DO, ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using the 'speak' method or say either 'Hello' or "Good Bye"
    // 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
        // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
        // Retrive the first letter of the current name in the loop.
        // Use the strin object's 'chartAt' function. Since we are looking for
        // names that start with either upper case or lower case 'J'/'j', call
        // string object's 'toLowerCase' method on the result so we can compare
        // to lower case character 'j' afterwards.
        // Look up these methods on Mozilla Developer Network web site if needed.
        var firstLetter = names[i].charAt(0).toLowerCase();

        // STEP 12: (NOTHING TO DO, ALREDY DONE FOR YOU)
        // Compare the 'firstLetter' retrieved i STEp 11 to lower case
        // 'j'. If the same, call byeSpeaker's 'speak' method with the current
        // name in the loop.
        if (firstLetter === 'j') {
            byespeaker.speak(names[i]);
        } else {
            hellospeaker.speak(names[i])
        }
    }
})();