#!usr/bin/node
const request = require("request");

request.get("https://swapi-api.alx-tools.com/api/films/",(error,res,body)=>{
    const data = JSON.parse(res.body);
    const results=data.results.map(r=>r.characters)
    let nb_films=0;
    results.forEach(e => {
        if(e.includes("https://swapi-api.alx-tools.com/api/people/18/")){
            nb_films++;
        }
    });
    console.log(nb_films)
})