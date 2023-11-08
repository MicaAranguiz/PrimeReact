
import ReactDOM from 'react-dom/client';
import App from './App';



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
                height: "967px",
                float: "left",
                backgroundColor: "#888BE3",
                marginTop: "-3.8%",
                marginRight: "10px"

        },
        panelizquierdo: {
                width: "10%",
                height: "967px",
                float: "right",
                backgroundColor: "#888BE3",
                marginTop: "-3.8%",
                marginLeft: "10px"
        }

}

ReactDOM.createRoot(document.getElementById('root')).render(
        <>
                <h1 style={estilos.titulo}>Nuestra aplicación de posteos</h1>
                <div style={estilos.panelderecho}>
                        Holis
                </div>
                <div style={estilos.panelizquierdo}>
                        Holis
                </div>
                <App />

        </>
)

