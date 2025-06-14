// ! Squares of a Sorted Array
/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

//^ method 1 
let sortedSquare = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i]
    }
    newArray.sort((a, b) => {
        return a - b
    })
    return newArray;

}

console.log(sortedSquare([]));
console.log(sortedSquare([1, 3, 5]));
console.log(sortedSquare([0, 5, 6]));
console.log(sortedSquare([-3, 1, 2, 7]));
console.log(sortedSquare([-7, -3, 2, 3, 11]));


// time complexity is O(n), O(nlog n) 
// nlogn>n ---> nlogn+n = 2nlogn = nlogn 

// ^ Second method 

let sortedSquare_by_method2 = (array) => {
    let newArray = []
    let left_pointer = 0;
    let right_pointer = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        let left_squared = array[left_pointer] * array[left_pointer]
        let right_squard = array[right_pointer] * array[right_pointer]

        if (left_squared > right_squard) {
            newArray[i] = left_squared
            left_pointer++
        } else {
            newArray[i] = right_squard;
            right_pointer--
        }
    }
    return newArray

}

console.log("-----------methid 2 ---------");
console.log(sortedSquare_by_method2([]));
console.log(sortedSquare_by_method2([1, 3, 5]));
console.log(sortedSquare_by_method2([0, 5, 6]));
console.log(sortedSquare_by_method2([-3, 1, 2, 7]));
console.log(sortedSquare_by_method2([-7, -3, 2, 3, 11]));
console.log(sortedSquare_by_method2([-3, 1, 8, 6]));


//! Q2 array is monotonic if it eather monotonic increasing or monotonic decreasing return true else false 

function isMonotonic(array) {
    let is_monotonic_increasing = true;
    let is_monotonic_decreasing = true


    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            is_monotonic_increasing = false
        }
        if (array[i] > array[i - 1]) {
            is_monotonic_decreasing = false
        }
    }

    return is_monotonic_increasing || is_monotonic_decreasing


}

console.log("-------- monotonic ------");
console.log(isMonotonic([]));
console.log(isMonotonic([10]));
console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));

