const IndustryDesignedCourse = require('../models/IndustryDesignedCourse');

// Create a new Industry Designed Course
exports.createCourse = async (req, res) => {
  try {
    const { name, imageUrls, industryPartnerIds, description, facultyPartnerIds } = req.body;
    const newCourse = new IndustryDesignedCourse({
      name,
      imageUrls,
      industryPartnerIds,
      description,
      facultyPartnerIds
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Industry Designed Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await IndustryDesignedCourse.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Industry Designed Course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await IndustryDesignedCourse.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Industry Designed Course by ID
exports.updateCourse = async (req, res) => {
  try {
    const { name, imageUrls, industryPartnerIds, description, facultyPartnerIds } = req.body;
    const updatedCourse = await IndustryDesignedCourse.findByIdAndUpdate(
      req.params.id,
      { name, imageUrls, industryPartnerIds, description, facultyPartnerIds },
      { new: true }
    );
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Industry Designed Course by ID
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await IndustryDesignedCourse.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
