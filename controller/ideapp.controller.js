const ideas = require("../models/ideapp.models")
let id = 3

/**
 * create a controller for fetch the data
 * 
 * GET 127.0.0.1:8000/ideapp/api/v1/ideas
 * 
 * return all the ideas
 */

module.exports.getAllideas = (req, res) => {
    res.status(200).send(ideas)
}

module.exports.getIdeaById = (req, res) => {
    const Idea_id = req.params.id
    const SingleIdea = ideas[Idea_id]
    if (SingleIdea) {
        res.status(200).send(SingleIdea)
    }
    else {
        res.status(404).send({
            error: "idea not found!!"
        })
    }
}

module.exports.Insert_idea = (req, res) => {
    const idea_obj = req.body
    id++
    idea_obj["id"] = id
    ideas[id] = idea_obj
    res.status(201).send(idea_obj)
}

module.exports.updateIdea = (req, res) => {
    //fetch data
    const Ideaid = req.params.id
    //check if it is present or not
    if (ideas[Ideaid]) {
        //update data
        const user_obj = req.body
        ideas[Ideaid] = user_obj
        //return the updated data
        res.status(201).send(ideas[Ideaid])
    } else {
        res.status(404).send({
            error: "idea you want to update does not exist"
        })
    }
}

module.exports.deleteIdea = (req, res) => {
    //fetch the data
    const ideaid = req.params.id
    const idea_obj = ideas[ideaid]
    if (idea_obj) {
        //delete the data
        delete ideas[ideaid]
        res.status(200).send({
            message: "idea deleted successfully",
            deleted: idea_obj
        })
    } else {
        res.status(404).send({
            error: "idea not found"
        })
    }
}