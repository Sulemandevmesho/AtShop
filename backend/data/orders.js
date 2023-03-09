//63846eefedfe21506ab34010
module.exports = orders=[{
    customer_name:"xyz",
    items:[{
        product:"63d6a6f54f8164ee5f0f658a",
        qty:2
    }],
    total:50,
    status:"under prosess"
}]
//how to query ref ids
//using populate mathode
//Order.find({}).populate({path:'P_id',select:["name","category","description","price"]});