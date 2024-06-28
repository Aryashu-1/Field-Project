const mongoose = require('mongoose');

const IndustryCertificationCourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  industryPartners: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'IndustryPartner'
    }],
    required: true
  },
  facultyPartners: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FacultyPartner'
    }],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String],
    required: true
  },
  studentIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  }
});

const IndustryCertificationCourse = mongoose.model('IndustryCertificationCourse', IndustryCertificationCourseSchema);

module.exports = IndustryCertificationCourse;
