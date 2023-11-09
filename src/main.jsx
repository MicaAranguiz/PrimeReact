
import ReactDOM from 'react-dom/client';
import App from './App';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';



const estilos = {
        titulo: {
                margin: "10px",
                marginBottom: "-20px",
                padding: "15px",
                fontFamily: "-apple-system",
                fontSize: "40px",
                textAlign: "center",
                color: "black",
                backgroundColor: "#888BE3",
        },
        panelderecho: {
                width: "10%",
                height: "966px",
                float: "left",
                backgroundColor: "#888BE3",
                marginTop: "-3.7%",
                marginRight: "10px"

        },
        panelizquierdo: {
                width: "10%",
                height: "966px",
                float: "right",
                backgroundColor: "#888BE3",
                marginTop: "-3.7%",
                marginLeft: "10px"
        },
        enviar: {
                margin: "10px"
              },
              boton:{
                margin: "10px",
              
                    borderRadius: 5,
                    fontSize:"15px"
              }

}

ReactDOM.createRoot(document.getElementById('root')).render(
        <>
                <h1 style={estilos.titulo}>Nuestra aplicación de posteos</h1>
                <div style={estilos.panelderecho}>
                
                <a href='/users' > <Button label="Usuarios Creados " style={estilos.boton}/></a><br />               
                <a href='/posts' > <Button label="Publicaciones Creadas "style={estilos.boton} /></a><br />    
                
                </div>
                <div style={estilos.panelizquierdo}>
                <a href='/newuser' > <Button label="Crear Nuevo Usuario " style={estilos.boton}/></a><br />               
                <a href='/newpost' > <Button label="Crear Nueva Publicacion" style={estilos.boton} /></a><br />    
                
                </div>
                <App />

        </>
)

