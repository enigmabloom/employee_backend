var express=require("express");
const router= express.Router();
const employeemodel=require("../model/employeemodel");
router.use(express.json());

router.post('/add',async(req,res)=>{
    try{
var item = req.body;
var data =new employeemodel(item)
var savedData =await data.save();
// above three steps in single line
//await new studentModel(req.body).save()
res.status(200).send("Data added successfully!!");   
}catch(error){
res.status(404).send("unable to send data")
    }
});
router.get("/get",async(req,res)=>{
    try{
        var data=await employeemodel.find();
        res.status(200).send(data);
    }catch(error){
    res.status(404).send("unable to send");
}

    });
    //TODO: get single data from db  using api '/api/employeelist/:id'
    router.get("/get/:id", async (req, res) => {
        try {
            const employeeId = req.params.id; 
            const employee = await employeemodel.findById(employeeId); 
    
            if (!employee) {
                return res.status(404).send("Employee not found"); 
            }
    
            res.status(200).json(employee); 
        } catch (error) {
            console.error(error); 
            res.status(500).send("Error retrieving employee data"); 
        }
    });
    //router.delete
    router.delete("/delete/:id", async (req, res) => {
        try {
            console.log(req.params.id);
            await employeemodel.findByIdAndDelete(req.params.id);
            
            res.status(200).send("Employee deleted successfully!");
        } catch (error) {
            res.status(404).send("Error deleting Employee");
        }
    });

    router.put("/edit/:id",async(req,res)=>{
        try {
            await employeemodel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).send("updated  successfully");
        } catch (error) {
            
        res.status(404).send("Error updating employee");
        }
    });
    

module.exports = router;
