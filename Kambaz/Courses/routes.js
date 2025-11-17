import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findAllCourses = (req, res) => {
    const courses = dao.findAllCourses();
    res.json(courses);
  };

  const createCourse = (req, res) => {
    const newCourse = dao.createCourse(req.body);
    res.json(newCourse);
  };

  const deleteCourse = (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.json(status);
  };

  const updateCourse = (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const updated = dao.updateCourse(courseId, courseUpdates);
    if (!updated) {
      res.sendStatus(404);
      return;
    }
    res.json(updated);
  };

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
}
