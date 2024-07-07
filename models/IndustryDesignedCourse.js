const mongoose = require('mongoose');

const IndustryDesignedCourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String],
    required: true
  },
  industryPartnerIds: {
    type:[{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'IndustryPartner',
    required: true}]
  },
  description: {
    type: String,
    required: true
  },
  facultyPartnerIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'FacultyPartner',
    required: true
  }
});

const IndustryDesignedCourse = mongoose.model('IndustryDesignedCourse', IndustryDesignedCourseSchema);

module.exports = IndustryDesignedCourse;
