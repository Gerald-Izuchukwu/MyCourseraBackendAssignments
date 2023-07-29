const Reminder = require("../dao/reminder.dao.js");
const reminderService = require("../service/reminder.service.js");


/* Call the create method of reminderService object and return the result back*/
const create = (req, res)=>{
    // validate request 
    if(!req.body){
        res.status(400).send({
            message: 'Content can not be empty'
        })
    }
    // create a reminder
    const reminder = new Reminder({
        reminder_name : req.body.reminder_name,
        reminder_description : req.body.reminder_description,
        reminder_creation_date : req.body.reminder_creation_date,
    })

    // save reminder
    reminderService.create(reminder, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while creating reminder'
            });
        }else{
            res.send(data)
        }
    })
    
}

/* Call the getAll method of reminderService object  and return the result back*/
const findAll = (req, res)=>{
    const name = req.query.reminder_name;
    reminderService.getAll(name, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while fetching reminders'
            })
        }else{
            res.send(data)
        }
    })
}

/* Call the findById method of reminderService object  and return the result back*/
const findOne = (req, res)=>{
    reminderService.findById(req.params.id, (err, data)=>{
        if(err){
            if(err.kind === 'not found'){
                res.status(404).send({
                    message: `No reminders with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error retrieving reminders '
                })
            }
        }else{
            res.send(data)
        }
    })
}
/* Call the updateById method of reminderService object  and return the result back*/
const update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Body cannot be empty"
        })
    }
    console.log(req.body);
    reminderService.updateById(req.params.id, new Reminder(req.body), (err, data)=>{
        if(err){
            if(err.kind==='not found'){
                res.status(404).send({
                    message: `No Reminder with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error updating  Reminder '
                })
            }
        }else{
            res.send(data)
        }
    })
}

/* Call the remove method of reminderService object  and return the result back*/
const remove = (req,res)=>{
    reminderService.remove(req.params.id, (err, data)=>{
        if(err){
            if(err.kind==='not found'){
                res.status(404).send({
                    message: `No reminder with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error deleting  reminder '
                })
            }
        }else{
            res.send({message: 'reminder was deleted'})
        }
    })
}

/* Call the removeAll method of reminderService object  and return the result back*/
const deleteAll = (req,res)=>{
    reminderService.removeAll( (err, data)=>{
        if(err){
            res.status(500).send({
                message: 'Error deleting all reminders '
            })
        }else{
            res.send({message: 'all reminders were deleted'})
        }
    })
}

module.exports ={create, findAll, findOne, update, remove, deleteAll}
