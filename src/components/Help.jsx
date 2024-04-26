const fs = require('fs');

// Path to the source file
const sourcePath = 'Backend/uploads';
// Path to the destination folder
const destFolder = 'frontend/src/photos';

// Move the file
fs.rename(sourcePath, destFolder + 'first.jpg', (err) => {
    if (err) {
        console.error('Error moving the file:', err);
    } else {
        console.log('File moved successfully');
}
});