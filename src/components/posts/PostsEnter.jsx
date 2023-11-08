import { useState } from 'react';
import axios from 'axios';


import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';


export const PostEnter = (props) => {

  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [userId, setUserId] = useState('');


  const handleSubmit2 = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/posts', { descripcion, fecha, imagen, ubicacion, userId })
      .then((resp) => {
        alert('Los posteos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda el carga posteos');
        console.log(error.response.data);
      })
  }
  const estilos = {
    centrar: {
      margin: "10px",
      padding: "15px",
      fontFamily: "-apple-system",
      fontSize: "20px",
      textAlign: "center",
      color: "black",
      backgroundColor: "#888BE3",
      height:"600px"
    },
    formulario: {
      margin: "20px",

    },
    boton: {
      margin: "20px",
    },
    inputs: {
      margin: "5px"
    },
    enviar:{
      margin:"10px"
    }
  }

  return (
    <>

      <div style={estilos.centrar}>

        <h1>Nuevo Post</h1>

        <form action="" onSubmit={handleSubmit2}>
          <div className="card flex flex-column md:flex-row gap-3">

            <div className="p-inputgroup flex-1 " style={estilos.formulario}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-align-left"></i>
              </span>
              <InputText placeholder="Descripcion" type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
            </div>

            <div className="p-inputgroup flex-1"  style={estilos.formulario}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-calendar"></i>
              </span>
              <InputText placeholder="Fecha" type="text" value={fecha} onChange={(event) => setFecha(event.target.value)} />
            </div>

            <div className="p-inputgroup flex-1"  style={estilos.formulario}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-image"></i>
              </span>
              <InputText placeholder="Imagen" type="text" value={imagen} onChange={event => setImagen(event.target.value)} />
            </div>

            <div className="p-inputgroup flex-1 "  style={estilos.formulario}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-map-marker"></i>
              </span>
              <InputText placeholder="Ubicacion" type="text" value={ubicacion} onChange={event => setUbicacion(event.target.value)} />
            </div>

            <div className="p-inputgroup flex-1"  style={estilos.formulario}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="User ID" type="number" value={userId} onChange={event => setUserId(event.target.value)} />
            </div>
          </div>
          <div>
        <Button type='submit' label="Enviar" variant="contained" style={estilos.enviar}/>
            <Link to={`/posts`} className='btn btn-info' style={estilos.enviar}>
              <Button label="Ver publicaciones " />
            </Link>
          </div>
        </form>
        
      </div>
    </>

  );
}
