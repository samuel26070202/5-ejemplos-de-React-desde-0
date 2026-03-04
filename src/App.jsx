import TarjetaUsuario from "./TarjetaUsuario"; 


function App() {
  return (
    <div>
      <h1>Lista de Jugadores</h1>
      <TarjetaUsuario nombre="Luisa" juegoFavorito="Roblox"/>
      <TarjetaUsuario nombre="Maria" juegoFavorito="Free Fire"/>
      <TarjetaUsuario nombre="Samuel" juegoFavorito="Minecraft"/>
    </div>
  )
}

export default App;