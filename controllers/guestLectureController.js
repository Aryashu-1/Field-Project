
const GuestLecture = require('../models/GuestLecture');

// Create a new Guest Lecture
exports.createLecture = async (req, res) => {
  try {
    const { name, IndustryPartner, date, venue, imageUrls, timings, description, facultyPartnerIds, studentPartnerIds, upcoming } = req.body;
    const newLecture = new GuestLecture({
      name,
      IndustryPartner,
      date,
      venue,
      imageUrls,
      timings,
      description,
      facultyPartnerIds,
      studentPartnerIds,
      upcoming
    });
    await newLecture.save();
    res.status(201).json(newLecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Guest Lectures
exports.getAllLectures = async (req, res) => {
  try {
    const lectures = await GuestLecture.find();
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Guest Lecture by ID
exports.getLectureById = async (req, res) => {
  try {
    const lecture = await GuestLecture.findById(req.params.id);
    if (!lecture) return res.status(404).json({ message: 'Lecture not found' });
    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Guest Lecture by ID
exports.updateLecture = async (req, res) => {
  try {
    const { name, IndustryPartner, date, venue, imageUrls, timings, description, facultyPartnerIds, studentPartnerIds, upcoming } = req.body;
    const updatedLecture = await GuestLecture.findByIdAndUpdate(
      req.params.id,
      { name, IndustryPartner, date, venue, imageUrls, timings, description, facultyPartnerIds, studentPartnerIds, upcoming },
      { new: true }
    );
    if (!updatedLecture) return res.status(404).json({ message: 'Lecture not found' });
    res.status(200).json(updatedLecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Guest Lecture by ID
exports.deleteLecture = async (req, res) => {
  try {
    const deletedLecture = await GuestLecture.findByIdAndDelete(req.params.id);
    if (!deletedLecture) return res.status(404).json({ message: 'Lecture not found' });
    res.status(200).json({ message: 'Lecture deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
