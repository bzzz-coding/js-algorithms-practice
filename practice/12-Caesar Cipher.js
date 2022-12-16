/*
Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
*/

// A-Z [65-90]
// a-z [97-122]


// function caesarCipher(str, int) {
//   let shifts = int % 26;
//   let result = '';
//   for (const char of str) {
//     let currentUnicode = char.charCodeAt(0);
//     let shifted = currentUnicode + shifts;
//     if (!/[a-z]/i.test(char)) {
//       result += char
//     }  else if (currentUnicode <= 90) {
//       if (shifted > 90) {
//         result += String.fromCharCode(64 + (shifted - 90));
//       } else if (shifted < 65) {
//         result += String.fromCharCode(91 - (65 - shifted));
//       } else {
//         result += String.fromCharCode(shifted)
//       }
//     } else if (currentUnicode >= 97) {
//       if (shifted > 122) {
//         result += String.fromCharCode(96 + (shifted - 122));
//       } else if (shifted < 97) {
//         result += String.fromCharCode(123 - (96 - shifted));
//       } else {
//         result += String.fromCharCode(shifted)
//       }
//     }
//   }
//   return result
// }


const alphabetArr = []
for (let i = 97; i <= 122; i++) {
  alphabetArr.push(String.fromCharCode(i))
}
console.log(alphabetArr)

function caesarCipher(str, int) {
  let shift = int % 26
  let result = ''
  for (let char of str) {
    console.log(`current character: ${char}, shift: ${shift}`)
    if (!/[a-z]/i.test(char)) {
      result += char
      continue
    } 
    
    let newIndex = alphabetArr.indexOf(char.toLowerCase()) + shift;
    if (newIndex > 25) {
      newIndex -= 26
    } else if (newIndex < 0) {
      newIndex = 26 - newIndex
    }

    console.log(`newIndex: ${newIndex}`)
    if (char === char.toLowerCase()) {
      result += alphabetArr[newIndex]
    } else if (char !== char.toLowerCase()) {
      result += alphabetArr[newIndex].toUpperCase()
    }
  }
  return result
}

console.log(caesarCipher('I love JavaScript!', 100))