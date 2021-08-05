
// Farenhite to Celcius

function cToF(celsius){
    // c/5=f-32/9
    const cToFar = celsius * 9 / 5 + 32;
    // c/5=f-32/9
    return cToFar;
}
let get = cToF(99);
console.log(get)


// Celcius to Farenhite


function fToC(farenhite){
    // c/5=f-32/9
    const fTocel = 5 * (farenhite - 32) / 9;
    // c/5=f-32/9
    return fTocel;
}
let got = fToC(210.2);
console.log(got)