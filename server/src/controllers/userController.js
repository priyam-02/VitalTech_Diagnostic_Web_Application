const Image = require('../models/Image');
const Patient = require('../models/Patient');

const uploadImage = async (req, res) => {
    if(req.file == undefined){
        res.status(400).send('Error: No File Selected!');
    } else {
        let base64Image = req.file.buffer.toString('base64');
        base64Image = `data:${req.file.mimetype};base64,${base64Image}`;
        const patient = await Patient.findById('661f1c830c9e0aaacf0b5bce');
        const newImage = new Image({
            patientId: patient._id,
            base64Image,
        });
        newImage.save()
            .then(image => res.status(201).json(image))
            .catch(err => res.status(500).json(err));
    }
}

const postImageComments = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).send('Image not found');
        }
        const commenter = await Patient.findById(req.body.userId);
        const comment = {
            body: req.body.text,
            date: new Date(),
            commenterId: commenter._id
        };
        image.comments.push(comment);
        await image.save();
        res.status(201).json(comment);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { uploadImage, postImageComments, getImages };