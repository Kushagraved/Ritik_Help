const express=require('express');
const router=express.Router();
const Player=require('../../database/models');
//  /api/agents
router.post('/',async(req,res)=>{
  try {
    const agent=await Player.create(req.body);
    res.status(200).json(agent);

  } catch (error) {
    console.log(error);
  }
});


module.exports=router;