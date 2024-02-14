import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  company_name: {
    required: true,
    type: String,
  },
  company_email: {
    required: true,
    type: String,
  },
});

const Company = mongoose.model("Company", dataSchema);

export { Company };
