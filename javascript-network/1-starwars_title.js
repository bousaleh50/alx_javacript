#!usr/bin/node

const request = require("request");

const movie_id = process.argv[2];

request.get(`https://swapi-api.alx-tools.com/api/films/${movie_id}`,(error,res,body)=>{
    const data=JSON.parse(res.body)
     console.log(data.title)
})
