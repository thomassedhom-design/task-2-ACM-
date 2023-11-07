import express from "express";
require("dotenv").config()
import userRouter from "./routes/userRoutes"
import toDoRouter from "./routes/toDoRoutes"
let app = express();

app.use(express.json())

app.use("/users", userRouter)
app.use("/todo", toDoRouter)

app.all('*', (req, res, next) => 
    res.json({status: "ERROR", data: {msg:"Not Found Url"}}).status(404)
)

app.use((error,req,res,next) => {
    return res.status(error.statusCode || 500).json({
        status: "ERROR",
        data: {msg:error.message},
        code:  error.code || 500
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("app is listening on port ", process.env.PORT || 3000);
})