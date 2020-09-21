// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

//STEP 6: Wrap the entire contents of Speakgoodbye.js of an IIFE
// SeeLecture 52, part 2
(function(window) {


    // STEP 7: Create an object call 'byespeaker' to which you will attach
    // the"speak" method and which you will expose to the global context
    // See Lecture 52,part 1
    var byespeaker = {};

    // Do not attach the speakword variable to the 'byeSpeaker' object.
    var speakword = "Good Bye";

    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byespeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    byespeaker.speak = function speak(name) {
        console.log(speakword + "" + byespeaker.name);
    }

    window.byespeaker = byespeaker

    //STEP 9: Expose the 'byespeaker' object to the global scope. name it
    // 'byespeaker' on the global scope as well.
    // xxxx.xxxx = byespeaker;
})(window);