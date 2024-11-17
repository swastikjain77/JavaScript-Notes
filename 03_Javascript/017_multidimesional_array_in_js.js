/*

A multi-dimensional array is an array that contains other arrays as its elements.These arrays can have multiple levels of
depth, such as two-dimensional (2D), three-dimensional (3D), and so on.


*/


let largeArray = [['swastik'],['jain'],'Hi', [{name:'santosh'},{lastname:'patil',email:[1,2,3]}] ]

console.log(largeArray[2])
console.log(largeArray[0][0])
console.log(largeArray[1][0])


console.log(largeArray[2])
console.log(largeArray[3][0].name)
console.log(largeArray[3][1].lastname)
console.log(largeArray[3][1].email[1])


let gameTask = [

['S',null,'S'],
[null,null,'O'],
['O',null,'S']

]

console.log(gameTask[0][0])


let outPut = gameTask[0][0] + gameTask[0][0] + gameTask[0][0];
console.log(outPut)