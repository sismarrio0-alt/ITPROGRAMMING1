let studentName = "Renerio C. Sismar";
let age = 19;
let isStudent = true;
let course = "BSIT";
let address = { city: "Apovel, Cagayan de Oro City" };
let hobbies = ["Badminton", "TikTok"];

let score = "85";
let convertedScore = Number(score);

console.log(studentName, typeof studentName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(course, typeof course);
console.log(address, typeof address);
console.log(hobbies, typeof hobbies);

console.log(score + 10);
console.log(convertedScore + 10);

console.log(`My name is ${studentName}, I am ${age} years old, and I am a ${course} student.`);

const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <p>Name: ${studentName}</p>
        <p>Age: ${age}</p>
        <p>Student: ${isStudent}</p>
        <p>Course: ${course}</p>
        <p>Address: ${address.city}</p>
        <p>Hobbies: ${hobbies.join(", ")}</p>
        <p>Score + 10 without conversion: ${score + 10}</p>
        <p>Score + 10 with conversion: ${convertedScore + 10}</p>
        <p>My name is ${studentName}, I am ${age} years old, and I am a ${course} student.</p>
    `;
} else {
    console.log("Output element not found.");
}