const express = require('express')
const mysql = require('mysql')
const { RANDOM } = require('mysql/lib/PoolSelector')
const app = express()
const cors = require("cors")

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'CityAccounting'

})


db.connect((err) =>{
    if (err){
        console.log(err)
    }
    console.log('MySql Connected')
})

app.post("/signUp", (req, res) => {
    const account =  req.body.account;
    const password = req.body.password;
    const id = req.body.id;
    db.query("INSERT INTO Users (id, password, username) VALUES (?, ?, ?)",
    [id, password, account],
    (err ,result) => {
        if (err) {console.log(err)}
        else {res.send("Values Inserted")}
    })
})

app.post("/login", (req, res) => {
    const account = req.body.account;
    const password = req.body.password;
    db.query("SELECT * FROM Users WHERE username = (?) AND password = (?)",
    [account,password],
    (err, result)=>{
        if (err) {console.log(err)}
        else {res.send('Success'),console.log(result)}
    })
}) 

app.listen('3000',() =>{
    console.log('server started on port 3000')
})