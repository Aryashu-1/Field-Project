const IndustryCertificationCourse = require('../models/IndustryCertificationCourse');

// Create a new Industry Certification Course
exports.createCourse = async (req, res) => {
  try {
    const { name, industryPartners, facultyPartners, description, imageUrls, studentIds } = req.body;
    const newCourse = new IndustryCertificationCourse({
      name,
      industryPartners,
      facultyPartners,
      description,
      imageUrls,
      studentIds
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Industry Certification Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await IndustryCertificationCourse.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Industry Certification Course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await IndustryCertificationCourse.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Industry Certification Course by ID
exports.updateCourse = async (req, res) => {
  try {
    const { name, industryPartners, facultyPartners, description, imageUrls, studentIds } = req.body;
    const updatedCourse = await IndustryCertificationCourse.findByIdAndUpdate(
      req.params.id,
      { name, industryPartners, facultyPartners, description, imageUrls, studentIds },
      { new: true }
    );
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Industry Certification Course by ID
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await IndustryCertificationCourse.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
