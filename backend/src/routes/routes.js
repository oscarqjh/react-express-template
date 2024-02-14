import express from "express";
import { Company } from "../model/model.js";

const APIrouter = express.Router();

/**
 * getAllCompany method
 * @return {Array} found
 */
APIrouter.get("/getAllCompany", (req, res) => {
  Company.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

/**
 * addCompany method
 * @param {String} company_name
 * @param {String} company_email
 * @return {String} result
 */
APIrouter.post("/addCompany", (req, res) => {
  const newCompany = new Company({
    company_name: req.body.company_name,
    company_email: req.body.company_email,
  });

  newCompany
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//test Method
APIrouter.get("/test", (req, res) => {
  res.send("test");
});

export { APIrouter };
