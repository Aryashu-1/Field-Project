const express = require('express')

const router = express.Router()
const industryDesignedCourseController = require('../controllers/industryDesignedCourseController');
const labController = require('../controllers/labController');
const industryCertificationCourseController = require('../controllers/industryCertificationCourseController');
const guestLectureController = require('../controllers/guestLectureController');
const internshipController = require('../controllers/internshipController');
const industryController = require('../controllers/industryController');
const industryPartnerController = require('../controllers/industryPartnerController');
const facultyPartnerController = require('../controllers/facultyPartnerController');
const researchCenterController = require('../controllers/researchCenterController');
const projectController = require('../controllers/projectController');
const visitController = require('../controllers/visitController');
const mouController = require('../controllers/mouController');
const studentController = require('../controllers/studentController');
const startupController = require('../controllers/startupController');
const industryResearchPublicationController = require('../controllers/industryResearchPublicationController');


// Create a new Industry Designed Course
router.post('/industry-designed-courses', industryDesignedCourseController.createCourse);
// Get all Industry Designed Courses
router.get('/industry-designed-courses', industryDesignedCourseController.getAllCourses);
// Get a single Industry Designed Course by ID
router.get('/industry-designed-courses/:id', industryDesignedCourseController.getCourseById);
// Update an Industry Designed Course by ID
router.put('/industry-designed-courses/:id', industryDesignedCourseController.updateCourse);
// Delete an Industry Designed Course by ID
router.delete('/industry-designed-courses/:id', industryDesignedCourseController.deleteCourse);


// Create a new Lab
router.post('/labs', labController.createLab);
// Get all Labs
router.get('/labs', labController.getAllLabs);
// Get a single Lab by ID
router.get('/labs/:id', labController.getLabById);
// Update a Lab by ID
router.put('/labs/:id', labController.updateLab);
// Delete a Lab by ID
router.delete('/labs/:id', labController.deleteLab);


// Create a new Industry Certification Course
router.post('/industry-certification-courses', industryCertificationCourseController.createCourse);
// Get all Industry Certification Courses
router.get('/industry-certification-courses', industryCertificationCourseController.getAllCourses);
// Get a single Industry Certification Course by ID
router.get('/industry-certification-courses/:id', industryCertificationCourseController.getCourseById);
// Update an Industry Certification Course by ID
router.put('/industry-certification-courses/:id', industryCertificationCourseController.updateCourse);


// Create a new Guest Lecture
router.post('/guest-lectures', guestLectureController.createLecture);
// Get all Guest Lectures
router.get('/guest-lectures', guestLectureController.getAllLectures);
// Get a single Guest Lecture by ID
router.get('/guest-lectures/:id', guestLectureController.getLectureById);
// Update a Guest Lecture by ID
router.put('/guest-lectures/:id', guestLectureController.updateLecture);
// Delete a Guest Lecture by ID
router.delete('/guest-lectures/:id', guestLectureController.deleteLecture);


// Create a new Internship
router.post('/internships', internshipController.createInternship);
// Get all Internships
router.get('/internships', internshipController.getAllInternships);
// Get a single Internship by ID
router.get('/internships/:id', internshipController.getInternshipById);
// Update an Internship by ID
router.put('/internships/:id', internshipController.updateInternship);
// Delete an Internship by ID
router.delete('/internships/:id', internshipController.deleteInternship);


// Create a new Industry
router.post('/industries', industryController.createIndustry);
// Get all Industries
router.get('/industries', industryController.getAllIndustries);
// Get a single Industry by ID
router.get('/industries/:id', industryController.getIndustryById);
// Update an Industry by ID
router.put('/industries/:id', industryController.updateIndustry);
// Delete an Industry by ID
router.delete('/industries/:id', industryController.deleteIndustry);


// Create a new Industry Partner
router.post('/industry-partners', industryPartnerController.createIndustryPartner);
// Get all Industry Partners
router.get('/industry-partners', industryPartnerController.getAllIndustryPartners);
// Get a single Industry Partner by ID
router.get('/industry-partners/:id', industryPartnerController.getIndustryPartnerById);
// Update an Industry Partner by ID
router.put('/industry-partners/:id', industryPartnerController.updateIndustryPartner);
// Delete an Industry Partner by ID
router.delete('/industry-partners/:id', industryPartnerController.deleteIndustryPartner);


// Get all Faculty Partners
router.get('/faculty-partners', facultyPartnerController.getAllFacultyPartners);
// Get a single Faculty Partner by ID
router.get('/faculty-partners/:id', facultyPartnerController.getFacultyPartnerById);
// Update a Faculty Partner by ID
router.put('/faculty-partners/:id', facultyPartnerController.updateFacultyPartner);
// Delete a Faculty Partner by ID
router.delete('/faculty-partners/:id', facultyPartnerController.deleteFacultyPartner);


// Create a new Research Center
router.post('/research-centers', researchCenterController.createResearchCenter);
// Get all Research Centers
router.get('/research-centers', researchCenterController.getAllResearchCenters);
// Get a single Research Center by ID
router.get('/research-centers/:id', researchCenterController.getResearchCenterById);
// Update a Research Center by ID
router.put('/research-centers/:id', researchCenterController.updateResearchCenter);
// Delete a Research Center by ID
router.delete('/research-centers/:id', researchCenterController.deleteResearchCenter);


// Create a new Project
router.post('/projects', projectController.createProject);
// Get all Projects
router.get('/projects', projectController.getAllProjects);
// Get a single Project by ID
router.get('/projects/:id', projectController.getProjectById);
// Update a Project by ID
router.put('/projects/:id', projectController.updateProject);
// Delete a Project by ID
router.delete('/projects/:id', projectController.deleteProject);


// Create a new Visit
router.post('/visits', visitController.createVisit);
// Get all Visits
router.get('/visits', visitController.getAllVisits);
// Get a single Visit by ID
router.get('/visits/:id', visitController.getVisitById);
// Update a Visit by ID
router.put('/visits/:id', visitController.updateVisit);
// Delete a Visit by ID
router.delete('/visits/:id', visitController.deleteVisit);


// Create a new MOU
router.post('/mous', mouController.createMOU);
// Get all MOUs
router.get('/mous', mouController.getAllMOUs);
// Get a single MOU by ID
router.get('/mous/:id', mouController.getMOUById);
// Update a MOU by ID
router.put('/mous/:id', mouController.updateMOU);
// Delete a MOU by ID
router.delete('/mous/:id', mouController.deleteMOU);


// Create a new Student
router.post('/students', studentController.createStudent);
// Get all Students
router.get('/students', studentController.getAllStudents);
// Get a single Student by Roll Number
router.get('/students/:rollno', studentController.getStudentById);
// Update a Student by Roll Number
router.put('/students/:rollno', studentController.updateStudent);
// Delete a Student by Roll Number
router.delete('/students/:rollno', studentController.deleteStudent);


// Create a new Startup
router.post('/startups', startupController.createStartup);
// Get all Startups
router.get('/startups', startupController.getAllStartups);
// Get a single Startup by ID
router.get('/startups/:id', startupController.getStartupById);
// Update a Startup by ID
router.put('/startups/:id', startupController.updateStartup);
// Delete a Startup by ID
router.delete('/startups/:id', startupController.deleteStartup);


// Create a new Industry Research Publication
router.post('/publications', industryResearchPublicationController.createPublication);
// Get all Industry Research Publications
router.get('/publications',industryResearchPublicationController.getAllPublications);
// Get a single Industry Research Publication by ID
router.get('/publications/:id', industryResearchPublicationController.getPublicationById);
// Update an Industry Research Publication by ID
router.put('/publications/:id', industryResearchPublicationController.updatePublication);
// Delete an Industry Research Publication by ID
router.delete('/publications/:id', industryResearchPublicationController.deletePublication);



module.exports = router