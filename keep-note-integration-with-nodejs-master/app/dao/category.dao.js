const connection  = require('./db');
let sql = connection();


/* constructor to initialize category with category_name, category_description 
and category_creation_date as its properties*/

const Category = function(category){
  this.category_name = category.category_name,
  this.category_description = category.category_description,
  this.category_creation_date = category.category_creation_date
}

/* 
  create should be a function that calls the query function on sql object
  to persist category data in MySQL categorysdb schema using insert query
*/

Category.create = (newCategory, result)=>{
  sql.query("INSERT INTO category SET ?", newCategory, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    console.log('Created Category: ', {id: res.insertId, ...newCategory});
    result(null, {id: res.insertId, ...newCategory});
  });
};

/* 
  findById should be a function that calls the query function on sql object 
  to fetch the category by the provided Id from the categorysdb schema using select query
*/

Category.findById = (id, result)=>{
  sql.query(`SELECT * FROM category WHERE category_id =${id}`, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    if(res.length){
      console.log("found category", res[0]);
      result(null, res[0]);
      return
    }
    // no category found with id 
    result({kind: "not found"}, null);
  });
};


/* 
  getAll should be a function that calls the query function on sql object 
  to fetch all the categories or categories with specific name from the categorysdb 
  schema using select query
*/

Category.getAll = (name, result)=>{
  let query = 'SELECT * FROM category';
  console.log(name);
  if(name){
    query += `WHERE category_name LIKE '%${title}%'`;
  }
  sql.query(query, (err, res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return
    }
    console.log('category: ', res);
    result( null, res);
  });
};

/* 
  updateById should be a function that calls query function on sql object 
  to update the category for the given id from the categorysdb schema using update query
*/

Category.updateById = (id, category, result)=>{
  sql.query(
    "UPDATE category SET category_name = ?, category_description= ?, category_creation_date = ? WHERE category_id = ?",
    [category.category_name, category.category_description,  category.category_creation_date, id],
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no category found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('updated category: ', {id: id, ...category});
      result(null, {id: id, ...category})
    }
  )
}

/* 
  remove should be a function that calls query function on sql object 
  to delete the category for the given id from the categorysdb schema using delete query
*/
Category.remove = (id, result)=>{
  sql.query(
    `DELETE FROM category WHERE category_id = ?`, id,
    (err, res)=>{
      if(err){
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if(res.affectedRows == 0){
        // no category found
        result({kind: 'not found'}, null)
        return;
      }
      console.log('deleted category with id: ', id );
      result(null, res)
    }
  )
}

/* 
  removeAll should be a function that calls query function on sql object 
  to delete all the categories from the categorysdb schema using delete query
*/

Category.removeAll = (result)=>{
  sql.query(
    "DELETE FROM category",
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

module.exports = Category;
