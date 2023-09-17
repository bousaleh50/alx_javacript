const request =  require("request");

const URL = process.argv[2];

const CHARACTER_ID = 18

request.get(URL,(error,res,body)=>{
    const data = JSON.parse(res.body).results;
    let nb_films = 0;
    data.forEach(e => {
        if(e.characters.includes(`https://swapi-api.alx-tools.com/api/people/${CHARACTER_ID}/`)){
            nb_films++;
        }
    });
    console.log(nb_films);
})