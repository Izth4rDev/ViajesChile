let enviar = document.querySelector("#form-envio");

document.addEventListener("DOMContentLoaded", ()=>{

    enviarMensaje();
    
});

function enviarMensaje (){

    enviar.addEventListener("submit", (e)=>{

        e.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let asunto = document.querySelector("#asunto").value;
        let mensaje = document.querySelector("#floatingTextarea").value;

        if(nombre === '' || asunto ==='' || mensaje === ''){
            alert("debe ingresar todos los campos");
        }else{
            alert("mensaje enviado");
        }
        console.log(`nombre: ${nombre} asunto:${asunto} mensaje: ${mensaje}`);
    });
}