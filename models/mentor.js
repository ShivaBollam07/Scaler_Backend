class mentor{

    
    constructor(){}
    static async getAllMentors(){
        const db = require("../config/dbConfig");
        const result = await db.pool.query("SELECT * FROM mentor");
        return result[0];
    }
    static async getAllStudentsByMentorId(mentorId){
        console.log(mentorId);
        const db = require("../config/dbConfig");
        const result = await db.pool.query("SELECT * FROM student WHERE assigned_mentor_id = ?",[mentorId]);
        return result[0];
    }
  

}
module.exports = mentor;