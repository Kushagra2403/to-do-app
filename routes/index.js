const express = require('express');
const router = express.Router();
const Task = require("../models/tasks");

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.render("index", {tasks: tasks});
  }
  catch(err) {
    console.log(err);
  }
});

//AddNewTask
router.post('/addTask', async (req, res) => {
  const task = new Task({
    description: req.body.description,
  });
  try {
    const newTask = await task.save();
    res.redirect("/");
    console.log("Task Entered");
  }
  catch {
    console.log("Data Not Entered");
    res.redirect("/");
  }
});

//Delete Task
router.delete("/removeTask/:id", async (req, res) => {
  let task;
  try {
    task = Task.findById(req.params.id);
    await task.remove();
    res.redirect("/");
    console.log("Task Deleted");
  }
  catch {
    console.log("Data Not Deleted");
    res.redirect("/");
  }
});

module.exports = router;