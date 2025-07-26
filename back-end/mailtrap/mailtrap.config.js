const { MailtrapClient } = require("mailtrap");
const dotenv = require("dotenv");

dotenv.config();

const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Auth by Parth",
};

module.exports = { sender };
module.exports = { mailtrapClient };
