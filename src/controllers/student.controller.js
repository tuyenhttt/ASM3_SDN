const StduentService = require("../services/student.service");
const apiResponse = require("../utils/api.response");

const create = async (req, res) => {
  try {
    const student = await StduentService.create(req.body);
    if (!student) {
      return res
        .status(401)
        .json(apiResponse(401, "failed", "Create student failed"));
    }
    res
      .status(200)
      .json(apiResponse(200, "success", "Create student success", student));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

const getAll = async (req, res) => {
  try {
    const student = await StduentService.findAll();
    if (!student) {
      return res
        .status(400)
        .json(apiResponse(400, "failed", "List students empty"));
    }
    res
      .status(200)
      .json(apiResponse(200, "success", "List students success", student));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await StduentService.getStudentById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json(apiResponse(404, "failed", "Student not found"));
    }
    res.status(200).json(apiResponse(200, "success", "Student", student));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

const updateStudentById = async (req, res) => {
  try {
    const student = await StduentService.updateStudentById(
      req.params.id,
      req.body
    );
    if (!student) {
      return res.status(400).json(apiResponse(400, "failed", "update failed"));
    }
    res.status(200).json(apiResponse(200, "success", "update success"));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

const deleteStudent = async (req, res) => {
  try {
    await StduentService.deleteStudentById(req.params.id);
    res.status(200).json(apiResponse(200, "success", "delete success"));
  } catch (error) {
    res.status(500).json(apiResponse(500, "failed", error.message));
  }
};

module.exports = {
  create,
  getAll,
  getStudentById,
  updateStudentById,
  deleteStudent,
};
