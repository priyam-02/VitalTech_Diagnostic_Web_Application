const multer = require('multer');

// Set storage engine
const storage = multer.memoryStorage();

// Initialize upload variable
const upload = multer({ storage: storage });

module.exports = upload;
