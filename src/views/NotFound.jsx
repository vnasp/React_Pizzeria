import { Image } from "react-bootstrap"

const NotFound = () => {
  return (
    <><div className="m-3 p-3 text-center">
      <h2>¡Alguien se ha comido esta página!</h2>
      <h3>Prueba ingresando desde el inicio a tu pizza favorita</h3>
      </div>
      <div className="text-center"><Image src="../src/assets/img/notfound.png" /></div>
      </>
  )
}

export default NotFound