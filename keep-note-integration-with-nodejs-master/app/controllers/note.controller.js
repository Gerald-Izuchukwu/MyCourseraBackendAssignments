const Note = require("../dao/note.dao.js");
const noteService = require("../service/note.service.js");

/* Call the create method of noteService object and return the result back*/
exports.create = function(newNote, result){
    return noteService.create(newNote, result)
}


/* Call the getAll method of noteService object and return the result back */
exports.findAll = function (title, result) {
    return noteService.getAll(title, result)
    
}

/* Call the findById method of noteService object and return the result back */
exports.findOne = function(id, result){
    return noteService.findById(id, result)
}

/* Call the updateById method of noteService object and return the result back */
exports.update = function(id, updatedNote, result){
    return noteService.updateById(id, updatedNote, result)
}


/* Call the remove method of noteService object and return the result back */
exports.delete = function(id, result){
    return noteService.remove(id, result)

}


/* Call the removeAll method of noteService object and return the result back */
exports.deleteAll = function(result){
    return noteService.removeAll(result)
}
