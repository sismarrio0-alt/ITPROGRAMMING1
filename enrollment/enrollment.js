/*
 * enrollment.js
 * Purpose: Calculate enrollment fees and display the student's enrollment information.
 * Author: Renerio C. Sismar
 * Date: September 16, 2026
 */

// Enrollment fees
const tuitionPerUnit = 450;
const numberOfUnits = 3;
const vatRate = 0.12;
const miscellaneousFee = 1200;

// Student information
const studentName = "Renerio C. Sismar";
const studentCourse = "BSIT";
const studentLevel = 2;
const isEnrolled = true;

// Calculate enrollment fee
const enrollmentFee =
    tuitionPerUnit * numberOfUnits + miscellaneousFee;

// Calculate total fee including VAT
const totalFee = enrollmentFee + enrollmentFee * vatRate;

// Enrollment count
let enrollmentCount = 0;
enrollmentCount = enrollmentCount + 1;

// Determine enrollment status
const enrollmentStatus = isEnrolled
    ? "ENROLLED"
    : "NOT ENROLLED";

// Display information in the console
console.log("Student Name:", studentName);
console.log("Course:", studentCourse);
console.log("Year Level:", studentLevel);
console.log("Enrollment Status:", enrollmentStatus);
console.log("Enrollment Fee:", enrollmentFee.toFixed(2));
console.log("Total Fee:", totalFee.toFixed(2));
console.log("Enrollment Count:", enrollmentCount);

// Display information on the webpage
const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <h2>Student Enrollment Information</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Course:</strong> ${studentCourse}</p>
        <p><strong>Year Level:</strong> ${studentLevel}</p>
        <p><strong>Enrollment Status:</strong> ${enrollmentStatus}</p>
        <p><strong>Tuition Per Unit:</strong> ₱${tuitionPerUnit.toFixed(2)}</p>
        <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
        <p><strong>Miscellaneous Fee:</strong> ₱${miscellaneousFee.toFixed(2)}</p>
        <p><strong>Enrollment Fee:</strong> ₱${enrollmentFee.toFixed(2)}</p>
        <p><strong>VAT (12%):</strong> ₱${(enrollmentFee * vatRate).toFixed(2)}</p>
        <p><strong>Total Fee:</strong> ₱${totalFee.toFixed(2)}</p>
        <p><strong>Enrollment Count:</strong> ${enrollmentCount}</p>
    `;
}