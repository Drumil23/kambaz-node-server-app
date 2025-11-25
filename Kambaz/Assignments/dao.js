import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

let { assignments } = db;

export const findAllAssignments = () => assignments;

export const findAssignmentsByCourse = (courseId) =>
  assignments.filter((a) => a.course === courseId);

export const findAssignmentById = (assignmentId) =>
  assignments.find((a) => a._id === assignmentId);

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: assignment._id || uuidv4() };
  assignments = [...assignments, newAssignment];
  return newAssignment;
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  assignments = assignments.map((a) =>
    a._id === assignmentId ? { ...a, ...assignmentUpdates } : a
  );
  return assignments.find((a) => a._id === assignmentId);
};

export const deleteAssignment = (assignmentId) => {
  assignments = assignments.filter((a) => a._id !== assignmentId);
};
