// STEP 2: Wrap the entire contents of SpeakHello.js of anIIFE
// SeeLecture 52, part 2
(function(window) {

    // STEP 3: Create an object call 'Hellospeaker' to which you will attach
    // the"speak" method and which you will expose to the global context
    // See Lecture 52,part 1
    var hellospeaker = {};

    // Do not attach the speakword variable to the 'helloSpeaker' object.
    var speakword = "Hello";

    // STEP 4: Rewrite the 'speak' function such that it is attached to the
    // hellospeaker object instead ofbeing a standalone function.
    // See Lecture 52, part 2
    hellospeaker.speak = function(name) {
        console.log(speakword + "" + hellospeaker.name);
    }
    window.hellospeaker = hellospeaker

    //STEP 5: Expose the 'hellospeaker' object to the global scope. name it
    // 'hellospeaker' on the global scope as well.
    // see Lecture 52, part 2
    // (Note, Step 6 will be done in SpeakGoodBye.js file)
    // xxxx.xxxx = hellospeaker;
})(window);