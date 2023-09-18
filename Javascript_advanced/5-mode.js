
function changeMode(size,weight,transform,background,color){
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      };
}


function main(){
    let spooky=changeMode(9,"bold","uppercase","pink","green");
    let darkMode=changeMode(12,"bold","capitalize","black","white");
    let screamMode=changeMode(12,"normal","lowercase","white","black");
    
    //create the paragraph and add the text to it
    let para = document.createElement("p");
    para.innerText="Welcome Holberton!";
    document.body.appendChild(para);

    //create the buttons with the following text
    let innerText = ["Spooky","Dark mode","Scream mode"];

    for(let i = 0;i<3;i++){
        let btn = document.createElement("button");
        btn.innerText = innerText[i];
        document.body.appendChild(btn);
        switch(i){
            case 0:
                btn.onclick=spooky;
                break;
            case 1:
                btn.onclick=darkMode;
                break;
            case 2:
                btn.onclick = screamMode;
                break;
        }
    }
}

main();