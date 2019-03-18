const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express();
const PORT = 8080;
const SELECT_ALL_USERS = 'SELECT * FROM users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hkt'
});



connection.connect(err => {
    if(err){
        return err;
    }
});

app.use(cors());

//root
app.get('/', (req, res)=>{
    res.send('go to /users to see users')
});

// add username and password
app.get('/users/add', (req, res) => {
    const {username, password} = req.query;
    const INSERT_USERS = `INSERT INTO users(username, password) VALUES('${username}', '${password}')`
    connection.query(INSERT_USERS, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('added user')
        }
    });
});

//Seach for HKTCS
app.get('/users/findHKTCS', (req,res)=>{
    const {username, password}=req.query;
    const FIND_HKTCS_USER = 
    `
    SELECT users.username 
    FROM users u, hktcontrolstaffs hktcs 
    JOIN users ON hktcs.username = users.username 
    WHERE u.username='${username}' AND u.password='${password}' AND hktcs.username='${username}'
    `
    connection.query(FIND_HKTCS_USER, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results // return username
            })
        }
    });
});

//Search for ET
app.get('/users/findET', (req,res)=>{
    const {username, password}=req.query;
    const FIND_ET_USER = 
    `
    SELECT users.username 
    FROM users u, engineeringteams et 
    JOIN users ON et.username = users.username 
    WHERE u.username='${username}' AND u.password='${password}' AND et.username='${username}'
    `
    connection.query(FIND_ET_USER, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results // return username
            })
        }
    });
});

app.get('/workitems', (req,res)=>{
    const SELECT_ALL_WORKITEMS = `SELECT * FROM workitems`
    connection.query(SELECT_ALL_WORKITEMS, (err, results)=>{
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data: results
            })
        }
    });
});

// display all users
app.get('/users', (req, res)=>{
    connection.query(SELECT_ALL_USERS, (err, results)=>{
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data: results // return all user info
            })
        }
    });
});

// display all orders
app.get('/orders', (req, res)=>{
    const SELECT_ALL_ORDERS = `SELECT * FROM orders;`;
    connection.query(SELECT_ALL_ORDERS, (err, results)=>{
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data:results // return all order info
            })
        }
    });
});

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});