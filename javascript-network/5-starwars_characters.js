const request = require("request");

const movie_id = process.argv[2];


request.get(`https://swapi-api.alx-tools.com/api/films/${movie_id}`,(error,res,body)=>{
    if(error){
        console.log(error)
    }
    else{
        const data = JSON.parse(res.body);
        let characters_url=data.characters;
        characters_url.forEach(e => {
            request(e,(error,res,body)=>{
                const data = JSON.parse(res.body);
                console.log(data.name)
            })
        });
    }
})
