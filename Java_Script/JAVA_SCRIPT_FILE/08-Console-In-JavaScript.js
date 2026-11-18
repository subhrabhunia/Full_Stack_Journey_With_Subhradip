
// 1. Console Log
console.log("Hello, JavaScript!");

// 2. Console Info
console.info("This is an information message");

// 3. Console Warn
console.warn("This is a warning message");

// 4. Console Error
console.error("This is an error message");

// 5. Console Table
let student = [
    {
        name: "Subhradip",
        age: 22,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 21,
        course: "BCA"
    }
];

console.table(student);

// 6. Console Group
console.group("Student Details");
console.log("Name: Subhradip");
console.log("Age: 22");
console.log("Course: BCA");

// 7. Console Group End
console.groupEnd();

// 8. Console Time
console.time("Execution Time");

for (let i = 0; i < 1000000; i++) {
    // Loop
}

// 9. Console Time End
console.timeEnd("Execution Time");

// 10. Console Clear
// console.clear();


// ### **3. Important Console Methods**

// | Method               | Description                   |
// | -------------------- | ----------------------------- |
// | `console.log()`      | Displays a normal message     |
// | `console.info()`     | Displays information          |
// | `console.warn()`     | Displays a warning            |
// | `console.error()`    | Displays an error             |
// | `console.table()`    | Displays data in table format |
// | `console.group()`    | Creates a group of messages   |
// | `console.groupEnd()` | Ends a group                  |
// | `console.time()`     | Starts a timer                |
// | `console.timeEnd()`  | Stops the timer               |
// | `console.clear()`    | Clears the console            |