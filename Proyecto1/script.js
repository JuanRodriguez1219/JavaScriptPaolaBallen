const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
    const botonOn = boton.textContent;
    
if(boton.id === "limpiar") {
        pantalla.textContent = "0";
        return;        
    }

    if(boton.id === "igual"){
        try{
            if(pantalla.textContent.includes("//","**") || pantalla.textContent === "Error"){
            pantalla.textContent = "error"



            }else{ pantalla.textContent = eval (pantalla.textContent);}
        pantalla.textContent = eval(pantalla.textContent);
        }
        catch{
            pantalla.textContent = "error"
        }
        return;
    }
    const botoEn=boton.textContent;
    if(pantalla.textContent === "0" || pantalla.textContent === "syntax error"){
        pantalla.textContent = botoEn;
        
    } else {
        pantalla.textContent += botoEn;
        return;
    }
  


})

})
