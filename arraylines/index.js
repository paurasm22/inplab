const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'test.txt');

// Read the file and split it into lines
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Split the content into an array of lines
  const lines = data.split('\n');

  // Log the array of lines
  console.log(lines);
});
