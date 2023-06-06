module.exports = {
  DB_NAME: "crmbackend_db",
  DB_URL:process.env.MONGODB_URI || "mongod://localhost/crmbackend_db"
};
