function get(mark){
    if(mark >= 80 && mark <= 100 ){console.log('You Got A+');}
    else if(mark >=70 && mark <= 79 ){console.log('You Got A');}
    else if(mark >=60 && mark <= 69 ){console.log('You Got A-');}
    else if(mark >=50 && mark <= 59 ){console.log('You Got B');}
    else if(mark >=40 && mark <= 49 ){console.log('You Got B-');}
    else if(mark >=33 && mark <= 39 ){console.log('You Got C');}
    else {console.log("Fail");}
    return;
}
get(3);


function number(num){
    if(num >= 80 && num <= 100){return "A+"}
    else if(num >= 70 && num <= 79){return "A"}
    else if(num >= 60 && num <= 69){return "A-"}
    else if(num >= 50 && num <= 59){return "B"}
    else if(num >= 40 && num <= 49){return "C"}
    else if(num >= 33 && num <= 39){return "D"}
    else if(num >= 0 && num <= 32){return "Fail"}
    else {
        return "Not Process Yet"
    }
    
}
let got = number(10);
console.log(got)