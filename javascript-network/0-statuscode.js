const request = require('request');

request(url,(error,response,body)=>{
    console.log(`code: ${response.statusCode}`)
})