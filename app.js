const express = require("express");
const app = express();
const dotenv =  require('dotenv');
dotenv.config();
const mentorRouter = require('./routes/mentor-route');
const studentRouter = require('./routes/student-route');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/mentor',mentorRouter);
app.use('/student',studentRouter);

app.listen(process.env.SERVER_PORT , () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT    }`);
});