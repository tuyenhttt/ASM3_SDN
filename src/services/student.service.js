const Student = require("../models/student.model");

const create = async (newStudent) => {
  return await Student.create(newStudent);
};

const findAll = async () => {
  return await Student.find();
};

const getStudentById = async (studentId) => {
  return await Student.findById(studentId);
};

const updateStudentById = async (studentId, student) => {
  return await Student.findByIdAndUpdate(studentId, student);
};

const deleteStudentById = async (studentId) => {
  return await Student.findByIdAndDelete(studentId);
};

module.exports = {
  create,
  findAll,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
