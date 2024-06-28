const Student = require('../models/Student');

// Create a new Student
exports.createStudent = async (req, res) => {
  try {
    const { name, rollno, imageUrls, socialMedia, internshipId, courseId, startUpId, researchPaperId, guestLectureId, industryVisitId, collaboratedProjectId, consultancyProjectId, researchCenterId, bioData } = req.body;
    const newStudent = new Student({
      name,
      rollno,
      imageUrls,
      socialMedia,
      internshipId,
      courseId,
      startUpId,
      researchPaperId,
      guestLectureId,
      industryVisitId,
      collaboratedProjectId,
      consultancyProjectId,
      researchCenterId,
      bioData
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ rollno: req.params.rollno });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Student by ID
exports.updateStudent = async (req, res) => {
  try {
    const { name, imageUrls, socialMedia, internshipId, courseId, startUpId, researchPaperId, guestLectureId, industryVisitId, collaboratedProjectId, consultancyProjectId, researchCenterId, bioData } = req.body;
    const updatedStudent = await Student.findOneAndUpdate(
      { rollno: req.params.rollno },
      { name, imageUrls, socialMedia, internshipId, courseId, startUpId, researchPaperId, guestLectureId, industryVisitId, collaboratedProjectId, consultancyProjectId, researchCenterId, bioData },
      { new: true }
    );
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Student by ID
exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({ rollno: req.params.rollno });
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
