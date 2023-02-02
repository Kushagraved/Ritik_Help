const express=require('express');
const router=express.Router();

//  /api/matches
router.get('/',(req,res)=>{
  res.json({
    message:'get all matches'
  });
});


module.exports=router;