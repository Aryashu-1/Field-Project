const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true,
    unique: true
  },
  imageUrls: {
    type: [String]
  },
  socialMedia: {
    type: [String]
  },
  internshipId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Internship'
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  startUpId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Startup'
  },
  researchPaperId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResearchPaper'
  },
  guestLectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GuestLecture'
  },
  industryVisitId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'IndustryVisit'
    }]
  },
  collaboratedProjectId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CollaboratedProject'
    }]
  },
  consultancyProjectId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ConsultancyProject'
    }]
  },
  researchCenterId: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ResearchCenter'
    }]
  },
  bioData: {
    type: String
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
