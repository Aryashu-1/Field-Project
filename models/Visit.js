const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String]
  },
  industryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry'
  },
  industryPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IndustryPartner'
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  facultyPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FacultyPartner'
  }
});

const Visit = mongoose.model('Visit', VisitSchema);

module.exports = Visit;
