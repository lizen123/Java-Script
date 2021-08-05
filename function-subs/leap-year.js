function checkLeapYear(year) {
    if (( year % 4 == 0 ) && (year % 100 != 0 ) || (year % 400 == 0)) {
        console.log(year + " is a leap year");
    }
    else {
        console.log(year + " isn't a leap a year");
    }
}
// take input
const year = 2800;
checkLeapYear(year);