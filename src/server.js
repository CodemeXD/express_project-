
const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    const start = Date.now();
  
   
    res.on('finish', () => {
      const end = Date.now();
      const responseTime = end - start;
      console.log(`Temps de réponse : ${responseTime}ms`);
    });
  
    
    next();
  });

  
app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'build','index.html'));
})




app.listen(PORT,()=>(
    console.log(`Le serveur à été lancé sur le port ${PORT}`)
))