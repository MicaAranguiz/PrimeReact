import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


export const UserEnter = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/users', { username, password, email })
      .then((resp) => {
        alert('Los datos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda');
        console.log(error);
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
      margin: "50px",
      padding: "15px",
    },
    boton: {
      margin: "20px",
    },
    inputs: {
      margin: "10px"
    },
    enviar: {
      margin: "10px"
    }
  }

  return (
    <>
      <div style={estilos.centrar}>

        <h1>Nuevo Usuario</h1>

        <form action="" onSubmit={handleSubmit} style={estilos.formulario}>
          <div className="card flex flex-column md:flex-row gap-3">

            <div className="p-inputgroup flex-1" style={estilos.inputs}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" type="text" value={username} onChange={event => setUsername(event.target.value)} />
            </div>

            <div className="p-inputgroup flex-1" style={estilos.inputs}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <InputText placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="p-inputgroup flex-1" style={estilos.inputs}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <InputText placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </div>


          </div> <div>
          <Button type='submit' label="Enviar" variant="contained" style={estilos.enviar} />
          <Link to={`/`} className='btn btn-info' style={estilos.enviar}>
            <Button label="Ver usuarios" />
          </Link>
        </div>
        </form>
       
      </div>

    </>
  );
}
