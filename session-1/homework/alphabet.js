const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "u",
    "w",
    "x",
    "y",
    "z "
];

const letterH = alphabet[7];
const letterI = alphabet[8];
console.log(`${letterH}${letterI}`);
// hi

console.log(alphabet.slice(3,6));
// [ 'd', 'e', 'f' ]

const letterD = alphabet.slice(3,4);
const letterE = alphabet.slice(4,5);
const letterF = alphabet.slice(5,6);
console.log(`${letterD}${letterE}${letterF}`);
// def

const letterN = alphabet[13];
const letterO = alphabet[14];
const letterP = alphabet[15];
console.log(`${letterN}${letterO}${letterP}${letterE}`);
// nope