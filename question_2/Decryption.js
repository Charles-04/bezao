const alphabetArr = [
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
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// console.log(alphabetArr)
// const keys = [£ * % & > <" ""!" ")" "\"" "(" "@" "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o"]
const keys = [
  "£",
  "*",
  "%",
  "&",
  ">",
  "<",
  "!",
  ")",
  '"',
  "(",
  "@",
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
];

const encrypt = (word, type) => {
  let letters = word.split("");
  let results = [];
  if (type == "decrypt") {
    for (let index = 0; index < letters.length; index++) {
      let findIndx = keys.indexOf(letters[index]);
      if (findIndx != null || undefined) {
        results.push(alphabetArr[findIndx]);
      } else {
        continue;
      }
    }
  }
  if (type === "encrypt") {
    for (let index = 0; index < letters.length; index++) {
      let findIndx = alphabetArr.indexOf(letters[index]);
      if (findIndx != null || undefined) {
        results.push(keys[findIndx]);
      } else {
        continue;
      }
    }
  }

  return results.join("");
};

console.log(encrypt("%)ga>h","decrypt"));

// const encryptKeys = {
//     a: "£",
//     b: "*",
//     c: "%",
//     d: "&",
//     e: ">",
//     f: "<",
//     g: "!",
//     h: ")",
//     i: "\"",
//     j: "( ",
//     k: "@ ",
//     l: "a ",
//     m: "b ",
//     n: "c ",
//     o: "d ",
//     p: "e ",
//     q: "f ",
//     r: "g ",
//     s: "h ",
//     t: "i ",
//     u: "j ",
//     v: "k ",
//     w: "l ",
//     x: "m ",
//     y: "n ",
//     z: "o",
// }
// let encryptedWord = ""
// let encrypArr = []
// const encrypter =(word)=>{
//     let letters = word.split("")
//    Object.entries(encryptKeys).map((e,i)=>{
//     letters.forEach(letter => {
//         if(e[0] === letter){
//             encrypArr.push(e[1])
//         }
//     });

//    } )
//    encryptedWord = encrypArr.join("")
//     console.log(encryptedWord)
// }
// encrypter("charles");
