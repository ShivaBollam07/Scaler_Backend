const express = require("express");
const router = express.Router();
const {getAllMentors,getAllStudents} = require("../controllers/mentor-controller");
router.get("/all", async (req, res) => {
    await getAllMentors(req, res);
});
router.get("/students", async (req, res) => {
    await getAllStudents(req, res);
});

module.exports = router;