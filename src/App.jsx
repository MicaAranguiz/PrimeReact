//Vistas Usuarios
import UsersTableView from './pages/users/UsersTableView';
import UsersEnterView from './pages/users/UsersEnterView';


//Vistas Posteos
import PostsTableView from './pages/posts/PostsTableView';
import PostsEnterView from './pages/posts/PostsEnterView';

//react  
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//PrimeReact

//estilos primereact
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Splitter, SplitterPanel } from 'primereact/splitter';



const estilos = {
  centrar: {
    margin: "10px",
    padding: "15px",
    fontFamily: "-apple-system",
    fontSize: "20px",
    textAlign: "center",
    color: "black",
    backgroundColor: "#888BE3"
  },
  tabla: {
    display: "flex",
    backgroundColor: "#D4D5FF",
    marginTop: "10px",
    padding: "20px",
    height: "100px"
  },
  panel:{
    width:"10%",
    height:"1000px",
    float:"left",
    borderRadius: "10px",
    backgroundColor: "red",
  }

}

function App() {
 
  return (
    <>
      <div style={estilos.centrar}>
        
      </div>

     <BrowserRouter>
        <Routes>
          
          <Route path='/newpost' Component={PostsEnterView} >
          </Route>
          <Route path='/posts' Component={PostsTableView} >
          </Route>
          <Route path='/newuser' Component={UsersEnterView} >
          </Route>
          <Route path='/' Component={UsersTableView} >
          </Route>
        </Routes>
      </BrowserRouter>
      <div style={estilos.centrar}>
        <Splitter style={estilos.tabla}>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <a href='/' >Ver Usuarios</a><br />
            <a href='/posts' >Ver Publicaciones</a><br /></SplitterPanel>
        </Splitter>
      </div>
    </>
  )
}

export default App