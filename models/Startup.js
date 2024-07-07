const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String
  },
  studentIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  },
  facultyIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FacultyPartner'
    }]
  },
  industryIds: {
    type:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'IndustryPartner'}]
  }
});

const Startup = mongoose.model('Startup', StartupSchema);

module.exports = Startup;
