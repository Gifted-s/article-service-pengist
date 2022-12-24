 

const handleGetCategories =function(req,res, Category){
   
    Category.find({}).then(categories=>{
        
        res.status(200).send({categories})
    })
    .catch(err=>{
        res.status(400).send({error:err.message})
    })
}

module.exports  =handleGetCategories