/*


while loop



do while loop



for loop



*/

// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }


let myFriends = ['om','swastik','teju','sathvik',"mahaveer"]

let j = 0

console.log(j)

while (j < myFriends.length) {

    // console.log(myFriends[j])

    console.log(`${j + 1}. ${myFriends[j]} Jain`);

    myFriends[j] = myFriends[j] + ' Jain'

    console.log(myFriends)

    j++

}

