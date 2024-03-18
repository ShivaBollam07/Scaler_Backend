const mentor = require("../models/mentor");

module.exports = {
    async getAllMentors(req, res) {
        const mentors = await mentor.getAllMentors();
        res.json(mentors);
    },
    async getAllStudents(req, res) {
        const mentorId = req.query.mentorId;
        const students = await mentor.getAllStudentsByMentorId(mentorId);
        res.json(students);
    }
}