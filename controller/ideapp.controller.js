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
        res.status(500).send({
            error: "idea not found!!"
        })
    }
}
module.exports.Insert_idea = (req, res) => {
    idea_obj = req.body
    id++
    idea_obj["id"] = id
    ideas[id] = idea_obj
    res.status(201).send(idea_obj)
}
module.exports.updateIdea = (req, res) => {
    //frtch data
    const Ideaid = req.params.id
    //check if it is preasent or not
    if (ideas[Ideaid]) {
        //update data
        user_obj = req.body
        ideas[Ideaid] = user_obj;
    } else {
        res.status(404).send({
            error: "idea you want to update is not exist"
        })
    }
    //return the data
    res.status(201).send(ideas[Ideaid])
}
module.exports.deleteIdea = (req, res) => {
    //fetch the data
    const ideaid = req.params.id
    const idea_obj = ideas[ideaid]
    if (idea_obj) {
        //delete the data
        let recidea = delete ideas[ideaid]
        res.status(201).send(recidea)
    } else {
        res.status(404).send({
            error: "idea not found"
        })
    }
} 