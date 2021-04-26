const dotenv = require('dotenv')

const env = dotenv.config();
if (env.error) {
  throw new Error("Cannot find .env file");
}

export default {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URI,
  paypal: {
    publicKey: process.env.PAYPAL_PUBLIC_KEY,
    secretKey: process.env.PAYPAL_SECRET_KEY,
  },
  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    sender: process.env.MAILCHIMP_SENDER,
  },
  prefix: {
      api: '/api'
  }
}
