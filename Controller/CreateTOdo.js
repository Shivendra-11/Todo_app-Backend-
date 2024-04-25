
//import th model
const Todo = require("../Models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
            //extract title and description from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}
