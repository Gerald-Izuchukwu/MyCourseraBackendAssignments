const reminderDAO = require('../dao/reminder.dao')

/* Create and Save a new Reminder by calling reminderDAO create method.
   Depending on the return value, it should return the results or the error message*/  
   exports.create = function(newReminder, result){
      reminderDAO.create(newReminder, result)
   }

   /* Retrieve all reminders by calling reminderDAO getAll method.
    Depending on the return value, it should return the results or the error message*/  
   exports.getAll = function(name, result){
      reminderDAO.getAll(name, result)
   }
   
   /* Find a single Reminder by Id by calling reminderDAO findById method.
   Depending on the return value, it should return the results or the error message*/  
   exports.findById =function(id, result){
      reminderDAO.findById(id, result)
   }
   
   /* Update a Reminder identified by the id by calling reminderDAO updateById method.
   Depending on the return value, it should return the results or the error message*/   
   exports.updateById = function(id, category, result){
      reminderDAO.updateById(id, category, result)
   }
   
   /* Delete a Reminder with the specified id by calling reminderDAO remove method.
   Depending on the return value, it should return the results or the error message*/  
   exports.remove = function (id, result) {
      reminderDAO.remove(id, result)
   }
   
   /* Delete all Reminders by calling reminderDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/  
   exports.removeAll = function (result){
      reminderDAO.removeAll(result)
   }