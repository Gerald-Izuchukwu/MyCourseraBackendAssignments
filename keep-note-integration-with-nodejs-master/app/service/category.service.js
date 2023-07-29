const categoryDAO = require('../dao/category.dao')

/* Create and Save a new Category by calling categoryDAO create method.
   Depending on the return value, it should return the results or the error message*/  
exports.create = function(newCategory, result){
   categoryDAO.create(newCategory, result)
}


/* Retrieve all categories by calling categoryDAO getAll method.
 Depending on the return value, it should return the results or the error message*/  
exports.getAll = function(name, result){
   categoryDAO.getAll(name, result)
}

/* Find a single Category by Id by calling categoryDAO findById method.
Depending on the return value, it should return the results or the error message*/  
exports.findById = function(id, result){
   categoryDAO.findById(id, result)
}
/* Update a Category identified by the id by calling categoryDAO updateById method.
Depending on the return value, it should return the results or the error message*/   
exports.updateById = function(id, category, result){
   categoryDAO.updateById(id, category, result)
}

/* Delete a Category with the specified id by calling categoryDAO remove method.
Depending on the return value, it should return the results or the error message*/  
exports.remove = function (id, result) {
   categoryDAO.remove(id, result)
}


/* Delete all Categories by calling categoryDAO removeAll method.
Depending on the return value, it should return the results or the error message*/  
exports.removeAll = function (result){
   categoryDAO.removeAll(result)
}