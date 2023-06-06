import express from "express";
import cors from "cors";
import { foods, Tags,sample_users } from "./data";
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json())

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req,res)=>{
    res.send(foods);
})
app.get("/api/foods/search/:searchTerm", (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const food = foods.filter(food=> food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(food)
})
app.get("/api/foods/tags", (req,res)=>{
    res.send(Tags)
})
const port = 8080;
app.listen(port,() =>{
    console.log("website served on http://localhost:" + port);
})


// ! đăng ký , đăng nhập

app.use(cors({
  credentials: true,
  origin:["http://localhost:4200"]
}))


app.post("api/users/login",(req,res) => {
  const {email,password} = req.body
  const user= sample_users.find(user => user.email === email && user.password === password)
if(user){
  res.send(generateTokenResponse(user))
}else{
  res.status(400).send("user name ddd")
}
})

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  },"SomeRandomText",{
    expiresIn: "30d"
  });

  user.token = token
  return user
}

app.listen(port, () => {
  console.log("website served on http://localhost:" + port)
})