

let num = [1,2,3,4,3]

let num2 = [1,2,3,4,5]





// Find the duplicates in the array num

function checkDuplicate(num){

    for (let i = 0; i < num.length; i++) {

        for (let j = i + 1; j < num.length; j++) {

            if(num[i] === num[j]){
                return true;
            }

        }

    }
    return false;
}


console.log(checkDuplicate(num))






// 2nd Way to solve the problem

function checkDuplicate2(num) {
    let numberSet = []; // Using an array to simulate a HashSet

    for (let i = 0; i < num.length; i++) {
        if (numberSet.includes(num[i])) { // Check if the number already exists in the array
            return true; // Return true if a duplicate is found
        }
        numberSet.push(num[i]); // Add the number to the array (HashSet behavior)
    }

    return false; // Return false if no duplicates are found
}


console.log(checkDuplicate(num))