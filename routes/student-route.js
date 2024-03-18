const express = require("express");
const {StudentController : {getAllStudents, getAllStudentsNotAssigned, assignMentor, updateMarks,lockMarks , removeMentor, getStudentMailId}} = require("../controllers/student-controller");
const router = express.Router();


router.get("/all", async (req, res) => {

    await getAllStudents(req, res);
    
});

router.get("/notassigned", async (req, res) => {

    await getAllStudentsNotAssigned(req, res);
    
});

router.get("/mail", async (req, res) => {
    await getStudentMailId(req, res);
    
});

router.put("/assign", async (req, res) => {
    
    await assignMentor(req, res);
        
});

router.put("/delete", async(req,res)=>{
    await removeMentor(req,res);
});

router.put('/update', async (req,res) => {
    await updateMarks(req,res);
})

router.put('/lock', async (req,res) => {
    await lockMarks(req,res);
})


module.exports = router;