//This function checks the grade based on the entered student marks
function checkGrade(){
  const marks = Number(prompt("Enter student marks(between 0 and 100): " ))

// Validate if the entered marks are valid
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Please enter a valid mark between 0 and 100.");
  return;
}

let grade;
// Determine the grade based on the entered marks
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
// Display the calculated grade
alert("Grade: " + grade)
}

// This function calculates the demerit points based on the entered speed
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

// Determine if the speed is within the limit
  if (speed <= speedLimit) {
    return "Ok";
  } else {
// Calculate the demerit points based on the speed
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
// Determine if the demerit points exceed the limit
if (demeritPoints > 12) {
      return "License suspended";
    } else {
// Display the calculated demerit points
      return "Points: " + demeritPoints;
    }
  }
}

// This function calculates the net salary based on the entered basic salary and benefits
function calculateNetSalary() {
  const basicSalary = parseInt(document.getElementById("basic-salary").value);
  const benefits = parseInt(document.getElementById("benefits").value);
  const grossSalary = basicSalary + benefits;
  const taxRate = calculateTaxRate(grossSalary);
  const tax = calculateTax(grossSalary, taxRate);
  const nhifDeductions = calculateNHIFDeductions(grossSalary);
  const nssfDeductions = calculateNSSFContributions(basicSalary);
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  document.getElementById("gross-salary").innerHTML = `gross-salary: KSH ${grossSalary}`;
  document.getElementById("tax").innerHTML = `payee(tax): KSH ${tax}`;
  document.getElementById("nhif-deductions").innerHTML = `nhif-deductions: KSH ${nhifDeductions}`;
  document.getElementById("nssf-deductions").innerHTML = `nssf-deductions: KSH ${nssfDeductions}`;
  document.getElementById("net-salary").innerHTML = `net-salary: KSH ${netSalary}`;
}

// Display the calculated gross salary, tax, NHIF deductions, NSSF deductions, and net salary
function calculateTaxRate(grossSalary) {
  if (grossSalary <= 12298) {
    return 0.1;
  } else if (grossSalary <= 23885) {
    return 0.15;
  } else if (grossSalary <= 35472) {
    return 0.20;
  } else if (grossSalary <= 47059) {
    return 0.25;
  } else {
    return 0.30;
  }
}

// This function calculates the tax rate based on the entered gross salary
function calculateTax(grossSalary, taxRate) {
  const taxableIncome = grossSalary * (1 - 0.1); // deduct personal relief of KES 1,408
  const taxPayable = taxableIncome * taxRate;
  return taxPayable;
}

//This function calculates the NHIF deductions based on entered gross salary
function calculateNHIFDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 1000;
  } else if (grossSalary <= 44999) {
    return 1100;
  } else if (grossSalary <= 49999) {
    return 1200;
  } else if (grossSalary <= 59999) {
    return 1300;
  } else if (grossSalary <= 69999) {
    return 1400;
  } else if (grossSalary <= 79999) {
    return 1500;
  } else if (grossSalary <= 89999) {
    return 1600;
  } else if (grossSalary <= 99999) {
    return 1700;
  } else {
    return 1800;
  }
}

//This function calculates NSSF contributions based on the basic salary
function calculateNSSFContributions(basicSalary) {
  const nssfRate = 0.06;
  const nssfDeductions = basicSalary * nssfRate;
  const maximumContribution = 2_160; //NSSF contributions - KES 2,160 per month
    return Math.min(nssfDeductions, maximumContribution);
}