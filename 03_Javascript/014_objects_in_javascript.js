
// key and value - In the object keys are internal string

const myName = 'Swastik'

const user = {
    firstName: 'Swastik',
    lastName: 'Jain',
    'last-Name': 'To the key we have add quote',
    'Swastik': 'Developer',
}

console.log(user.firstName)
console.log(user['firstName'])
console.log(user['last-Name'])


// We can use variable to access the Object value
console.log(user[myName])


// We can add expression in the square bracket
console.log(user["first" + "Name"])


// We can update key and value in the object using this below code
user.age = 25
console.log(user)

user['is-present'] = true
console.log(user)




// we can add Object inside Object - Nesting

const user2 = {
    firstName: 'Swastik',
    lastName: 'Jain',
    'last-Name': 'To the key we have add quote',
    'Swastik': 'Developer',
    location: {
        goa: "true",
        belgaum: 'true',
        livingcost: {
            hotel: 2000,
            praking: 499,
            rent: 5000,
            friends: {
                om: 'present',
                sir: 'present',
                madam: 'absent'
            }
        }
    }
}


// We access object values as per the example
console.log(user2.firstName)
console.log(user2.location.belgaum)
console.log(user2.location.livingcost.praking)
console.log(user2.location.livingcost.friends.om)


// We cannot redeclare the user and user2


const user3 = {
    firstName: 'Swastik',
    lastName: 'Jain',
    'last-Name': 'To the key we have add quote',
    'Swastik': 'Developer',
}

// How to delete value from object
delete user3.firstName
console.log(user3)

// If we do not want to delete any properties we can use Object.seal(object name) - but we can update the values inside the object
// Object.seal(user3)


// Now we cannot delete and update values or keys
Object.freeze(user3)


// In keyword is to find the key in the object
console.log('Swastik' in user3)
// Output True