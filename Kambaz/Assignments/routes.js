import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const { course } = req.query;
    if (course) {
      const assignments = assignmentsDao.findAssignmentsByCourse(course);
      res.json(assignments);
      return;
    }
    const assignments = assignmentsDao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = assignmentsDao.findAssignmentById(assignmentId);
    if (!assignment) {
      res.status(404).json({ error: "Assignment not found" });
      return;
    }
    res.json(assignment);
  });

  app.post("/api/assignments", (req, res) => {
    const newAssignment = assignmentsDao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentsDao.updateAssignment(assignmentId, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    assignmentsDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
}
