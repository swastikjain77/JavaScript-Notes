/*

Strings are Indexed
We can get the index number of the words for example:
let userName = "Swastik"
console.log(userName[0])
Output is S - because index number with 0 - S0 w1 a2 s3 t4 i5 k6


String length property
We can get the count of the word for and space is also included in the count for example:
let userName = "Swastik Jain"
userName.length()
Output is 12


String Methods
toUpperCase()
toUpperCase used to make the letter Capital for example:
let userName = "Swastik Jain"
console.log(userName.toUpperCase())
Output is SWASTIK JAIN


toLowerCase()
toLowerCase used to make the letter Small Capital for example;
let userName = "Swastik Jain"
console.log(userName.toLowerCase())
Output is swastik jain


trim()
We use trim() to remove the space from beginning and end for example:
let userName = "   Swastik Jain  "
let newUsername = userName.trim().toLowerCase().toUpperCase() This is called chaining we can add many method together
console.log(newUsername)
Output is SWASTIK JAIN


trimStart()
We use trimStart() to remove the space from beginning for example:
let userName = "   Swastik Jain   "
let newUsername = userName.trimStart()
console.log(newUsername)
Output is 'Swastik Jain   '


trimEnd()
We use trimEnd() to remove the space from beginning for example:
let userName = "   Swastik Jain   "
let newUsername = userName.trimEnd()
console.log(newUsername)
Output is '  Swastik Jain'


includes()
We use includes('argument') to check the given argument is same as in the variable string for example:
let userName = "Swastik Jain"
let newUsername = userName.includes('S')
Output is true - Output will be shown in boolean


indexOf()
We use indexOf('argument') to find the index number of the given argument for example:
let userName = "Swastik Jain"
let newUsername = userName.indexOf('S')
Output is 0 - If we add wrong argument it will show -1


replace()
We use replace('to be replace', 'want to replace') to replace the old word new word for example:
let userName = "Swastik Jain"
let newUsername = userName.replace('S','K')
Output is Kwastik Jain - This will replace only one word or letter that is first same


replaceAll()
We use replaceAll('to be replace', 'want to replace') to replace all the old word new word for example:
let userName = "Swastik Jain"
let newUsername = userName.replaceAll('a','k')
Output is Swkstik Jkin - This will replace all the word that are same


concat()
We use concat(text1, text2) to combine the 2 strings for example:
let userName = "Swastik"
let userLastName = "Jain"
let message = ""
console.log(message.concat(userName," ",userLastName))
Output Swastik Jain


padStart()
We use padStart() to add number,text,symbols at the beginning etc for example:
let userName = "5648"
userName = userName.padStart(12, '*')
console.log(userName)
Output ********5648 - The function used in banking website to side debit card number


padEnd()
We use padEnd() to add number,text,symbols at the last etc for example:
let userName = "5648"
userName = userName.padStart(12, '*')
console.log(userName)
Output 5648******** - The function used in banking website to side debit card number


charAt()
Use get the character using index number for example
let userName = "5648"
userName = userName.charAt(1)
console.log(userName)
Output is 6


charCodeAt()
Used to get the ascii code using index for example
let userName = "Swastik"
userName = userName.charCodeAt(2)
console.log(userName)
Output is 97


split()
We use split() to spilt the given string at array for example
let userName = "swastik"
userName = userName.split('s')
console.log(userName)
['', 'wa', 'tik'] - It will remove the argument from the array and add space



*/

