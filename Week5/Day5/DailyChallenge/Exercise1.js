// Create a function that:
//     takes in two strings as two parameters
//     and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help
//     What is an anagram?
//     An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
//     Do we need to consider whitespace?
//     Trim whitespace prior to comparison.

function isAnagram (t1, t2) {
    t1 = t1.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    t2 = t2.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return t1 === t2;
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("Number", "Starer"));