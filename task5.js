let str1 = "  hello";  // String with spaces at the start
let str2 = "world   "; // String with spaces at the end

// Remove spaces and concatenate
let result = (str1.trim() + str2.trim()).toUpperCase();

console.log(result); // Output: HELLOWORLD

let str = "JAVASCRIPT"; 

// Extract middle portion (e.g., from index 3 to index 8)
let middle = str.substring(3, 8); 

// Find last index of extracted string
let lastIndex = middle.length - 1;

// Convert to lowercase
let lowerMiddle = middle.toLowerCase();

console.log(lowerMiddle); // Output: ascri
console.log(lastIndex);   // Output: 4


let char = 'a';
let str3 = "hello";

// Concatenate and convert to uppercase
let combined = (char + str3).toUpperCase();

// Extract the second-last character
let secondLastChar = combined.charAt(combined.length - 2);

console.log(secondLastChar); // Output: L

let str4 = "javascript";
let str5 = "programming";

// Extract first 3 and last 3 characters
let firstThree = str4.substring(0, 3);
let lastThree = str5.substring(str2.length - 3);

// Concatenate
let resul = firstThree + lastThree;

// Capitalize first and last characters
resul = resul.charAt(0).toUpperCase() + resul.slice(1, -1) + resul.charAt(resul.length - 1).toUpperCase();

console.log(resul); // Output: Javing


let str6 = "   welcome to coding!   "; // String with extra spaces

// Trim spaces
str6 = str6.trim();

// Capitalize first and last characters
str6 = str6.charAt(0).toUpperCase() + str6.slice(1, -1) + str6.charAt(str6.length - 1).toUpperCase();

// Extract portion (e.g., "to coding") and concatenate with another string
let extractedPortion = str6.substring(8, 17); // "to coding"
let anotherStr = " is fun";
let finalResult = extractedPortion + anotherStr;

console.log(finalResult); // Output: "to coding is fun"



let sentence = "hello there, how are you";
let index = sentence.indexOf("are");

console.log(index); // Output: 18


