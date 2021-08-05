// var fact = 1;
// for (var i = 1; i <= 7; i++){
//         fact = fact * i;
// }
// console.log(fact);


// // loop for


// function get(number){
//     let factu = 1;
//     for (let i = 1; i <= number; i++){
//         factu = factu * i;
//     }
//     return factu;
// }
// let gg = get(5);
// console.log(gg)


// // loop while


// function getIt (num){
//     let facto =1;
//     let i = 1;
//     while(i <= num){
//         facto = facto * i; i++;
//     }
//     return facto;
// }

// let ggi = getIt(5);
// console.log(ggi)


// // reverse while loop


// function factorial(numic){
//     let faacto = 1;
//     let i = numic;
//     while (i >= 1){
//         faacto = faacto * i; i--;
//     }
//     return faacto;
// }
// const getFactorial =  factorial(5);
// console.log(getFactorial)


// // reverse for loop

// function factoriali(nums){
//     let gett = 1;
//     for (let i = nums; i >= 1; i--){
//         gett = gett * i;
//     }
//     return gett;
// }
// const changed = factoriali(5);
// console.log(changed)




function fab(n){
    if (n == 0){
        return 1;
    }
    return n * fab(n-1);
}
const myNum = fab(5);
console.log(myNum)