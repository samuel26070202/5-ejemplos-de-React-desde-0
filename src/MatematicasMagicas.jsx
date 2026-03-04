function MatematicasMagicas () {
    const nombre = "Samuel";
    const edad = 17;
    const añoNacimiento = 2024 - edad;



return (
    <div className="tarjeta">
        <h2>Perfil de {nombre}</h2>
        <p>Si tienes {edad} años, naciste aproximadamente en {añoNacimiento}</p>
        <p>¿Cuanto es 5 por 5? !Es {5 * 5}¡</p>

    </div>
)
}

export default MatematicasMagicas;