var express = require('express');
var router = express.Router();
const {XMLParser, XMLBuilder, XMLValidator} = require('fast-xml-parser');

const options = { ignoreAttributes : true};
const parser = new XMLParser(options);

router.get('/', async (req, res, next) => {
    let jsonObj = '';
    if(req.data){
        jsonObj = parser.parse(req.data);
        console.log(JSON.stringify(jsonObj));
    }
    res.render('atom', { title:'Atom Reader', data:jsonObj});
});

module.exports = router;