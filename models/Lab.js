const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  facultyPartnerIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'FacultyPartner',
    required: true
  },
  industryPartnerIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'IndustryPartner',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String],
    required: true
  }
});

const Lab = mongoose.model('Lab', LabSchema);

module.exports = Lab;
