/*

We can see the variable address that is stored in the memory

let username = 'swastik'

const cart = {

    productName: 'Dress',
    productPrice: 399,
    product: {
        color: 'red',
        size:   '35cm',
        product:{
            material1:'Good',
            material2: 'Medium',
            material3: 'High',
        }
    }

}


console.log(cart.product.product.material2)


When you declare a variable, like let username1 = "Swastik";, the variable username1 acts as a reference or a label.

The actual data ("Swastik") is stored in memory at a specific address, such as @435352.

The variable (username1) stores a reference to that memory location (@435352).

When you access username1, JavaScript looks up the reference, retrieves the address (@435352),
and fetches the value stored there ("Swastik").

This process is how modern programming languages manage variables and memory efficiently.



Let
For let, var, and const:
Primitive types (numbers, strings, etc.):
Each variable gets its own memory address and stores a separate copy of the value.



Object
Each object created with {} or new Object() is assigned
 a unique memory address, making them independent from each other even if they contain identical data.


How the object data in stored in the memory

const user = {
    firstname:'swastik',
    lastname:'jain',

    Now here if i create one more object inside the object it will stored in new memory and address will stored here @45678
    If we want student data the javascript will take memory from the main object and return the data

    student:{
        om:'p',
        swastik:'p'
    }

}



Object Memory Allocation:
When you create an object using {} or new Object(), the object itself is assigned a unique memory address.
Even if two objects have identical data, they are stored at different memory addresses and are independent.
const obj1 = { name: "Swastik" };
const obj2 = { name: "Swastik" };
console.log(obj1 === obj2); // Output: false (different memory addresses)


Nested Objects and Memory Allocation:
When you create an object inside another object (a nested object), the nested object is also assigned a new memory address,
separate from the parent object. However, the parent object stores a reference (memory address) to the nested object.

const user = {
    firstname: "Swastik",
    lastname: "Jain",
    student: {
        om: "p",
        swastik: "p",
    },
};
Here:

The user object is stored at one memory address (e.g., @12345).
The student object inside user is stored at another memory address (e.g., @45678).
The user object contains a reference (@45678) to the student object.


3. Accessing Nested Data:
When you access user.student, JavaScript retrieves the memory reference (@45678) from the parent object (user) and
uses it to access the nested student object.

In Short:
Each object, including nested ones, gets a unique memory address.
The parent object holds a reference to the memory address of its nested object.
JavaScript uses these references to access the nested data.



*/