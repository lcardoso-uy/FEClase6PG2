import { useState } from "react";

function Rejuvenecedor(){

    const[nombre,setNombre]=useState("");
    const[edad,setEdad]=useState("");

    const validarNombre = (nombre) => {

        const withoutSpaces = nombre.trim();
        if (withoutSpaces.length > 1) {
            return true;
        } else {
            return false;
        }
    };

    const validarEdad = (edad) => {
        return Number.isInteger(edad) && edad > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombreEsValido = validarNombre(nombre);
        const edadNum = parseInt(edad,10);
        const edadEsValida = validarEdad(edadNum);

        if(!nombreEsValido || !edadEsValida){
            alert("No te podemos rejuvenecer")
        } else{
            setEdad((edadNum-10).toString());
            alert(`Feliz Navidad ${nombre}! Te hemos rejuvenecido. Tu edad ahora es ${edad.toString()-10} `)
        }
    }

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder="Ingrese su edad" value={edad} onChange={(e)=>setEdad(e.target.value)}/>
            <button type="submit">Rejuvenecer</button>
        </form>

    )

}

export default Rejuvenecedor;