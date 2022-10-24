module.exports = {
  // crypto token from bot
  token: {
    iv: '31fb949ef45c88558a1725d372bd40a7',
    content: '4937f10b9936773f4ce747653e7792b9853f8f8bc747704746e610278c62d1b3d04a390fc9d6c78919af7b83feeafb67682e12368312b4f0ce4fc8'
  },

    prefix: "v-", // default prefix
    database: "mongodb+srv://guardian:ASDFasdf1234@cluster0.i86ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // link from mongodb
    clientId: "913522072947408897", //client id from bot
    clientSecret: "dr-aKbTUZwLgZbBzcLjqzMW4yM852eXi", // client secret from bot
    callbackurl: "/api/auth/discord/redirect", // callback
    port: 8000, // port
    FRONTEND_URL: "https://shroom-website.herokuapp.com/" // Front-End URL
}