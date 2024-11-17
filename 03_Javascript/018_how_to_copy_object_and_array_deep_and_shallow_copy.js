/*

Shallow copy shares references for nested objects.


Deep copy creates new copies for all levels, with no shared references.



When you copy an object in JavaScript, the outer keys and values are copied, but if the values are objects (or arrays),
what actually gets copied is the reference to that inner object, not a new copy of the inner object.

This means that both the original and the copied object will point to the same inner object, and changes made to the
inner object will affect both the original and the copied object.


// let username1 = 'Swastik'

// let username2 = username1

// let username3 = username2 + ' Jain'

// console.log(username)
// console.log(username2)
// console.log(username3)


*/

const fruits = ['Mango', 'Apple', 'Orange']
const myFruits = fruits
// fruits.push('Dates')
// fruits.push('Grapes')

const user1 = {
    firstName:'Swastik',
    lastName:'Jain',
        friends:{
            om:'true',
            abhi:'true',
        }
}

const user2 = user1
user2.lastName = 'Patel'
// console.log(user1)
// console.log(user2)

const user3 = {}
Object.assign(user3,user1)
console.log(user3)

// This new key and value will add only in the user3
user3.calling = 'hello'

// This new inner Object key and values are updated on both the Object original one and the copy one
user3.friends.rahul = 'false'
console.log(user1)
console.log(user3)

// New method to copy the Object
const user4 = { ...user3 }
console.log(user4)

// New Array copy
// const fruits3 = []
// Object.assign(fruits3,fruits)

// Copying Array
const fruits3 = { ...fruits}
console.log(fruits3)



// Deep copy

// Copies all levels of the object, including nested objects or arrays, ensuring no shared references.
// Techniques for Deep Copy:
// JSON.parse(JSON.stringify(obj)
// structuredClone(obj)
// Lodash's _.cloneDeep(obj)
// Custom Recursive Function



//  Object copying using structuredClone(obj)
// Object inside copied successfully
let user6 = structuredClone(user1)
console.log('user6')
console.log(user6)

// Update the inner Object - worked
user6.friends.swastik = 'present'
user6.class = 'present'
// console.log(user1)
console.log(user6)