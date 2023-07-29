const connection  = require('./db');

/*
variable to store connection object to perform CRUD operations using connection module
*/
let sql = connection();

/* constructor to initialize note with note_title, note_content, note_status,
 note_creation_date,note_id and reminder_id  as its properties*/
const Note = function(note){
  this.note_title = note.note_title,
  this.note_content = note.note_content,
  this.note_status = note.note_status,
  this.note_creation_date = note.note_creation_date,
  this.reminder_id = note.reminder_id

}

/* 
  create should be a function that calls the query function on sql object to persist note 
  data in MySQL notesdb schema using insert query. Write separate insert queries to insert row
  in Note, NoteCategory and NoteReminder tables
*/

Note.create = (newNote, result)=>{
  sql.query("INSERT INTO note SET ?", newNote, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    console.log('Created Note: ', {id: res.insertId, ...newNote});
    result(null, {id: res.insertId, ...newNote});
  });
};


/* 
  findById should be a function that calls the query function on sql object 
  to fetch the note by the provided Id from the notesdb schema using select query.
  Join queries should be used to join Note, NoteCategory and NoteReminder tables
*/

Note.findById = (id, result)=>{
  sql.query(`SELECT * FROM note WHERE note_id =${id}`, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    if(res.length){
      console.log("found note ", res[0]);
      result(null, res[0]);
      return
    }
    // no note found with id 
    result({kind: "not found"}, null);
  });
};


/* 
  getAll should be a function that calls the query function on sql object to fetch all 
  the notes or notes with specific title from the notesdb   schema using select query.
  Join queries should be used to join Note, NoteCategory and NoteReminder tables.
*/

Note.getAll = (title, result)=>{
  let query = 'SELECT * FROM note';
  console.log(title);
  if(title){
    query += `WHERE note_title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(null, err);
      return
    }
    console.log('Notes: ', res);
    result( null, res);
  });
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the note for the given id from the notesdb schema using update query
*/

Note.updateById = (id, note, result)=>{
  sql.query(
    "UPDATE note SET note_title = ?, note_content = ?, note_status = ?, note_creation_date = ? WHERE note_id = ?",
    [note.note_title, note.note_content, note.note_status, note.note_creation_date, id],
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no note found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('updated note: ', {id: id, ...note});
      result(null, {id: id, ...note})
    }
  )
}

/* 
  remove should be a function that calls query function on sql object 
  to delete the note for the given id from the notesdb schema using delete query
*/
Note.remove =  (id, result)=>{
  sql.query(
    `DELETE FROM note WHERE note_id = ?`, id,
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no note found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('deleted note with id: ', id );
      result(null, res)
    }
  )
}

/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the notes from the notesdb schema using delete query
*/
Note.removeAll = (result)=>{
  sql.query(
    "DELETE FROM note",
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      console.log(`deleted ${res.affectedRows} notes`);
      result(null, res)
    }
  )
}

module.exports = Note;
