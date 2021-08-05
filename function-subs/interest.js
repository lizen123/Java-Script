function interest(){
    const p = 12000;
    const r = "70%" ;
    const t = 5;
    const formula = p*r*t/100;
    return formula;
}

let profit = interest();
console.log(profit);
