
let globalVariable = "Welcome";

function outer(){
    alert(globalVariable);
    let course = "Holbeton";

    function inner(){
        alert(globalVariable+course);
        let exclamation = "!";
        function inception(){
            alert(globalVariable+course+exclamation);
        }
        inception();
    }

    inner();

}

outer();