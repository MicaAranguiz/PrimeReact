import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const estilos = {
        titulo: {
                margin: "10px",
                marginBottom:"-20px",
                padding: "15px",
                fontFamily: "-apple-system",
                fontSize: "30px",
                textAlign: "center",
                color: "black",
                backgroundColor: "#888BE3"
            
        },
}

ReactDOM.createRoot(document.getElementById('root')).render(
        <>
                <h1 style={estilos.titulo}>Nuestra aplicación de posteos</h1>

                <App />
        </>
)