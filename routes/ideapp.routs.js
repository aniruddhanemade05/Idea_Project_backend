const Idea_controller = require("../controller/ideapp.controller")
const express = require("express");
module.exports = (app) => {
    app.use(express.json())
    // GET 127.0.0.1:8000/ideapp/api/v1/ideas
    app.get("/ideapp/api/v1/ideas", Idea_controller.getAllideas)
    //GET 127.0.0.1:8000/ideapp/api/v1/ideas/id
    app.get("/ideapp/api/v1/ideas/:id", Idea_controller.getIdeaById)
    //POST 127.0.0.1:8000/ideapp/api/v1/ideas
    app.post("/ideapp/api/v1/ideas", Idea_controller.Insert_idea)
    //PUT 127.0.0.1:8000/ideapp/api/v1/ideas/id
    app.put("/ideapp/api/v1/ideas/:id", Idea_controller.updateIdea)
    //DELETE 127.0.0.1:8000/ideapp/api/v1/ideas/id
    app.delete("/ideapp/api/v1/ideas/:id",Idea_controller.deleteIdea)
}
