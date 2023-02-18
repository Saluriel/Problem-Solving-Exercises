// add whatever parameters you deem necessary

// takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(chars, str) {
    // take in a string, loop through it
    // compare if the character is in the string and at what index?
    // compare indexes of the letters to make sure they are in order?
    let charIdx = 0;
    let strIdx = 0;

    if (!chars) {
        return true;
    }

    while (charIdx < str.length) {
        if (str[strIdx] === chars[charIdx]) {
            charIdx++;
        }
        if (charIdx === chars.length) {
            return true;
        }
        strIdx++;
    }
    return false;
}
