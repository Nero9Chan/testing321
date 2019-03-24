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

//Login validation
app.get('/users/validation', (req,res)=>{
    const {username, password}=req.query;
    const FIND_USER = 
    `
    SELECT *
    FROM users
    WHERE username='${username}' AND password='${password}'
    `
    connection.query(FIND_USER, (err, results)=>{
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

//Select HKTCS details
app.get('/users/hktcs_details', (req,res)=>{
    const {username}=req.query;
    const FIND_USER = 
    `
    SELECT *
    FROM hktcontrolstaffs
    WHERE username='${username}'
    `
    connection.query(FIND_USER, (err, results)=>{
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

//Select ET details
app.get('/users/et_details', (req,res)=>{
    const {username}=req.query;
    const FIND_USER = 
    `
    SELECT *
    FROM engineeringteams
    WHERE username='${username}'
    `
    connection.query(FIND_USER, (err, results)=>{
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

// Select all users
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

// Select workitems with specific type (ATG or IBI)
app.get('/workitems', (req, res)=>{
    const {type}=req.query;
    const SELECT_ALL_WI = 
    `
    SELECT * 
    FROM workitems
    WHERE type='${type}'
    `
    connection.query(SELECT_ALL_WI, (err, results)=>{
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