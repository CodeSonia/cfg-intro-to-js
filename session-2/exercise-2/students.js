students = [
  "Sofia",
  "Elizabeth",
  "Sasha",
  "Samantha",
  "Abigail",
  "Lorena",
  "Ayesha",
  "Adeyo",
  "Emil",
];

for (let student = 0; student < students.length; student++) {
  // +1 as index starts at 0
  console.log(`Student ${student + 1}: ${students[student]}`);
  // console.log(students[student]);
}
// Student 1: Sofia
// Student 2: Elizabeth
// Student 3: Sasha
// Student 4: Samantha
// Student 5: Abigail
// Student 6: Lorena
// Student 7: Ayesha
// Student 8: Adeyo
// Student 9: Emil

students2 = [
  "Sofia",
  "Elizabeth",
  "Sasha",
  "Samantha",
  "Abigail",
  "Lorena",
  "Ayesha",
  "Adeyo",
  "Emil",
];

// Exercise 2.3 - Let’s say we can only run a small class. Create
// variables for class size (0), maxClassSize (7) and an empty
// classList. Use a while loop to add random students to the
// classList so long as the number of students in the new class is
// less than the maximum size.

let classSize = 0;
const maxClassSize = 7;
const classList = [];

while (classSize < maxClassSize) {
  // generate a random student name
  const randomStudent = Math.floor(Math.random() * students2.length);
  const newStudent = students2[randomStudent];
  // remove the selected student from the array to avoid duplicates like the below!
  // students.splice(randomStudent, 1);
  // add new student to the empty array 
  classList.push(newStudent);
  // repeats till while condition becomes true
  classSize++;
  console.log(`${newStudent} has been added to the class!`);
}

// Old output with duplicates:
// Elizabeth has been added to the class!
// Lorena has been added to the class!
// Ayesha has been added to the class!
// Elizabeth has been added to the class!
// Lorena has been added to the class!
// Lorena has been added to the class!
// Elizabeth has been added to the class!

// Adeyo has been added to the class!
// Samantha has been added to the class!
// Adeyo has been added to the class!
// Samantha has been added to the class!
// Lorena has been added to the class!
// Emil has been added to the class!
// Elizabeth has been added to the class!
