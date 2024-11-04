// Sample data (replace this with the data from students.txt)
const students = [
  { name: 'Alice', chemistry: 80, biology: 90, dob: '15-04-2000' },
  { name: 'Bob', chemistry: 85, biology: 80, dob: '20-06-2000' },
  { name: 'Charlie', chemistry: 80, biology: 90, dob: '15-04-1999' },
  // Add more student objects here...
];

// Function to parse date of birth in DD-MM-YYYY format
function parseDate(dob) {
  const [day, month, year] = dob.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Sorting function
students.sort((a, b) => {
  // Calculate total marks for both students
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;

  // First priority: total marks
  if (totalMarksA !== totalMarksB) {
    return totalMarksB - totalMarksA;
  }

  // Second priority: biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  // Third priority: date of birth (older first)
  const dobA = parseDate(a.dob);
  const dobB = parseDate(b.dob);
  return dobA - dobB;
});

console.log('Sorted Students:');
console.log(students);
