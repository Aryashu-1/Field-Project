const mongoose = require('mongoose');

const GuestLectureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  IndustryPartner: {
    type:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IndustryPartner',
    required: true}]
  },
  date: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String],
    required: true
  },
  timings: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  facultyPartnerIds: {
    type:[{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'FacultyPartner'}]
  },
  studentPartnerIds: {
    type:[{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Student'}]
  },
  upcoming: {
    type: Boolean,
    required: true,
    default: true
  }
});

const GuestLecture = mongoose.model('GuestLecture', GuestLectureSchema);

module.exports = GuestLecture;
