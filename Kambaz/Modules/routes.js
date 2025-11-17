import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  const findModulesForCourse = (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  };

  const createModuleForCourse = (req, res) => {
    const { courseId } = req.params;
    const module = { ...req.body, course: courseId };
    const newModule = modulesDao.createModule(module);
    res.json(newModule);
  };

  const deleteModule = (req, res) => {
    const { moduleId } = req.params;
    const status = modulesDao.deleteModule(moduleId);
    res.json(status);
  };

  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const updated = modulesDao.updateModule(moduleId, moduleUpdates);
    if (!updated) {
      res.sendStatus(404);
      return;
    }
    res.json(updated);
  };

  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
}
