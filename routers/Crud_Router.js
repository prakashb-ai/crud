const express = require('express')
const router = express.Router()
const Crud = require('../models/Crud_Schema')

router.post('/api/details',async(req,res)=>{
    const crud = new Crud({
        name:req.body.name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        address1:req.body.address1,
        address2:req.body.address2
    })
    const saveData= await crud.save()
    res.send(crud)

    if(saveData){
        return res.status(200).json({message:"data was created"},{success:true})
    }
    else{
        return res.status(404).json({message:"data was not created"},{success:false})
    }
})

router.get('/api/v3/calldetails',async(req,res)=>{
    const get_data= await Crud.find(req.params)
    res.send(get_data)
    if(get_data){
        return res.status(200).json({message:"data was created"},{success:true})
    }
    else{
        return res.status(404).json({message:"data was not created"},{success:false})

    }
    
})
router.put('/api/:id',async(req,res)=>{
    const update_data=await Crud.findByIdAndUpdate(req.params)
    if(update_data){
        return res.status(200).send('data was updated')
    }
    else{
        return res.status(500).json('server problem')
    }
})

router.delete('/api/:id',async(req,res)=>{
    const delete_Data=await Crud.findByIdAndDelete(req.params.id)
    //res.send(delete_Data)
    if(delete_Data){
        return res.status(200).send("data was deleted")
    }
    else{
        return res.status(404).send('data was not found')

    }


})



module.exports=router