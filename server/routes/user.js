const { Console } = require('console')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'host', //localhost
  user: 'databasename', //DataBase Userid
  password: 'DataBase Password', //DataBase Password
  database: 'DataBase Name', //DataBase Name
})
/* get all user list */
router.get('/user_list', (req, res, next) => {
  connection.query(
    `SELECT *
      FROM user_info
    ;`,
    (err, result) => {
      res.json(result)
    }
  )
})
/* post list */
router.get('/post_list', (req, res, next) => {
  connection.query(
    `SELECT *
      FROM post_list
      ;`,
      (err, results, fields) => {
        res.send({
          success: true,
          data: results
        })
      }
    )
})
/* log in*/
router.post('/login', (req, res, next) => {
  let data = req.body
  
  connection.query(
    `SELECT *
      FROM user_info 
        WHERE id = ?
          AND password = ?
    `,
    [
      data.id,
      data.password
    ],
    (err, results, fields) => { //results: 열 fields: 행
      if (results.length > 0){
        res.send({
          data: "Lgoin Success"
        })
      }else{
        res.send({
          data: "Lgoin Failed"
        })
      }
    })
})

/* sign up */
router.post('/signup', (req, res, next) => {
  let data = req.body
  connection.query(
    `INSERT
      INTO user_info (
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
      data.username
    ],
    (err, result, fields) => {
      console.log(result)
      res.json(result)
    }
  )
})
/* post */
router.post('/post', (req, res, next) => {
  let data = req.body;
  connection.query(
    `INSERT
      INTO post_list (
        title,
        small_title,
        content
      )
      VALUES (
        ?,  
        ?,
        ?
      )
    `,
    [
      data.title,
      data.small_title,
      data.content
    ],
    (err, result, fields) => {
      console.log(result);
      res.json(result)
    }
  )
})


module.exports = router
