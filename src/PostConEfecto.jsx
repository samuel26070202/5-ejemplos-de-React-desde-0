import { useState, useEffect } from "react";

function PostConEfecto(){
    const [mensajes, setMensajes] = useState(0);

    useEffect (() => {
        document.title = `Tienes ${mensajes} mensajes nuevos`;
    }, [mensajes])


return (
    <div>
        <h2>Bandeja de Entrada</h2>
        <p>Mensaje sin leer: {mensajes}</p>
        <button onClick={() => setMensajes(mensajes + 1)}>
            Recibir nuevo mensaje
            </button>
    </div>
)
}


export default PostConEfecto;