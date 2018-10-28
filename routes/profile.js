var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:1234@localhost:1818/CompanyElmasri'
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userinformation/:gender', async function(req, res, next) {
  /*var id = req.params.id;
  var sid = req.params.sid;*/
  var gender1 = req.params.gender;
  
  const client = new Client({
    connectionString: connectionString,
  })
  await client.connect()
  const emp = await client.query("SELECT * FROM EMPLOYEE WHERE sex='" + gender1 + "'")
  await client.end()
  res.send(emp.rows);
});

router.post('/userinformation', async function(req, res, next) {
    /* Open this link in Postman program */
    /*var id = req.params.id;
    var sid = req.params.sid;*/
    var gender1 = req.body.gender;
    
    const client = new Client({
      connectionString: connectionString,
    })
    await client.connect()
    const emp = await client.query("SELECT * FROM EMPLOYEE WHERE sex='" + gender1 + "'")
    await client.end()
    res.send(emp.rows);
  });
  

module.exports = router;
