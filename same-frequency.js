// add whatever parameters you deem necessary

function makeFreqCounter(arr) {
    const counter = {};
    for (let el of arr) {
        counter[el] = (counter[el] + 1 || 1);
    }
    return counter;
}

// Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2) {
    if (num1 !== num2) {
        return false;
    }

    const num1Freq = makeFreqCounter(Array.from(String(num1)));
    const num2Freq = makeFreqCounter(Array.from(String(num2)));

    for (let key in num1Freq) {
        if (!num2Freq[key]) {
            return false;
        }
        if (num1Freq[key] !== num2Freq[key]) {
            return false;
        }
    }
    return true;
}
