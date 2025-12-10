import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function findModulesForCourse(courseId) {
  const modules = await model.find({ course: courseId });
  console.log("findModulesForCourse - courseId:", courseId);
  console.log("findModulesForCourse - found modules:", modules);
  return modules;
}

export async function createModule(courseId, module) {
  const newModule = { ...module, _id: uuidv4(), course: courseId };
  const created = await model.create(newModule);
  return created;
}

export async function deleteModule(courseId, moduleId) {
  const status = await model.deleteOne({ _id: moduleId, course: courseId });
  return status;
}

export async function updateModule(moduleId, moduleUpdates) {
  const status = await model.updateOne(
    { _id: moduleId },
    { $set: moduleUpdates }
  );
  if (status.matchedCount === 0) return null;
  const updated = await model.findById(moduleId);
  return updated;
}