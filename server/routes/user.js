const { Console } = require('console')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '158.247.215.229', //localhost
  user: 'express_dev',
  password: '!@#Dlckdfuf141',
  database: 'express_dev',
})
/* get all user list */
router.get('/', (req, res, next) => {
  connection.query(
    `SELECT *
      FROM topic
    ;`,
    (err, result) => {
      res.json(result)
    }
  )
})
/* log in*/
router.post('/login', (req, res, next) => {
  let data = req.body
  
  connection.query(
    `SELECT *
      FROM topic 
        WHERE id = ?
          AND password = ?
    `,
    [
      data.id,
      data.password
    ],
    (err, results, fields) => { //results: 열 fields: 행
      if (results.length > 0){
        console.log("Login Success")
      }else{
        console.log("Login Failed")
      }
    })
})

/* sign up */
router.post('/signup', (req, res, next) => {
  let data = req.body
  connection.query(
    `INSERT
      INTO topic (
        id,
        password,
        username
      )
      VALUES (
        ?,
        ?,
        ?
      )
    `,
    [
      data.id,
      data.password,
      data.username,
    ],
    (err, result, fields) => {
      console.log(result)
      res.json(result)
    }
  )
})

module.exports = router