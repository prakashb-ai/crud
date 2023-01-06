const mongoose = require('mongoose')

const Crud_schema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required: true
    },
    address1:{
        type: String,
        required: true
    },
    address2:{
        type:String,
        required: true
    }

})

Crud_schema.virtual('id').get(function(){
    return this._id.toHexString()
})

Crud_schema.set('toJSON',{
    virtual:true
})

module.exports=mongoose.model('Crud',Crud_schema)