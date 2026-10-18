/*
 * Purpose: Assess a student's grade
 * Author: Renerio C. Sismar
 * Birthday: October 2, 2006
 * Course: BSIT
 */

function assessGrade(score) {
    if (score < 0 || score > 100) return "Invalid score";

    if (score >= 95) return "Excellent";
    else if (score >= 85) return "Very Good";
    else if (score >= 75) return "Passing";
    else return "Failing";
}

const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120];

const results = document.getElementById("results");

for (const t of tests) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `Score ${t} -> ${assessGrade(t)}`;
    results.appendChild(paragraph);
}
