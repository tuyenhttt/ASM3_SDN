const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student.controller");

router.post("/create", StudentController.create);
router.get("/", StudentController.getAll);
router.get("/:id", StudentController.getStudentById);
router.put("/:id", StudentController.updateStudentById);
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
