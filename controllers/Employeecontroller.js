import EmployeeModel from "../models/employee.js"


class Employeecontroller {

   static createDoc = async(req, res) =>{
      //console.log(req.body)
      try{
        const {name, email, role} = req.body
        const doc = new EmployeeModel({
            name:name,
            email:email,
            role:role
        })
        // Saving Document
        const result = await doc.save()
        //console.log(result);
        res.redirect('/')
      }catch(err){
         console.log(error)
      }
     
   }

  static getAllDoc = async (req, res) =>{
      try{
          const result = await EmployeeModel.find()
         // console.log(result)
          res.render("index", {data: result})
      }catch(err){
          console.log(error)
      }
         
    }

    //Show Edit Form With Data
    static editDoc = async (req, res) =>{
      //  console.log(req.params.id);
      try{
       const result = await EmployeeModel.findById(req.params.id)
       console.log(result);
       res.render("edit", {data:result})
      }catch(err){
        console.log(error)
      }
       
   }

   //////Update Document//////////

   static updateDocById = async(req, res) =>{
    //console.log(req.para.id);
    //console.log(req.body);

    try{
        const result = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
        console.log(result);
       
       }catch(err){
         console.log(error)
       }
      
       res.redirect("/")
   }


   ///////// Delete Document ////////////
   static deleteDocById = async(req, res) =>{
    try{
      const result = await EmployeeModel.findByIdAndDelete(req.params.id)
      res.redirect("/")
    }catch(err){
        console.log(error);
    }
    
   }

}

export default Employeecontroller;