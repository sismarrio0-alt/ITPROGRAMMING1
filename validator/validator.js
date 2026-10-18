/**
 * Name: Renerio C. Sismar
 * Birthday: October 2, 2006
 * Subject: IT Programming 1
 * Section and Course: BSIT
 */

// Account object stores the user's account information
const account = {
    username: "Renerio Sismar",
    password: "Sismar123",
    age: 20,
    status: "active",
    occupation: "Student",
};

let nickname = "";
const score = 78;

// Function to validate the user's input
function validate(data) {
    const validOccupations = [
        "Student", "Teacher", "Registrar", "Dean",
        "Counselor", "Staff", "Admin", "Alumni"
    ];

    const errors = [];

    if (!data.username || data.username.length < 5) {
        errors.push("Username must be at least 5 characters.");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters.");
    }

    if (data.age === "" || data.age == null ||
        !Number.isFinite(Number(data.age)) ||
        Number(data.age) < 18 || Number(data.age) > 80) {
        errors.push("Age must be between 18 and 80.");
    }

    if (data.status !== "active" && data.status !== "inactive") {
        errors.push("Status must be active or inactive.");
    }

    if (!validOccupations.includes(data.occupation)) {
        errors.push("Please enter a valid occupation.");
    }

    return errors;
}

// Test accounts
const validAccount = {
    username: "RenerioSismar",
    password: "Sismar123",
    age: 20,
    status: "active",
    occupation: "Student"
};

const invalidAccount = {
    username: "Ren",
    password: "123",
    age: 17,
    status: "pending",
    occupation: "Unknown"
};

const emptyAccount = {
    username: "",
    password: "",
    age: "",
    status: "",
    occupation: ""
};

// Display validation results
const results = [
    ["Valid Account", validate(validAccount)],
    ["Invalid Account", validate(invalidAccount)],
    ["Empty Account", validate(emptyAccount)]
];

console.log("Account:", account);

for (const [name, errors] of results) {
    console.log(name + " Errors:", errors);
}

// JavaScript comparison examples
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("NaN === NaN:", NaN === NaN);

console.log("Boolean(''):", Boolean(""));
console.log("Boolean('0'):", Boolean("0"));
console.log("Boolean([]):", Boolean([]));

console.log("nickname || fallback:", nickname || "Renerio Sismar");
console.log("nickname ?? fallback:", nickname ?? "Renerio Sismar");

// Show the results on the webpage
const output = document.getElementById("output");

if (output) {
    let html = "<h2>Account Validation Results</h2>";

    for (const [name, errors] of results) {
        html += `<h3>${name}</h3>`;

        if (errors.length === 0) {
            html += "<p>No errors found.</p>";
        } else {
            html += "<ul>";
            for (const error of errors) {
                html += `<li>${error}</li>`;
            }
            html += "</ul>";
        }
    }

    html += "<h2>JavaScript Comparisons</h2>";
    html += `<p>5 == "5": ${5 == "5"}</p>`;
    html += `<p>5 === "5": ${5 === "5"}</p>`;
    html += `<p>null == undefined: ${null == undefined}</p>`;
    html += `<p>null === undefined: ${null === undefined}</p>`;
    html += `<p>NaN === NaN: ${NaN === NaN}</p>`;
    html += `<p>Boolean(""): ${Boolean("")}</p>`;
    html += `<p>Boolean("0"): ${Boolean("0")}</p>`;
    html += `<p>Boolean([]): ${Boolean([])}</p>`;
    html += `<p>nickname || fallback: ${nickname || "Renerio Sismar"}</p>`;
    html += `<p>nickname ?? fallback: ${nickname ?? "Renerio Sismar"}</p>`;

    output.innerHTML = html;
}
// Add validation test cases