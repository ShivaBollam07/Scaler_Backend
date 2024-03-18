const student = require("../models/student");

module.exports.StudentController = {

    getAllStudents:async (req, res) => {
        try {
            const students = await student.getAllStudents();
            console.log(students)
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllStudentsNotAssigned :async (req, res) => {
        try {
            const students = await student.getAllStudentsNotAssigned();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getStudentMailId: async (req, res) => {
        try {
            const { studentId } = req.body;
            const result = await student.getStudentMailId(studentId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    assignMentor: async (req, res) =>  {
        try {
            const { studentId, mentorId } = req.body;
            console.log(studentId, mentorId);
            const result = await student.assignMentor(studentId, mentorId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    removeMentor: async(req,res) => {
       
        try {
        let {studentId,mentorId} = req.body;
        var data = await student.removeMentor({studentId,mentorId});
        res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    lockMarks: async (req, res) => {
        try {
            let {studentId} = req.body;
            let data = await student.lockMarks({studentId});
            res.status(200).json(data);
        }
        catch(error){
            res.status(500).json({ error: error.message });
        }
         
    },

    updateMarks: async (req, res) => {
        try {
            let {vivaMarks, executionMarks, ideationMarks,totalMarks, studentId} = req.body;
            let data = await student.updateMarks({vivaMarks,executionMarks, ideationMarks, totalMarks, studentId});
            res.status(200).json(data);
        }
        catch(error){
            res.status(500).json({ error: error.message });
        }
         
    }
};