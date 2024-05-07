const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

doctorSchema.pre('save', function (next) {
  const doctor = this;
  if (!doctor.isModified('password')) return next();

  bcrypt.hash(doctor.password, 10).then((hash) => {
    doctor.password = hash;
    next();
  }).catch((err) => {
    console.log(err);
    next();
  });
});

doctorSchema.methods.comparePassword = function (inputPassword) {
  let doctor = this;
  return bcrypt.compare(inputPassword, doctor.password);
};

module.exports = mongoose.model('Doctor', doctorSchema);
