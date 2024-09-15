const express = require("express");
const app = express();
const port = 5000;

app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // const kidneyUserId = req.query.kidneyId;
    // const UserName = req.headers.UserName;
    // const UserPassword = req.headers.UserPassword;

    // if(UserName == "hakirat" && UserPassword == "123410"){
    //     if(kidneyUserId == 1 || kidneyUserId == 2){
    //         res.json({
    //             msg : "Your kidney is prefect!";
    //         })
    //     }
    //     res.status.json({
    //         msg : "your kidney is not prefect!"
    //     })
    // }

    // username and password not same Then return massage
    if(username != "JamesAllen" && password != "james@123"){
        res.status(403).json({
            msg:"user donest exist",
        })
        return;
    }
    // kidneyId value is not 1,2 Then return massage -
    if(kidneyId != 1 && kidneyId != 2){
        res.status(401).json({
            msg : "wroung inputs",
        })
        return;
    }
    // otherwise your heart is good 
    res.send("your heart is healthy!")
})

app.listen(port);