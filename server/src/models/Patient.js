const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

patientSchema.pre('save', function (next) {
  const patient = this;
  if (!patient.isModified('password')) return next();

  bcrypt.hash(patient.password, 10).then((hash) => {
    patient.password = hash;
    next();
  }).catch((err) => {
    console.log(err);
    next();
  });
});

patientSchema.methods.comparePassword = function (inputPassword) {
  let patient = this;
  return bcrypt.compare(inputPassword, patient.password);
};

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
