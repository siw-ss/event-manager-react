const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const EventModel = require("./models/Events");
const multer = require('multer');
const path = require('path');


//storage
const storage = multer.diskStorage({
  destination: (req, file,cb)=>{
    cb(null, './Images')
  },
  filename: (req, file,cb)=>{
    console.log(file)
    cb(null,Date.now() +"--"+ path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})

const cors = require("cors");
const { authUser,authRole } = require("../client/src/basicAuth");

app.use(express.json());
app.use(cors());
app.use(setUser);
app.use('/Images',express.static('Images'))

/*mongoose.connect(
  "mongodb://localhost:27017/MERN-Beginners"
)*/
mongoose.connect(
  "mongodb+srv://siwar:enFg7TImIJNcRwOE@cluster0.jtjhezz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log("failed to connect");
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
function setUser(req,res,next){
  const userId = req.body.userId
  if(userId){
    req.user = users.find(user => user.id===userId)
  }
  next()
}
app.get("/getEvents", (req, res) => {
  EventModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.post("/uploadImage",upload.single("image"), async (req,res)=>{
  console.log(req.file)
  res.send("Single File upload success")
})

app.post("/createEvent",upload.single('image'), async (req, res) => {
  
  const eventName = req.body.eventName;
  const date = req.body.date;
  const description = req.body.description;
  const image = req.file.path;
  const event = req.body;
  const newEvent = new EventModel({eventName,date,description,image});
  await newEvent.save();

  res.json(event);
});

app.put("/updateEvent", async (req, res) => {
  const newEventName = req.body.newEventName;
  const newEventDescription = req.body.newEventDescription;
  const newEventDate = req.body.newEventDate;
  const id = req.body.id;
  try {
    await EventModel.findById(id, (err, updatedEvent)=>{
      if(newEventName){updatedEvent.eventName = newEventName}
      if(newEventDescription){updatedEvent.description = newEventDescription}
      if(newEventDate){updatedEvent.date = newEventDate}
      updatedEvent.save()
      res.send("update");
    })
  } catch (err) {
    console.log(err);
  }
});
app.post("/updateEventImage",upload.single('image'), async (req, res) => {
  const id = req.body.id;
  const newEventImage = req.file.path;
  try {
    await EventModel.findOneAndUpdate(id,  (err,updatedEvent)=>{
      if(req.file){updatedEvent.image = newEventImage}else{console.log("error with file")}
      updatedEvent.save();
      res.send("update")
    })
    .then(()=>{
      alert('image updated')
    })
  } catch (err) {
    alert("problem with image update");
    console.log(err);
  }
});
/*app.put("/updateEventImage",upload.single('newimage'), async (req, res) => {
  const newEventImage = "/Images"+req.file.path;
  const id = req.body.id;
  try {
    await EventModel.findById(id, (err, updatedEventImage)=>{
      if (newEventImage) {updatedEvent.image = newEventImage}
      updatedEventImage.save()
      res.send("update image");
    })
  } catch (err) {
    alert("problem with image update");
    console.log(err);
  }
});*/

app.delete("/deleteEvent/:id", async (req, res) => {
  const id = req.params.id;
  
  await EventModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});



app.listen(3001,()=>{
  console.log("port connected");
})
