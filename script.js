function checkGrade(){
  const marks = Number(prompt("Enter student marks(between 0 and 100): " ))

if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Please enter a valid mark between 0 and 100.");
  return;
}

let grade;
if (marks >=80 && marks<=100){
  grade = "A";
} else if (marks >= 60 && marks <= 79 ){
  grade = "B";
} else if (marks >= 50 && marks <= 59 ){
  grade = "C"
} else if (marks >= 40 && marks <= 49 ){
  grade = "D"
} else if (marks >= 0 && marks <= 39 ){
  grade = "E"
} 

alert("Grade: " + grade)
}

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return "Points: " + demeritPoints;
    }
  }
}


