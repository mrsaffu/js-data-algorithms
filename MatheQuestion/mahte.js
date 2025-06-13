// ! sum of natural Number  to the n
function sumOfNational(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("sum Of natioral number : ", sumOfNational(3));


// !sum of Digit of number ;

function sumOfDigit(num) {
    let sum = 0;
    while (num > 0) {
        console.log(num);
        sum = sum + num % 10
        num = Math.floor(num / 10)
    }

    return sum
}

console.log("Sum of Digit :", sumOfDigit(12354));

//! count the number of the digit of the number 
// 3456 :4

function countDigit(num) {
    count = 0;
    do {

        count++;
        console.log(count);
        num = Math.floor(num / 10)

    } while (num > 0) {
        console.log(num);

    }
    return count;
}

console.log("count Digit : ", countDigit(3245));

function countl(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        count++
        num = num / 10

    }
    return count
}
console.log("count :", countl(99));