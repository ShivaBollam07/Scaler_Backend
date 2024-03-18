const db = require("../config/dbConfig");

const selector = process.env.DB_TYPE === "postgres" ? "rows" : "0";

let student = {
    getAllStudents: async function () {
        const result = await db.pool.query("SELECT * FROM student");
        return result[selector];
    },
    getAllStudentsNotAssigned: async function () {
        const result = await db.pool.query("SELECT * FROM student WHERE assigned_mentor_id IS NULL");
        return result[selector];
    },
    getStudentMailId: async function (studentId) {
        const result = await db.pool.query("SELECT Email FROM student WHERE student_id = ?", [studentId]);
        return result[selector];
    },
    assignMentor: async function (studentId, mentorId) {
        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = ? WHERE student_id = ? AND assigned_mentor_id IS NULL", [mentorId, studentId]);
        return result[selector];
    },
    removeMentor: async function ({ studentId, mentorId }) {
        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = NULL WHERE student_id = ? AND assigned_mentor_id = ?", [studentId, mentorId]);
        return result;
    },
    updateMarks: async function ({ vivaMarks, executionMarks, ideationMarks, totalMarks, studentId }) {
        try {
            const result = await db.pool.query(`
                UPDATE student
                SET 
                    viva_marks = ?,
                    execution_marks = ?,
                    ideation_marks = ?,
                    total_marks = ?
                WHERE student_id = ?;
            `, [vivaMarks, executionMarks, ideationMarks, totalMarks, studentId]);

            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    lockMarks: async function ({ studentId }) {
        const result = await db.pool.query("UPDATE student SET is_locked = true WHERE student_id = ?", [studentId]);
        return result;
    }
};

module.exports = student;
