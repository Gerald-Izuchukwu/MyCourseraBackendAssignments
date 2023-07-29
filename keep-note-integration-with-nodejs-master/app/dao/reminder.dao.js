const connection = require('./db');
let sql = connection();

/* constructor to initialize reminder with reminder_name, reminder_description and
reminder_creation_date as its properties*/

const Reminder  = function(reminder){
  this.reminder_name = reminder.reminder_name,
  this.reminder_description = reminder.reminder_description,
  this.reminder_creation_date = reminder.reminder_creation_date
}

/* 
  create should be a function that calls the query function on sql object
  to persist reminder data in MySQL notesdb schema using insert query
*/

Reminder.create = (newReminder, result)=>{
  sql.query("INSERT INTO reminder SET ?", newReminder, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    console.log('Created reminder: ', {id: res.insertId, ...newReminder});
    result(null, {id: res.insertId, ...newReminder});
  });
};


/* 
  findById should be a function that calls the query function on sql object 
  to fetch the reminder by the provided Id from the notesdb schema using select query
*/

Reminder.findById = (id, result)=>{
  sql.query(`SELECT * FROM reminder WHERE reminder_id =${id}`, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    if(res.length){
      console.log("found reminder", res[0]);
      result(null, res[0]);
      return
    }
    // no reminder found with id 
    result({kind: "not found"}, null);
  });
};

/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the reminders or reminders with specific title from the notesdb 
  schema using select query
*/

Reminder.getAll = (name, result)=>{
  let query = 'SELECT * FROM reminder';
  console.log(name);
  if(name){
    query += `WHERE reminder_name LIKE '%${title}%'`;
  }
  sql.query(query, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    console.log('reminder: ', res);
    result( null, res);
  });
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the reminder for the given id from the notesdb schema using update query
*/

Reminder.updateById =  (id, reminder, result)=>{
  sql.query(
    "UPDATE reminder SET reminder_name = ?, reminder_description= ?, reminder_creation_date = ? WHERE reminder_id = ?",
    [reminder.reminder_name, reminder.reminder_description,  reminder.reminder_creation_date, id],
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no reminder found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('updated reminder: ', {id: id, ...reminder});
      result(null, {id: id, ...reminder})
    }
  )
}
/* 
  remove should be a function that calls query function on sql object 
  to delete the reminder for the given id from the notesdb schema using delete query
*/
Reminder.remove = (id, result)=>{
  sql.query(
    `DELETE FROM reminder WHERE reminder_id = ?`, id,
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no reminder found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('deleted reminder with id: ', id );
      result(null, res)
    }
  )
}
/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the reminders from the notesdb schema using delete query
*/
Reminder.removeAll = (result)=>{
  sql.query(
    "DELETE FROM reminder",
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      console.log(`deleted ${res.affectedRows} categories`);
      result(null, res)
    }
  )
}

module.exports = Reminder;
