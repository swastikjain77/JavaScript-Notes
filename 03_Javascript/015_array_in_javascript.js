// Array is an Object

const fruitsCollection =  ['mango','banana','grapes','dates',89,null,
                           {name:'swastik',lastname:'jain',location:{goa:false,belgaum:true}},[1,2,3,4,5]
                        ]

console.log(fruitsCollection)

console.log(fruitsCollection[2])

fruitsCollection[2] = 'Pinenapple'


// Updating the Array
fruitsCollection[2] = 'pineapple'
console.log(fruitsCollection)

// Adding new Array
fruitsCollection[4] = 'watermelon'
console.log(fruitsCollection)

// Access the Object that is inside of the Array
// console.log(fruitsCollection[6].location.belgaum)

// Access the array inside the array
// console.log(fruitsCollection[7][0])

// Adding a value at a specific index beyond the array length creates empty slots between the existing values and add the new value.
fruitsCollection[10] = 'Mom'
console.log(fruitsCollection)

// Adding new array at end of the index
fruitsCollection[fruitsCollection.length] = 'Adding new array'
fruitsCollection[fruitsCollection.length] = 'Adding new array 2'
console.log(fruitsCollection)

// Using push() we can add as many new array's at the end of the array
fruitsCollection.push('push1','push2','push3',77)
console.log(fruitsCollection)

// Using pop() we can remove the array from the beginning
fruitsCollection.pop()
console.log(fruitsCollection)

// Adding key & value in the array
const newArray = []
newArray.firstName2 = 'Swastik'
console.log(newArray)

// Playing with Object and array
const newOb ={
    firstName:'Swastik',
    array:[1,2,3]
}
console.log(newOb.array[2])