import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAllAssignments() {
  console.log("📊 DAO: Finding all assignments");
  return model.find({});
}

export function findAssignmentsByCourse(courseId) {
  console.log("📊 DAO: Finding assignments for course:", courseId);
  return model.find({ course: courseId });
}

export function findAssignmentById(assignmentId) {
  return model.findById(assignmentId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: assignment._id || uuidv4() };
  return model.create(newAssignment);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
