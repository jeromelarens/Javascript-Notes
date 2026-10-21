/**
 * Exercise 10: Day of Week using switch
 * Prompt: Day-of-week program using switch (1-7), with a default case.
 */

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid Day (Please provide 1-7)";
  }
}

console.log("Day 1:", getDayName(1));
console.log("Day 5:", getDayName(5));
console.log("Day 7:", getDayName(7));
console.log("Day 9:", getDayName(9));
