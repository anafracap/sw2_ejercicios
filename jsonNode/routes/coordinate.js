const express = require('express');
const router = express.Router();

const ajv = require("./../schemas");
const schema = ajv.coordinate;
const validate = ajv.getSchema("coordinate");

router.get('/', function(req, res, next) {
  res.render('coordinate', { title: 'Coordinate schema and JSON'});
});

router.post('/', function(req, res, next){
  const data = JSON.parse(req.body.json);
  const valid = validate(data);
  if (valid) {
    console.log("JSON válido");
    res.status(200).send('El JSON es válido');
  } else {
    console.log(validate.errors);
    res.status(400).send('El JSON NO es válido o ha ocurrido un error');
  }
});

module.exports = router;