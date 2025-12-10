import * as dao from "./dao.js";
import model from "./model.js";

export default function EnrollmentsRoutes(app) {
  const findAllEnrollments = async (req, res) => {
    const enrollments = await model.find();
    res.json(enrollments);
  };

  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  };

  const unenrollUserFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.unenrollUserFromCourse(userId, courseId);
    res.json(status);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
}
