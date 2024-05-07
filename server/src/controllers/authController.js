const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

const registerDoctor = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) return res.status(400).send('Email already in use');

    const newDoctor = new Doctor({
      name,
      email,
      password
    });

    await newDoctor.save();
    res.status(201).send('newDoctor registered successfully!');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

const loginDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) return res.status(404).send('Doctor not found');

    doctor.comparePassword(password).then((isMatch) => {
      if (!isMatch) return res.status(400).send('Invalid credentials');

      res.status(201).send('doctor logged in')
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const registerPatient = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) return res.status(400).send('Email already in use');

    const newPatient = new Patient({
      name,
      email,
      password
    });

    await newPatient.save();
    res.status(201).send('newPatient registered successfully!');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginPatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(404).send('Patient not found');

    patient.comparePassword(password).then((isMatch) => {
    if (!isMatch) return res.status(400).send('Invalid credentials');

    res.status(200).send('patient logged in');
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerDoctor,
  loginDoctor,
  registerPatient,
  loginPatient
};
