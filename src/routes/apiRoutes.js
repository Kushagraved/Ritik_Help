const express=require('express');
const app=express();
const matchRoutes=require('./matchRoutes');
const agentRoutes=require('./agentRoutes');

app.use('/matches',matchRoutes);
app.use('/agents',agentRoutes);



module.exports=app;

