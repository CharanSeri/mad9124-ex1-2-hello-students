"use strict";

const importedStudents = require("./students.json");

importedStudents.forEach(({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
});

const filterdData = importedStudents.filter(function (student) {
  return student.lastName.charAt(0) == "D";
});

console.log(
  `There are '${filterdData.length}' people whose last name start with 'D'`
);
