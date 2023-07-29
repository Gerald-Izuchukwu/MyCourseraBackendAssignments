const noteDAO = require('../dao/note.dao')

/* Create and Save a new Note by calling noteDAO create method.
   Depending on the return value, it should return the results or the error message*/  
   exports.create = function(newNote, result){
      noteDAO.create(newNote, result)
   }

   /* Retrieve all notes by calling noteDAO getAll method.
    Depending on the return value, it should return the results or the error message*/  
   exports.getAll = function(title, result){
      noteDAO.getAll(title, result)
   }
   
   /* Find a single Note by Id by calling noteDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
   exports.findById = function(id, result){
      noteDAO.findById(id, result)
   }
   
   /* Update a Note identified by the id by calling noteDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
   exports.updateById = function(id, note, result){
      noteDAO.updateById(id, note, result)
   }
   
   /* Delete a Note with the specified id by calling noteDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
   exports.remove = function (id, result) {
      noteDAO.remove(id, result)
   }
   
   /* Delete all Notes by calling noteDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/  
   exports.removeAll = function (result){
      noteDAO.removeAll(result)
   }