const fs = require('fs');
const path = require('path');

// Define the file path for the existing file
const filePath = path.join(__dirname, 'test.txt');

// Function to read the file
function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content before update:\n', data);
  });
}

// Function to update the file
function updateFile() {
  const contentToAdd = '\nThis line was added later.';
  fs.appendFile(filePath, contentToAdd, (err) => {
    if (err) {
      console.error('Error updating file:', err);
      return;
    }
    console.log('File updated successfully!');
    readFile(); // Read the file again after updating
  });
}

// Function to delete the file
function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return;
    }
    console.log('File deleted successfully!');
  });
}

// Execute the functions in sequence
readFile();
setTimeout(updateFile, 1000); // Wait 1 second to update the file
setTimeout(deleteFile, 2000); // Wait 2 seconds to delete the file
