let alumnos =[{
    nombre: "Carlos David",
    email: "carlos@gmial.com",
    Materia: "Fisica 2"
},{
    nombre: "Yile Bor",
    email: "yile@gmial.com",
    Materia: "Quimica"
},{
    nombre: "Isela Des",
    email: "isela@gmial.com",
    Materia: "Español"
},{
    nombre: "Maria Carla",
    email: "maria@gmial.com",
    Materia: "Informatica"
},{
    nombre: "Alberto",
    email: "alberto@gmial.com",
    Materia: "Algebra"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");


for(alumno in alumnos){
    let datos =alumnos[alumno];
    let nombre= datos["nombre"];
    let email= datos["email"];
    let Materia= datos["materia"];
    let htmlCode= `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${Materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`
    contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if (confirmar){
        document.body.replaceChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana= elementos[elemento];
            semana.innerHTML= semanasElegidas[elemento].value;
        }

    }
         
        
    
})