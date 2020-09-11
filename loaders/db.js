const mongoose = require("mongoose");
const config = require("config");

const db_name = config.get("Secrets.db_name");
const db_pass = config.get("Secrets.db_pass");
const url = `mongo "mongodb+srv://pratham.sakle.mongodb.net/<dbname>" --username pratham007`;

module.exports = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((ex) => console.log(ex));
};
