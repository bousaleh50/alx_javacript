const request = require("request");

const url = process.argv[2];

request.get(url,(error,res,body)=>{
    const data = JSON.parse(res.body);

    let complted_by_user={};

    data.forEach(e => {
        if(e.completed){
            const nb_completed_tasks=data.filter(t=>t.userId==e.userId && t.completed==true)
            complted_by_user[e.userId]=nb_completed_tasks.length;
        }
    });

    console.log(complted_by_user)

})