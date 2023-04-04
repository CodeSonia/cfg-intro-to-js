// A function that takes an array of numbers and returns the sum:
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum;
}

console.log(sumArray([1,2,3]));
// 6
console.log(sumArray([34,55,63]));
// 152

// A function that takes a string and returns the number of characters:
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("sonia"));
// 5
console.log(countCharacters("An example sentence, it is a sunny day today, but it is loud outside!"));
// 69

// A function that takes an object and returns the value associated with a given key:
function getValue(obj, key) {
    return obj[key];
}

// make an object
const myObj = {
    name: "Sonia",
    age: 29
};

console.log(getValue(myObj, "name"));
// Sonia
console.log(getValue(myObj, "age"));
// 29