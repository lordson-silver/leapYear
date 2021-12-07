/*
Write a program that works out whether if a given year
is a leap year. A normal year has 365 days, leap year have
366, with an extra day in February. 

Is a leap year if 
it is evenly divisible by 4
except the years that are evenly divisible by 100
unless that year is also evenly divisibleby 400. 
*/

function isLeap(year) {
    if((year % 4) === 0) {
        if((year % 100) === 0){
            if((year % 400) === 0){
                alert("Leap year.")
            } else {
                alert("Not leap year.")
            }
        } else {
            alert("Leap year.")
        }
    } else {
        alert("Not leap year.");
    };
};

isLeap(2400);