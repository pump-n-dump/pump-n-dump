const binance = require('node-binance-api')

function login(key, secret){

    binance.options({
        APIKEY: key,
        APISECRET: secret,
        useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
        test: true // If you want to use sandbox mode where orders are simulated
      })
      console.log("ayy you in boi");
}