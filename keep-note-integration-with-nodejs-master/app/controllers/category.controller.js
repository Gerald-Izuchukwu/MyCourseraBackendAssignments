const Category = require("../dao/category.dao.js");
const categoryService = require("../service/category.service.js");
const {create, findById, getAll, remove, removeAll, updateById} = categoryService

/* Call the create method of categoryService object and return the result back*/
exports.create = (req, res)=>{
    // validate request 
    if(!req.body){
        res.status(400).send({
            message: 'Content can not be empty'
        })
    }
    // create a category
    const category = new Category({
        category_name : req.body.category_name,
        category_description : req.body.category_description,
        category_creation_date : req.body.category_creation_date,
    })

    // save category
    create(category, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while creating category'
            });
        }else{
            res.send(data)
        }
    })
    
}

/* Call the getAll method of categoryService object and return the result back */
exports.findAll = (req, res)=>{
    const name = req.query.category_name;
    getAll(name, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while fetching categorys'
            })
        }else{
            res.send(data)
        }
    })
}

/* Call the findById method of categoryService object and return the result back */
exports.findOne = (req, res)=>{
    findById(req.params.id, (err, data)=>{
        if(err){
            if(err.kind === 'not found'){
                res.status(404).send({
                    message: `No category with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error retrieving category '
                })
            }
        }else{
            res.send(data)
        }
    })
}


/* Call the updateById method of categoryService object and return the result back */
exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Body cannot be empty"
        })
    }
    console.log(req.body);
    updateById(req.params.id, new Category(req.body), (err, data)=>{
        if(err){
            if(err.kind==='not found'){
                res.status(404).send({
                    message: `No Category with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error updating  Category '
                })
            }
        }else{
            res.send(data)
        }
    })
}

/* Call the remove method of categoryService object and return the result back */
exports.delete = (req,res)=>{
    remove(req.params.id, (err, data)=>{
        if(err){
            if(err.kind==='not found'){
                res.status(404).send({
                    message: `No category with id of ${req.params.id} found` 
                })
            }else{
                res.status(500).send({
                    message: 'Error deleting  category '
                })
            }
        }else{
            res.send({message: 'category was deleted'})
        }
    })
}

/* Call the removeAll method of categoryService object and return the result back */
exports.deleteAll = (req,res)=>{
    removeAll( (err, data)=>{
        if(err){
            res.status(500).send({
                message: 'Error deleting all categories '
            })
        }else{
            res.send({message: 'all categories were deleted'})
        }
    })
}