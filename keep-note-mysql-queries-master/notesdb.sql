-- create a schema called `notesdb`
create DATABASE notesdb;

-- create the tables for Note, Category, Reminder, User, UserNote, NoteReminder and NoteCategory

-- Note table fields: note_id, note_title, note_content, note_status, note_creation_date
create TABLE Note(
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    note_title VARCHAR(255) NOT NULL,
    note_content TEXT,
    note_status BIT,
    note_creation_date DATE
);
  
-- User table fields: user_id, user_name, user_added_date, user_password, user_mobile
create TABLE User(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    user_added_date DATE,
    user_password VARCHAR(20) NOT NULL,
    user_mobile BIGINT
);

-- alter table User modify column user_added_date date

-- Category table fields : category_id, category_name, category_descr, category_creation_date, category_creator
create TABLE Category(
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    category_descr TEXT,
    category_creation_date DATE,
    category_creator VARCHAR(100)
);

-- Reminder table fields : reminder_id, reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator
create TABLE Reminder (
  reminder_id INT AUTO_INCREMENT PRIMARY KEY,
  reminder_name VARCHAR(100) NOT NULL,
  reminder_descr TEXT,
  reminder_type VARCHAR(50),
  reminder_creation_date DATE,
  reminder_creator VARCHAR(100)
);

-- NoteCategory table fields : notecategory_id, note_id, category_id
create TABLE NoteCategory(
    notecategory_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- NoteReminder table fields : notereminder_id, note_id, reminder_id
create TABLE NoteReminder(
    notereminder_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    reminder_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id)
    FOREIGN KEY (reminder_id) REFERENCES Reminder(reminder_id)
);

-- Usernote table fields : usernote_id, user_id, note_id
create TABLE UserNote(
    usernote_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    note_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (note_id) REFERENCES Note(note_id)
);

-- insert the rows into the created tables (Note, Category, Reminder, User, UserNote, NoteReminder and NoteCategory)
insert into course(course_name, duration) values('Python', 80), ('RDBMS', 40), ('Machine Learning', 50), ('Angular Framework', 80);
insert INTO Note(note_title, note_content, note_status, note_creation_date) VALUES('FirstNote', 'This is first note', 0, CURRENT_DATE());
insert INTO User(user_name, user_added_date, user_password, user_mobile) VALUES('Gerald', CURRENT_DATE(), 'thisispassword', 8134****);
insert INTO Category(category_name, category_descr, category_creation_date, category_creator) VALUES('Tech', 'This is tech', CURRENT_DATE(), 'James Bond');
insert INTO Reminder(reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator) VALUES('Reminder 1', 'This is reminder 1', 'This is reminder type', CURRENT_DATE(), 'James Bond again');
insert INTO NoteCategory() VALUES();
insert INTO NoteReminder() VALUES();
insert INTO UserNote() VALUES();

-- Fetch the row from User table based on Id and Password.
select * FROM User where user_id=1, user_password='thisispassword';

-- Fetch all the rows from Note table based on the field note_creation_date.
select * FROM Note WHERE note_creation_date = '1998-10-19';

-- Fetch all the Categories created after the particular Date.
select * FROM Category WHERE category_creation_date > '1998-10-19';


-- Fetch all the Note ID from UserNote table for a given User.
select note_id FROM UserNote WHERE user_id = '23';


-- Write Update query to modify particular Note for the given note id.
UPDATE Note SET note_title = 'new_title', note_content = 'new_content', note_status = 'new_status', note_creation_date = 'new_date' WHERE note_id = '12';


-- Fetch all the Notes from the Note table by a particular User.
select * FROM Note INNER join UserNote ON Note.note_id = UserNote.note_id WHERE UserNote.user_id = 'user_id_value';

-- Fetch all the Notes from the Note table for a particular Category.
select * FROM Note INNER join NoteCategory ON Note.note_id = NoteCategory.note_id WHERE NoteCategory.category_id = 'category_id_value';



-- Fetch all the reminder details for a given note id.
select * FROM Reminder INNER join NoteReminder ON Reminder.reminder_id = NoteReminder.reminder_id WHERE NoteReminder.note_id = 'note_id_value';


-- Fetch the reminder details for a given reminder id.
select * FROM Reminder WHERE reminder_id = 'reminder_id_value';


-- Write a query to create a new Note from particular User (Use Note and UserNote tables - insert statement).
insert INTO Note (note_title, note_content, note_status, note_creation_date) VALUES ('new_title', 'new_content', 'new_status', 'YYYY-MM-DD');
insert INTO UserNote (user_id, note_id) VALUES ('user_id_value', LAST_INSERT_ID());


-- Write a query to create a new Note from particular User to particular Category(Use Note and NoteCategory tables - INSERT statement)
INSERT INTO Note (note_title, note_content, note_status, note_creation_date) VALUES ('new_title', 'new_content', 'new_status', 'YYYY-MM-DD');
INSERT INTO NoteCategory (note_id, category_id) VALUES (LAST_INSERT_ID(), 'category_id_value');
INSERT INTO UserNote (user_id, note_id) VALUES ('user_id_value', LAST_INSERT_ID());

-- Write a query to set a reminder for a particular note (Use Reminder and NoteReminder tables - insert statement)
insert INTO Reminder (reminder_name, reminder_description, reminder_creation_date) VALUES ('new_reminder_name', 'new_reminder_description', 'YYYY-MM-DD');
insert INTO NoteReminder (note_id, reminder_id) VALUES ('note_id_value', LAST_insert_ID());


-- Write a query to delete particular Note added by a User(Note and UserNote tables - delete statement)
delete FROM UserNote WHERE note_id = 'note_id_value';
delete FROM Note WHERE note_id = 'note_id_value';


-- Write a query to delete particular Note from particular Category(Note and NoteCategory tables - delete statement)
delete FROM NoteCategory


