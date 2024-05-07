// Image model
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    base64Image: String,
    comments: [{ body: String, date: Date, commenterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }]
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
