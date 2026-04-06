// Import fs module
const fs = require('fs');

// File name
const fileName = 'sample.txt';

// Content to write
const content = 'Hello Murali, File Handling using fs module!';

// Write to file
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }

    console.log('✅ File written successfully');

    // Read from file after writing
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        console.log('📄 File content:', data);
    });
});