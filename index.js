const express = require('express');
const app = express();
require('./databasesystem/config');
const Users = require('./databasesystem/Users');
const Nft = require('./databasesystem/Nfts')
const cors = require('cors');
app.use(express.json());
app.use(cors());
const multer = require('multer')



const upload = multer({ 
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'uploads/')
    },
    filename:function(req,file,cb)
    {
      cb(null,file.fieldname+"-"+Date.now()+".jpg")
    }
  })
}).single("user_image");



app.post('/signup', async (req, res) => {
  try {
    const user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).json({ message: 'User created successfully', user: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/login',async (req,res)=>{
  if(req.body.email && req.body.password){
    const result = await  Users.findOne(req.body).select("-password");
    if(result){
      res.send(result)
    }else{
      res.status(403).json({message:"Invalid email or password"})
    }
  }else{
    res.send("Email or Password missing")
  }
})

app.post("/createnft", upload ,async (req, res) => {
  try {
    let nft = new Nft(req.body);
    let result = await nft.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving NFT:", error);
    res.status(500).json({ error: "Failed to save NFT" });
  }
});


app.get("/nfts", async (req,res)=>{
  const nfts=await Nft.find(req.query);
  if(nfts.length>0){
    res.send(nfts)
  }else{
    res.send({
      result:"The list is Empty"
    })
  }  
})


app.get("/search/:key", async (req,res)=>{
  let result = await Nft.find({
    "$or":[
      { name : {$regex : req.params.key}}
    ]
  });
  res.send(result)
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
