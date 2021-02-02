const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
const Ajv = require('ajv');
const validationSchema = require('./schemas/index');
const ajv = new Ajv.default({allErrors: true});
require("ajv-errors")(ajv, {allErrors: true})


const validator = (req, res, next) => {
  let data = req.body;
  console.log('validation:', data)
  const valid = ajv.validate(validationSchema, data);

  if (!valid) {
    console.log(ajv.errors);
    res.send(ajv.errors.map((el) => {
      return {
        inputName: el.dataPath.replace(/[^a-zA-Z ]/g, "."),
        errorText: el.message,
      }
    }));
    return;
  }

  next();
};

router.get('/', users.showStartPage);

router.post('/', upload.none(), validator, users.testMiddleWare);



module.exports = router;
