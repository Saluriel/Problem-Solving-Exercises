// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are:
//  only lowercase letters
//  no spaces
//  no special characters 

function makeFreqCounter(arr) {
    const counter = {};
    for (let el of arr) {
        counter[el] = (counter[el] + 1 || 1);
    }
    return counter;
}

function constructNote(msg, letters) {
    const msgFreq = makeFreqCounter(msg);
    const lettersFreq = makeFreqCounter(letters);

    for (let key in msgFreq) {
        if (!lettersFreq[key]) {
            return false;
        }
        if (msgFreq[key] > lettersFreq[key]) {
            return false;
        }
    }
    return true;
}
